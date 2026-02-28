const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});
document.getElementById("scrollTopBtn").addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

//translateing codes
const translations = {
  en: {
    firstchoiceNav: 'Home page',
    secondchoice:'About us',
    thirdchoice:'Gallery',
    fourthchoice:'Services',
    headlinefirst: 'Experience, technology, trust - that is our way',
    headlineDescription:'Container logistics – precise, punctual, Kinzel.',
    firstheading: 'Who we are',
    firstheadingP:'Since our founding in 2019, Kinzel Transporte, based in Elmshorn, has developed into a dynamic and reliable partner in container logistics. Our fleet is strategically located near the Port of Hamburg, enabling us to operate flexibly and on schedule. Thanks to our dedicated team, we can offer customized solutions for a wide range of transport requirements—whether time-critical deliveries, interim storage, or customized logistics. We value precision, trust, and rapid response to customer requests.',
  contakt1:'Contact us',
  contakt2:'You can reach us anytime—whether you are planning a delivery, need advice, or simply want to learn more about our services. Kinzel Transporte is ready to handle your logistics reliably and on time.',
contaktBox:'CONTACT',
phoneNum:'phone:',
email:'E-mail:',
longWord:'Transportation services',
longWordP:'We are your transport service provider in Northern Germany',
lione:'Home page',
litwo:'About us',
lithree:'Gallery',
lifour:'Services',
Allrights:'© 2025 Kinzel Transporte.de. All rights reserved.'
},
ru: {
    firstchoiceNav: 'Главная',
    secondchoice:'О нас',
    thirdchoice:'Галерия',
    fourthchoice:'Услуги',
    headlinefirst: 'Опыт, технологии, доверие — это наш путь.',
    headlineDescription:'Контейнерная логистика – точная, пунктуальная, Кинзель.',
    firstheading: 'Кто мы',
    firstheadingP:'С момента своего основания в 2019 году компания Kinzel Transporte, расположенная в Эльмсхорне, превратилась в динамичного и надежного партнера в сфере контейнерной логистики. Наш автопарк стратегически расположен недалеко от порта Гамбург, что позволяет нам работать гибко и по графику. Благодаря нашей сплоченной команде мы можем предложить индивидуальные решения для широкого спектра транспортных задач — будь то срочные поставки, временное хранение или индивидуальная логистика. Мы ценим точность, доверие и быстрое реагирование на запросы клиентов.',
  contakt1:'Связаться с нами',
  contakt2:'Вы можете связаться с нами в любое время — планируете ли вы доставку, нуждаетесь в консультации или просто хотите узнать больше о наших услугах. Kinzel Transporte готова взять на себя надёжную и своевременную организацию вашей логистики.',
contaktBox:'КОНТАКТ',
phoneNum:'телефон:',
email:'Электронная почта:',
longWord:'Транспортные услуги',
longWordP:'Мы — ваш поставщик транспортных услуг в Северной Германии.',
lione:'Главная',
litwo:'О нас',
lithree:'Галерия',
lifour:'Услуги',
Allrights:'© 2025 Kinzel Transporte.de. Все права защищены.'
},
tr: {
    firstchoiceNav: 'Ana Sayfa',
    secondchoice:'Hakkımızda',
    thirdchoice:'Galeri',
    fourthchoice:'Hizmetler',
    headlinefirst: 'Deneyim, teknoloji, güven - işte bizim yolumuz',
    headlineDescription:'Konteyner lojistiği – hassas, dakik, Kinzel.',
    firstheading: 'Biz kimiz',
    firstheadingP:'2019 yılında kurulduğumuzdan bu yana, Elmshorn merkezli Kinzel Transporte, konteyner lojistiğinde dinamik ve güvenilir bir ortak haline gelmiştir. Filomuz, Hamburg Limanına yakın stratejik bir konumda yer aldığından, esnek ve zamanında çalışma olanağına sahibiz. Özverili ekibimiz sayesinde, zaman açısından kritik teslimatlar, ara depolama veya özelleştirilmiş lojistik gibi çok çeşitli taşımacılık ihtiyaçlarınız için özelleştirilmiş çözümler sunabiliyoruz. Hassasiyete, güvene ve müşteri taleplerine hızlı yanıt vermeye önem veriyoruz.',
  contakt1:'Bize Ulaşın',
  contakt2:'Teslimat planlıyorsanız, tavsiyeye ihtiyacınız varsa veya hizmetlerimiz hakkında daha fazla bilgi edinmek istiyorsanız, istediğiniz zaman bize ulaşabilirsiniz. Kinzel Transporte, lojistiğinizi güvenilir ve zamanında halletmeye hazırdır.',
contaktBox:'TEMAS ETMEK',
phoneNum:'telefon:',
email:'E-posta:',
longWord:'Ulaşım hizmetleri',
longWordP:'Kuzey Almanyadaki ulaşım hizmeti sağlayıcınızız',
lione:'Ana Sayfa',
litwo:'Hakkımızda',
lithree:'Galeri',
lifour:'Hizmetler',
Allrights:'© 2025 Kinzel Transporte.de. Her hakkı saklıdır.'
}


}