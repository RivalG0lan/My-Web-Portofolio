// ─── EmailJS ───
(function () {
    emailjs.init("ljvafDc51_oOyjf91");
})();

// ─── Page Loader (preload hero video) ───
(function () {
    const pageLoader = document.getElementById("pageLoader");
    const heroVideo = document.getElementById("heroVideo");
    const MIN_LOADER_TIME = 1200; // ms, biar animasi loader kelihatan minimal segini
    const MAX_LOADER_TIME = 6000; // ms, fallback kalau video lemot/gagal load

    const startTime = Date.now();
    let videoReady = false;
    let hidden = false;

    function hideLoader() {
        if (hidden) return;
        hidden = true;
        pageLoader.classList.add("loader-hidden");
        if (heroVideo) {
            heroVideo.play().catch(() => { });
        }
        setTimeout(() => {
            pageLoader.remove();
        }, 600);
    }

    function tryHide() {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);
        setTimeout(hideLoader, remaining);
    }

    if (heroVideo) {
        // Video sudah cukup ter-buffer untuk diputar tanpa lag
        heroVideo.addEventListener("canplaythrough", () => {
            videoReady = true;
            tryHide();
        }, { once: true });

        // Kalau video gagal load, jangan biarkan loader nyangkut selamanya
        heroVideo.addEventListener("error", () => {
            tryHide();
        }, { once: true });

        heroVideo.load();
    } else {
        tryHide();
    }

    // Fallback keras: apapun yang terjadi, loader wajib hilang max 6 detik
    setTimeout(hideLoader, MAX_LOADER_TIME);
})();

