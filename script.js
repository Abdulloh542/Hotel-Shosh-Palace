/* ============================================
   Hotel Shosh Palace — Script
   Multi-language, Animations, Lightbox Nav
   ============================================ */

// ─── TRANSLATIONS ───
const translations = {
    uz: {
        nav_rooms: "Xonalar",
        nav_gallery: "Galereya",
        nav_amenities: "Qulayliklar",
        nav_location: "Joylashuv",
        nav_contact: "Aloqa",
        nav_call: "Qo'ng'iroq qilish",
        hero_subtitle: "Toshkent markazida zamonaviy xonalar va ajoyib xizmat bilan qulay dam olish.",
        hero_book: "Joy band qilish",
        hero_rooms: "Xonalarni ko'rish",
        about_label: "Mehmonxona haqida",
        about_title: "Hotel Shosh Palace",
        about_p1: "Hotel Shosh Palace — Toshkent shahrining Yakkasaroy tumanida joylashgan qulay mehmonxona. Mehmonxona zamonaviy xonalar, do'stona xizmat va shahar markazi hamda aeroportga qulay kirish imkoniyatini taqdim etadi.",
        about_p2: "Biznes safarchilar va O'zbekistonga sayohat qiluvchi turistlar uchun ideal tanlov.",
        fact_wifi: "Bepul Wi-Fi",
        fact_breakfast: "Bepul nonushta",
        fact_pool: "Ochiq basseyn",
        fact_shuttle: "Aeroport transferi",
        fact_parking: "Bepul avtoturargoh",
        pool_label: "Ochiq basseyn",
        pool_title: "Basseynda dam oling",
        pool_p1: "Hotel Shosh Palace mehmonlariga ochiq havoda suzish basseyni taqdim etadi. Issiq kunlarda salqinlaning va quyoshda dam oling.",
        pool_p2: "Basseyn atrofida shezlonglar va dam olish joyi mavjud. Oilangiz yoki do'stlaringiz bilan birga yoqimli vaqt o'tkazing.",
        pool_f1: "Ochiq havoda basseyn",
        pool_f2: "Shezlonglar va dam olish joyi",
        pool_f3: "Toza va xavfsiz suv",
        rooms_label: "Xonalarimiz",
        rooms_title: "Qulay xonalar",
        rooms_subtitle: "Toshkentda mukammal dam olish uchun xonalarimizdan birini tanlang.",
        room1_name: "Standard Double xona",
        room1_desc: "Katta ikki kishilik karavot, tekis ekranli televizor, shkaf va bog' manzarasi bilan qulay xona.",
        room2_name: "Standard Twin xona",
        room2_desc: "Ikkita alohida karavot, zamonaviy jihozlar va yorug' muhit bilan qulay xona.",
        room3_name: "Uch kishilik xona",
        room3_desc: "Uchta qulay karavot, bog' manzarasi va barcha zamonaviy qulayliklar bilan keng xona.",
        room_book: "Band qilish",
        amenity_kettle: "Choynak",
        amenity_balcony: "Balkon",
        amenities_label: "Qulayliklar",
        amenities_title: "Mehmonxona qulayliklari",
        amenities_subtitle: "Qulay va yoqimli dam olish uchun barcha sharoitlar.",
        am_wifi: "Bepul Wi-Fi",
        am_wifi_d: "Mehmonxona bo'ylab tezkor internet.",
        am_pool: "Ochiq basseyn",
        am_pool_d: "Mavsumiy ochiq basseyn va dam olish joyi.",
        am_breakfast: "Bepul nonushta",
        am_breakfast_d: "Har kuni mazali bufet nonushta.",
        am_restaurant: "Restoran",
        am_restaurant_d: "Zamonaviy restoranda mazali taomlar.",
        am_parking: "Bepul avtoturargoh",
        am_parking_d: "Xususiy bepul avtoturargoh barcha mehmonlar uchun.",
        am_shuttle: "Aeroport transferi",
        am_shuttle_d: "Aeroportdan mehmonxonaga qulay transfer.",
        am_pets: "Uy hayvonlariga ruxsat beriladi",
        am_fitness: "Fitnes markazi",
        am_laundry: "Kir yuvish xizmati",
        am_ac: "Konditsioner",
        gallery_label: "Fotogalereya",
        gallery_title: "Mehmonxonamizni ko'ring",
        gallery_subtitle: "Hotel Shosh Palace bo'ylab virtual sayohat.",
        g_exterior: "Tashqi ko'rinish",
        g_room: "Xona",
        g_restaurant: "Restoran",
        g_pool: "Basseyn",
        g_pool_night: "Basseyn (kechasi)",
        g_breakfast: "Nonushta",
        g_bathroom: "Hammom",
        g_detail: "Xona detali",
        g_courtyard: "Hovli",
        loc_label: "Joylashuv",
        loc_title: "Bizning manzil",
        loc_subtitle: "Toshkentning Yakkasaroy tumanida qulay joylashuv.",
        nearby_title: "Yaqin atrofda",
        near_airport: "Toshkent xalqaro aeroporti",
        near_center: "Shahar markazi",
        near_metro: "Yaqin metro stantsiyasi",
        open_google: "Google Maps'da ochish",
        open_yandex: "Yandex Maps'da ochish",
        cta_label: "Bugun band qiling",
        cta_title: "Bugun xona band qiling",
        cta_subtitle: "Qulay xonalar, ajoyib joylashuv va do'stona xizmat Toshkentda.",
        cta_book: "Joy band qilish",
        footer_desc: "Toshkent shahridagi qulay mehmonxona. Zamonaviy xonalar, do'stona xizmat va yoqimli dam olish uchun barcha sharoitlar.",
        footer_links: "Havolalar",
        footer_contact: "Aloqa",
        footer_address: "Manzil",
        footer_district: "Yakkasaroy tumani",
        footer_city: "Toshkent, O'zbekiston",
        footer_map_link: "Google Maps'da ochish →"
    },

    ru: {
        nav_rooms: "Номера",
        nav_gallery: "Галерея",
        nav_amenities: "Удобства",
        nav_location: "Расположение",
        nav_contact: "Контакты",
        nav_call: "Позвонить",
        hero_subtitle: "Комфортный отдых в центре Ташкента с современными номерами и отличным сервисом.",
        hero_book: "Забронировать",
        hero_rooms: "Смотреть номера",
        about_label: "О гостинице",
        about_title: "Hotel Shosh Palace",
        about_p1: "Hotel Shosh Palace — уютная гостиница, расположенная в Яккасарайском районе Ташкента. Отель предлагает современные номера, дружелюбное обслуживание и удобный доступ к центру города и аэропорту.",
        about_p2: "Идеальный выбор как для бизнес-путешественников, так и для туристов, посещающих Узбекистан.",
        fact_wifi: "Бесплатный Wi-Fi",
        fact_breakfast: "Бесплатный завтрак",
        fact_pool: "Открытый бассейн",
        fact_shuttle: "Трансфер из аэропорта",
        fact_parking: "Бесплатная парковка",
        pool_label: "Открытый бассейн",
        pool_title: "Отдохните у бассейна",
        pool_p1: "Hotel Shosh Palace предлагает гостям открытый бассейн. Освежитесь в жаркие дни и отдохните на солнце.",
        pool_p2: "Рядом с бассейном расположены шезлонги и зона отдыха. Проведите приятное время с семьёй или друзьями.",
        pool_f1: "Открытый бассейн",
        pool_f2: "Шезлонги и зона отдыха",
        pool_f3: "Чистая и безопасная вода",
        rooms_label: "Наши номера",
        rooms_title: "Комфортные номера",
        rooms_subtitle: "Выберите один из наших номеров для идеального отдыха в Ташкенте.",
        room1_name: "Стандартный двухместный",
        room1_desc: "Просторный номер с большой двуспальной кроватью, телевизором, шкафом и видом на сад.",
        room2_name: "Стандартный двухместный (twin)",
        room2_desc: "Комфортный номер с двумя раздельными кроватями, современными удобствами и светлой атмосферой.",
        room3_name: "Трёхместный номер",
        room3_desc: "Просторный номер с тремя кроватями, видом на сад и всеми современными удобствами.",
        room_book: "Забронировать",
        amenity_kettle: "Чайник",
        amenity_balcony: "Балкон",
        amenities_label: "Удобства",
        amenities_title: "Удобства отеля",
        amenities_subtitle: "Всё необходимое для комфортного и приятного отдыха.",
        am_wifi: "Бесплатный Wi-Fi",
        am_wifi_d: "Высокоскоростной интернет по всему отелю.",
        am_pool: "Открытый бассейн",
        am_pool_d: "Сезонный бассейн и зона отдыха.",
        am_breakfast: "Бесплатный завтрак",
        am_breakfast_d: "Ежедневный вкусный шведский стол.",
        am_restaurant: "Ресторан",
        am_restaurant_d: "Вкусные блюда в современном ресторане.",
        am_parking: "Бесплатная парковка",
        am_parking_d: "Частная бесплатная парковка для всех гостей.",
        am_shuttle: "Трансфер из аэропорта",
        am_shuttle_d: "Комфортный трансфер из аэропорта в отель.",
        am_pets: "Можно с питомцами",
        am_fitness: "Фитнес-центр",
        am_laundry: "Услуги прачечной",
        am_ac: "Кондиционер",
        gallery_label: "Фотогалерея",
        gallery_title: "Посмотрите наш отель",
        gallery_subtitle: "Виртуальная экскурсия по Hotel Shosh Palace.",
        g_exterior: "Внешний вид",
        g_room: "Номер",
        g_restaurant: "Ресторан",
        g_pool: "Бассейн",
        g_pool_night: "Бассейн (вечер)",
        g_breakfast: "Завтрак",
        g_bathroom: "Ванная",
        g_detail: "Деталь номера",
        g_courtyard: "Двор",
        loc_label: "Расположение",
        loc_title: "Наш адрес",
        loc_subtitle: "Удобное расположение в Яккасарайском районе Ташкента.",
        nearby_title: "Рядом",
        near_airport: "Международный аэропорт Ташкента",
        near_center: "Центр города",
        near_metro: "Ближайшая станция метро",
        open_google: "Открыть в Google Maps",
        open_yandex: "Открыть в Yandex Maps",
        cta_label: "Забронируйте сегодня",
        cta_title: "Забронируйте номер сегодня",
        cta_subtitle: "Комфортные номера, отличное расположение и дружелюбное обслуживание в Ташкенте.",
        cta_book: "Забронировать",
        footer_desc: "Уютная гостиница в Ташкенте. Современные номера, дружелюбное обслуживание и всё необходимое для приятного отдыха.",
        footer_links: "Ссылки",
        footer_contact: "Контакты",
        footer_address: "Адрес",
        footer_district: "Яккасарайский район",
        footer_city: "Ташкент, Узбекистан",
        footer_map_link: "Открыть в Google Maps →"
    },

    en: {
        nav_rooms: "Rooms",
        nav_gallery: "Gallery",
        nav_amenities: "Amenities",
        nav_location: "Location",
        nav_contact: "Contact",
        nav_call: "Call Us",
        hero_subtitle: "Comfortable stay in the heart of Tashkent with modern rooms and excellent service.",
        hero_book: "Book a Room",
        hero_rooms: "View Rooms",
        about_label: "About the Hotel",
        about_title: "Hotel Shosh Palace",
        about_p1: "Hotel Shosh Palace is a comfortable hotel located in the Yakkasaray district of Tashkent. The hotel offers modern rooms, friendly service and convenient access to the city center and airport.",
        about_p2: "The perfect choice for both business travelers and tourists visiting Uzbekistan.",
        fact_wifi: "Free WiFi",
        fact_breakfast: "Free Breakfast",
        fact_pool: "Outdoor Pool",
        fact_shuttle: "Airport Shuttle",
        fact_parking: "Free Parking",
        pool_label: "Outdoor Pool",
        pool_title: "Relax by the Pool",
        pool_p1: "Hotel Shosh Palace offers guests an outdoor swimming pool. Cool off on hot days and relax in the sun.",
        pool_p2: "Sun loungers and a relaxation area are available by the pool. Enjoy quality time with your family or friends.",
        pool_f1: "Outdoor swimming pool",
        pool_f2: "Sun loungers & relaxation area",
        pool_f3: "Clean and safe water",
        rooms_label: "Our Rooms",
        rooms_title: "Comfortable Rooms",
        rooms_subtitle: "Choose from our rooms for a perfect stay in Tashkent.",
        room1_name: "Standard Double Room",
        room1_desc: "Comfortable room with a large double bed, flat-screen TV, wardrobe and garden views.",
        room2_name: "Standard Twin Room",
        room2_desc: "Comfortable room with two separate beds, modern amenities and a bright atmosphere.",
        room3_name: "Triple Room",
        room3_desc: "Spacious room with three comfortable beds, garden views and all modern amenities.",
        room_book: "Book Now",
        amenity_kettle: "Kettle",
        amenity_balcony: "Balcony",
        amenities_label: "Amenities",
        amenities_title: "Hotel Amenities",
        amenities_subtitle: "Everything you need for a comfortable and enjoyable stay.",
        am_wifi: "Free WiFi",
        am_wifi_d: "High-speed internet throughout the hotel.",
        am_pool: "Outdoor Pool",
        am_pool_d: "Seasonal outdoor pool and relaxation area.",
        am_breakfast: "Free Breakfast",
        am_breakfast_d: "Delicious daily buffet breakfast.",
        am_restaurant: "Restaurant",
        am_restaurant_d: "Delicious meals in a modern restaurant.",
        am_parking: "Free Parking",
        am_parking_d: "Private free parking for all guests.",
        am_shuttle: "Airport Shuttle",
        am_shuttle_d: "Comfortable transfer from airport to hotel.",
        am_pets: "Pets Allowed",
        am_fitness: "Fitness Center",
        am_laundry: "Laundry Service",
        am_ac: "Air Conditioning",
        gallery_label: "Photo Gallery",
        gallery_title: "Explore Our Hotel",
        gallery_subtitle: "A virtual tour through Hotel Shosh Palace.",
        g_exterior: "Exterior",
        g_room: "Room",
        g_restaurant: "Restaurant",
        g_pool: "Pool",
        g_pool_night: "Pool (evening)",
        g_breakfast: "Breakfast",
        g_bathroom: "Bathroom",
        g_detail: "Room Detail",
        g_courtyard: "Courtyard",
        loc_label: "Location",
        loc_title: "Our Address",
        loc_subtitle: "Convenient location in the Yakkasaray district of Tashkent.",
        nearby_title: "Nearby",
        near_airport: "Tashkent International Airport",
        near_center: "City Center",
        near_metro: "Nearest Metro Station",
        open_google: "Open in Google Maps",
        open_yandex: "Open in Yandex Maps",
        cta_label: "Book Today",
        cta_title: "Book Your Stay Today",
        cta_subtitle: "Comfortable rooms, great location and friendly service in Tashkent.",
        cta_book: "Book a Room",
        footer_desc: "A comfortable hotel in Tashkent. Modern rooms, friendly service and everything you need for a pleasant stay.",
        footer_links: "Links",
        footer_contact: "Contact",
        footer_address: "Address",
        footer_district: "Yakkasaray district",
        footer_city: "Tashkent, Uzbekistan",
        footer_map_link: "Open in Google Maps →"
    }
};

