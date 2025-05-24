const projects = {
  sikepo: {
    title: "SIKePO by OJK",
    category: "UI UX Design – Government - Radya Labs",
    coverImage: "images/portfolio/img-cover-sikepo.jpg",
    coverAlt: "Cover image of SIKePO mobile regulation app",
    year: "2019",
    duration: "4 Bulan",
    client: "OJK",
    overview: "SIKePO is a mobile app developed to provide government regulation access in a simplified mobile format. While the website already existed, the mobile version was created to better serve on-the-go users with a more accessible interface.",
    problem: "The website version had grouped content and breadcrumbs, but lacked tagging or modern search. It also used a rigid form-heavy search that overwhelmed users. The mobile solution improved tagging and simplified search UX.",
    approachList: [
      "Conducted stakeholder interviews to understand how regulations are used in the field and identify friction points in the existing web-based system.",
      "Facilitated iterative design reviews with both business stakeholders and potential users to validate early concepts.",
      "Managed design iterations based on stakeholder feedback and usability findings, ensuring alignment between usability and content accuracy."
    ],
    decisionList: [
      "Simplified the search process by reducing complex multi-field forms into a streamlined, mobile-friendly search flow.",
      "Introduced a tagging system to help users explore regulations by topic or type, a key feature missing in the web version.",
      "Adapted the information architecture and layout for small screens, maintaining clarity while supporting document depth and cross-navigation."
    ],
    reflection: "The system had to be delivered under time pressure, so I emphasized regression testing and stood by during launch to hotfix blockers in production. While not ideal, this helped ensure system continuity in a critical use case.",
    roleTitle: "UI UX Designer",
    roleList: [
      "Led UX design from analysis to wireframes and high-fidelity UI.",
      "Mapped user journeys and translated regulatory discovery flows into intuitive search and browse experiences.",
      "Collaborated with stakeholders to identify pain points in existing workflows and define user goals.",
      "Worked closely with developers to ensure smooth handoff and interaction fidelity during implementation."
    ],
    features: [
      { src: "images/ic_news.svg", title: "Media Information" },
      { src: "images/ic_srch.svg", title: "Search & Filter" },
      { src: "images/ic_tagg.svg", title: "Tagging" },
      { src: "images/ic_chart.svg", title: "Statistic" }
    ],
    carouselImages: [
      {
         src: "images/portfolio/caseStudy1.png",
         alt: "SIKePO App – Tag-based regulation browsing"
      },
      {
         src: "images/portfolio/caseStudy2.png",
         alt: "SIKePO Mobile – Search interface redesign"
      },
      {
         src: "images/portfolio/caseStudy3.png",
         alt: "SIKePO Document viewer"
      }
   ],
   captionText: "View Study Case Design",
   captionLink: "https://www.behance.net/gallery/198057615/SIKePO-Sistem-Informasi-Ketentuan-Perbankan-Online"
  },  
  eZDealer: {
    title: "APL - eZDealer",
    category: "Product Planning – Distribution - Radya Labs",
    coverImage: "images/portfolio/img-cover-eZDealer.jpg",
    coverAlt: "Cover image of APL eZDealer app",
    year: "2024",
    duration: "3 Bulan",
    client: "APL",
    overview: "eZDealer is a streamlined Distributor Management System developed for APL to help their distributors manage stock, warehouse operations, purchase orders (PO), invoicing, and reporting. The platform aimed to centralize distributor activities, standardize processes, and enable real-time operational visibility for APL.",
    problem: "APL needed a dedicated system for distributors to manage their daily operations more efficiently. Existing processes were fragmented across spreadsheets and manual reporting, leading to delayed data visibility, operational errors, and decision-making challenges.",
    approachList: [
      "Conducted requirements workshops with APL’s internal teams and key distributor representatives to map end-to-end distributor workflows.",
      "Focused initial MVP scope on critical modules: stock management, PO creation, invoicing, and real-time activity reporting.",
      "Adopted an agile delivery model with short iterations and regular reviews to adapt quickly to evolving needs.",
      "Ensured real-time data synchronization between distributor activities and APL’s central systems to improve transaction monitoring."
    ],
    decisionList: [
      "Scope Management: Simplified system features for faster delivery, focusing on operational essentials rather than complex customizations.",
      "User Access Control: Implemented role-based access to segregate distributor users from principal users, improving system security and data clarity.",
      "Integration Strategy: When facing distributor resistance to adopting the new platform due to existing internal systems, we solved the problem by adding file upload/download features and API integration, so their data could still be connected without forcing them to change tools."
    ],
    reflection: "The system had to be delivered under time pressure, so I emphasized regression testing and stood by during launch to hotfix blockers in production. While not ideal, this helped ensure system continuity in a critical use case.",
    roleTitle: "Product Manager",
    roleList: [
      "Led product definition, roadmap planning, and end-to-end delivery of the eZDealer platform.",
      "Collaborated closely with APL stakeholders to gather operational requirements and translate them into prioritized product backlogs.",
      "Worked alongside designers, developers, and QA teams to ensure fast, scalable, and user-friendly system development.",
      "Facilitated sprint planning, backlog grooming, and stakeholder demos to maintain project alignment and transparency."
    ],
    features: [
      { src: "images/ic_news.svg", title: "Stock Management" },
      { src: "images/ic_srch.svg", title: "Purchase & Sale Order" },
      { src: "images/ic_tagg.svg", title: "Product Management" },
      { src: "images/ic_chart.svg", title: "Dashboard & Report" }
    ]
  },  
  covidSystem: {
    title: "Covid Lab System",
    category: "Product Planning – Healthcare - Radya Labs",
    coverImage: "images/portfolio/img-cover-covidSystem.jpg",
    coverAlt: "Cover image of Covid Lab System app",
    year: "2022",
    duration: "6 Bulan",
    client: "Bumame",
    overview: "Covid Lab System is a custom internal platform designed to manage COVID-19 patient testing workflows for Bumame Health. It replaced an external SaaS solution to enable better cost control, faster tracking, and improved operational alignment during high-demand periods.",
    problem: "Bumame needed to reduce reliance on costly third-party SaaS platforms while improving operational efficiency in handling COVID-19 test results across multiple testing centers.",
    approachList: [
      "Conducted workshops with medical and administrative teams to map out the complete testing journey and identify system pain points.",
      "Prioritized critical features such as patient check-in, sample tracking, result entry, and dashboard visibility.",
      "Break down the development into sprints, delivering core MVP functionalities first, followed by operational enhancements.",
      "Maintained continuous feedback loops with frontline staff to refine usability and performance."
    ],
    decisionList: [
      "Implemented a real-time dashboard for lab supervisors to monitor pending, in-progress, and completed tests, improving result turnaround tracking",
      "Prioritized MVP scope to focus on patient check-in, sample tracking, and result validation, ensuring fast operational roll-out before secondary features.",
      "Designed a sample input UI that visually mimicked the physical test tube arrangement (e.g., Row A-1, A-2), ensuring that medical staff could quickly and accurately match physical samples to digital records without confusion."
    ],
    reflection: "The system had to be delivered under time pressure, so I emphasized regression testing and stood by during launch to hotfix blockers in production. While not ideal, this helped ensure system continuity in a critical use case.",
    roleTitle: "Product Manager",
    roleList: [
      "Defined system requirements and feature set based on stakeholder interviews and user requirements.",
      "Created the end-to-end business flow from patient registration to result validation.",
      "Led sprint planning, feature prioritization, and collaborated with engineering, QA, and end users on a daily basis.",
      "Managed UI/UX coordination to deliver intuitive user experience for medical Staff."
    ],
    features: [
      { src: "images/ic_news.svg", title: "Stock Management" },
      { src: "images/ic_srch.svg", title: "Purchase & Sale Order" },
      { src: "images/ic_tagg.svg", title: "Product Management" },
      { src: "images/ic_chart.svg", title: "Dashboard & Report" }
    ]
  },  
  yukBid: {
    title: "YukBid",
    category: "Web & Mobile Development – Ecommerce - Freelance",
    coverImage: "images/portfolio/img-cover-yukbid.jpg",
    coverAlt: "Cover image of YukBid app",
    year: "2020",
    duration: "4 Bulan",
    client: "YukBid",
    overview: "YukBid is an e-commerce platform combining traditional marketplace functionality with live-streamed auctions. The platform enables users to buy and sell products while bidding in real time, setting it apart from typical shopping apps. This project focused on creating the core UX flows for both mobile and web versions of the product, including its auction and live-streaming experience.",
    problem: "The client aimed to create a marketplace with a unique auction experience but lacked user research or a clear product foundation. Additionally, they planned to launch on both web and mobile, with a major focus on live-streamed selling that a complex UX scenario requiring real-time interaction, chat, bidding visibility, and space efficiency.",
    approachList: [
      "Conducted competitive analysis (Tokopedia and similar platforms) to model realistic buyer and seller flows.",
      "Defined task flows for both buyer and seller personas, focusing on auction setup, bidding behavior, and purchase confirmation.",
      "Designed adaptive UI layouts for mobile to accommodate live streaming, chat, auction product display, and user controls.",
      "Iterated on prototypes through internal team reviews to fine-tune layout priorities and touch targets for mobile use."
    ],
    decisionList: [
      "Chose Tokopedia as the primary benchmark to reverse-engineer marketplace expectations, due to lack of user research access.",
      "Created a live stream-focused product detail layout, prioritizing real-time product display and minimal buyer distraction.",
      "Recommended limiting seller on-screen controls to simplify the live session UI and reduce confusion during multi-tasking.",
      "Ensured search and filter remained persistent and accessible even within the live auction flow for browsing flexibility."
    ],
    reflection: "The system had to be delivered under time pressure, so I emphasized regression testing and stood by during launch to hotfix blockers in production. While not ideal, this helped ensure system continuity in a critical use case.",
    roleTitle: "UI UX Developer",
    roleList: [
      "Designed end-to-end user flows for marketplace, auction, and live-stream modules across mobile and web.",
      "Conducted UX benchmarking using Tokopedia as a model to simulate realistic user journeys.",
      "Delivered mobile-first layouts tailored to the constraints of live interaction and screen space.",
      "Translated Final UI Design for website to HTML & CSS",
      "Collaborated with developers and product owners to translate features into usable interface patterns."
    ],
    features: [
      { src: "images/ic_store.svg", title: "Market Management" },
      { src: "images/ic_live.svg", title: "Live Streaming" },
      { src: "images/ic_srch.svg", title: "Search & Filter" },
      { src: "images/ic_rewards.svg", title: "Point & Rewards" },
      { src: "images/ic_billing.svg", title: "Billing" }
    ]
  },  
  anterAja: {
    title: "Anter Aja Revamp",
    category: "UI UX Design – FMCG & Logistic - Radya Labs",
    coverImage: "images/portfolio/img-cover-anteraja.jpg",
    coverAlt: "Cover image of anteraja app",
    year: "2019",
    duration: "2 Bulan",
    client: "Anter Aja",
    overview: "AnterAja is a logistics service provider in Indonesia offering delivery, tracking, and home pickup services. The project aimed to improve user experience through a redesign of their mobile application, which included simplifying core logistics features and addressing UX challenges tied to their ambition of building a “super app.”",
    problem: "AnterAja was attempting to reposition its app as a super app by integrating unrelated services, which risked diluting its core logistics value. At the same time, the team was removing features without user insight and lacked data to inform UX revamps. These choices introduced risks to usability, business clarity, and long-term product alignment.",
    approachList: [
      "Reviewed the existing IA (Information Architecture) and mapped out user tasks tied to logistics workflows.",
      "Proposed two design directions: one reflecting client-requested changes, and another emphasizing user needs and business clarity.",
      "Recommended the adoption of a User-Centered Design (UCD) process to support decisions with user behavior and intent."
    ],
    decisionList: [
      "Recommended focusing the app on logistics-only services instead of expanding to a super app model, in order to strengthen product clarity and user trust.",
      "Created two design paths — one to respect client expectations and another to propose a user-first structure, allowing stakeholders to compare outcomes.",
      "Advocated against feature removal without user data, promoting a more evidence-driven design strategy.",
      "Suggested prioritizing Order Management, Tracking, Events/Promos, and FAQ based on task frequency and user relevance"
    ],
    reflection: "The system had to be delivered under time pressure, so I emphasized regression testing and stood by during launch to hotfix blockers in production. While not ideal, this helped ensure system continuity in a critical use case.",
    roleTitle: "UI UX Designer",
    roleList: [
      "Led the UX design efforts to restructure core logistics features within the app.",
      "Collaborated with BA Anteraja to evaluate business direction and design alignment.",
      "Created two separate UI/UX proposals — one based on client instruction, and another grounded in user-centered principles.",
      "Advocated for usability-focused decisions through structured feedback and design justification."
    ],
    features: [
      { src: "images/ic_package.svg", title: "Order Management" },
      { src: "images/ic_srch.svg", title: "Tracking Order" },
      { src: "images/ic_promotion.svg", title: "Events & Promo" },
      { src: "images/ic_faq.svg", title: "FAQ" }
    ],
  //   carouselImages: [
  //     {
  //        src: "images/portfolio/caseStudy1.png",
  //        alt: "SIKePO App – Tag-based regulation browsing"
  //     },
  //     {
  //        src: "images/portfolio/caseStudy2.png",
  //        alt: "SIKePO Mobile – Search interface redesign"
  //     },
  //     {
  //        src: "images/portfolio/caseStudy3.png",
  //        alt: "SIKePO Document viewer"
  //     }
  //  ],
  //  captionText: "View Study Case Design",
  //  captionLink: "https://www.behance.net/gallery/198057615/SIKePO-Sistem-Informasi-Ketentuan-Perbankan-Online"
  },  
  radyaDigital: {
    title: "Radya Digital Revamp",
    category: "Web & Mobile Development – Company Profile - Radya Labs",
    coverImage: "images/portfolio/img-cover-radya.jpg",
    coverAlt: "Cover image of Radya Digital Web Compro",
    year: "2020",
    duration: "3 Bulan",
    client: "Radya Labs",
    overview: "Radya Labs Company envisions itself as a digital transformation partner. Rebranding is deemed necessary for a company that originated in 2011 as a mobile app services provider and has since evolved to offer a diverse range of services. These services include app development for mobile and web, chatbot development, managed services, DevOps, quality assurance, and in-house training. Radya Labs has officially changed the name of its software company to Radya digitaL and has also established several new companies within the Radya ecosystem.",
    problem: "At the end of 2019, Radya Labs planned to rebrand its company logo, website, and company profile. The rebranding aimed to showcase a diverse range of services with a focus on three main offerings: App Development, Chatbot Development, and Managed Services.",
    approachList: [
      "(Data Dummy Nomor 1)",
      "(Data Dummy Nomor 2)",
      "(Data Dummy Nomor 3)"
    ],
    decisionList: [
      "(Data Dummy Nomor 1)",
      "(Data Dummy Nomor 2)",
      "(Data Dummy Nomor 3)"
    ],
    reflection: "The system had to be delivered under time pressure, so I emphasized regression testing and stood by during launch to hotfix blockers in production. While not ideal, this helped ensure system continuity in a critical use case.",
    roleTitle: "Product Manager",
    roleList: [      
      "(Data Dummy Nomor 1)",
      "(Data Dummy Nomor 2)",
      "(Data Dummy Nomor 3)"
    ],
    features: [
      { src: "images/ic_services.svg", title: "Services Management" },
      { src: "images/ic_porto.svg", title: "Portfolio Management" },
      { src: "images/ic_career.svg", title: "Career Management" },
      { src: "images/ic_news.svg", title: "Blog Management" }
    ]
  },  
  eZDealer: {
    title: "APL - eZDealer",
    category: "Product Planning – Distribution - Radya Labs",
    coverImage: "images/portfolio/img-cover-eZDealer.jpg",
    coverAlt: "Cover image of APL eZDealer app",
    year: "2024",
    duration: "3 Bulan",
    client: "APL",
    overview: "eZDealer is a streamlined Distributor Management System developed for APL to help their distributors manage stock, warehouse operations, purchase orders (PO), invoicing, and reporting. The platform aimed to centralize distributor activities, standardize processes, and enable real-time operational visibility for APL.",
    problem: "APL needed a dedicated system for distributors to manage their daily operations more efficiently. Existing processes were fragmented across spreadsheets and manual reporting, leading to delayed data visibility, operational errors, and decision-making challenges.",
    approachList: [
      "Conducted requirements workshops with APL’s internal teams and key distributor representatives to map end-to-end distributor workflows.",
      "Focused initial MVP scope on critical modules: stock management, PO creation, invoicing, and real-time activity reporting.",
      "Adopted an agile delivery model with short iterations and regular reviews to adapt quickly to evolving needs.",
      "Ensured real-time data synchronization between distributor activities and APL’s central systems to improve transaction monitoring."
    ],
    decisionList: [
      "Scope Management: Simplified system features for faster delivery, focusing on operational essentials rather than complex customizations.",
      "User Access Control: Implemented role-based access to segregate distributor users from principal users, improving system security and data clarity.",
      "Integration Strategy: When facing distributor resistance to adopting the new platform due to existing internal systems, we solved the problem by adding file upload/download features and API integration, so their data could still be connected without forcing them to change tools."
    ],
    reflection: "The system had to be delivered under time pressure, so I emphasized regression testing and stood by during launch to hotfix blockers in production. While not ideal, this helped ensure system continuity in a critical use case.",
    roleTitle: "Product Manager",
    roleList: [
      "Led product definition, roadmap planning, and end-to-end delivery of the eZDealer platform.",
      "Collaborated closely with APL stakeholders to gather operational requirements and translate them into prioritized product backlogs.",
      "Worked alongside designers, developers, and QA teams to ensure fast, scalable, and user-friendly system development.",
      "Facilitated sprint planning, backlog grooming, and stakeholder demos to maintain project alignment and transparency."
    ],
    features: [
      { src: "images/ic_tagg.svg", title: "Stock Management" },
      { src: "images/ic_sales.svg", title: "Purchase & Sale Order" },
      { src: "images/ic_package.svg", title: "Product Management" },
      { src: "images/ic_chart.svg", title: "Dashboard & Report" }
    ]
  },  
  dmsSfa: {
    title: "DMS + SFA ",
    category: "Product Planning – Distribution - Radya Labs",
    coverImage: "images/portfolio/img-cover-dmsSfa.jpg",
    coverAlt: "Cover image of DMS SFA app",
    year: "2023",
    duration: "Continuously",
    client: "Radya Labs",
    overview: "DMS & SFA Cloud is a comprehensive solution designed to optimize end-user entire distribution process. From inventory management to cash settlement, it empowers you to efficiently control stock levels, manage sales and orders, track customer payments, and oversee your sales force or couriers in real time with a dedicated mobile app, you gain seamless monitoring and enhanced operational visibility, ensuring a streamlined and data-driven distribution network.",
    problem: "After successfully completing a project that helped end-users manage their distribution more efficiently, Inspired by this success, we set out to transform the solution into a scalable SaaS product one that continuously supports businesses facing similar operational challenges.",
    approachList: [
      "(Data Dummy Nomor 1)",
      "(Data Dummy Nomor 2)",
      "(Data Dummy Nomor 3)"
    ],
    decisionList: [
      "(Data Dummy Nomor 1)",
      "(Data Dummy Nomor 2)",
      "(Data Dummy Nomor 3)"
    ],
    reflection: "The system had to be delivered under time pressure, so I emphasized regression testing and stood by during launch to hotfix blockers in production. While not ideal, this helped ensure system continuity in a critical use case.",
    roleTitle: "Product Manager",
    roleList: [
      "(Data Dummy Nomor 1)",
      "(Data Dummy Nomor 2)",
      "(Data Dummy Nomor 3)"
    ],
    features: [
      { src: "images/ic_news.svg", title: "Dashboard & Reporting" },
      { src: "images/ic_srch.svg", title: "Sales & Distribution" },
      { src: "images/ic_tagg.svg", title: "Stock Management" },
      { src: "images/ic_chart.svg", title: "Cashier Management" }
    ]
  }
  // Add more projects here (ezdealer, covidlab, etc)
};