// ═══════════════════════════════════════════
// TRANSLATIONS (gaul-semiformal style)
// ═══════════════════════════════════════════
const translations = {
    EN: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",

        hero_eyebrow: "D3 Informatics · Universitas Sumatera Utara",
        hero_greet: "Hello, I'm",
        hero_desc: "Junior IT Support & Frontend Developer based in Medan. Building clean interfaces, data-driven systems, and interactive experiences.",
        hero_btn_download: "Download CV / Resume",
        hero_btn_projects: "View Projects",

        about_label: "Who I Am",
        about_title: "About Me",
        about_heading: "Informatics Student &<br />Junior Developer",
        about_p1: "I'm <strong>Rivaldo Nainggolan</strong>, also known online as <strong>RivalGolan</strong>, a D3 Informatics student at Universitas Sumatera Utara with hands-on experience in programming, frontend web development, Flutter mobile apps, multimedia, game development, and data processing.",
        about_p2: "Currently available for remote and hybrid work opportunities in IT Support, Fullstack Development, UI/UX Design, and Game Development.",
        about_stat_projects: "Projects",
        about_stat_skills: "Skill Areas",
        about_stat_angkatan: "Batch",
        about_p3: "Skilled in VS Code, Microsoft Office Suite, Adobe Premiere Pro, After Effects, Photoshop, Figma, Canva, Unity, Jupyter Notebook, Google Colab, and more.",
        about_btn_cv: "Download CV",
        about_btn_contact: "Get In Touch",

        skills_label: "What I Know",
        skills_title: "Technical Proficiency",
        skills_subtitle: "An overview of my current skills as a Junior IT Support and Web Developer. I focus on reliable execution, basic troubleshooting, and continuous improvement.",

        sk1_title: "Programming", sk1_desc: "Basic proficiency in C, C#, Java, and Python.",
        sk1_i1_h: "IDEs", sk1_i1_p: "VSCode, CodeBlocks, NetBeans",
        sk1_i2_h: "Troubleshooting", sk1_i2_p: "Debugging, workflow understanding, less blind-rate coding",
        sk1_i3_h: "Coding Efficiency", sk1_i3_p: "Avoiding memory leaks, clean code practices",

        sk2_title: "Frontend Web Development", sk2_desc: "Building responsive, clean-layout websites.",
        sk2_i1_h: "Core Technologies", sk2_i1_p: "HTML5, CSS3, JavaScript",
        sk2_i2_h: "UI Implementation", sk2_i2_p: "Converting designs into web layouts from mockups",
        sk2_i3_h: "Responsive Design", sk2_i3_p: "Flexbox, Grid, and media queries",

        sk3_title: "Mobile Apps Development", sk3_desc: "Flutter-based Android apps with Dart.",
        sk3_i1_h: "Framework", sk3_i1_p: "Flutter (Dart)",
        sk3_i2_h: "Structure", sk3_i2_p: "Navigation, widgets, simple state management",
        sk3_i3_h: "Workflow", sk3_i3_p: "VSCode, emulator testing, basic debugging",

        sk4_title: "IT Support & System Assistance", sk4_desc: "Basic maintenance and troubleshooting.",
        sk4_i1_h: "System Support", sk4_i1_p: "Windows installation, configuration, app setup",
        sk4_i2_h: "Troubleshooting", sk4_i2_p: "Identifying common hardware and software issues",
        sk4_i3_h: "Hardware", sk4_i3_p: "Basic computer components and peripherals",

        sk5_title: "Multimedia & Design", sk5_desc: "Visual content, editing, and UI mockups.",
        sk5_i1_h: "Design Tools", sk5_i1_p: "Figma, Canva",
        sk5_i2_h: "Editing Software", sk5_i2_p: "Adobe Premiere Pro, After Effects, Photoshop",
        sk5_i3_h: "Use Cases", sk5_i3_p: "Video editing, image editing, UI mockups",

        sk6_title: "Game Development", sk6_desc: "Unity and Roblox Studio projects.",
        sk6_i1_h: "Engines", sk6_i1_p: "Unity, Roblox Studio",
        sk6_i2_h: "Programming", sk6_i2_p: "C# scripting, Lua scripting, gameplay logic",
        sk6_i3_h: "Tasks", sk6_i3_p: "UI systems, player interactions, asset integration",

        sk7_title: "Data Processing", sk7_desc: "Cleaning, analysis, and visualization with Python.",
        sk7_i1_h: "Tools", sk7_i1_p: "Google Colab, Jupyter Notebook",
        sk7_i2_h: "Libraries", sk7_i2_p: "Pandas, NumPy, Matplotlib, Seaborn",
        sk7_i3_h: "Machine Learning", sk7_i3_p: "TF-IDF, Complement Naive Bayes, classification models",

        projects_label: "My Work",
        projects_title: "Projects",
        projects_subtitle: "A showcase of academic, personal, and team projects across web, mobile, AI, game, and data domains.",
        see_more: "See More",

        p1_title: "Multimedia GUI - Roblox Studio",
        p1_desc: "Led the UI/UX division for a Roblox map <strong>Medan Heritage</strong>. Designed in Figma, built in Roblox Studio with Lua scripting for interactive elements.",
        p2_title: "Database - Hotel Booking",
        p2_desc: "Designed a normalized hotel tourism booking database (UNF → 3NF) from Kaggle data, imported via phpMyAdmin on XAMPP.",
        p3_title: "Network - Internet Cafe Topology",
        p3_desc: "Designed and simulated an Internet Cafe network in Cisco Packet Tracer with LAN cabling, subnets, inter-router routing, and DHCP pools.",
        p4_title: "Database - SIAKAD Vocation",
        p4_desc: "Web-based Academic Information System for D3 Informatics supporting registration, grading, attendance, and parent monitoring with role-based access using PHP & MySQL.",
        p5_title: "Web Programming - LokerIn Job Portal",
        p5_desc: "Full-stack PHP/MySQL job portal with dual-role auth, real-time messaging, application tracking, skill gap analyzer, and a company analytics dashboard on a LAMP stack.",
        p6_title: "Mobile - ViAuo Music & Video Player",
        p6_desc: "Android music and video player built with Flutter featuring multi-page navigation, media search, playback history, and modern permission handling.",
        p7_title: "My Portfolio Website",
        p7_desc: "Personal portfolio built with HTML, CSS, and JavaScript showcasing profile, skills, and projects as a digital resume for IT and development roles.",
        p8_title: "Multimedia Midterm Exam Project",
        p8_desc: "Mobile application UI/UX design for academic services, focusing on accessibility and usability for students through structured, user-friendly interface design.",
        p9_title: "Multimedia Group-5 - Healthy Drinks App",
        p9_desc: "Team-based UI/UX design in Figma for a healthy drink ordering mobile app, built on user personas for visual consistency and audience alignment.",
        p10_title: "AI Chess Game - Minimax Algorithm",
        p10_desc: "Python chess game using Minimax with Alpha-Beta Pruning. Interactive Pygame interface for playing against the AI.",
        p11_title: "Simple Face Recognition - Python",
        p11_desc: "Real-time face recognition with Python, OpenCV, and face_recognition - detects and identifies faces from a predefined dataset.",
        p12_title: "Interpolation Newton-Gregory Program",
        p12_desc: "Python numerical computing app implementing Linear Interpolation, Newton Divided Differences, Forward and Backward methods with CSV support and data visualization.",
        p13_title: "Decision Support System - Bakery Sales",
        p13_desc: "Python analytics system on 2006–2019 bakery data using SAW and TOPSIS for promotional budget and product prioritization recommendations.",
        p14_title: "Sentiment Analysis - Machine Learning",
        p14_desc: "Flask web app classifying e-commerce reviews using TF-IDF and Complement Naive Bayes, with interactive visualizations and confidence scores.",
        p15_title: "Collect The Stars - Unity",
        p15_desc: "Simple 3D Unity game where players collect stars. Features C# scripting for UI, restart functionality, sound effects, and gameplay interactions.",
        p16_title: "Interactive Map - Indonesian Tribes",
        p16_desc: "Web map exploring ethnic diversity across all 38 provinces using Leaflet.js, with tribe info, cultural heritage, and regional statistics.",
        p17_title: "Interactive Map - Indonesia's Mountains",
        p17_desc: "Leaflet.js map of Indonesian mountains with search, geographic info, dark mode, and responsive design for educational exploration.",
        p18_title: "Education Game - Roblox Kidsnesia",
        p18_desc: "An educational Roblox game that introduces Indonesian culture through interactive gameplay, cultural landmarks, quizzes, and exploration, creating a fun learning experience for players of all ages.",

        moreproject_label1: "More Projects >>",
        moreproject_label2: "<< Show Less",

        contact_label: "Get In Touch",
        contact_title: "Let's Work Together",
        contact_subtitle: "Open to opportunities in IT Support, Programming, Frontend Web Development, UI/UX Design, Flutter, and multimedia. Say hello - I'll respond as soon as possible.",
        contact_email_label: "Email",
        contact_linkedin_label: "LinkedIn",
        contact_github_label: "GitHub",
        contact_ig_label: "Instagram",
        contact_yt_label: "YouTube",
        contact_tiktok_label: "TikTok",
        contact_location_label: "Location",
        contact_location_value: "Medan, North Sumatra, Indonesia",
        contact_form_title: "Send a Message",
        form_name_label: "Name",
        form_name_ph: "Your name",
        form_email_label: "Email",
        form_email_ph: "your@email.com",
        form_subject_label: "Subject",
        form_subject_ph: "What's this about?",
        form_message_label: "Message",
        form_message_ph: "Tell me more...",
        form_submit: "Send Message",

        footer_rights: "All rights reserved.",
        alert_fill_fields: "Please fill all required fields.",
        sending: "Sending…",
        send_success: "Message sent successfully!",
        send_fail: "Failed to send. Please try again.",
    },

    ID: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_skills: "Skill",
        nav_projects: "Proyek",
        nav_contact: "Kontak",

        hero_eyebrow: "D3 Teknik Informatika · Universitas Sumatera Utara",
        hero_greet: "Halo, saya",
        hero_desc: "Junior IT Support & Frontend Developer asal Medan. Suka bikin tampilan yang rapi, sistem berbasis data, dan pengalaman interaktif yang nempel di kepala user.",
        hero_btn_download: "Download CV / Resume",
        hero_btn_projects: "Lihat Proyek",

        about_label: "Kenalan Dulu",
        about_title: "Tentang Saya",
        about_heading: "Mahasiswa Informatika &<br />Junior Developer",
        about_p1: "Saya <strong>Rivaldo Nainggolan</strong>, di dunia maya lebih dikenal sebagai <strong>RivalGolan</strong>, mahasiswa D3 Teknik Informatika di Universitas Sumatera Utara. Udah biasa terjun langsung di programming, frontend web dev, aplikasi mobile Flutter, multimedia, game development, sampai olah data.",
        about_p2: "Saat ini terbuka buat kesempatan kerja remote maupun hybrid di bidang IT Support, Fullstack Development, UI/UX Design, dan Game Development.",
        about_stat_projects: "Proyek",
        about_stat_skills: "Bidang Skill",
        about_stat_angkatan: "Angkatan",
        about_p3: "Bisa pakai VS Code, Microsoft Office Suite, Adobe Premiere Pro, After Effects, Photoshop, Figma, Canva, Unity, Jupyter Notebook, Google Colab, dan masih banyak lagi.",
        about_btn_cv: "Download CV",
        about_btn_contact: "Hubungi Saya",

        skills_label: "Yang Saya Kuasai",
        skills_title: "Kemampuan Teknis",
        skills_subtitle: "Gambaran skill saya sebagai Junior IT Support dan Web Developer. Fokusnya di eksekusi yang bisa diandalkan, troubleshooting dasar, dan terus belajar biar makin bisa.",

        sk1_title: "Programming", sk1_desc: "Cukup bisa di C, C#, Java, dan Python.",
        sk1_i1_h: "IDE", sk1_i1_p: "VSCode, CodeBlocks, NetBeans",
        sk1_i2_h: "Troubleshooting", sk1_i2_p: "Debugging, paham alur kerja, ngoding gak asal tebak-tebakan",
        sk1_i3_h: "Efisiensi Kode", sk1_i3_p: "Hindari memory leak, pakai clean code",

        sk2_title: "Frontend Web Development", sk2_desc: "Bikin website responsif dengan layout yang rapi.",
        sk2_i1_h: "Teknologi Inti", sk2_i1_p: "HTML5, CSS3, JavaScript",
        sk2_i2_h: "Implementasi UI", sk2_i2_p: "Ubah desain jadi layout web dari mockup",
        sk2_i3_h: "Responsive Design", sk2_i3_p: "Flexbox, Grid, dan media queries",

        sk3_title: "Pengembangan Aplikasi Mobile", sk3_desc: "Aplikasi Android berbasis Flutter pakai Dart.",
        sk3_i1_h: "Framework", sk3_i1_p: "Flutter (Dart)",
        sk3_i2_h: "Struktur", sk3_i2_p: "Navigasi, widget, state management sederhana",
        sk3_i3_h: "Alur Kerja", sk3_i3_p: "VSCode, tes di emulator, debugging dasar",

        sk4_title: "IT Support & Bantuan Sistem", sk4_desc: "Maintenance dan troubleshooting dasar.",
        sk4_i1_h: "Dukungan Sistem", sk4_i1_p: "Instalasi Windows, konfigurasi, setup aplikasi",
        sk4_i2_h: "Troubleshooting", sk4_i2_p: "Kenalin masalah umum hardware dan software",
        sk4_i3_h: "Hardware", sk4_i3_p: "Komponen komputer dan periferal dasar",

        sk5_title: "Multimedia & Desain", sk5_desc: "Konten visual, editing, dan mockup UI.",
        sk5_i1_h: "Tools Desain", sk5_i1_p: "Figma, Canva",
        sk5_i2_h: "Software Editing", sk5_i2_p: "Adobe Premiere Pro, After Effects, Photoshop",
        sk5_i3_h: "Kegunaan", sk5_i3_p: "Edit video, edit gambar, mockup UI",

        sk6_title: "Game Development", sk6_desc: "Proyek Unity dan Roblox Studio.",
        sk6_i1_h: "Engine", sk6_i1_p: "Unity, Roblox Studio",
        sk6_i2_h: "Programming", sk6_i2_p: "Scripting C#, scripting Lua, logika gameplay",
        sk6_i3_h: "Tugas", sk6_i3_p: "Sistem UI, interaksi pemain, integrasi aset",

        sk7_title: "Pengolahan Data", sk7_desc: "Cleaning, analisis, dan visualisasi pakai Python.",
        sk7_i1_h: "Tools", sk7_i1_p: "Google Colab, Jupyter Notebook",
        sk7_i2_h: "Library", sk7_i2_p: "Pandas, NumPy, Matplotlib, Seaborn",
        sk7_i3_h: "Machine Learning", sk7_i3_p: "TF-IDF, Complement Naive Bayes, model klasifikasi",

        projects_label: "Hasil Karya",
        projects_title: "Proyek",
        projects_subtitle: "Kumpulan proyek akademik, personal, dan tim saya, mulai dari web, mobile, AI, game, sampai data.",
        see_more: "Selengkapnya",

        p1_title: "Multimedia GUI - Roblox Studio",
        p1_desc: "Pegang divisi UI/UX buat map Roblox <strong>Medan Heritage</strong>. Desain di Figma, build di Roblox Studio, scripting Lua buat elemen interaktifnya.",
        p2_title: "Database - Hotel Booking",
        p2_desc: "Rancang database booking hotel pariwisata yang ternormalisasi (UNF → 3NF) dari data Kaggle, diimpor lewat phpMyAdmin di XAMPP.",
        p3_title: "Jaringan - Topologi Warnet",
        p3_desc: "Rancang dan simulasi jaringan warnet di Cisco Packet Tracer lengkap sama kabel LAN, subnet, routing antar-router, dan pool DHCP.",
        p4_title: "Database - SIAKAD Vokasi",
        p4_desc: "Sistem Informasi Akademik berbasis web buat D3 Informatika, dukung pendaftaran, penilaian, absensi, dan monitoring orang tua dengan akses berbasis role pakai PHP & MySQL.",
        p5_title: "Web Programming - LokerIn Job Portal",
        p5_desc: "Portal loker full-stack PHP/MySQL dengan dua role login, chat real-time, tracking lamaran, skill gap analyzer, dan dashboard analitik perusahaan di atas stack LAMP.",
        p6_title: "Mobile - ViAuo Music & Video Player",
        p6_desc: "Pemutar musik dan video Android pakai Flutter, ada navigasi multihalaman, pencarian media, riwayat pemutaran, dan penanganan izin akses versi terbaru.",
        p7_title: "Website Portofolio Saya",
        p7_desc: "Portofolio pribadi dibangun pakai HTML, CSS, dan JavaScript buat pamer profil, skill, dan proyek sebagai CV digital untuk role IT dan development.",
        p8_title: "Proyek UTS Multimedia",
        p8_desc: "Desain UI/UX aplikasi mobile buat layanan akademik, fokus ke aksesibilitas dan kemudahan pakai buat mahasiswa lewat desain antarmuka yang tertata dan ramah pengguna.",
        p9_title: "Multimedia Grup 5 - Aplikasi Minuman Sehat",
        p9_desc: "Desain UI/UX bareng tim di Figma buat aplikasi pesan minuman sehat, dibangun dari user persona biar konsisten secara visual dan pas sama target audiens.",
        p10_title: "Game Catur AI - Algoritma Minimax",
        p10_desc: "Game catur Python pakai Minimax dengan Alpha-Beta Pruning. Interface Pygame interaktif buat main lawan AI.",
        p11_title: "Face Recognition Sederhana - Python",
        p11_desc: "Pengenalan wajah real-time pakai Python, OpenCV, dan face_recognition - deteksi dan identifikasi wajah dari dataset yang udah disiapkan.",
        p12_title: "Program Interpolasi Newton-Gregory",
        p12_desc: "Aplikasi komputasi numerik Python yang implementasi Interpolasi Linear, Newton Divided Differences, metode Forward dan Backward, plus dukungan CSV dan visualisasi data.",
        p13_title: "Sistem Pendukung Keputusan - Penjualan Roti",
        p13_desc: "Sistem analitik Python untuk data roti 2006–2019 pakai SAW dan TOPSIS buat rekomendasi anggaran promosi dan prioritas produk.",
        p14_title: "Analisis Sentimen - Machine Learning",
        p14_desc: "Aplikasi web Flask yang klasifikasi review e-commerce pakai TF-IDF dan Complement Naive Bayes, lengkap visualisasi interaktif dan skor confidence.",
        p15_title: "Collect The Stars - Unity",
        p15_desc: "Game 3D Unity sederhana, pemain kumpulin bintang. Ada scripting C# buat UI, fitur restart, sound effect, dan interaksi gameplay.",
        p16_title: "Peta Interaktif - Suku Indonesia",
        p16_desc: "Peta web yang jelajahi keragaman etnis di 38 provinsi pakai Leaflet.js, lengkap info suku, warisan budaya, dan statistik daerah.",
        p17_title: "Peta Interaktif - Gunung-Gunung Indonesia",
        p17_desc: "Peta Leaflet.js buat gunung-gunung di Indonesia, ada fitur cari, info geografis, dark mode, dan desain responsif buat eksplorasi edukatif.",
        p18_title: "Game Edukasi - Roblox Kidsnesia",
        p18_desc: "Game edukasi di Roblox yang ngenalin budaya Indonesia lewat gameplay interaktif, landmark budaya, kuis, dan eksplorasi, bikin belajar jadi seru buat semua umur.",

        moreproject_label1: "Proyek lain >>",
        moreproject_label2: "<< Pendek",

        contact_label: "Hubungi Saya",
        contact_title: "Yuk, Kita Kolaborasi",
        contact_subtitle: "Terbuka buat peluang di IT Support, Programming, Frontend Web Development, UI/UX Design, Flutter, dan multimedia. Sapa aja dulu. saya bakal balas secepatnya.",
        contact_email_label: "Email",
        contact_linkedin_label: "LinkedIn",
        contact_github_label: "GitHub",
        contact_ig_label: "Instagram",
        contact_yt_label: "YouTube",
        contact_tiktok_label: "TikTok",
        contact_location_label: "Lokasi",
        contact_location_value: "Medan, Sumatera Utara, Indonesia",
        contact_form_title: "Kirim Pesan",
        form_name_label: "Nama",
        form_name_ph: "Nama kamu",
        form_email_label: "Email",
        form_email_ph: "email@kamu.com",
        form_subject_label: "Subjek",
        form_subject_ph: "Mau ngobrolin apa nih?",
        form_message_label: "Pesan",
        form_message_ph: "Ceritain lebih lanjut...",
        form_submit: "Kirim Pesan",

        footer_rights: "Semua hak dilindungi.",
        alert_fill_fields: "Tolong isi semua kolom yang wajib diisi ya.",
        sending: "Lagi ngirim…",
        send_success: "Pesan berhasil dikirim!",
        send_fail: "Gagal kirim. Coba lagi ya.",
    },

    JA: {
        nav_home: "ホーム",
        nav_about: "自己紹介",
        nav_skills: "スキル",
        nav_projects: "プロジェクト",
        nav_contact: "連絡先",

        hero_eyebrow: "D3 情報学 · スマトラウタラ大学",
        hero_greet: "どうも、僕は",
        hero_desc: "メダン在住のジュニアITサポート兼フロントエンド開発者。きれいなUI、データ駆動のシステム、そしてインタラクティブな体験を作るのが好きです。",
        hero_btn_download: "履歴書をダウンロード",
        hero_btn_projects: "プロジェクトを見る",

        about_label: "自己紹介",
        about_title: "私について",
        about_heading: "情報学の学生 &<br />ジュニア開発者",
        about_p1: "僕は<strong>リヴァルド・ナインゴラン</strong>、ネット上では<strong>RivalGolan</strong>として知られています。スマトラウタラ大学のD3情報学の学生で、プログラミング、フロントエンド開発、Flutterモバイルアプリ、マルチメディア、ゲーム開発、データ処理など幅広く経験しています。",
        about_p2: "現在、ITサポート、フルスタック開発、UI/UXデザイン、ゲーム開発の分野でリモート・ハイブリッド勤務のお仕事を募集中です。",
        about_stat_projects: "プロジェクト",
        about_stat_skills: "スキル分野",
        about_stat_angkatan: "入学年度",
        about_p3: "VS Code、Microsoft Office、Adobe Premiere Pro、After Effects、Photoshop、Figma、Canva、Unity、Jupyter Notebook、Google Colabなどを使いこなしています。",
        about_btn_cv: "履歴書をダウンロード",
        about_btn_contact: "連絡する",

        skills_label: "得意なこと",
        skills_title: "技術スキル",
        skills_subtitle: "ジュニアITサポート兼Web開発者としての現在のスキル概要です。確実な実行力、基本的なトラブルシューティング、そして継続的な改善を大事にしています。",

        sk1_title: "プログラミング", sk1_desc: "C、C#、Java、Pythonの基本スキル。",
        sk1_i1_h: "IDE", sk1_i1_p: "VSCode、CodeBlocks、NetBeans",
        sk1_i2_h: "トラブルシューティング", sk1_i2_p: "デバッグ、ワークフロー理解、無駄打ちしないコーディング",
        sk1_i3_h: "コーディング効率", sk1_i3_p: "メモリリーク回避、クリーンコード",

        sk2_title: "フロントエンド開発", sk2_desc: "レスポンシブでスッキリしたサイト構築。",
        sk2_i1_h: "基本技術", sk2_i1_p: "HTML5、CSS3、JavaScript",
        sk2_i2_h: "UI実装", sk2_i2_p: "モックアップからWebレイアウトへの変換",
        sk2_i3_h: "レスポンシブデザイン", sk2_i3_p: "Flexbox、Grid、メディアクエリ",

        sk3_title: "モバイルアプリ開発", sk3_desc: "Dartを使ったFlutterベースのAndroidアプリ。",
        sk3_i1_h: "フレームワーク", sk3_i1_p: "Flutter（Dart）",
        sk3_i2_h: "構成", sk3_i2_p: "ナビゲーション、ウィジェット、簡単な状態管理",
        sk3_i3_h: "ワークフロー", sk3_i3_p: "VSCode、エミュレータテスト、基本デバッグ",

        sk4_title: "ITサポート＆システム対応", sk4_desc: "基本的なメンテナンスとトラブル対応。",
        sk4_i1_h: "システムサポート", sk4_i1_p: "Windowsのインストール、設定、アプリセットアップ",
        sk4_i2_h: "トラブルシューティング", sk4_i2_p: "よくあるハード・ソフトの不具合特定",
        sk4_i3_h: "ハードウェア", sk4_i3_p: "基本的なPCパーツと周辺機器",

        sk5_title: "マルチメディア＆デザイン", sk5_desc: "ビジュアル制作、編集、UIモックアップ。",
        sk5_i1_h: "デザインツール", sk5_i1_p: "Figma、Canva",
        sk5_i2_h: "編集ソフト", sk5_i2_p: "Adobe Premiere Pro、After Effects、Photoshop",
        sk5_i3_h: "用途", sk5_i3_p: "動画編集、画像編集、UIモックアップ",

        sk6_title: "ゲーム開発", sk6_desc: "UnityとRoblox Studioのプロジェクト。",
        sk6_i1_h: "エンジン", sk6_i1_p: "Unity、Roblox Studio",
        sk6_i2_h: "プログラミング", sk6_i2_p: "C#スクリプト、Luaスクリプト、ゲームプレイロジック",
        sk6_i3_h: "担当", sk6_i3_p: "UIシステム、プレイヤー操作、アセット統合",

        sk7_title: "データ処理", sk7_desc: "Pythonでのクリーニング、分析、可視化。",
        sk7_i1_h: "ツール", sk7_i1_p: "Google Colab、Jupyter Notebook",
        sk7_i2_h: "ライブラリ", sk7_i2_p: "Pandas、NumPy、Matplotlib、Seaborn",
        sk7_i3_h: "機械学習", sk7_i3_p: "TF-IDF、Complement Naive Bayes、分類モデル",

        projects_label: "実績",
        projects_title: "プロジェクト",
        projects_subtitle: "Web、モバイル、AI、ゲーム、データ分野にわたる学業・個人・チームプロジェクトの紹介。",
        see_more: "もっと見る",

        p1_title: "マルチメディアGUI - Roblox Studio",
        p1_desc: "RobloxマップUI/UXチームを主導。<strong>Medan Heritage</strong>をFigmaで設計し、Luaスクリプトを使ってRoblox Studioでインタラクティブ要素を実装。",
        p2_title: "データベース - ホテル予約",
        p2_desc: "Kaggleデータを基に正規化されたホテル予約データベース（UNF→3NF）を設計し、XAMPP上のphpMyAdminでインポート。",
        p3_title: "ネットワーク - ネットカフェのトポロジー",
        p3_desc: "Cisco Packet Tracerでネットカフェのネットワークを設計・シミュレーション。LAN配線、サブネット、ルーター間ルーティング、DHCPプールを含む。",
        p4_title: "データベース - SIAKAD Vocation",
        p4_desc: "D3情報学向けのWebベース学務システム。登録、成績、出席、保護者モニタリングをPHP＆MySQLでロールベースアクセス対応。",
        p5_title: "Webプログラミング - LokerIn求人ポータル",
        p5_desc: "デュアルロール認証、リアルタイムメッセージ、応募トラッキング、スキルギャップ分析、企業向け分析ダッシュボードを備えたLAMPスタックのフルスタック求人ポータル。",
        p6_title: "モバイル - ViAuo音楽＆動画プレーヤー",
        p6_desc: "マルチページナビゲーション、メディア検索、再生履歴、最新の権限処理を備えたFlutter製Android音楽・動画プレーヤー。",
        p7_title: "自分のポートフォリオサイト",
        p7_desc: "HTML、CSS、JavaScriptで構築した個人ポートフォリオ。プロフィール、スキル、プロジェクトをIT・開発職向けのデジタル履歴書として紹介。",
        p8_title: "マルチメディア中間試験プロジェクト",
        p8_desc: "学生向けのアクセシビリティと使いやすさに重点を置いた、学務サービス向けモバイルアプリのUI/UXデザイン。",
        p9_title: "マルチメディアグループ5 - 健康ドリンクアプリ",
        p9_desc: "健康ドリンク注文アプリのためのチームベースUI/UXデザイン（Figma）。ユーザーペルソナに基づき視覚的一貫性とターゲット適合を実現。",
        p10_title: "AIチェスゲーム - ミニマックスアルゴリズム",
        p10_desc: "アルファベータ枝刈り付きミニマックスを使ったPython製チェスゲーム。AI対戦用のインタラクティブなPygameインターフェース。",
        p11_title: "シンプル顔認識 - Python",
        p11_desc: "Python、OpenCV、face_recognitionによるリアルタイム顔認識。事前定義データセットから顔を検出・識別。",
        p12_title: "ニュートン・グレゴリー補間プログラム",
        p12_desc: "線形補間、ニュートン差分法、前進・後退補間を実装したPython製数値計算アプリ。CSV対応とデータ可視化付き。",
        p13_title: "意思決定支援システム - パン販売",
        p13_desc: "2006〜2019年のパン販売データをSAWとTOPSISで分析し、販促予算と商品優先度を提案するPythonシステム。",
        p14_title: "感情分析 - 機械学習",
        p14_desc: "TF-IDFとComplement Naive Bayesを使ってECレビューを分類するFlask Webアプリ。インタラクティブな可視化と信頼度スコア付き。",
        p15_title: "Collect The Stars - Unity",
        p15_desc: "プレイヤーが星を集めるシンプルな3D Unityゲーム。UI用C#スクリプト、リスタート機能、効果音、ゲームプレイ操作を実装。",
        p16_title: "インタラクティブマップ - インドネシアの部族",
        p16_desc: "Leaflet.jsを使い、38州の民族多様性を探索できるWebマップ。部族情報、文化遺産、地域統計を掲載。",
        p17_title: "インタラクティブマップ - インドネシアの山々",
        p17_desc: "検索機能、地理情報、ダークモード、レスポンシブデザインを備えたインドネシアの山々のLeaflet.jsマップ。教育目的の探索に。",
        p18_title: "教育ゲーム - Roblox Kidsnesia",
        p18_desc: "インタラクティブなゲームプレイ、文化的名所、クイズ、探索を通してインドネシア文化を紹介する教育用Robloxゲーム。全年齢が楽しめる学習体験。",

        moreproject_label1: "もっと見る >>",
        moreproject_label2: "閉じる",

        contact_label: "お問い合わせ",
        contact_title: "一緒に働きましょう",
        contact_subtitle: "ITサポート、プログラミング、フロントエンド開発、UI/UXデザイン、Flutter、マルチメディア分野のお仕事を募集中です。気軽にご連絡ください - できるだけ早く返信します。",
        contact_email_label: "メール",
        contact_linkedin_label: "LinkedIn",
        contact_github_label: "GitHub",
        contact_ig_label: "Instagram",
        contact_yt_label: "YouTube",
        contact_tiktok_label: "TikTok",
        contact_location_label: "所在地",
        contact_location_value: "インドネシア、北スマトラ州メダン",
        contact_form_title: "メッセージを送る",
        form_name_label: "お名前",
        form_name_ph: "お名前を入力",
        form_email_label: "メール",
        form_email_ph: "your@email.com",
        form_subject_label: "件名",
        form_subject_ph: "ご用件は何ですか？",
        form_message_label: "メッセージ",
        form_message_ph: "詳しく教えてください...",
        form_submit: "送信する",

        footer_rights: "全著作権所有。",
        alert_fill_fields: "必須項目をすべて入力してください。",
        sending: "送信中…",
        send_success: "メッセージを送信しました！",
        send_fail: "送信に失敗しました。もう一度お試しください。",
    },
};

