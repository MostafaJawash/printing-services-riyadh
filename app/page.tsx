import Image from "next/image";

const detailsUrl = "https://lara-advertising-printing.vercel.app/";
const whatsappUrl =
  "https://wa.me/966531659055?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6";

const services = [
  { number: "01", icon: "▤", title: "طباعة بروشورات", text: "خدمات طباعة بروشورات احترافية في الرياض بجودة عالية، وألوان دقيقة وتصميم جذاب مناسب للحملات التسويقية والتعريف بخدمات شركتك." },
  { number: "02", icon: "▰", title: "طباعة كروت شخصية", text: "طباعة كروت شخصية فاخرة للشركات والأفراد بأفضل الخامات والتشطيبات، مع تصاميم حديثة تعكس هوية علامتك التجارية باحتراف." },
  { number: "03", icon: "◇", title: "طباعة فلايرات", text: "طباعة فلايرات تسويقية عالية الجودة للإعلانات والعروض التجارية، بمقاسات متعددة وورق مناسب للتوزيع والوصول السريع إلى عملائك." },
  { number: "04", icon: "▥", title: "طباعة دفاتر", text: "طباعة دفاتر ومستندات للشركات والمدارس والمؤسسات بجودة ممتازة، مع خيارات متنوعة للأغلفة والتجليد والطباعة الداخلية." },
  { number: "05", icon: "✦", title: "طباعة استيكرات", text: "طباعة استيكرات وملصقات بجميع الأشكال والأحجام، بخامات متينة وألوان واضحة تناسب المنتجات والتغليف والواجهات." },
  { number: "06", icon: "▱", title: "طباعة بنرات ولوحات", text: "طباعة بنرات ولوحات إعلانية كبيرة بجودة عالية جداً، مناسبة للمعارض والفعاليات والواجهات الداخلية والخارجية." },
  { number: "07", icon: "◈", title: "طباعة هوية تجارية", text: "تصميم وطباعة الهوية البصرية للشركات، من الشعارات والبطاقات إلى الأوراق الرسمية والمطبوعات التي تصنع حضوراً موحداً." },
];