// ─── i18n Engine ───
let currentLang = localStorage.getItem('shoshLang') || 'uz';

const langLabels = { uz: 'UZ', ru: 'RU', en: 'EN' };

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('shoshLang', lang);
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });

    document.documentElement.lang = lang;

    // Update dropdown current text
    const currentText = document.getElementById('lang-current-text');
    if (currentText) currentText.textContent = langLabels[lang] || lang.toUpperCase();

    // Update active state in dropdown options
    document.querySelectorAll('.lang-options button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Close dropdown
    const dd = document.getElementById('lang-dropdown');
    if (dd) dd.classList.remove('open');
}

// ─── DOMContentLoaded ───
document.addEventListener('DOMContentLoaded', () => {

    applyLanguage(currentLang);

    // Language dropdown
    const langDropdown = document.getElementById('lang-dropdown');
    const langCurrent = document.getElementById('lang-current');
    const langOptions = document.getElementById('lang-options');

    if (langCurrent) {
        langCurrent.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });
    }

    if (langOptions) {
        langOptions.addEventListener('click', e => {
            const btn = e.target.closest('button[data-lang]');
            if (btn) applyLanguage(btn.dataset.lang);
        });
    }

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (langDropdown && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('open');
        }
    });

    // ─── Navbar scroll ───
    const navbar = document.getElementById('navbar');
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ─── Mobile toggle ───
    const toggle = document.getElementById('navbar-toggle');
    const menu = document.getElementById('navbar-menu');
    const overlay = document.getElementById('menu-overlay');

    function toggleMenu(active) {
        const shouldBeActive = typeof active === 'boolean' ? active : !menu.classList.contains('active');

        toggle.classList.toggle('active', shouldBeActive);
        menu.classList.toggle('active', shouldBeActive);
        if (overlay) overlay.classList.toggle('active', shouldBeActive);

        document.body.style.overflow = shouldBeActive ? 'hidden' : '';
    }

    if (toggle) {
        toggle.addEventListener('click', () => toggleMenu());
    }

    if (overlay) {
        overlay.addEventListener('click', () => toggleMenu(false));
    }

    menu.querySelectorAll('a').forEach(l => {
        l.addEventListener('click', () => toggleMenu(false));
    });

    // ─── Smooth scroll ───
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const t = document.querySelector(a.getAttribute('href'));
            if (t) {
                const off = navbar.offsetHeight + 12;
                window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - off, behavior: 'smooth' });
            }
        });
    });

    // ─── Scroll reveal ───
    const obs = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                en.target.classList.add('visible');
                obs.unobserve(en.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    // ─── Hero parallax ───
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const s = window.pageYOffset;
            if (s < window.innerHeight) {
                heroBg.style.transform = `scale(${1.04 + s * 0.00008}) translateY(${s * 0.22}px)`;
            }
        }, { passive: true });
    }

    // ─── Gallery Lightbox with Navigation ───
    const lb = document.getElementById('lightbox');
    const lbImg = lb.querySelector('img');
    const lbClose = lb.querySelector('.lightbox-close');
    const lbPrev = lb.querySelector('.lightbox-prev');
    const lbNext = lb.querySelector('.lightbox-next');
    const lbCurrent = document.getElementById('lb-current');
    const lbTotal = document.getElementById('lb-total');

    const galleryCells = document.querySelectorAll('.gallery-cell');
    const galleryImages = [];
    galleryCells.forEach(cell => {
        const img = cell.querySelector('img');
        galleryImages.push({ src: img.src, alt: img.alt });
    });

    let currentIndex = 0;
    lbTotal.textContent = galleryImages.length;

    function showImage(index) {
        if (index < 0) index = galleryImages.length - 1;
        if (index >= galleryImages.length) index = 0;
        currentIndex = index;

        // Fade transition
        lbImg.style.opacity = '0';
        setTimeout(() => {
            lbImg.src = galleryImages[index].src;
            lbImg.alt = galleryImages[index].alt;
            lbImg.style.opacity = '1';
        }, 150);

        lbCurrent.textContent = index + 1;
    }

    function openLightbox(index) {
        currentIndex = index;
        lbImg.src = galleryImages[index].src;
        lbImg.alt = galleryImages[index].alt;
        lbCurrent.textContent = index + 1;
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lb.classList.remove('active');
        document.body.style.overflow = '';
    }

    galleryCells.forEach((cell, i) => {
        cell.addEventListener('click', () => openLightbox(i));
    });

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex - 1); });
    lbNext.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex + 1); });

    lb.addEventListener('click', e => {
        if (e.target === lb) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', e => {
        if (!lb.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });

    // Touch swipe for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    lb.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lb.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) showImage(currentIndex + 1); // swipe left = next
            else showImage(currentIndex - 1);           // swipe right = prev
        }
    }, { passive: true });

    // ─── Active nav link ───
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-menu a[href^="#"]');

    window.addEventListener('scroll', () => {
        let cur = '';
        sections.forEach(s => {
            if (window.pageYOffset >= s.offsetTop - 160) cur = s.id;
        });
        navLinks.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + cur);
        });
    }, { passive: true });

});