// Keep original (EN) text as fallback source, captured from DOM on load.
const originalTexts = {};
const originalPlaceholders = {};

function captureOriginals() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        originalTexts[key] = el.innerHTML;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        originalPlaceholders[key] = el.getAttribute("placeholder");
    });
}

// ═══════════════════════════════════════════
// TYPING ANIMATION
// ═══════════════════════════════════════════
// Types out `html` into `el` character by character. Handles simple HTML
// tags (like <strong>, <br />) by revealing them instantly when reached,
// rather than typing tag markup letter by letter.
function typeInto(el, html, speed) {
    // Cancel any in-progress typing on this element.
    if (el._typingTimer) {
        clearTimeout(el._typingTimer);
        el._typingTimer = null;
    }

    el.innerHTML = "";
    el.classList.add("typing");

    // Tokenize into tags and text-chars so tags appear whole, text appears per-char.
    const tokens = [];
    const tagRegex = /(<[^>]+>)/g;
    let lastIndex = 0;
    let match;
    while ((match = tagRegex.exec(html)) !== null) {
        const textChunk = html.slice(lastIndex, match.index);
        for (const ch of textChunk) tokens.push(ch);
        tokens.push(match[0]);
        lastIndex = match.index + match[0].length;
    }
    const tail = html.slice(lastIndex);
    for (const ch of tail) tokens.push(ch);

    let i = 0;
    let buffer = "";

    function finish() {
        el.innerHTML = buffer; // strip the cursor for good
        el.classList.remove("typing");
        el._typingTimer = null;
    }

    function step() {
        if (i >= tokens.length) {
            finish();
            return;
        }
        buffer += tokens[i];
        i++;
        if (i >= tokens.length) {
            // last character just added — show it without the cursor, done.
            finish();
            return;
        }
        el.innerHTML = buffer + '<span class="type-cursor">▍</span>';
        el._typingTimer = setTimeout(step, speed);
    }
    step();
}

