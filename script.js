const STORE_EMAIL = 'info@alochalos.info';

const translations = {
  fa: {
    nav: { home: 'خانه', products: 'محصولات', services: 'خدمات', about: 'درباره ما', contact: 'تماس' },
    hero: {
      eyebrow: 'کامپیوتر، موبایل و تعمیرات',
      title: 'فروشگاه کامل تکنولوژی و مرکز خدمات الوچالوس',
      text: 'برای خرید لپ‌تاپ، کامپیوتر، موبایل، پرینتر، مانیتور، قطعات و تعمیرات تخصصی دستگاه‌های خود با ما در ارتباط باشید.',
      productsButton: 'دیدن محصولات',
      contactButton: 'ارسال پیام',
      trust1: 'فروش و مشاوره خرید',
      trust2: 'تعمیر و ارتقا سیستم',
      trust3: 'پشتیبانی سریع'
    },
    products: { eyebrow: 'کاتالوگ فروشگاه', title: 'محصولات', askLink: 'استعلام محصول' },
    categories: {
      all: 'همه', laptops: 'لپ‌تاپ', desktops: 'کامپیوتر', mobile: 'موبایل', printers: 'پرینتر', monitors: 'مانیتور', parts: 'قطعات', accessories: 'لوازم جانبی', networking: 'شبکه'
    },
    status: { inStock: 'موجود', available: 'قابل سفارش', service: 'خدمات', soldOut: 'ناموجود' },
    product: { inquiry: 'استعلام', loading: 'در حال بارگذاری محصولات...', empty: 'محصولی در این دسته ثبت نشده است.' },
    services: {
      eyebrow: 'خدمات فنی', title: 'تعمیرات، نصب، ارتقا و پشتیبانی', text: 'دستگاه خود را برای بررسی، عیب‌یابی، ارتقا سخت‌افزار و خدمات نرم‌افزاری به الوچالوس بسپارید.',
      item1: 'تعمیر کامپیوتر و لپ‌تاپ', item2: 'تعمیر مادربرد و قطعات', item3: 'سرویس موبایل و لوازم جانبی', item4: 'راه‌اندازی پرینتر و شبکه', item5: 'ارتقا RAM و SSD', item6: 'نصب ویندوز و نرم‌افزار', button: 'درخواست تعمیر'
    },
    process: {
      oneTitle: 'شرح مشکل', oneText: 'نوع دستگاه و ایراد را برای ما بفرستید.', twoTitle: 'بررسی و اعلام هزینه', twoText: 'بعد از بررسی، مسیر تعمیر یا تعویض قطعه مشخص می‌شود.', threeTitle: 'تحویل دستگاه', threeText: 'پس از آماده شدن، برای تحویل با شما هماهنگ می‌کنیم.'
    },
    about: { eyebrow: 'درباره الوچالوس', title: 'خرید و تعمیر دستگاه‌های دیجیتال در یک جا', text: 'Alochalos برای فروش محصولات تکنولوژی و ارائه خدمات تعمیرات ساخته شده است؛ از لپ‌تاپ و کامپیوتر تا موبایل، پرینتر، مانیتور، قطعات و پشتیبانی فنی.' },
    contact: { eyebrow: 'ارتباط با ما', title: 'برای خرید، تعمیر یا مشاوره پیام بدهید', text: 'پیام شما به ایمیل فروشگاه ارسال می‌شود و تیم الوچالوس پاسخ می‌دهد.', emailLabel: 'ایمیل', catalogLabel: 'کاتالوگ', catalogText: 'مشاهده محصولات' },
    form: { name: 'نام', email: 'ایمیل', topic: 'موضوع', product: 'استعلام محصول', repair: 'درخواست تعمیر', general: 'سوال عمومی', message: 'پیام', send: 'ارسال ایمیل' },
    footer: { tagline: 'کامپیوتر، موبایل، قطعات و تعمیرات', admin: 'مدیریت' },
    mail: { subject: 'پیام از سایت Alochalos', productSubject: 'استعلام محصول' }
  },
  en: {
    nav: { home: 'Home', products: 'Products', services: 'Services', about: 'About', contact: 'Contact' },
    hero: {
      eyebrow: 'Computers, mobile and repair',
      title: 'Alochalos technology store and service center',
      text: 'Contact us for laptops, desktops, mobile phones, printers, monitors, parts and professional repair services.',
      productsButton: 'Browse products',
      contactButton: 'Send message',
      trust1: 'Sales and advice',
      trust2: 'Repair and upgrades',
      trust3: 'Fast support'
    },
    products: { eyebrow: 'Store catalog', title: 'Products', askLink: 'Ask about a product' },
    categories: {
      all: 'All', laptops: 'Laptops', desktops: 'Desktops', mobile: 'Mobile', printers: 'Printers', monitors: 'Monitors', parts: 'Parts', accessories: 'Accessories', networking: 'Networking'
    },
    status: { inStock: 'In stock', available: 'Available', service: 'Service', soldOut: 'Sold out' },
    product: { inquiry: 'Inquiry', loading: 'Loading products...', empty: 'No products in this category yet.' },
    services: {
      eyebrow: 'Technical services', title: 'Repair, installation, upgrades and support', text: 'Bring your device to Alochalos for diagnosis, repair, hardware upgrades and software support.',
      item1: 'Computer and laptop repair', item2: 'Motherboard and parts repair', item3: 'Mobile service and accessories', item4: 'Printer and network setup', item5: 'RAM and SSD upgrades', item6: 'Windows and software installation', button: 'Request repair'
    },
    process: {
      oneTitle: 'Describe the issue', oneText: 'Send us the device type and problem.', twoTitle: 'Diagnosis and quote', twoText: 'After inspection, we explain the repair or replacement options.', threeTitle: 'Pickup', threeText: 'When it is ready, we contact you for pickup.'
    },
    about: { eyebrow: 'About Alochalos', title: 'Buy and repair digital devices in one place', text: 'Alochalos sells technology products and provides repair services for laptops, computers, mobile phones, printers, monitors, parts and technical support.' },
    contact: { eyebrow: 'Contact us', title: 'Message us for products, repair or advice', text: 'Your message opens an email to the store and the Alochalos team can reply.', emailLabel: 'Email', catalogLabel: 'Catalog', catalogText: 'View products' },
    form: { name: 'Name', email: 'Email', topic: 'Topic', product: 'Product inquiry', repair: 'Repair request', general: 'General question', message: 'Message', send: 'Send email' },
    footer: { tagline: 'Computers, mobile, parts and repair', admin: 'Admin' },
    mail: { subject: 'Message from Alochalos website', productSubject: 'Product inquiry' }
  },
  az: {
    nav: { home: 'Ana səhifə', products: 'Məhsullar', services: 'Xidmətlər', about: 'Haqqımızda', contact: 'Əlaqə' },
    hero: {
      eyebrow: 'Kompüter, mobil və təmir',
      title: 'Alochalos texnologiya mağazası və servis mərkəzi',
      text: 'Noutbuk, masaüstü kompüter, mobil telefon, printer, monitor, hissələr və peşəkar təmir xidmətləri üçün bizimlə əlaqə saxlayın.',
      productsButton: 'Məhsullara baxın',
      contactButton: 'Mesaj göndərin',
      trust1: 'Satış və məsləhət',
      trust2: 'Təmir və yüksəltmə',
      trust3: 'Sürətli dəstək'
    },
    products: { eyebrow: 'Mağaza kataloqu', title: 'Məhsullar', askLink: 'Məhsul sorğusu' },
    categories: {
      all: 'Hamısı', laptops: 'Noutbuklar', desktops: 'Kompüterlər', mobile: 'Mobil', printers: 'Printerlər', monitors: 'Monitorlar', parts: 'Hissələr', accessories: 'Aksesuarlar', networking: 'Şəbəkə'
    },
    status: { inStock: 'Stokda', available: 'Mövcuddur', service: 'Xidmət', soldOut: 'Bitib' },
    product: { inquiry: 'Sorğu', loading: 'Məhsullar yüklənir...', empty: 'Bu kateqoriyada hələ məhsul yoxdur.' },
    services: {
      eyebrow: 'Texniki xidmətlər', title: 'Təmir, quraşdırma, yüksəltmə və dəstək', text: 'Cihazınızı diaqnostika, təmir, hardware yüksəltməsi və software dəstəyi üçün Alochalos-a gətirin.',
      item1: 'Kompüter və noutbuk təmiri', item2: 'Ana plata və hissə təmiri', item3: 'Mobil servis və aksesuarlar', item4: 'Printer və şəbəkə quraşdırması', item5: 'RAM və SSD yüksəltməsi', item6: 'Windows və proqram quraşdırması', button: 'Təmir sorğusu'
    },
    process: {
      oneTitle: 'Problemi yazın', oneText: 'Cihaz növünü və problemi bizə göndərin.', twoTitle: 'Diaqnostika və qiymət', twoText: 'Yoxlamadan sonra təmir və ya dəyişmə variantlarını bildiririk.', threeTitle: 'Təhvil', threeText: 'Hazır olanda təhvil üçün sizinlə əlaqə saxlayırıq.'
    },
    about: { eyebrow: 'Alochalos haqqında', title: 'Rəqəmsal cihazların satışı və təmiri bir yerdə', text: 'Alochalos noutbuk, kompüter, mobil telefon, printer, monitor, hissələr və texniki dəstək üçün satış və təmir xidmətləri təqdim edir.' },
    contact: { eyebrow: 'Əlaqə', title: 'Məhsul, təmir və məsləhət üçün mesaj göndərin', text: 'Mesajınız mağaza emailinə açılır və Alochalos komandası cavab verə bilər.', emailLabel: 'Email', catalogLabel: 'Kataloq', catalogText: 'Məhsullara baxın' },
    form: { name: 'Ad', email: 'Email', topic: 'Mövzu', product: 'Məhsul sorğusu', repair: 'Təmir sorğusu', general: 'Ümumi sual', message: 'Mesaj', send: 'Email göndər' },
    footer: { tagline: 'Kompüter, mobil, hissələr və təmir', admin: 'Admin' },
    mail: { subject: 'Alochalos saytından mesaj', productSubject: 'Məhsul sorğusu' }
  }
};

