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
    headlinefirst:'Think globally, deliver locally – Kinzel Transporte makes it possible',
    headlineDescription:'From container to destination – travel safely with Kinzel.',
    BestTrucks:'Best trucks in practice',
    contentsection:'A freight forwarding company tailored to your individual needs.',
    contentdes:'We offer flexible and customized transport solutions. We place particular emphasis on honesty and reliability.',
    longtext:'Our goal is to build and continuously maintain trusting, long-term partnerships. We are happy to assist you at short notice and find a customized and suitable solution for every problem. Please feel free to contact us; we look forward to hearing from you.',
    coloredtext:'Efficient container logistics – reliable with Kinzel Transporte',
    sentence:'Whether at the port or by road, we deliver your containers safely and on time. With our modern fleet of vehicles and experienced drivers, we ensure smooth operations throughout the entire supply chain.',
    sentence2:'Kinzel Transporte stands for professional handling, transparent communication, and customized solutions in the field of container transport. Trust in our expertise – we are your reliable partner in freight transport.',
    parking:'🅿️ Our capabilities – See how our truck maneuvers precisely',
    twohands:'🤝 Never alone – Two trucks, one mission',
    camera:'📸 A look beyond – Our trucks in action',
    winter:'❄️ Unstoppable even in winter',
    cargoBox:'📦 Driving global trade forward – with the best',
    firstchoiceNav:'Home page',
    secondchoice:'About us',
    thirdchoice:'Gallery',
    fourthchoice:'Services',
    firstfooter:'Home page',
    secondfooter: 'About us',
    thirdfooter:'Gallery',
    fourthfooter:'Services',
    rights:'© 2025 Kinzel Transporte.de. All rights reserved.'
  },
  ru:{
    headlinefirst:'Думайте глобально, действуйте локально — Kinzel Transporte делает это возможным',
    headlineDescription:'От контейнера до пункта назначения – путешествуйте безопасно с Kinzel.',
    BestTrucks:'Лучшие грузовики на практике',
    contentsection:'Транспортно-экспедиторская компания, работающая с учетом ваших индивидуальных потребностей.',
    contentdes:'Мы предлагаем гибкие и индивидуальные транспортные решения. Мы уделяем особое внимание честности и надежности.',
    longtext:'Наша цель — построить и поддерживать доверительные, долгосрочные партнёрские отношения. Мы будем рады помочь вам в кратчайшие сроки и найти индивидуальное и подходящее решение для любой проблемы. Свяжитесь с нами, мы будем рады вашему запросу.',
    coloredtext:'Эффективная контейнерная логистика — надежно с Kinzel Transporte',
    sentence:'Мы доставим ваши контейнеры безопасно и в срок, будь то в порту или по дороге. Благодаря нашему современному автопарку и опытным водителям мы обеспечиваем бесперебойную работу на протяжении всей цепочки поставок.',
    sentence2:'Kinzel Transporte — это профессиональный подход, прозрачная коммуникация и индивидуальные решения в сфере контейнерных перевозок. Доверьтесь нашему опыту — мы ваш надежный партнер в сфере грузоперевозок.',
    parking:'🅿️ Наши возможности — Посмотрите, как точно маневрирует наш грузовик',
    twohands:'🤝 Никогда не один – Два грузовика, одна миссия',
    camera:'📸 Взгляд за пределы — наши грузовики в действии',
    winter:'❄️ Неудержим даже зимой',
    cargoBox:'📦 Продвижение мировой торговли вперед – с лучшими',
    firstchoiceNav:'Главная',
    secondchoice:'О нас',
    thirdchoice:'Галерея',
    fourthchoice:'Услуги',
    firstfooter:'Главная',
    secondfooter: 'О нас',
    thirdfooter:'Галерея',
    fourthfooter:'Услуги',
    rights:'© 2025 Kinzel Transporte.de. Все права защищены.'
  },
  tr: {
    headlinefirst:'Küresel düşünün, yerel teslimat yapın – Kinzel Transporte bunu mümkün kılıyor',
    headlineDescription:'Konteynerden varış noktasına – Kinzel ile güvenli bir şekilde seyahat edin.',
    BestTrucks:'Uygulamadaki en iyi kamyonlar',
    contentsection:'Bireysel ihtiyaçlarınıza göre tasarlanmış bir nakliye şirketi.',
    contentdes:'Esnek ve özelleştirilmiş taşıma çözümleri sunuyoruz. Dürüstlük ve güvenilirliğe özellikle önem veriyoruz.',
    longtext:'Amacımız, güvenilir ve uzun vadeli ortaklıklar kurmak ve sürdürmektir. Kısa sürede size yardımcı olmaktan ve her sorun için size özel ve uygun bir çözüm bulmaktan mutluluk duyarız. Lütfen bizimle iletişime geçmekten çekinmeyin; sizden haber bekliyoruz.',
    coloredtext:'Verimli konteyner lojistiği – Kinzel Transporte ile güvenilir',
    sentence:'İster limandan ister karayoluyla, konteynerlerinizi güvenli ve zamanında teslim ediyoruz. Modern araç filomuz ve deneyimli şoförlerimizle, tüm tedarik zinciri boyunca sorunsuz operasyonlar sağlıyoruz.',
    sentence2:'Kinzel Transporte, konteyner taşımacılığı alanında profesyonel taşıma, şeffaf iletişim ve özelleştirilmiş çözümlerin öncüsüdür. Uzmanlığımıza güvenin; yük taşımacılığında güvenilir ortağınızız.',
    parking:'🅿️ Yeteneklerimiz – Kamyonumuzun ne kadar hassas manevralar yaptığını görün',
    twohands:'🤝 Asla yalnız değilsiniz - İki kamyon, bir görev',
    camera:'📸 Ötesine bir bakış – Kamyonlarımız hareket halinde',
    winter:'❄️ Kışın bile durdurulamaz',
    cargoBox:'📦 Küresel ticareti ileriye taşımak – en iyilerle',
    firstchoiceNav:'Ana Sayfa',
    secondchoice:'Hakkımızda',
    thirdchoice:'Galeri',
    fourthchoice:'Hizmetler',
    firstfooter:'Ana Sayfa',
    secondfooter: 'Hakkımızda',
    thirdfooter:'Galeri',
    fourthfooter:'Hizmetler',
    rights:'© 2025 Kinzel Transporte.de. Her hakkı saklıdır.'
  }
}