const benefits = ["جودة طباعة عالية جداً", "أسعار منافسة ومدروسة", "سرعة ودقة في التنفيذ", "خبرة طويلة في السوق", "دعم عملاء ممتاز", "حلول متكاملة للجميع"];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://printing-services-riyadh.vercel.app/#business",
  name: "شركة لارا للطباعة",
  alternateName: "خدمات الطباعة في الرياض",
  description: "شركة متخصصة في خدمات الطباعة التجارية والإعلانية في مدينة الرياض.",
  url: "https://printing-services-riyadh.vercel.app/",
  telephone: "+966531659055",
  image: "https://printing-services-riyadh.vercel.app/printing-hero.png",
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: "الرياض", addressRegion: "الرياض", addressCountry: "SA" },
  areaServed: { "@type": "City", name: "الرياض" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات الطباعة",
    itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title, serviceType: "Printing Services" } })),
  },
  sameAs: [detailsUrl, "https://maps.app.goo.gl/dqiCkAvm68r9QNVt9"],
};

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="خدمات الطباعة في الرياض - الرئيسية">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span><strong>خدمات الطباعة</strong><small>في الرياض</small></span>
          </a>
          <nav aria-label="التنقل الرئيسي">
            <a href="#home">الرئيسية</a><a href="#services">خدماتنا</a><a href="#about">من نحن</a><a href="#contact">تواصل معنا</a>
          </nav>
          <a className="header-phone" href="tel:+966531659055"><span>اتصل بنا</span><b dir="ltr">+966 53 165 9055</b></a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <Image className="hero-image" src="/printing-hero.png" alt="خدمات الطباعة في الرياض من شركة لارا للطباعة" fill sizes="100vw" preload />
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="eyebrow"><span /> نطبع فكرتك بإتقان</div>
            <h1>خدمات الطباعة في الرياض<br />بجودة <em>تصنع الفرق</em></h1>
            <p>نقدم لك في شركة لارا للطباعة أفضل خدمات الطباعة في الرياض بجودة عالية وتقنيات حديثة تناسب جميع احتياجات الشركات والأفراد، من الطباعة التجارية إلى التصميم والإعلانات.</p>
            <div className="hero-actions">
              <a className="button primary" href={detailsUrl} target="_blank" rel="noopener noreferrer">لمزيد من التفاصيل <ArrowIcon /></a>
              <a className="button ghost" href="#services">استكشف خدماتنا</a>
            </div>
            <div className="hero-stats" aria-label="مزايا الخدمة">
              <div><b>+10</b><span>سنوات من الخبرة</span></div><div><b>+5K</b><span>مشروع مكتمل</span></div><div><b>100%</b><span>التزام بالجودة</span></div>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading centered"><span className="kicker">حلول طباعة متكاملة</span><h2>خدماتنا في الطباعة</h2><p>من الفكرة إلى المنتج النهائي، نقدم خدمات طباعة تجارية في الرياض بتفاصيل دقيقة وجودة تليق بعلامتك.</p></div>
            <div className="services-grid">
              {services.map((service) => <article className="service-card" key={service.title}><span className="card-number">{service.number}</span><span className="service-icon" aria-hidden="true">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><a href={detailsUrl} target="_blank" rel="noopener noreferrer" aria-label={`اعرف المزيد عن ${service.title}`}>اعرف المزيد <ArrowIcon /></a></article>)}
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container about-grid">
            <div className="about-copy"><span className="kicker light">شريكك في النجاح</span><h2>لماذا تختار شركة لارا للطباعة؟</h2><p>لأن كل مطبوعة تمثل شركتك، نتعامل مع تفاصيلها بعناية تبدأ من اختيار الخامة وتنتهي بتسليم منتج متقن. نجمع في مطابع لارا بالرياض بين الخبرة والتقنية لنقدم نتائج ثابتة مهما كان حجم المشروع.</p><a className="text-link" href={detailsUrl} target="_blank" rel="noopener noreferrer">تعرّف أكثر على شركة لارا <ArrowIcon /></a></div>
            <div className="benefits-grid">{benefits.map((item, index) => <div className="benefit" key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b></div>)}</div>
          </div>
        </section>

        <section className="section process">
          <div className="container"><div className="section-heading centered"><span className="kicker">تجربة سلسة وواضحة</span><h2>من فكرتك إلى مطبوعات جاهزة</h2></div><div className="process-grid"><article><span>01</span><h3>شاركنا احتياجك</h3><p>أرسل المقاس والكمية والموعد، وسيساعدك فريقنا في اختيار الحل المناسب.</p></article><article><span>02</span><h3>نراجع ونجهّز</h3><p>نراجع ملفات التصميم والخامات والألوان قبل اعتماد أمر الطباعة.</p></article><article><span>03</span><h3>نطبع ونسلّم</h3><p>تنفيذ دقيق ومتابعة للجودة حتى تصبح مطبوعاتك جاهزة في الموعد.</p></article></div></div>
        </section>

        <section className="section embedded" aria-labelledby="embedded-title">
          <div className="container"><div className="section-heading split"><div><span className="kicker">اكتشف المزيد</span><h2 id="embedded-title">تجربة لارا الكاملة</h2></div><p>تصفّح الموقع الكامل لشركة لارا للطباعة والإعلان، وتعرّف على الأعمال والحلول المتاحة مباشرة من هنا.</p></div><div className="browser-frame"><div className="browser-bar"><span className="dots"><i /><i /><i /></span><span className="address">lara-advertising-printing.vercel.app</span><a href={detailsUrl} target="_blank" rel="noopener noreferrer" aria-label="فتح الموقع في نافذة جديدة">↗</a></div><iframe src={detailsUrl} title="الموقع الكامل لشركة لارا للطباعة والإعلان" loading="lazy" allow="fullscreen" /></div></div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-inner"><div><span className="kicker light">نحن هنا لخدمتك</span><h2>للتواصل وزيارتنا</h2><p>تحدث مع فريق شركة لارا للطباعة وابدأ مشروعك القادم بجودة تستحقها علامتك.</p></div><div className="contact-cards"><a href="tel:+966531659055"><span>رقم التواصل</span><b dir="ltr">+966 53 165 9055</b></a><a href="https://maps.app.goo.gl/dqiCkAvm68r9QNVt9" target="_blank" rel="noopener noreferrer"><span>موقعنا في الرياض</span><b>عرض على خرائط Google</b></a></div></div>
        </section>
      </main>

      <footer><div className="container footer-grid"><div><a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span><strong>خدمات الطباعة</strong><small>في الرياض</small></span></a><p>شركة لارا للطباعة - خدمات الطباعة في الرياض</p></div><div><h2>روابط سريعة</h2><a href="#services">خدماتنا</a><a href="#about">لماذا نحن</a><a href="#contact">تواصل معنا</a></div><div><h2>تواصل معنا</h2><a href="tel:+966531659055" dir="ltr">+966 53 165 9055</a><a href={detailsUrl} target="_blank" rel="noopener noreferrer">الموقع الرسمي</a></div></div><div className="container copyright">جميع الحقوق محفوظة © {new Date().getFullYear()} شركة لارا للطباعة في الرياض</div></footer>

      <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="تواصل معنا عبر واتساب"><svg aria-hidden="true" viewBox="0 0 32 32"><path d="M27.3 4.7A15.7 15.7 0 0 0 2.6 23.6L.4 31.7l8.3-2.2A15.7 15.7 0 0 0 27.3 4.7ZM16 29a13 13 0 0 1-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5A13 13 0 1 1 16 29Zm7.1-9.7c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-2.3-1.1-3.8-2-5.3-4.6-.4-.7.4-.7 1.1-2.2.1-.3.1-.5 0-.7l-1.2-2.9c-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 4 1.7 4.3c.2.3 2.9 4.4 7 6.2 1 .4 1.7.7 2.3.9 1 .3 1.9.3 2.6.2.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.9-.2-.2-.5-.3-.9-.5Z" /></svg><span>واتساب</span></a>
    </>
  );
}