// Types a plain string (no HTML) into a placeholder attribute.
function typeIntoPlaceholder(el, text, speed) {
    if (el._phTimer) {
        clearTimeout(el._phTimer);
        el._phTimer = null;
    }
    el.setAttribute("placeholder", "");
    let i = 0;
    function step() {
        if (i > text.length) {
            el._phTimer = null;
            return;
        }
        el.setAttribute("placeholder", text.slice(0, i));
        i++;
        el._phTimer = setTimeout(step, speed);
    }
    step();
}

// Applies a language to the whole page with a typing-in effect.
function applyLanguage(lang, animate) {
    const dict = translations[lang] || translations.EN;
    const speed = 14; // ms per character - tweak for taste

    let delay = 0;
    const stagger = 40; // ms offset between elements so it doesn't all fire in sync

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = dict[key] !== undefined ? dict[key] : (originalTexts[key] || "");
        if (!animate) {
            el.innerHTML = value;
            return;
        }
        const thisDelay = delay;
        delay += stagger;
        setTimeout(() => typeInto(el, value, speed), thisDelay);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        const value = dict[key] !== undefined ? dict[key] : (originalPlaceholders[key] || "");
        if (!animate) {
            el.setAttribute("placeholder", value);
            return;
        }
        const thisDelay = delay;
        delay += stagger;
        setTimeout(() => typeIntoPlaceholder(el, value, speed), thisDelay);
    });

    document.documentElement.setAttribute("lang", lang.toLowerCase());
    refreshCopyright();
}

