// المشاريع: كل مشروع يحتوي على مصفوفة صور/فيديو
const projects = [
 


    {
        images: ["certification/1.png"],
        title: "CCNA Certification from NTI (National Telecommunication Institute)",
        desc: `Earned the Cisco Certified Network Associate (CCNA) certification through NTI, focusing on foundational and intermediate networking skills. The program covered key topics including:
Network Fundamentals: OSI & TCP/IP models, IP addressing, and subnetting.
Routing & Switching: Configuring and troubleshooting routers and switches, VLANs, and inter-VLAN routing.
Network Security: Implementing access control, basic firewall concepts, and securing network devices.
WAN Technologies: Understanding different WAN connections and protocols.
Troubleshooting: Diagnosing and resolving network issues using practical labs and simulations \n
●Network Fundamentals
●Routing & Switching 
●VLANs & Inter-VLAN Routing 
●Network Security 
●WAN Technologies
●Troubleshooting`,

        link: "https://www.linkedin.com/posts/ziad-hany-a60a3b2a6_ccna-routingandswitching-networking-activity-7318628707856752640-qwYr?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEnWGygBL2TPLfpDP74JND4g7UFnr8fiRTY&utm_campaign=copy_link",
        link2:"https://www.linkedin.com/posts/ziad-hany-a60a3b2a6_%D9%88%D9%82%D9%84-%D9%B1%D8%B9%D9%85%D9%84%D9%88%D8%A7-%D9%81%D8%B3%D9%8A%D8%B1%D9%89-%D9%B1%D9%84%D9%84%D9%87-%D8%B9%D9%85%D9%84%D9%83%D9%85-activity-7300555758276866048-KX-d?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEnWGygBL2TPLfpDP74JND4g7UFnr8fiRTY&utm_campaign=copy_link",
      },


 

    {
        images: ["certification/2.jpg", "certification/3.jpg"],
        title: "Cloud Computing Certification from ITI (Information Technology Institute)",
        desc: `Completed the Summer 2024 ITI Training, gaining hands-on experience in networking, cloud computing, Linux administration, and professional IT skills. Applied knowledge in a capstone project integrating cloud engineering, AWS services, and enterprise infrastructure management.\n
●Getting Started with IT 
●Computer Networks 
●Cloud & Virtualization Concepts 
●Linux 
●Red Hat System Administrator |
●Red Hat System Administrator ||
●Cloud Native Architecture
●AWS Freelancing
●Capstone Project
        
        `,
        link: "https://www.linkedin.com/posts/ziad-hany-a60a3b2a6_courseabrtitle-activity-7242896078369415169-f5-A?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEnWGygBL2TPLfpDP74JND4g7UFnr8fiRTY&utm_campaign=copy_link"
      },



    {
        images: ["certification/4.jpg"],
        title: "Red Hat Certified System Administrator |",
        desc: "Hands-on training in Red Hat Linux system administration, covering installation, configuration, user & group management, file systems, service management, networking, security, and basic scripting",
        link: "https://www.linkedin.com/posts/ziad-hany-a60a3b2a6_im-very-happy-to-share-this-achievement-activity-7224364370636529664--A8J?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEnWGygBL2TPLfpDP74JND4g7UFnr8fiRTY&utm_campaign=copy_link"
      },

  

    {
        images: ["certification/5.jpg"],
        title: "Introduction to Network Security Certification",
        desc: "Fundamental training in network security, covering threats, firewalls, intrusion detection, encryption, VPNs, and best practices for protecting network infrastructure",
        link: "https://www.linkedin.com/posts/ziad-hany-a60a3b2a6_im-very-happy-to-share-this-achievement-activity-7224364370636529664--A8J?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEnWGygBL2TPLfpDP74JND4g7UFnr8fiRTY&utm_campaign=copy_link"
      },
  
  
  
  
  
  
    {
      images: ["certification/6.png"],
      title: "Google IT Support Professional Certificate",
      desc: `
      ● Troubleshooting Identifying and resolving hardware, software, and network issues <br>
      ● System Administration Managing operating systems (Windows, Linux, macOS) <br>
      ● Networking Understanding network concepts such as TCP/IP, DNS, and DHCP <br>
      ● TCP/IP Core protocols for data communication over networks <br>
      ● DNS (Domain Name System) Translating domain names into IP addresses <br>
      ● DHCP (Dynamic Host Configuration Protocol) Automatically assigning IP addresses to devices <br>
      ● Firewall Controlling network traffic to prevent unauthorized access <br>
      ● Security Fundamentals Basic principles for securing devices and networks <br>
      ● Customer Support Communicating effectively to assist clients and solve technical problems <br>
      ● Hardware & Software Issues Troubleshooting common computer and application problems
      `,
      
      link: "https://coursera.org/verify/QWJ3VBGKRHAC"
    },
  
  
  
  
  
  
  
  
  ];
  
  const projectsContainer = document.getElementById("projects");
  
  // إنشاء الكروت ديناميكيًا
  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
  
    // badge لعدد الصور الإضافية
    const imageBadge = project.images.length > 1
      ? `<div class="image-count">+${project.images.length - 1}</div>`
      : '';
  
    // أول عنصر: صورة أو فيديو
    let firstMedia = project.images[0].endsWith(".mp4")
      ? `<video src="${project.images[0]}" muted autoplay loop></video>`
      : `<img src="${project.images[0]}" alt="${project.title}">`;
  
      card.innerHTML = `
      <div class="project-image-wrapper">
        ${firstMedia}
        ${imageBadge}
      </div>
      <div class="project-card-content">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <a href="${project.link}" class="btn">View Certification</a>
        ${project.link2 ? `<a href="${project.link2}" class="btn">Graduation</a>` : ''}
      </div>
    `;
    
    projectsContainer.appendChild(card);
  
    // fade-in animation
    setTimeout(() => card.classList.add("show"), index * 150);
  
    // عند الضغط على الصورة/الفيديو افتح Lightbox
    const mediaElement = card.querySelector("img, video");
    if (mediaElement) {
      mediaElement.addEventListener("click", () => openLightbox(project.images));
    }
  });
  
  // Lightbox setup
  const lightbox = document.getElementById("lightbox");
  
  let currentImages = [];
  let currentIndex = 0;
  
  function renderLightboxContent(src) {
    let content = "";
    if (src.endsWith(".mp4")) {
      content = `<video class="lightbox-media" src="${src}" controls autoplay></video>`;
    } else {
      content = `<img class="lightbox-media" src="${src}" alt="">`;
    }
  
    lightbox.innerHTML = `
      <span class="close">&times;</span>
      <button class="prev">&#10094;</button>
      ${content}
      <button class="next">&#10095;</button>
    `;
  
    // events
    lightbox.querySelector(".close").addEventListener("click", () => lightbox.classList.remove("show"));
    lightbox.querySelector(".prev").addEventListener("click", (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      renderLightboxContent(currentImages[currentIndex]);
    });
    lightbox.querySelector(".next").addEventListener("click", (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % currentImages.length;
      renderLightboxContent(currentImages[currentIndex]);
    });
  }
  
  function openLightbox(images) {
    currentImages = images;
    currentIndex = 0;
    renderLightboxContent(currentImages[currentIndex]);
    lightbox.classList.add("show");
  }
  