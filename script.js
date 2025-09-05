const translations = {
    en: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      Certification:"Certification",
      resume: "Resume",
      linkedin: "LinkedIn",
      contact: "Contact",
      welcome: "Welcome to My Website",
      intro: "I'm Network and Systems Engineer with solid experience in technical support and customer support, passionate about delivering effective IT solutions and enhancing user experience",
      subtitle: "Network & Systems Engineer | Technical Support | IT Help Desk | Customer Support"
    },
    ar: {
      home: "الرئيسية",
      about: "من أنا",
      portfolio: "الأعمال",
      Certification:"الشهادات",
      resume: "السيرة الذاتية",
      linkedin: "لينكدإن",
      contact: "اتصل بي",
      welcome: "مرحباً بك في موقعي",
      intro: "أنا مهندس شبكات وأنظمة بخبرة قوية في الدعم الفني ودعم العملاء، شغوف بتقديم حلول تقنية فعالة وتحسين تجربة المستخدم",
      subtitle: "مهندس شبكات وأنظمة | دعم فني | مكتب المساعدة | دعم العملاء"
    },
    de: {
      home: "Startseite",
      about: "Über mich",
      portfolio: "Portfolio",
      Certification:"Zertifizierung",
      resume: "Lebenslauf",
      linkedin: "LinkedIn",
      contact: "Kontakt",
      welcome: "Willkommen auf meiner Website",
      intro: "Ich bin Netzwerk- und Systemingenieur mit solider Erfahrung im technischen Support und Kundensupport, leidenschaftlich daran interessiert, effektive IT-Lösungen bereitzustellen und die Benutzererfahrung zu verbessern",
      subtitle: "Netzwerk- & Systemingenieur | Technischer Support | IT Help Desk | Kundensupport"
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      portfolio: "Portfolio",
      Certification:"Certification",
      resume: "CV",
      linkedin: "LinkedIn",
      contact: "Contact",
      welcome: "Bienvenue sur mon site Web",
      intro: "Je suis ingénieur réseaux et systèmes avec une solide expérience en support technique et support client, passionné par la fourniture de solutions informatiques efficaces et l'amélioration de l'expérience utilisateur",
      subtitle: "Ingénieur Réseaux & Systèmes | Support Technique | Assistance Informatique | Support Client"
    },
    zh: {
      home: "主页",
      about: "关于我",
      portfolio: "作品集",
      Certification:"认证",
      resume: "简历",
      linkedin: "领英",
      contact: "联系我",
      welcome: "欢迎来到我的网站",
      intro: "我是一名网络与系统工程师，在技术支持和客户支持方面有着丰富的经验，热衷于提供高效的 IT 解决方案并提升用户体验",
      subtitle: "网络与系统工程师 | 技术支持 | IT 服务台 | 客户支持"
    }
  };
  
  // تغيير اللغة عند الاختيار
  const langSelector = document.getElementById("lang");
  
  langSelector.addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    translatePage(selectedLang);
  });
  
  function translatePage(language) {
    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");
      element.textContent = translations[language][key];
    });
  }
  
  // تحميل الصفحة باللغة الإنجليزية افتراضياً
  translatePage("en");
  