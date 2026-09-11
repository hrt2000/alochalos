const OWNER = 'hrt2000';
const REPO = 'alochalos';
const BRANCH = 'main';
const PRODUCT_PATH = 'products.json';
const API_URL = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PRODUCT_PATH}`;

let catalog = [];
let contentSha = null;
let selectedId = null;

const tokenInput = document.getElementById('tokenInput');
const connectButton = document.getElementById('connectButton');
const loadButton = document.getElementById('loadButton');
const logoutButton = document.getElementById('logoutButton');
const publishButton = document.getElementById('publishButton');
const newButton = document.getElementById('newButton');
const deleteButton = document.getElementById('deleteButton');
const productList = document.getElementById('productList');
const productForm = document.getElementById('productForm');
const statusBox = document.getElementById('adminStatus');

function setStatus(message, type = '') {
  statusBox.textContent = message;
  statusBox.className = `status-box ${type}`.trim();
}

function getToken() {
  return sessionStorage.getItem('alochalos_admin_token') || tokenInput.value.trim();
}

function saveToken() {
  const token = tokenInput.value.trim();
  if (!token) {
    setStatus('Token وارد نشده است.', 'error');
    return;
  }
  sessionStorage.setItem('alochalos_admin_token', token);
  tokenInput.value = '';
  setStatus('اتصال ذخیره شد.', 'ok');
}

function logout() {
  sessionStorage.removeItem('alochalos_admin_token');
  tokenInput.value = '';
  setStatus('خارج شدید.');
}

function authHeaders() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function loadCatalog() {
  setStatus('در حال بارگذاری...');
  const response = await fetch(`${API_URL}?ref=${BRANCH}&cache=${Date.now()}`, {
    headers: authHeaders(),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(await errorMessage(response));
  }

  const data = await response.json();
  contentSha = data.sha;
  catalog = JSON.parse(decodeBase64(data.content || '[]'));
  selectedId = catalog[0]?.id || null;
  renderList();
  fillForm(selectedProduct() || blankProduct());
  setStatus('کاتالوگ بارگذاری شد.', 'ok');
}

function renderList() {
  if (!catalog.length) {
    productList.innerHTML = '<p class="state-text">محصولی ثبت نشده است.</p>';
    return;
  }

  productList.innerHTML = catalog.map((product) => `
    <button type="button" class="${product.id === selectedId ? 'active' : ''}" data-id="${escapeHtml(product.id)}">
      <strong>${escapeHtml(product.title?.fa || product.title?.en || product.id)}</strong>
      <span>${escapeHtml(product.category || '')} · ${escapeHtml(product.status || '')}</span>
    </button>
  `).join('');

  productList.querySelectorAll('button[data-id]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedId = button.dataset.id;
      renderList();
      fillForm(selectedProduct() || blankProduct());
    });
  });
}

function selectedProduct() {
  return catalog.find((product) => product.id === selectedId) || null;
}

function blankProduct() {
  return {
    id: `product-${Date.now()}`,
    category: 'laptops',
    status: 'available',
    image: '',
    title: { fa: '', en: '', az: '' },
    description: { fa: '', en: '', az: '' },
    price: { fa: 'برای قیمت تماس بگیرید', en: 'Call for price', az: 'Qiymət üçün əlaqə saxlayın' },
    specs: []
  };
}

function fillForm(product) {
  productForm.elements.id.value = product.id || '';
  productForm.elements.category.value = product.category || 'laptops';
  productForm.elements.status.value = product.status || 'available';
  productForm.elements.image.value = product.image || '';
  productForm.elements.title_fa.value = product.title?.fa || '';
  productForm.elements.title_en.value = product.title?.en || '';
  productForm.elements.title_az.value = product.title?.az || '';
  productForm.elements.description_fa.value = product.description?.fa || '';
  productForm.elements.description_en.value = product.description?.en || '';
  productForm.elements.description_az.value = product.description?.az || '';
  productForm.elements.price_fa.value = product.price?.fa || '';
  productForm.elements.price_en.value = product.price?.en || '';
  productForm.elements.price_az.value = product.price?.az || '';
  productForm.elements.specs.value = Array.isArray(product.specs) ? product.specs.join(', ') : '';
}

function collectForm() {
  const form = productForm.elements;
  return {
    id: slugify(form.id.value),
    category: form.category.value,
    status: form.status.value,
    image: form.image.value.trim(),
    title: {
      fa: form.title_fa.value.trim(),
      en: form.title_en.value.trim(),
      az: form.title_az.value.trim()
    },
    description: {
      fa: form.description_fa.value.trim(),
      en: form.description_en.value.trim(),
      az: form.description_az.value.trim()
    },
    price: {
      fa: form.price_fa.value.trim(),
      en: form.price_en.value.trim(),
      az: form.price_az.value.trim()
    },
    specs: splitSpecs(form.specs.value)
  };
}

function saveProduct(event) {
  event.preventDefault();
  const product = collectForm();
  if (!product.id || !product.title.fa || !product.title.en || !product.title.az) {
    setStatus('ID و عنوان‌ها لازم هستند.', 'error');
    return;
  }

  const oldIndex = catalog.findIndex((item) => item.id === selectedId);
  const duplicateIndex = catalog.findIndex((item) => item.id === product.id && item.id !== selectedId);
  if (duplicateIndex >= 0) {
    setStatus('این ID قبلا استفاده شده است.', 'error');
    return;
  }

  if (oldIndex >= 0) catalog.splice(oldIndex, 1, product);
  else catalog.push(product);

  selectedId = product.id;
  renderList();
  setStatus('در لیست ذخیره شد. برای انتشار روی سایت Publish را بزنید.', 'ok');
}

function newProduct() {
  selectedId = null;
  fillForm(blankProduct());
  renderList();
  setStatus('محصول جدید آماده است.');
}

function deleteProduct() {
  if (!selectedId) {
    setStatus('محصولی انتخاب نشده است.', 'error');
    return;
  }

  catalog = catalog.filter((product) => product.id !== selectedId);
  selectedId = catalog[0]?.id || null;
  renderList();
  fillForm(selectedProduct() || blankProduct());
  setStatus('از لیست حذف شد. برای انتشار روی سایت Publish را بزنید.', 'ok');
}

async function publishCatalog() {
  const token = getToken();
  if (!token) {
    setStatus('برای Publish به GitHub token نیاز است.', 'error');
    return;
  }

  if (!contentSha) await loadCatalog();

  setStatus('در حال انتشار روی GitHub...');
  const content = `${JSON.stringify(catalog, null, 2)}\n`;
  const response = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      ...authHeaders(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Update product catalog',
      content: encodeBase64(content),
      sha: contentSha,
      branch: BRANCH
    })
  });

  if (!response.ok) {
    throw new Error(await errorMessage(response));
  }

  const result = await response.json();
  contentSha = result.content?.sha || contentSha;
  setStatus('منتشر شد. GitHub Pages تا چند دقیقه دیگر سایت را آپدیت می‌کند.', 'ok');
}

function decodeBase64(value) {
  const binary = atob(String(value).replace(/\n/g, ''));
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeBase64(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

function splitSpecs(value) {
  return value
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function slugify(value) {
  const fallback = `product-${Date.now()}`;
  return String(value || fallback)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06ff]+/g, '-')
    .replace(/^-+|-+$/g, '') || fallback;
}

async function errorMessage(response) {
  try {
    const data = await response.json();
    return data.message || `${response.status} ${response.statusText}`;
  } catch (error) {
    return `${response.status} ${response.statusText}`;
  }
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

connectButton.addEventListener('click', saveToken);
loadButton.addEventListener('click', () => loadCatalog().catch((error) => setStatus(error.message, 'error')));
logoutButton.addEventListener('click', logout);
newButton.addEventListener('click', newProduct);
deleteButton.addEventListener('click', deleteProduct);
productForm.addEventListener('submit', saveProduct);
publishButton.addEventListener('click', () => publishCatalog().catch((error) => setStatus(error.message, 'error')));

document.addEventListener('DOMContentLoaded', () => {
  if (getToken()) setStatus('Token فعال است.');
  loadCatalog().catch((error) => setStatus(error.message, 'error'));
});