function t(key) {
    const dict = translations[currentLanguage] || translations.EN;
    return dict[key] !== undefined ? dict[key] : (translations.EN[key] || key);
}

// ─── Language Changer (hold + drag gesture) ───

const langChangBtn = document.getElementById("langChanger");
const languageOptions = document.getElementById("languageOptions");
const langOptionLeft = document.getElementById("langOptionLeft");
const langOptionRight = document.getElementById("langOptionRight");

// Which language sits to the left/right of each current language.
// EN is the "home" language in the middle; ID is one step left,
// JA is one step right. From ID you can only go back right to EN,
// from JA you can only go back left to EN.
const langNeighbors = {
    EN: { left: "ID", right: "JA" },
    ID: { left: "JA", right: "EN" },
    JA: { left: "EN", right: "ID" },
};

let currentLanguage = "EN";
let selectedLanguage = "EN";
let activeNeighbors = { left: null, right: null };

let startX = null;
let isHolding = false;

function isMobileLanguageSelector() {
    return window.matchMedia("(max-width: 768px)").matches;
}

function renderOptionSlot(el, lang) {
    if (!lang) {
        el.style.visibility = "hidden";
        el.dataset.lang = "";
        el.textContent = "";
        return;
    }
    el.style.visibility = "visible";
    el.dataset.lang = lang;
    el.textContent = getLanguageLabel(lang);
}

