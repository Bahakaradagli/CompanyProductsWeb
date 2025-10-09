// Content Loader - Tüm sayfalarda kullanılacak
// Firebase bağlantısı ve içerik yükleme

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAKZslnECwA0wwMAhfHarE3wMLXoq7TV1k",
  authDomain: "veliogluglobal-86631.firebaseapp.com",
  databaseURL: "https://veliogluglobal-86631-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "veliogluglobal-86631",
  storageBucket: "veliogluglobal-86631.appspot.com",
  messagingSenderId: "643623290439",
  appId: "1:643623290439:web:a61c004610ceb9e1105362",
  measurementId: "G-D0WT8BV4C5"
};

// Firebase import (ES6 modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase başlat
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// İçerik yükleme fonksiyonu
async function loadSiteContent() {
  try {
    const snapshot = await get(ref(db, 'siteContent'));
    if (snapshot.exists()) {
      const data = snapshot.val();
      updatePageContent(data);
    } else {
      // Firebase'de veri yoksa, mevcut sayfa içeriğini koru
      console.log('Firebase\'de içerik bulunamadı, mevcut içerik korunuyor.');
    }
  } catch (err) {
    console.error('İçerik yüklenirken hata:', err);
  }
}

// Sayfa içeriğini güncelle
function updatePageContent(data) {
  // Genel ayarlar
  if (data.siteTitle) {
    document.title = data.siteTitle;
  }
  
  if (data.logoUrl) {
    document.querySelectorAll('.desknav__logo').forEach(logo => {
      logo.src = data.logoUrl;
    });
  }
  
  if (data.footerText) {
    document.querySelectorAll('footer small').forEach(footer => {
      footer.textContent = data.footerText;
    });
  }
  
  // Renkleri güncelle
  if (data.primaryColor) {
    document.documentElement.style.setProperty('--accent', data.primaryColor);
    document.querySelectorAll('header').forEach(header => {
      header.style.setProperty('--accent', data.primaryColor);
    });
  }
  
  if (data.buttonColor) {
    document.documentElement.style.setProperty('--btn-primary-bg', data.buttonColor);
    document.documentElement.style.setProperty('--btn-primary-hover', adjustBrightness(data.buttonColor, -20));
  }
  
  if (data.backgroundColor) {
    document.documentElement.style.setProperty('--bg-color', data.backgroundColor);
  }
  
  if (data.textColor) {
    document.documentElement.style.setProperty('--text-color', data.textColor);
  }
  
  // Ana sayfa içeriği
  if (data.homepageTitle) {
    const titleEl = document.querySelector('.hero__title');
    if (titleEl) titleEl.textContent = data.homepageTitle;
  }
  
  if (data.homepageDesc) {
    const descEl = document.querySelector('.hero__desc');
    if (descEl) descEl.textContent = data.homepageDesc;
  }
  
  if (data.servicesTitle) {
    const servicesTitle = document.querySelector('.section__title');
    if (servicesTitle) servicesTitle.textContent = data.servicesTitle;
  }
  
  // Hizmetler
  const serviceTitles = document.querySelectorAll('.feature__body h3');
  const serviceDescs = document.querySelectorAll('.feature__body p');
  
  if (data.service1Title && serviceTitles[0]) serviceTitles[0].textContent = data.service1Title;
  if (data.service1Desc && serviceDescs[0]) serviceDescs[0].textContent = data.service1Desc;
  if (data.service2Title && serviceTitles[1]) serviceTitles[1].textContent = data.service2Title;
  if (data.service2Desc && serviceDescs[1]) serviceDescs[1].textContent = data.service2Desc;
  if (data.service3Title && serviceTitles[2]) serviceTitles[2].textContent = data.service3Title;
  if (data.service3Desc && serviceDescs[2]) serviceDescs[2].textContent = data.service3Desc;
  if (data.service4Title && serviceTitles[3]) serviceTitles[3].textContent = data.service4Title;
  if (data.service4Desc && serviceDescs[3]) serviceDescs[3].textContent = data.service4Desc;
  
  // Pazarlar
  if (data.marketsTitle) {
    const marketsTitle = document.querySelectorAll('.section__title')[1];
    if (marketsTitle) marketsTitle.textContent = data.marketsTitle;
  }
  
  // Hakkımızda
  if (data.aboutTitle) {
    const aboutTitle = document.querySelectorAll('.section__title')[2];
    if (aboutTitle) aboutTitle.textContent = data.aboutTitle;
  }
  
  if (data.aboutDesc) {
    const aboutDesc = document.querySelector('.about__p');
    if (aboutDesc) aboutDesc.textContent = data.aboutDesc;
  }
  
  // CTA
  if (data.ctaTitle) {
    const ctaTitle = document.querySelector('.cta__title');
    if (ctaTitle) ctaTitle.textContent = data.ctaTitle;
  }
  
  if (data.ctaDesc) {
    const ctaDesc = document.querySelector('.cta__desc');
    if (ctaDesc) ctaDesc.textContent = data.ctaDesc;
  }
  
  // İletişim sayfası
  if (data.contactTitle) {
    const contactTitle = document.querySelector('.contact-hero__title');
    if (contactTitle) contactTitle.textContent = data.contactTitle;
  }
  
  if (data.contactDesc) {
    const contactDesc = document.querySelector('.contact-hero__desc');
    if (contactDesc) contactDesc.textContent = data.contactDesc;
  }
  
  // Kişi bilgileri
  if (data.person1Name || data.person1Title || data.person1Phone) {
    updatePersonInfo(1, data);
  }
  
  if (data.person2Name || data.person2Title || data.person2Phone) {
    updatePersonInfo(2, data);
  }
}

// Kişi bilgilerini güncelle
function updatePersonInfo(personNum, data) {
  const nameKey = `person${personNum}Name`;
  const titleKey = `person${personNum}Title`;
  const phoneKey = `person${personNum}Phone`;
  
  if (data[nameKey]) {
    const nameEl = document.querySelector(`.contact-row:nth-child(${personNum}) .contact-row__name`);
    if (nameEl) nameEl.textContent = data[nameKey];
  }
  
  if (data[titleKey]) {
    const titleEl = document.querySelector(`.contact-row:nth-child(${personNum}) .contact-row__area`);
    if (titleEl) titleEl.textContent = data[titleKey];
  }
  
  if (data[phoneKey]) {
    const phoneEl = document.querySelector(`.contact-row:nth-child(${personNum}) .contact-btn[href^="tel:"]`);
    if (phoneEl) {
      phoneEl.href = `tel:${data[phoneKey].replace(/\s/g, '')}`;
    }
  }
}

// Renk parlaklığını ayarla
function adjustBrightness(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// Sayfa yüklendiğinde içeriği yükle
document.addEventListener('DOMContentLoaded', loadSiteContent);

// Global olarak erişilebilir yap
window.loadSiteContent = loadSiteContent;
window.updatePageContent = updatePageContent;
