const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      resume: "Resume",
      certifications: "Certifications",
      knowledge: "Knowledge",
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
    about: {
      title: "Know Who",
      titlePurple: "I'M",
      skillsTitle: "Professional",
      skillsTitlePurple: "Skillset",
      toolsTitle: "Tools",
      toolsTitlePurple: "I use",
      bio: {
        intro: "I'm Nguyen Le, a Data Engineer & Analyst from Ho Chi Minh City, Vietnam. I build reliable data infrastructure — turning raw, messy data into trusted, decision-ready datasets.",
        rolePrefix: "Currently a",
        role: "Data Analyst",
        roleAt: "at",
        company: "ShopeePay",
        roleSuffix: "— on track toward a Data Engineer path.",
        skillsPrefix: "Proficient in",
        skillsBold: "SQL, Python, Airflow, and dbt",
        skillsSuffix: "for scalable ELT/ETL pipelines, data warehouses, and automated workflows.",
        eduPrefix: "Bachelor of",
        eduDegree: "Management Information System",
        eduFrom: "at",
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
    skills: {
      heading: "My",
      headingAccent: "Skillset"
    },
    experience: {
      heading: "Professional",
      headingAccent: "Experience",
      jobs: [
        {
          title: "Data Analyst / Engineer",
          company: "ShopeePay - Digital Wallet",
          period: "Apr 2025 - Present",
          groups: [
            {
              title: "Automation Task",
              items: [
                "Automate daily data pipelines to refresh activation users, orders, and user patterns across platforms.",
                "Developed a Looker dashboard to monitor daily traffic performance, enabling tracking of trends and optimization of plans.",
                "Implemented a performance tracking module to monitor product user activation.",
              ],
            },
            {
              title: "Bot Alert",
              items: [
                "Built a bot to send user lists to operations teams for CS/CX survey setup.",
                "Implemented voucher usage alerts via chat platform APIs, notifying teams when quota thresholds are reached.",
              ],
            },
            {
              title: "Data Analysis",
              items: [
                "Applied customer segmentation to analyze purchasing behavior and target vouchers, driving a 10% increase in orders.",
                "Conducted data analysis and executed A/B testing on new features to increase 15% user traffic.",
                "Identified user journey bottlenecks through data and recommended improvements to enhance user experience.",
              ],
            },
          ],
        },
        {
          title: "Data Engineer",
          company: "ANOVA - Ecommerce Seller on Amazon",
          period: "Jun 2024 - Mar 2025",
          groups: [
            {
              title: "Preprocessing Data in PostgreSQL",
              items: [
                "Prepared and cleaned large datasets (8-10 million records), ensuring data consistency before loading into BI tools.",
                "Optimized PostgreSQL queries using indexes and materialized views, reducing execution time by 60%.",
                "Automated data pushes to Google Sheets using the GSpread library, reducing manual processing time by 50%.",
              ],
            },
            {
              title: "Competitor Tracking API",
              items: [
                "Built data pipelines to ingest competitor pricing and promotion data from external APIs (Helium, Jungle Scout).",
                "Designed data models enabling continuous tracking and competitive intelligence.",
                "Delivered structured datasets powering analytics and decision-making systems after transformation by dbt.",
              ],
            },
            {
              title: "Sales Performance Data",
              items: [
                "Utilized advanced SQL techniques, including CTEs and window functions, to efficiently process and extract data.",
                "Optimized queries for performance and high-frequency updates using techniques like indexing and creating views.",
                "Built a dedicated KPI Management Module to measure sales metrics (revenue, ads spend, ACOS, TACOS, CR...).",
              ],
            },
          ],
        },
      ],
    },
    projects: {
      heading: "My Recent",
      headingPurple: "Projects",
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
          description: "This portfolio website — built with React and deployed on Vercel. Features a dark/light theme, bilingual EN/VI support, a PDF resume viewer, and an AI chatbot powered by Qwen via Hugging Face."
        },
      ]
    },
    resume: {
      heading: "My",
      headingAccent: "Resume",
      download: "Download CV"
    },
    certifications: {
      heading: "My",
      headingPurple: "Certifications",
      subtext: "Click a certificate to view it full-screen — zoom in and out for the details.",
      view: "View certificate",
      viewPdf: "View PDF",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      close: "Close",
      prev: "Previous",
      next: "Next",
      cards: [
        {
          title: "SQL - Advanced",
          issuer: "HackerRank",
          time: "Mar 2024"
        },
        {
          title: "Introduction Spark Developer",
          issuer: "Databricks",
          time: "Jun 2026"
        },
        {
          title: "Github Foundations (GH-900)",
          issuer: "Github",
          time: "Jun 2026"
        },
        {
          title: "Fabric Data Engineer Associate (DP-700)",
          issuer: "Microsoft",
          time: "Aug 2026"
        },
      ]
    },
    footer: {
      designed: "Designed and Developed by Nhoxanboc",
      copyright: "Copyright ©",
      name: "Nhoxanboc"
    },
    blogCta: {
      heading: "Fresh From My",
      headingAccent: "Notes",
      subtitle: "I write about anything of my journey in data engineering, analytics, and lessons learned — read the full here",
      cta: "Visit My Notes"
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
      about: "Giới thiệu",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      resume: "Hồ sơ",
      certifications: "Chứng chỉ",
      knowledge: "Kiến thức",
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
    about: {
      title: "Tìm hiểu về",
      titlePurple: "TÔI",
      skillsTitle: "Kỹ năng",
      skillsTitlePurple: "Chuyên môn",
      toolsTitle: "Công cụ",
      toolsTitlePurple: "Tôi dùng",
      bio: {
        intro: "Tôi là Nguyên Lê, Data Engineer & Analyst đến từ TP.HCM, Việt Nam. Tôi xây dựng hạ tầng dữ liệu đáng tin cậy — biến dữ liệu thô, lộn xộn thành tập dữ liệu sạch, sẵn sàng cho quyết định.",
        rolePrefix: "Hiện đang là",
        role: "Data Analyst",
        roleAt: "tại",
        company: "ShopeePay",
        roleSuffix: "— theo đuổi con đường trở thành Data Engineer.",
        skillsPrefix: "Tôi thành thạo",
        skillsBold: "SQL, Python, Airflow và dbt",
        skillsSuffix: "để xây dựng pipeline ELT/ETL mở rộng, kho dữ liệu và quy trình tự động hóa.",
        eduPrefix: "Cử nhân",
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
    skills: {
      heading: "Kỹ năng",
      headingAccent: "của tôi"
    },
    experience: {
      heading: "Kinh nghiệm",
      headingAccent: "chuyên môn",
      jobs: [
        {
          title: "Data Analyst / Engineer",
          company: "ShopeePay - Ví điện tử",
          period: "T4 2025 - Hiện tại",
          groups: [
            {
              title: "Tự động hóa",
              items: [
                "Tự động hóa pipeline dữ liệu hàng ngày để cập nhật user kích hoạt, đơn hàng và hành vi người dùng trên các nền tảng.",
                "Xây dựng dashboard Looker theo dõi hiệu suất traffic hàng ngày, giúp nắm bắt xu hướng và tối ưu kế hoạch.",
                "Triển khai module theo dõi hiệu suất để giám sát quá trình kích hoạt sản phẩm của người dùng.",
              ],
            },
            {
              title: "Bot cảnh báo",
              items: [
                "Xây dựng bot gửi danh sách người dùng cho đội vận hành để thiết lập khảo sát CS/CX.",
                "Triển khai cảnh báo lượng voucher qua API nền tảng chat, thông báo khi chạm ngưỡng hạn mức.",
              ],
            },
            {
              title: "Phân tích dữ liệu",
              items: [
                "Áp dụng phân khúc khách hàng để phân tích hành vi mua sắm và nhắm mục tiêu voucher, tăng 10% số đơn hàng.",
                "Thực hiện phân tích dữ liệu và A/B testing trên tính năng mới để tăng 15% traffic người dùng.",
                "Phát hiện điểm nghẽn trong hành trình người dùng bằng dữ liệu và đề xuất cải thiện trải nghiệm.",
              ],
            },
          ],
        },
        {
          title: "Data Engineer",
          company: "ANOVA - Người bán Ecommerce trên Amazon",
          period: "T6 2024 - T3 2025",
          groups: [
            {
              title: "Xử lý dữ liệu trong PostgreSQL",
              items: [
                "Chuẩn bị và làm sạch tập dữ liệu lớn (8-10 triệu bản ghi), đảm bảo tính nhất quán trước khi nạp vào công cụ BI.",
                "Tối ưu truy vấn PostgreSQL bằng index và materialized view, giảm 60% thời gian thực thi.",
                "Tự động đẩy dữ liệu lên Google Sheets bằng thư viện GSpread, giảm 50% thời gian xử lý thủ công.",
              ],
            },
            {
              title: "API theo dõi đối thủ",
              items: [
                "Xây dựng pipeline nạp dữ liệu giá và khuyến mãi của đối thủ từ API bên ngoài (Helium, Jungle Scout).",
                "Thiết kế mô hình dữ liệu đảm bảo theo dõi liên tục và tình báo cạnh tranh.",
                "Cung cấp tập dữ liệu có cấu trúc phục vụ phân tích và hệ thống ra quyết định sau khi chuyển đổi bằng dbt.",
              ],
            },
            {
              title: "Dữ liệu hiệu suất bán hàng",
              items: [
                "Sử dụng kỹ thuật SQL nâng cao như CTE và window functions để xử lý và trích xuất dữ liệu hiệu quả.",
                "Tối ưu truy vấn cho hiệu suất và cập nhật tần suất cao bằng kỹ thuật như index, tạo view.",
                "Xây dựng module quản lý KPI chuyên dụng để đo lường các chỉ số bán hàng (doanh thu, chi phí quảng cáo, ACOS, TACOS, CR...).",
              ],
            },
          ],
        },
      ],
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
          description: "Trang portfolio này — xây dựng bằng React, triển khai trên Vercel. Tích hợp chế độ tối/sáng, hỗ trợ song ngữ EN/VI, xem CV dạng PDF và chatbot AI sử dụng Qwen qua Hugging Face."
        },
      ]
    },
    resume: {
      heading: "Hồ sơ",
      headingAccent: "của tôi",
      download: "Tải CV"
    },
    certifications: {
      heading: "Chứng chỉ",
      headingPurple: "của tôi",
      subtext: "Nhấp vào một chứng chỉ để xem toàn màn hình — phóng to / thu nhỏ để xem chi tiết.",
      view: "Xem chứng chỉ",
      viewPdf: "Xem PDF",
      zoomIn: "Phóng to",
      zoomOut: "Thu nhỏ",
      close: "Đóng",
      prev: "Trước",
      next: "Sau",
      cards: [
        {
          title: "SQL - Nâng cao",
          issuer: "HackerRank",
          time: "T3 2024"
        },
        {
          title: "Giới thiệu Spark Developer",
          issuer: "Databricks",
          time: "T6 2026"
        },
        {
          title: "Github Foundations (GH-900)",
          issuer: "Github",
          time: "T6 2026"
        },
        {
          title: "Fabric Data Engineer Associate (DP-700)",
          issuer: "Microsoft",
          time: "T8 2026"
        },
      ]
    },
    footer: {
      designed: "Designed and Developed by Nhoxanboc",
      copyright: "Copyright ©",
      name: "Nhoxanboc"
    },
    blogCta: {
      heading: "Những",
      headingAccent: "Ghi chú",
      subtitle: "Tôi viết về những hành trình, trải nghiệm và bài học của mình trong lĩnh vực Data Engineering, Analytics — đọc toàn bộ bài viết tại đây.",

      cta: "Xem Ghi Chú"
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