function openLanguageOptions() {
    activeNeighbors = langNeighbors[currentLanguage] || { left: null, right: null };
    renderOptionSlot(langOptionLeft, activeNeighbors.left);
    renderOptionSlot(langOptionRight, activeNeighbors.right);
    languageOptions.classList.add("active");
    langChangBtn.setAttribute("aria-expanded", "true");
    updateLanguagePreview();
}

function selectLanguage(language) {
    if (!language || language === currentLanguage) {
        languageOptions.classList.remove("active");
        langChangBtn.setAttribute("aria-expanded", "false");
        return;
    }

    currentLanguage = language;
    langChangBtn.textContent = getLanguageLabel(currentLanguage);
    languageOptions.classList.remove("active");
    langChangBtn.setAttribute("aria-expanded", "false");
    localStorage.setItem("language", currentLanguage); // ← tambahan
    applyLanguage(currentLanguage, true);
}

langChangBtn.addEventListener("pointerdown", (event) => {
    event.preventDefault();

    if (isMobileLanguageSelector()) {
        if (languageOptions.classList.contains("active")) {
            languageOptions.classList.remove("active");
            langChangBtn.setAttribute("aria-expanded", "false");
        } else {
            openLanguageOptions();
        }
        return;
    }

    startX = event.clientX;
    selectedLanguage = currentLanguage;
    isHolding = true;

    openLanguageOptions();
});

