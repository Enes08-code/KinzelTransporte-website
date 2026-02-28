const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});
document.getElementById("scrollTopBtn").addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

const translations = {
  en: {
    firstfooter:'HOME PAGE',
    secondfooter: 'About us',
    thirdfooter: 'Gallery',
    fourthfooter: 'Services',
    firstchoiceNav:'HOME PAGE',
    secondchoice:'About us',
    thirdchoice:'Gallery',
    fourthchoice:'Services',
    headlinefirst:'Logistics solutions that move – on the road and in the port',
    sectiontitle:'Container transport',
    p1:'Container transport from A to B? No problem for Kinzeltransporte!',
    p2:'Whether regional or national – our trucks will take your containers anywhere.',
    p3:'Do your containers need temporary storage? We can help with that, too.',
    p4:'We will find targeted and individual solutions for you – please feel free to contact us.',
    focustitle:'Special service in focus',
    focusP:'Here is a brief description of our special service: Customized solutions, modern technology, and a team that understands your logistics.',
    nexttitle:'Reliability on every journey',
    nextitleP:'Kinzel Transporte stands for precise logistics, modern vehicles, and thoughtful service. Our experience ensures your freight reaches its destination safely – every day.',
    rights:'© 2025 Kinzel Transporte.de. All rights reserved.',
    headlineDescription:'Whether terminal or destination address – Kinzel delivers your freight safely to its destination.'
  },
  ru:{
    firstfooter:'Главная',
    secondfooter: 'О нас',
    thirdfooter: 'Галерия',
    fourthfooter: 'Услуги',
    firstchoiceNav:'Главная',
    secondchoice:'О нас',
    thirdchoice:'Галерия',
    fourthchoice:'Услуги',
    headlinefirst:'Логистические решения, которые мобильны – на дороге и в порту',
    sectiontitle:'Контейнерные перевозки',
    p1:'Перевозка контейнера из пункта А в пункт Б? Для Kinzeltransporte это не проблема!',
    p2:'Наши грузовики доставят ваши контейнеры куда угодно — будь то региональные или национальные перевозки.',
    p3:'Нужны ли вашим контейнерам временные условия хранения? Мы можем помочь и с этим.',
    p4:'Мы найдем для вас целевые и индивидуальные решения — обращайтесь к нам.',
    focustitle:'Специальный сервис в центре внимания',
    focusP:'Вот краткое описание нашей особой услуги: индивидуальные решения, современные технологии и команда, которая понимает вашу логистику.',
    nexttitle:'Надежность в каждой поездке',
    nextitleP:'Kinzel Transporte — это точная логистика, современные автомобили и продуманный сервис. Наш опыт гарантирует безопасную доставку вашего груза в пункт назначения — каждый день.',
    rights:'© 2025 Kinzel Transporte.de. Все права защищены.',
    headlineDescription:'Независимо от конечного пункта или адреса назначения — Kinzel безопасно доставит ваш груз к месту назначения.'
  },
  tr:{
    firstfooter:'Ana Sayfa',
    secondfooter: 'Hakkımızda',
    thirdfooter: 'Galeri',
    fourthfooter: 'Hizmetler',
    firstchoiceNav:'Ana Sayfa',
    secondchoice:'Hakkımızda',
    thirdchoice:'Galeri',
    fourthchoice:'Hizmetler',
    headlinefirst:'Karayolunda ve limanda hareket eden lojistik çözümleri',
    sectiontitle:'Konteyner taşımacılığı',
    p1:'A noktasından B noktasına konteyner taşımacılığı mı? Kinzeltransporte için sorun değil!',
    p2:'Bölgesel veya ulusal olsun, kamyonlarımız konteynerlerinizi her yere götürür.',
    p3:'Konteynerlerinizin geçici depolamaya mı ihtiyacı var? Bu konuda da yardımcı olabiliriz.',
    p4:'Sizin için hedef odaklı ve bireysel çözümler bulacağız – lütfen bizimle iletişime geçmekten çekinmeyin.',
    focustitle:'Odak noktası özel hizmet',
    focusP:'İşte özel hizmetimizin kısa bir tanımı: Özelleştirilmiş çözümler, modern teknoloji ve lojistiğinizi anlayan bir ekip.',
    nexttitle:'Her yolculukta güvenilirlik',
    nextitleP:'Kinzel Transporte, kusursuz lojistik, modern araçlar ve özenli hizmetin simgesidir. Deneyimimiz, yükünüzün her gün güvenle varış noktasına ulaşmasını sağlar.',
    rights:'© 2025 Kinzel Transporte.de. Tüm hakları saklıdır.',
    headlineDescription:'İster terminal ister varış adresi olsun – Kinzel yükünüzü güvenli bir şekilde varış noktasına ulaştırır.'
  }
}