const fallbackProducts = [
  {
    id: 'business-laptop', category: 'laptops', status: 'inStock', image: '',
    title: { fa: 'لپ‌تاپ تجاری', en: 'Business Laptop', az: 'Biznes noutbuku' },
    description: { fa: 'مناسب کار روزانه، حسابداری، فروشگاه و استفاده دانشجویی.', en: 'Built for daily work, accounting, retail and student use.', az: 'Gündəlik iş, mühasibat, mağaza və tələbə istifadəsi üçün uyğundur.' },
    price: { fa: 'برای قیمت تماس بگیرید', en: 'Call for price', az: 'Qiymət üçün əlaqə saxlayın' },
    specs: ['Intel Core i5', '16GB RAM', '512GB SSD']
  }
];

let currentLang = localStorage.getItem('alochalos_lang') || 'fa';
let currentFilter = 'all';
let products = [];

function toggleMenu() {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('open');
}

function getText(path) {
  return path.split('.').reduce((value, key) => value && value[key], translations[currentLang]) || path;
}

function localized(value) {
  if (typeof value === 'string') return value;
  return (value && (value[currentLang] || value.fa || value.en || value.az)) || '';
}

function setLanguage(lang) {
  currentLang = translations[lang] ? lang : 'fa';
  localStorage.setItem('alochalos_lang', currentLang);
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = getText(element.dataset.i18n);
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === currentLang);
  });

  renderProducts();
}