document.querySelectorAll(".lang-option").forEach((option) => {
    option.addEventListener("click", () => {
        if (isMobileLanguageSelector()) {
            selectLanguage(option.dataset.lang);
        }
    });
});

document.addEventListener("pointermove", (event) => {
    if (!isHolding || startX === null) {
        return;
    }

    const distance = event.clientX - startX;

    if (distance < -30 && activeNeighbors.left) {
        selectedLanguage = activeNeighbors.left;
    } else if (distance > 30 && activeNeighbors.right) {
        selectedLanguage = activeNeighbors.right;
    } else {
        selectedLanguage = currentLanguage;
    }
    updateLanguagePreview();
});

document.addEventListener("pointerup", () => {
    if (!isHolding) {
        return;
    }

    const changed = selectedLanguage !== currentLanguage;

    startX = null;
    isHolding = false;

    if (changed) {
        selectLanguage(selectedLanguage);
    } else {
        languageOptions.classList.remove("active");
        langChangBtn.setAttribute("aria-expanded", "false");
    }
});

function getLanguageLabel(language) {
    if (language === "ID") {
        return "ID";
    }
    if (language === "JA") {
        return "あ";
    }
    return "EN";
}

function updateLanguagePreview() {
    [langOptionLeft, langOptionRight].forEach((option) => {
        option.classList.remove("active");
        if (option.dataset.lang && option.dataset.lang === selectedLanguage) {
            option.classList.remove("active");
        }
    });
}

