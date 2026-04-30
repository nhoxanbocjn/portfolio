const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      knowledge: "Knowledge"
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
      intro: "I'm a Data Analyst & Freelancer passionate about transforming raw data into actionable insights that drive business decisions.",
      skillsPrefix: "I'm proficient in",
      skillsBold: "SQL, Python, and Power BI",
      skillsSuffix: "— building dashboards, data pipelines, and analytical solutions at scale.",
      interestsPrefix: "My key areas of interest include",
      interestsBold: "Data Engineering, Business Intelligence,",
      interestsSuffix: "and building reliable ETL/ELT workflows with tools like",
      currentPrefix: "Currently working as a",
      currentRole: "Data Analyst",
      currentAt: "at",
      currentCompany: "ShopeePay - Digital Wallet",
      currentSuffix: ", delivering data-driven value in fintech — from pipeline automation to A/B testing and customer segmentation."
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
        eduPrefix: "I hold a Bachelor of",
        eduDegree: "Management Information System",
        eduFrom: "from",
        eduSchool: "University of Economics Ho Chi Minh City (UEH)",
        gpa: "3.73 / 4.0",
        hobbiesIntro: "Outside of data, I love engaging in activities that keep me sharp and curious:",
        hobbies: [
          "Exploring Data & Building Pipelines",
          "Playing Games & Sports",
          "Traveling and Discovering New Places",
        ],
        quote: "\"Turn data into decisions that matter!\"",
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
    },
  },

  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      projects: "Dự án",
      resume: "Hồ sơ",
      knowledge: "Kiến thức"
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
      intro: "Tôi là Data Analyst & Freelancer, đam mê biến dữ liệu thô thành insight có giá trị, hỗ trợ ra quyết định kinh doanh.",
      skillsPrefix: "Tôi thành thạo",
      skillsBold: "SQL, Python và Power BI",
      skillsSuffix: "— xây dựng dashboard, pipeline dữ liệu và giải pháp phân tích ở quy mô lớn.",
      interestsPrefix: "Lĩnh vực quan tâm chính của tôi bao gồm",
      interestsBold: "Kỹ thuật dữ liệu, Trí tuệ kinh doanh,",
      interestsSuffix: "và xây dựng quy trình ETL/ELT đáng tin cậy với các công cụ như",
      currentPrefix: "Hiện đang là",
      currentRole: "Chuyên viên phân tích dữ liệu",
      currentAt: "tại",
      currentCompany: "ShopeePay - Ví điện tử",
      currentSuffix: ", mang lại giá trị dữ liệu trong lĩnh vực fintech — từ tự động hóa pipeline đến A/B testing và phân khúc khách hàng."
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
        workRole: "Chuyên viên phân tích dữ liệu",
        workAt: "tại",
        eduPrefix: "Tôi tốt nghiệp Cử nhân",
        eduDegree: "Hệ thống Thông tin Quản lý",
        eduFrom: "tại",
        eduSchool: "Đại học Kinh tế TP.HCM (UEH)",
        gpa: "3.73 / 4.0",
        hobbiesIntro: "Ngoài công việc, tôi yêu thích các hoạt động giúp tôi sắc bén và tò mò:",
        hobbies: [
          "Khám phá Dữ liệu & Xây dựng Pipeline",
          "Chơi game & Thể thao",
          "Du lịch và Khám phá những nơi mới",
        ],
        quote: "\"Biến dữ liệu thành những quyết định tạo ra sự khác biệt!\"",
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
    },
  },
};

export default translations;
