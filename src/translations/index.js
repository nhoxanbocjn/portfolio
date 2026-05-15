const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      knowledge: "Notes",
      theme: "Theme",
      language: "Language"
    },
    home: {
      greeting: "Hi There!",
      iam: "I'M",
      findMe: "Find Me On",
      connectPrefix: "Feel free to",
      connectBold: "connect",
      connectSuffix: "with me"
    },
    home2: {
      headingPre: "LET ME",
      headingPurple: "INTRODUCE",
      headingPost: "MYSELF",
      intro: "I'm a Data Engineer & Analyst passionate about building reliable data infrastructure — designing pipelines that turn raw, messy data into trusted, decision-ready datasets.",
      skillsPrefix: "I'm proficient in",
      skillsBold: "SQL, Python, Airflow, and dbt",
      skillsSuffix: "— engineering scalable ELT/ETL pipelines, data warehouses, and automated workflows.",
      interestsPrefix: "My core focus is",
      interestsBold: "Data Engineering",
      interestsSuffix: "— orchestrating production-grade, observable pipelines with tools like",
      currentPrefix: "Currently a",
      currentRole: "Data Analyst",
      currentAt: "at",
      currentCompany: "ShopeePay - Digital Wallet",
      currentSuffixPre: ", but passionate about becoming a",
      currentSuffixPost: "in the future."
    },
    about: {
      title: "Know Who",
      titlePurple: "I'M",
      skillsTitle: "Professional",
      skillsTitlePurple: "Skillset",
      toolsTitle: "Tools",
      toolsTitlePurple: "I use",
      bio: {
        greeting: "Hi everyone! I'm",
        from: "from",
        workPrefix: "I'm currently working as a",
        workRole: "Data Analyst",
        workAt: "at",
        workSuffixPre: ", but passionate about becoming a",
        workSuffixPost: "in the future.",
        eduPrefix: "I hold a Bachelor of",
        eduDegree: "Management Information System",
        eduFrom: "from",
        eduSchool: "University of Economics Ho Chi Minh City (UEH)",
        gpa: "3.73 / 4.0",
        hobbiesIntro: "Outside of work, I love activities that keep me sharp and curious:",
        hobbies: [
          "Building Data Pipelines & Engineering Workflows",
          "Playing Games & Sports",
          "Traveling and Discovering New Places",
        ],
        quote: "\"Engineer the data. Enable the decisions. Build what lasts.\"",
        author: "Nguyen Le"
      }
    },
    github: {
      headingPre: "Days I",
      headingAccent: "Code"
    },
    projects: {
      heading: "My Recent",
      headingPurple: "Works",
      subtext: "Here are a few projects I've worked on recently.",
      cards: [
        {
          title: "Sales Data Pipeline",
          description: "End-to-end ETL pipeline ingesting sales transactions from multiple sources into a PostgreSQL data warehouse. DAGs orchestrated with Apache Airflow, transformations handled by dbt models with built-in data quality tests and documentation."
        },
        {
          title: "Business Intelligence Dashboard",
          description: "Interactive Power BI dashboard tracking revenue, conversion rate, customer cohorts, and funnel analysis. Connected to a PostgreSQL DWH with row-level security per region. Reduced weekly reporting effort from 4 hours to fully automated."
        },
        {
          title: "Customer Segmentation (RFM)",
          description: "RFM segmentation of 1M+ customer records using Python and pandas to identify high-value, at-risk, and churned segments. Clusters visualised in Metabase with automated weekly refresh via scheduled Python job."
        },
        {
          title: "Nhox's Crypto",
          description: "Real-time cryptocurrency tracking & prediction platform. Monitors up to 5 assets simultaneously with live market data, global market overview, and technical analysis signals (RSI, EMA, MACD, Bollinger Bands). Supports sortable lists and grid/list view."
        },
        {
          title: "Personal Portfolio",
          description: "This portfolio website — built with React and deployed on Vercel. Features a dark/light theme, bilingual EN/VI support, an interactive knowledge graph blog, a PDF resume viewer, and an AI chatbot powered by Qwen via Hugging Face."
        },
      ]
    },
    footer: {
      designed: "Designed and Developed by Nhoxanboc",
      copyright: "Copyright ©",
      name: "Nhøx"
    },
    chatbot: {
      title: "Ask about Nguyen Le",
      placeholder: "Ask me anything...",
      welcome: "Hi! I'm Nguyen Le's AI assistant. Ask me about his skills, projects, or background!",
      error: "Sorry, something went wrong. Please try again.",
      ariaOpen: "Open chat",
      ariaClose: "Close chat",
      suggestions: ["Skills", "Projects", "Experience", "Contact"],
    },
  },

  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      projects: "Dự án",
      resume: "Hồ sơ",
      knowledge: "Ghi chú",
      theme: "Giao diện",
      language: "Ngôn ngữ"
    },
    home: {
      greeting: "Xin chào!",
      iam: "TÔI LÀ",
      findMe: "Tìm tôi tại",
      connectPrefix: "Hãy thoải mái",
      connectBold: "kết nối",
      connectSuffix: "với tôi"
    },
    home2: {
      headingPre: "HÃY ĐỂ TÔI",
      headingPurple: "GIỚI THIỆU",
      headingPost: "BẢN THÂN",
      intro: "Tôi là Data Engineer & Analyst, đam mê xây dựng hạ tầng dữ liệu đáng tin cậy — thiết kế pipeline biến dữ liệu thô, lộn xộn thành tập dữ liệu sạch, sẵn sàng cho quyết định.",
      skillsPrefix: "Tôi thành thạo",
      skillsBold: "SQL, Python, Airflow và dbt",
      skillsSuffix: "— xây dựng pipeline ELT/ETL có khả năng mở rộng, data warehouse và quy trình tự động hóa.",
      interestsPrefix: "Trọng tâm cốt lõi của tôi là",
      interestsBold: "Kỹ thuật dữ liệu",
      interestsSuffix: "— điều phối các pipeline production-grade, có khả năng quan sát với các công cụ như",
      currentPrefix: "Hiện đang là",
      currentRole: "Data Analyst",
      currentAt: "tại",
      currentCompany: "ShopeePay - Ví điện tử",
      currentSuffixPre: ", nhưng đam mê trở thành",
      currentSuffixPost: "trong tương lai."
    },
    about: {
      title: "Tìm hiểu về",
      titlePurple: "TÔI",
      skillsTitle: "Kỹ năng",
      skillsTitlePurple: "Chuyên môn",
      toolsTitle: "Công cụ",
      toolsTitlePurple: "Tôi dùng",
      bio: {
        greeting: "Xin chào! Tôi là",
        from: "đến từ",
        workPrefix: "Hiện tôi đang là",
        workRole: "Data Analyst",
        workAt: "tại",
        workSuffixPre: ", nhưng đam mê trở thành",
        workSuffixPost: "trong tương lai.",
        eduPrefix: "Tôi tốt nghiệp Cử nhân",
        eduDegree: "Hệ thống Thông tin Quản lý",
        eduFrom: "tại",
        eduSchool: "Đại học Kinh tế TP.HCM (UEH)",
        gpa: "3.73 / 4.0",
        hobbiesIntro: "Ngoài công việc, tôi yêu thích các hoạt động giúp tôi sắc bén và tò mò:",
        hobbies: [
          "Xây dựng Pipeline Dữ liệu & Quy trình Kỹ thuật",
          "Chơi game & Thể thao",
          "Du lịch và Khám phá những nơi mới",
        ],
        quote: "\"Thiết kế dữ liệu. Kiến tạo quyết định. Xây dựng những gì bền vững.\"",
        author: "Nguyên Lê"
      }
    },
    github: {
      headingPre: "Những ngày tôi",
      headingAccent: "Lập trình"
    },
    projects: {
      heading: "Dự án",
      headingPurple: "Gần đây",
      subtext: "Một số dự án tôi đã thực hiện gần đây.",
      cards: [
        {
          title: "Pipeline Dữ liệu Bán hàng",
          description: "Pipeline ETL đầu cuối thu thập giao dịch bán hàng từ nhiều nguồn vào data warehouse PostgreSQL. DAG được điều phối bằng Apache Airflow, xử lý dữ liệu qua dbt với kiểm tra chất lượng dữ liệu và tài liệu tích hợp sẵn."
        },
        {
          title: "Dashboard Business Intelligence",
          description: "Dashboard Power BI tương tác theo dõi doanh thu, tỷ lệ chuyển đổi, cohort khách hàng và phân tích phễu. Kết nối với DWH PostgreSQL có bảo mật theo từng vùng. Giảm thời gian báo cáo tuần từ 4 giờ xuống hoàn toàn tự động."
        },
        {
          title: "Phân khúc Khách hàng (RFM)",
          description: "Phân khúc RFM hơn 1 triệu bản ghi khách hàng bằng Python và pandas để xác định nhóm giá trị cao, có nguy cơ rời bỏ và đã rời bỏ. Kết quả trực quan hóa trên Metabase với cập nhật tự động hàng tuần qua scheduled Python job."
        },
        {
          title: "Nhox's Crypto",
          description: "Nền tảng theo dõi và dự đoán tiền điện tử theo thời gian thực. Theo dõi đến 5 tài sản cùng lúc với dữ liệu thị trường trực tiếp, tổng quan thị trường toàn cầu và tín hiệu phân tích kỹ thuật (RSI, EMA, MACD, Bollinger Bands). Hỗ trợ danh sách có thể sắp xếp và chế độ xem lưới/danh sách."
        },
        {
          title: "Portfolio Cá nhân",
          description: "Trang portfolio này — xây dựng bằng React, triển khai trên Vercel. Tích hợp chế độ tối/sáng, hỗ trợ song ngữ EN/VI, blog dạng đồ thị kiến thức tương tác, xem CV dạng PDF và chatbot AI sử dụng Qwen qua Hugging Face."
        },
      ]
    },
    footer: {
      designed: "Thiết kế và Phát triển bởi Nhoxanboc",
      copyright: "Bản quyền ©",
      name: "Nhøx"
    },
    chatbot: {
      title: "Ask about Nguyen Le",
      placeholder: "Ask me anything...",
      welcome: "Hi! I'm Nguyen Le's AI assistant. Ask me about his skills, projects, or background!",
      error: "Sorry, something went wrong. Please try again.",
      ariaOpen: "Open chat",
      ariaClose: "Close chat",
      suggestions: ["Kỹ năng", "Dự án", "Kinh nghiệm", "Liên hệ"],
    },
  },
};

export default translations;