// ─── Theme Toggle ───
const html = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

// Load saved preference (default: light)
// const saved = localStorage.getItem("theme") || "light"; ini udah ada di head awal html, buat ngatasin defer. sehingga nyimpan preferensi lebih prioritas. baru defer berjalan
// html.setAttribute("data-theme", saved);

toggleBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});

// ─── Mobile Nav Toggle ───
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinksMenu = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

function closeMobileNav() {
    navLinksMenu.classList.remove("active");
    hamburgerBtn.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    navOverlay.classList.remove("active");
    document.body.classList.remove("nav-open");
}

function toggleMobileNav() {
    const isActive = navLinksMenu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active", isActive);
    hamburgerBtn.setAttribute("aria-expanded", String(isActive));
    navOverlay.classList.toggle("active", isActive);
    document.body.classList.toggle("nav-open", isActive);
}

hamburgerBtn.addEventListener("click", toggleMobileNav);
navOverlay.addEventListener("click", closeMobileNav);
navLinksMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
});

// ─── Contact Form ───
document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        const form = this;
        const btn = form.querySelector(".form-submit");
        if (
            !form.name.value.trim() ||
            !form.email.value.trim() ||
            !form.message.value.trim()
        ) {
            alert(t("alert_fill_fields"));
            return;
        }
        const originalLabel = btn.textContent;
        btn.textContent = t("sending");
        btn.disabled = true;
        emailjs.sendForm("service_71yica1", "template_3w0sswd", form).then(
            () => {
                alert(t("send_success"));
                form.reset();
                btn.textContent = t("form_submit");
                btn.disabled = false;
            },
            (err) => {
                alert(t("send_fail"));
                console.error(err);
                btn.textContent = t("form_submit");
                btn.disabled = false;
            },
        );
    });

// ─── Copyright ───
function refreshCopyright() {
    const start = 2025,
        now = new Date().getFullYear();
    const rights = t("footer_rights");
    document.getElementById("copyright").textContent =
        now === start
            ? `©${start} Rivaldo Nainggolan. ${rights}`
            : `©${start}–${now} Rivaldo Nainggolan. ${rights}`;
}

// ─── Image Modal ───
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
document.querySelectorAll(".project-media img").forEach((img) => {
    img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = img.src;
    });
});
modal.addEventListener("click", () => modal.classList.remove("active"));
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("active");
        closeMobileNav();
    }
});

// ─── Scroll Reveal ───
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((el) => {
            if (el.isIntersecting) {
                el.target.classList.add("visible");
                observer.unobserve(el.target);
            }
        });
    },
    { threshold: 0.12 },
);
document
    .querySelectorAll(".reveal")
    .forEach((el) => observer.observe(el));

// ─── More Projects Toggle ───
const moreProjectBtn = document.querySelector(".more-project-btn");
const extraProjectCards = document.querySelectorAll(".project-card.project-hidden");
let projectsExpanded = false;

function updateMoreProjectBtnText() {
    const key = projectsExpanded ? "moreproject_label2" : "moreproject_label1";
    moreProjectBtn.setAttribute("data-i18n", key);
    moreProjectBtn.textContent = t(key);
}

if (moreProjectBtn) {
    moreProjectBtn.addEventListener("click", () => {
        projectsExpanded = !projectsExpanded;

        extraProjectCards.forEach((card) => {
            if (projectsExpanded) {
                card.classList.remove("project-hidden");
                card.classList.remove("visible");
                observer.observe(card);
            } else {
                card.classList.add("project-hidden");
                card.classList.remove("visible");
            }
        });

        updateMoreProjectBtnText();

        if (!projectsExpanded) {
            document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
        }
    });
}

// ─── Active Nav Link ───
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((a) => a.classList.remove("active"));
                const active = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`,
                );
                if (active) active.classList.add("active");
            }
        });
    },
    { threshold: 0.35 },
);
sections.forEach((s) => io.observe(s));

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// ─── Init ───
captureOriginals();

// Load saved language preference (default: EN)
const savedLanguage = localStorage.getItem("language") || "EN";
currentLanguage = savedLanguage;
langChangBtn.textContent = getLanguageLabel(currentLanguage);
applyLanguage(currentLanguage, false); // false = tanpa animasi ketik, biar langsung tampil pas load

refreshCopyright();