async function loadProducts() {
  const grid = document.getElementById('productsGrid');
  if (grid) grid.innerHTML = `<p class="state-text">${getText('product.loading')}</p>`;

  try {
    const response = await fetch(`products.json?v=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Product file not available');
    products = await response.json();
  } catch (error) {
    products = fallbackProducts;
  }

  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const visibleProducts = products.filter((product) => currentFilter === 'all' || product.category === currentFilter);
  if (!visibleProducts.length) {
    grid.innerHTML = `<p class="state-text">${getText('product.empty')}</p>`;
    return;
  }

  grid.innerHTML = visibleProducts.map((product) => {
    const title = localized(product.title);
    const description = localized(product.description);
    const price = localized(product.price);
    const status = getText(`status.${product.status || 'available'}`);
    const category = getText(`categories.${product.category || 'all'}`);
    const image = product.image
      ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(title)}" loading="lazy" />`
      : `<div class="product-thumb-fallback"><span>${escapeHtml(category)}</span></div>`;
    const specs = Array.isArray(product.specs) ? product.specs : [];
    const mail = productMailHref(title);

    return `
      <article class="product-card">
        <div class="product-thumb">${image}</div>
        <div class="product-meta">
          <span class="badge">${escapeHtml(status)}</span>
          <span>${escapeHtml(category)}</span>
        </div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
        <div class="spec-row">${specs.map((spec) => `<span>${escapeHtml(spec)}</span>`).join('')}</div>
        <div class="product-footer">
          <strong>${escapeHtml(price)}</strong>
          <a href="${mail}">${getText('product.inquiry')}</a>
        </div>
      </article>
    `;
  }).join('');
}

function productMailHref(productTitle) {
  const subject = `${getText('mail.productSubject')}: ${productTitle}`;
  const body = `${productTitle}\n\n`;
  return `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      currentFilter = button.dataset.filter || 'all';
      document.querySelectorAll('.filter-btn').forEach((item) => item.classList.toggle('active', item === button));
      renderProducts();
    });
  });
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `${getText('mail.subject')} - ${data.get('topic') || ''}`;
    const body = [
      `${getText('form.name')}: ${data.get('name') || ''}`,
      `${getText('form.email')}: ${data.get('email') || ''}`,
      `${getText('form.topic')}: ${data.get('topic') || ''}`,
      '',
      data.get('message') || ''
    ].join('\n');

    window.location.href = `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#nav a').forEach((link) => {
    link.addEventListener('click', () => document.getElementById('nav').classList.remove('open'));
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  setupFilters();
  setupContactForm();
  setLanguage(currentLang);
  loadProducts();
});
