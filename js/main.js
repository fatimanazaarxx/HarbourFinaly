(function ($) {
    "use strict";

    // Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();

// Initiate the wowjs
new WOW().init();

// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
        $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    }
});

// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
    return false;
});


// Project and Testimonial carousel
$(".project-carousel, .testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
    }
});

    // Translation dictionary
    const translations = {
        en: {
            address: "Erbil, Iraq",
            home: "Home",
            about: "About",
            services: "Services",
            contact: "Contact",
            contactBtn: "Contact Us",
            langSwitch: "🇸🇦 Arabic",
            carousel2Heading: "Seamless Logistics, Limitless Possibilities",
            carousel2Btn: "Learn More",

            // Feature section translations
            reliability: "Reliability",
            reliabilityText: "We prioritize reliability in logistics, ensuring your peace of mind.",
            flexibility: "Flexibility",
            flexibilityText: "Our flexible, scalable solutions adapt to your evolving business needs.",
            innovation: "Innovation",
            innovationText: "We leverage innovation and cutting-edge tech for continuous improvement and superior results.",
            globalReach: "Global Reach",
            globalReachText: "With a vast global network, we provide seamless cross-border logistics.",
            
            // About section translations
            aboutUs: "About Us",
            aboutHeading: "Trusted Logistics Solutions for a Fast-Paced World",
            aboutText: "Founded in 2023, Harbor Logistics is a trusted logistics partner headquartered in Erbil, Iraq. We offer a comprehensive range of services including international shipping (sea, land, and air), customs clearance, domestic transportation, and warehousing solutions. <br> With extensive experience and a deep understanding of both local and global markets, we deliver tailored logistics services designed to meet the unique needs of every client. Our reputation is built on quality, reliability, and transparency—making us the preferred choice for companies across diverse industries. <br> Our team consists of highly skilled logistics professionals who go beyond operational execution to provide strategic consultation and innovative solutions that support smarter, more efficient decision-making. At Harbor, we treat every shipment with care and precision—as if it were our own.",
            managedServices: "Managed Services",
            managedServicesText: "End-to-end logistics solutions tailored to optimize your supply chain.",
            dedicatedExperts: "Dedicated Experts",
            dedicatedExpertsText: "A skilled team ensuring efficiency, reliability, and seamless operations.",
            exploreMore: "Explore More",

            // Services section translations
            ourServices: "Our Services",
            servicesHeading: "Logistic Services that We Offer",
            freightForwarding: "International Freight Forwarding",
            freightForwardingText: "Efficient shipment management, ensuring smooth and timely deliveries worldwide.",
            customsClearance: "Customs Clearance Services",
            customsClearanceText: "Expert handling of customs procedures to ensure smooth, hassle-free imports and exports.",
            doorToDoor: "Door To Door Services",
            doorToDoorText: "Seamless door-to-door delivery tailored for ultimate convenience and peace of mind.",
            seaFreight: "Sea Freight Services",
            seaFreightText: "Reliable and cost-effective sea freight solutions for your shipping needs.",
            LandFreight: "Land Freight Services",
            LandFreightText: "Fast and secure land freight solutions across borders, with reliable delivery every time",
            AirFreight: "Air Freight Services",
            AirFreightText: "reliable air freight solutions for timely global deliveries, ensuring goods reach their destination.",
            cargo: "Cargo Insurance",
            cargoText: "Protect your shipments with our reliable cargo insurance — peace of mind for every journey.",
            oil: "⁠Oil & Gas Logistics",
            oilText: "Reliable, efficient transport solutions tailored for the energy sector.",
            storage: "Warehousing & Storage",
            storageText: "Secure, scalable storage solutions to keep your goods safe and accessible.",
            HeavyLift: "Out of Gauge & Heavy Lift Cargo",
            HeavyLiftText: "Expert handling of oversized and heavy shipments with precision and care.",
            road: "Domestic Road Transportation",
            roadText: "Fast and reliable nationwide delivery with a dedicated fleet, ensuring delivery on time.",
            project: "Project Cargo Transportation",
            projectText: "Specialized logistics solutions for complex, high-value, and oversized project shipments.",
            viewAll: "View All",

            // Footer section translations
            ourOffice: "Our Office",
            location: "Erbil, Iraq",
            phone: "+964 775 959 1113",
            email: "info@harbour-iq.com",
            quickLinks: "Quick Links",
            aboutUsLink: "About Us",
            contactUsLink: "Contact Us",
            ourServicesLink: "Our Services",
            newsletterHeading: "Subscribe to Our Newsletter",
            newsletterText: "Stay updated with the latest news and offers from Harbour Logistics.",
            subscribeBtn: "Subscribe",
            
            // Contact section translations
            contactUs: "Contact Us",
            contactHeading: "If You Have Any Query, Please Contact Us",
            needForm: "Have Any Questions?",
            formDescription: "We’d love to hear from you! Whether you have questions, feedback, or need assistance with our logistics services, our team is here to help. Feel free to reach out through the form below, and we’ll get back to you as soon as possible.",
            yourName: "Your Name",
            yourEmail: "Your Email",
            subject: "Subject",
            message: "Message",
            leaveMessage: "Leave a message here",
            sendMessage: "Send Message",
            contactDetails: "Contact Details",
            officeAddress1: "40 Meter Street. Star Towers Complex, Block A, floor 11, Office 1, Erbil, Iraq",
            officeAddress2: "State of Gujarat – City of Gandhidham – Sector No. 9 – Rose Arcade – India",    
            callUs: "Call Us",
            phoneNumber: "+964 775 959 1113",
            mailUs: "Mail Us",
            emailAddress: "info @harbour-iq.com",
            
            
        },
        ar: {
            address: "أربيل، العراق",
            home: "الرئيسية",
            about: "من نحن",
            services: "الخدمات",
            contact: "اتصل بنا",
            contactBtn: "اتصل بنا",
            langSwitch: "🇬🇧 English",
            carousel2Heading: "لوجستيات سلسة، إمكانيات غير محدودة",
            carousel2Btn: "تعرف أكثر",

            // Feature section translations
            reliability: "موثوقية",
            reliabilityText: "نحن نعطي الأولوية للموثوقية في الخدمات اللوجستية، مما يضمن راحة بالك.",
            flexibility: "مرونة",
            flexibilityText: "حلولنا المرنة والقابلة للتطوير تتكيف مع احتياجات عملك المتطورة.",
            innovation: "ابتكار",
            innovationText: "نحن نستفيد من الابتكار والتكنولوجيا المتطورة للتحسين المستمر وتحقيق نتائج متميزة.",
            globalReach: "انتشار عالمي",
            globalReachText: "مع شبكة عالمية واسعة، نقدم خدمات لوجستية سلسة عبر الحدود.",

            // About section translations
            aboutUs: "من نحن",
            aboutHeading: "حلول لوجستية موثوقة لعالم سريع الخطى",
            aboutText: "تأسست شركة هاربر للخدمات اللوجستية عام 2023، ويقع مقرها الرئيسي في أربيل - العراق، لتكون شريكًا موثوقًا في عالم النقل والشحن. نقدم مجموعة متكاملة من الخدمات تشمل الشحن الدولي بكافة أنواعه (البحري، البري، والجوي)، والتخليص الجمركي، النقل الداخلي، وحلول التخزين. <br> من خلال خبرتنا الواسعة وفهمنا العميق لاحتياجات السوق المحلي والدولي، نوفّر خدمات مصممة خصيصًا لتلبية متطلبات كل عميل على حدة. لقد بنينا سمعتنا على أساس الجودة، الالتزام، والشفافية، مما جعلنا الخيار الأول للعديد من الشركات في مختلف القطاعات. <br> يضم فريقنا نخبة من الخبراء اللوجستيين الذين لا يقتصر دورهم على تنفيذ العمليات بكفاءة، بل يتجاوز ذلك الى تقديم استشارات مهنية وحلول مبتكرة تساعد عملاءنا في اتخاذ قرارات استراتيجية مدروسة.",
            managedServices: "خدمات مُدارة",
            managedServicesText: "حلول لوجستية شاملة مصممة لتحسين سلسلة التوريد الخاصة بك.",
            dedicatedExperts: "خبراء متخصصون",
            dedicatedExpertsText: "فريق ماهر يضمن الكفاءة والموثوقية وسلاسة العمليات.",
            exploreMore: "اكتشف المزيد",

            // Services section translations
            ourServices: "خدماتنا",
            servicesHeading: "الخدمات اللوجستية التي نقدمها",
            freightForwarding: "خدمات الشحن الدولي",
            freightForwardingText: "إدارة فعالة للشحنات، تضمن تسليم سلس وفي الوقت المناسب لكل مكان.",
            customsClearance: "خدمات التخليص الجمركي",
            customsClearanceText: "معالجة خبيرة للإجراءات الجمركية لضمان الاستيراد والتصدير بسلاسة ودون عناء.",
            doorToDoor: "التوصيل لباب المنزل ",
            doorToDoorText: "توصيل سلس لباب المنزل مصمم لراحة البال",
            seaFreight: "خدمات الشحن البحري",
            seaFreightText: "حلول شحن بحرية موثوقة وفعالة من حيث التكلفة لتلبية احتياجاتك.",
            LandFreight: "خدمات الشحن البري",
            LandFreightText: "حلول شحن بري سريعة وآمنة لبضاعتك عبر الحدود.",
            AirFreight: "خدمات الشحن الجوي",
            AirFreightText: "شحن جوي سريع وموثوق للتوصيل حول العالم.",
            cargo: "تامين الحمولة",
            cargoText: " أمّن شحناتك مع خدمة التأمين على البضائع الموثوقة",
            oil: "الخدمات اللوجستية للنفط والغاز",
            oilText: "حلول نقل موثوقة وفعّالة مصممة خصيصًا لقطاع الطاقة.",
            storage: "التخزين والمستودعات",
            storageText: "حلول تخزين آمنة وقابلة للتوسّع لحماية بضائعك وضمان سهولة الوصول إليها.",
            HeavyLift: "الشحنات الثقيلة وغير القياسية",
            HeavyLiftText: "التعامل الاحترافي مع الشحنات الضخمة والثقيلة، مع ضمان الدقة والعناية في كل خطوة من عملية النقل.",
            road: "النقل البري المحلي",
            roadText: "توصيل سريع وموثوق في جميع أنحاء البلاد مع أسطول مخصص لضمان التسليم في الوقت المحدد.",
            project: "نقل الشحنات الخاصة بالمشاريع",
            projectText: "حلول لوجستية متخصصة للشحنات المعقدة، ذات القيمة العالية، والأحجام الكبيرة.",
           
            viewAll: "عرض جميع الخدمات",
            // Footer section translations
            ourOffice: "مكتبنا",
            location: "أربيل، العراق",
            phone: "+964 775 959 1113",
            email: "info@harbour-iq.com",
            quickLinks: "روابط سريعة",
            aboutUsLink: "من نحن",
            contactUsLink: "اتصل بنا",
            ourServicesLink: "خدماتنا",
            newsletterHeading: "اشترك في نشرتنا الإخبارية",
            newsletterText: "ابقَ على اطلاع بأحدث الأخبار والعروض من Harbour Logistics.",
            subscribeBtn: "اشترك",
        
            // Contact section translations
            contactUs: "اتصل بنا",
            contactHeading: "إذا كان لديك أي استفسار، يرجى الاتصال بنا",
            needForm: "هل لديك أي أسئلة؟",
            formDescription: "نحن في انتظار سماع رأيك! سواء كانت لديك أسئلة، ملاحظات، أو تحتاج إلى مساعدة بخصوص خدماتنا اللوجستية، فريقنا هنا لمساعدتك. لا تتردد في التواصل معنا من خلال النموذج أدناه، وسنرد عليك بأقرب وقت ممكن.",
            yourName: "اسمك",
            yourEmail: "بريدك الإلكتروني",
            subject: "الموضوع",
            message: "الرسالة",
            leaveMessage: "اترك رسالة هنا",
            sendMessage: "إرسال الرسالة",
            contactDetails: "تفاصيل الاتصال",
            officeAddress1: "شارع اربعين متري، مجمع ستار تاورز، بلوك A، الطابق 11، مكتب 1، أربيل، العراق",
            officeAddress2: "ولاية غوجارات – مدينة غانديدام – القطاع رقم 9 – روز أركيد – الهند",    
            callUs: "اتصل بنا",
            phoneNumber: "+964 775 959 1113",
            mailUs: "راسلنا",
            emailAddress: "info @harbour-iq.com"
        }
    };

    // Function to apply translations based on the current language
    function applyTranslations(lang) {
        // Update text for navigation items
        $("#address").text(translations[lang].address);
        $("#home").text(translations[lang].home);
        $("#about").text(translations[lang].about);
        $("#services").text(translations[lang].services);
        $("#contact").text(translations[lang].contact);
        $("#contactBtn").text(translations[lang].contactBtn);
        $("#langSwitch").text(translations[lang].langSwitch);
        
        // Update carousel text elements
        $("#carousel-2-heading").text(translations[lang].carousel2Heading);
        $("#carousel-2-btn").text(translations[lang].carousel2Btn);
        
        // Update features section
        $(".feature-row .col-lg-3:nth-child(1) h5").text(translations[lang].reliability);
        $(".feature-row .col-lg-3:nth-child(1) p").text(translations[lang].reliabilityText);
        $(".feature-row .col-lg-3:nth-child(2) h5").text(translations[lang].flexibility);
        $(".feature-row .col-lg-3:nth-child(2) p").text(translations[lang].flexibilityText);
        $(".feature-row .col-lg-3:nth-child(3) h5").text(translations[lang].innovation);
        $(".feature-row .col-lg-3:nth-child(3) p").text(translations[lang].innovationText);
        $(".feature-row .col-lg-3:nth-child(4) h5").text(translations[lang].globalReach);
        $(".feature-row .col-lg-3:nth-child(4) p").text(translations[lang].globalReachText);
        
        // Update About section
        $(".about .text-primary").text(translations[lang].aboutUs);
        $(".about h1.display-6").text(translations[lang].aboutHeading);
        $(".about p.mb-4").html(translations[lang].aboutText); // Using .html() as it contains HTML tags
        $(".about .col-sm-6:nth-child(1) h5").text(translations[lang].managedServices);
        $(".about .col-sm-6:nth-child(1) span").text(translations[lang].managedServicesText);
        $(".about .col-sm-6:nth-child(2) h5").text(translations[lang].dedicatedExperts);
        $(".about .col-sm-6:nth-child(2) span").text(translations[lang].dedicatedExpertsText);
        $(".about .btn-primary").text(translations[lang].exploreMore);
        
        // Update Services section heading
        $(".container-xxl .text-center .text-primary").text(translations[lang].ourServices);
        $(".container-xxl .text-center .display-5").text(translations[lang].servicesHeading);
        
        // Update each service item - using more specific selectors
        $(".row.g-4 .col-lg-4:nth-child(1) .service-item h5").text(translations[lang].freightForwarding);
        $(".row.g-4 .col-lg-4:nth-child(1) .service-item p").text(translations[lang].freightForwardingText);
        
        $(".row.g-4 .col-lg-4:nth-child(2) .service-item h5").text(translations[lang].customsClearance);
        $(".row.g-4 .col-lg-4:nth-child(2) .service-item p").text(translations[lang].customsClearanceText);
        
        $(".row.g-4 .col-lg-4:nth-child(3) .service-item h5").text(translations[lang].doorToDoor);
        $(".row.g-4 .col-lg-4:nth-child(3) .service-item p").text(translations[lang].doorToDoorText);
        
        $(".row.g-4 .col-lg-4:nth-child(4) .service-item h5").text(translations[lang].seaFreight);
        $(".row.g-4 .col-lg-4:nth-child(4) .service-item p").text(translations[lang].seaFreightText);

        $(".row.g-4 .col-lg-4:nth-child(5) .service-item h5").text(translations[lang].LandFreight);
        $(".row.g-4 .col-lg-4:nth-child(5) .service-item p").text(translations[lang].LandFreightText);

        $(".row.g-4 .col-lg-4:nth-child(6) .service-item h5").text(translations[lang].AirFreight);
        $(".row.g-4 .col-lg-4:nth-child(6) .service-item p").text(translations[lang].AirFreightText);

        $(".row.g-4 .col-lg-4:nth-child(7) .service-item h5").text(translations[lang].cargo);
        $(".row.g-4 .col-lg-4:nth-child(7) .service-item p").text(translations[lang].cargoText);

        $(".row.g-4 .col-lg-4:nth-child(8) .service-item h5").text(translations[lang].oil);
        $(".row.g-4 .col-lg-4:nth-child(8) .service-item p").text(translations[lang].oilText);

        $(".row.g-4 .col-lg-4:nth-child(9) .service-item h5").text(translations[lang].storage);
        $(".row.g-4 .col-lg-4:nth-child(9) .service-item p").text(translations[lang].storageText);

        $(".row.g-4 .col-lg-4:nth-child(10) .service-item h5").text(translations[lang].HeavyLift);
        $(".row.g-4 .col-lg-4:nth-child(10) .service-item p").text(translations[lang].HeavyLiftText);

        $(".row.g-4 .col-lg-4:nth-child(11) .service-item h5").text(translations[lang].road);
        $(".row.g-4 .col-lg-4:nth-child(11) .service-item p").text(translations[lang].roadText);

        $(".row.g-4 .col-lg-4:nth-child(12) .service-item h5").text(translations[lang].project);
        $(".row.g-4 .col-lg-4:nth-child(12) .service-item p").text(translations[lang].projectText);

        

        $(".btn-view-all").text(translations[lang].viewAll);

        // Update Footer section translations
        $(".footer .footer-office h4").text(translations[lang].ourOffice);
        $(".footer .footer-office p:nth-child(2)").html(`<i class="fa fa-map-marker-alt me-3"></i>${translations[lang].location}`);
        $(".footer .footer-office p:nth-child(3)").html(`<i class="fa fa-phone-alt me-3"></i>${translations[lang].phone}`);
        $(".footer .footer-office p:nth-child(4)").html(`<i class="fa fa-envelope me-3"></i>${translations[lang].email}`);

        // Update Quick Links section
        $(".footer .footer-links a:nth-of-type(1)").text(translations[lang].aboutUsLink);
        $(".footer .footer-links a:nth-of-type(2)").text(translations[lang].contactUsLink);
        $(".footer .footer-links a:nth-of-type(3)").text(translations[lang].ourServicesLink);

        // Update Newsletter section
        $(".footer .footer-newsletter h4").text(translations[lang].newsletterHeading);
        $(".footer .footer-newsletter p").text(translations[lang].newsletterText);
        $(".footer .footer-newsletter button").text(translations[lang].subscribeBtn);

        // Update Contact section
        $(".container-xxl .text-center text-primary").text(translations[lang].contactUs);
        $(".container-xxl .text-center h1.display-5").text(translations[lang].contactHeading);
        $(".col-lg-6:eq(0) h3").text(translations[lang].needForm);
        $(".contact p.mb-4").html(translations[lang].formDescription);
        $(".form-floating label[for='name']").text(translations[lang].yourName);
        $(".form-floating label[for='email']").text(translations[lang].yourEmail);
        $(".form-floating label[for='subject']").text(translations[lang].subject);
        $(".form-floating label[for='message']").text(translations[lang].message);
        $(".form-floating input#name").attr("placeholder", translations[lang].yourName);
        $(".form-floating input#email").attr("placeholder", translations[lang].yourEmail);
        $(".form-floating input#subject").attr("placeholder", translations[lang].subject);
        $(".form-floating textarea#message").attr("placeholder", translations[lang].leaveMessage);
        $(".col-12 button[type='submit']").text(translations[lang].sendMessage);
        $("#formDescription").text(translations[lang].formDescription);


        $(".col-lg-6:eq(1) h3").text(translations[lang].contactDetails);
        $(".col-lg-6:eq(1) .d-flex:eq(0) h6").text(translations[lang].ourOffice);
        $(".col-lg-6:eq(1) .d-flex:eq(0) span").text(translations[lang].officeAddress);
        $(".col-lg-6:eq(1) .d-flex:eq(1) h6").text(translations[lang].callUs);
        $(".col-lg-6:eq(1) .d-flex:eq(1) span").text(translations[lang].phoneNumber);
        $(".col-lg-6:eq(1) .d-flex:eq(2) h6").text(translations[lang].mailUs);
        $(".col-lg-6:eq(1) .d-flex:eq(2) span").text(translations[lang].emailAddress);
        $("#address1").text(translations[lang].officeAddress1);
    $("#address2").text(translations[lang].officeAddress2);

        
        // Update the direction of text and classes for LTR and RTL
        document.documentElement.setAttribute("lang", lang);
        document.documentElement.setAttribute("dir", lang === "en" ? "ltr" : "rtl");
        
        // Apply styling based on language direction
        applyDirectionalStyling(lang);
    }
    
    // Function to apply directional styling based on language
    function applyDirectionalStyling(lang) {
        // Change class for navbar to adjust the order
        if (lang === "ar") {
            $(".navbar-nav").addClass("rtl").removeClass("ltr");
            
            // Create position-preserving classes for carousel text
            $(".carousel-item").each(function() {
                let $col = $(this).find(".row > div");
                $col.removeClass("text-end text-start").addClass("text-start");
            });
            
            // Apply custom font styling for feature titles if needed
            $(".feature-row .col-lg-3 h5").css({
                'font-family': 'Cairo, sans-serif', // Example font that works well for Arabic
                'font-weight': '500'
            });
            
            // Apply the same font to About section headings for consistency
            $(".about h1, .about h5").css({
                'font-family': 'Cairo, sans-serif',
                'font-weight': '500'
            });
            
            // Apply font styling to service headings
            $(".service-item h5").css({
                'font-family': 'Cairo, sans-serif',
                'font-weight': '500'
            });
            
            // Apply font styling to footer headings
            $(".footer h4, .footer h6").css({
                'font-family': 'Cairo, sans-serif',
                'font-weight': '500'
            });
            
            // Adjust spacing for Arabic in footer
            $(".footer .btn-link").css({
                'padding-right': '0',
                'padding-left': '1rem'
            });
            
            // Fix icon alignment in RTL mode
            $(".footer .fa").addClass("ms-3").removeClass("me-3");
            
            // Fix icon alignment in contact section for RTL mode
            $(".col-lg-6:eq(1) .ms-3").addClass("me-3").removeClass("ms-3");

            // Add specific form styling for RTL
            $(".form-floating label").css({
                'right': '0',
                'left': 'auto',
                'padding-right': '1rem',
                'padding-left': '0'
            });
            
            // Right align text in footer
            $(".footer .btn.btn-link").css({
                "text-align": "right"
            });
            
            // Carousel controls
            $(".carousel-control-prev").addClass("order-1");
            $(".carousel-control-next").addClass("order-0");
        } 
        else {
            $(".navbar-nav").addClass("ltr").removeClass("rtl");
            
            // Restore original text alignment
            $(".carousel-item").each(function() {
                let $rowDiv = $(this).find(".row > div");
                if ($rowDiv.attr("data-original-align") === "left") {
                    $rowDiv.css("text-align", "left");
                } else if ($rowDiv.attr("data-original-align") === "right") {
                    $rowDiv.css("text-align", "right");
                }
            });
            
            // Reset fonts if needed for English
            $(".feature-row .col-lg-3 h5, .about h1, .about h5, .service-item h5, .footer h4, .footer h6").css({
                'font-family': '', // Reset to default or specify English font
                'font-weight': ''
            });
            
            // Reset footer spacing
            $(".footer .btn-link").css({
                'padding-right': '',
                'padding-left': ''
            });
            
            // Fix icon alignment in LTR mode
            $(".footer .fa").addClass("me-3").removeClass("ms-3");
            
            // Reset contact section icon alignment for LTR
            $(".col-lg-6:eq(1) .me-3").addClass("ms-3").removeClass("me-3");

            // Reset form styling for LTR
            $(".form-floating label").css({
                'right': 'auto',
                'left': '0',
                'padding-right': '0',
                'padding-left': '1rem'
            });
            
            // Reset footer alignment
            $(".footer .btn.btn-link").css({
                "text-align": "" // Reset the alignment for LTR (English)
            });
            
            // Reset carousel controls
            $(".carousel-control-prev").removeClass("order-1");
            $(".carousel-control-next").removeClass("order-0");
        }
    }

    // Function to switch language and save preference
    function switchLanguage() {
        let currentLang = localStorage.getItem("siteLanguage") || "en";
        let newLang = currentLang === "en" ? "ar" : "en";
        
        // Save the new language preference
        localStorage.setItem("siteLanguage", newLang);
        
        // Apply translations
        applyTranslations(newLang);
    }

    // Function to initialize language on page load
    function initializeLanguage() {
        let savedLang = localStorage.getItem("siteLanguage") || "en";
        
        // Set the html lang attribute
        document.documentElement.setAttribute("lang", savedLang);
        document.documentElement.setAttribute("dir", savedLang === "en" ? "ltr" : "rtl");
        
        // Apply translations
        applyTranslations(savedLang);
    }

    // Initialize language on page load
    $(document).ready(function() {
        initializeLanguage();
        
        // Add event listener to the language switch button
        $("#langSwitch").click(switchLanguage);
    });

})(jQuery);