// src/data/projects.js
// Canonical project data — single source of truth for all project listings

const projects = [
  {
    slug: 'the-blue-list',
    title: 'The Blue List',
    category: 'Websites',
    image: '/images/TheBlueList1.webp',
    images: ['/images/TheBlueList1.webp', '/images/TheBlueList2.webp', '/images/TheBlueList3.webp'],
    skills: ['UX/UI', 'Wireframing', 'Responsive Design', 'Agile', 'Technical Translation'],
    shortDescription:
      'A cutting-edge college search engine that revolutionizes how high school students explore higher education.',
    longDescription:
      'For The Blue List, I spearheaded the design and development of a cutting-edge college search engine that revolutionizes how high school students explore higher education. This platform features a dynamic map search and an advanced filtering system that lets students narrow their options by region, state, GPA range of accepted students, campus size, available majors, and even \u201cvibe tags\u201d.\n\nWorking closely with both technical teams and educational experts, I ensured the filtering system was not only robust but also delivered results in under 0.5 seconds - a significant upgrade over the previous site. The custom map interface allows students to visualize college locations and explore options they might never have considered otherwise.\n\nThe result is a beautiful, intuitive, and highly responsive experience that empowers students to make well-informed college decisions while providing a seamless user experience across all devices.',
    featured: true,
    featuredOrder: 4,
  },
  {
    slug: 'smart-konnection',
    title: 'Smart Konnection',
    category: 'Websites',
    image: '/images/SmartKonnection1.webp',
    images: ['/images/SmartKonnection1.webp', '/images/SmartKonnection2.webp'],
    skills: ['PHP', 'Wireframing', 'SEO', 'UX/UI', 'Waterfall', 'Google Analytics', 'Technical Translation'],
    shortDescription:
      'A custom-built e-commerce marketplace focused on supporting local brick and mortar stores.',
    longDescription:
      'Smart Konnection is a custom-built e-commerce marketplace focused on supporting local brick and mortar stores that also seamlessly combines traditional credit card payments with innovative cryptocurrency transactions.\n\nI personally handled all of the wireframing and directed the development process to create an intuitive platform where merchants can sign up to offer goods, services, gift cards, and coupons.\n\nThe site includes a robust backend that allows merchants to manage advertising space, featured business slots, and real-time coupon redemptions, ensuring a smooth and engaging experience for both customers and business owners. Our collaboration with Forumpay led to the creation of a secure and flexible payment gateway, highlighting the project\'s commitment to modern payment innovations and user-friendly design.',
    featured: false,
  },
  {
    slug: 'elevate-scholars-academy',
    title: 'Elevate Scholars Academy',
    category: 'Websites',
    image: '/images/ElevateScholars1.webp',
    images: ['/images/ElevateScholars1.webp', '/images/ElevateScholars2.webp', '/images/ElevateScholars3.webp'],
    skills: ['PHP', 'UX/UI', 'Communication'],
    shortDescription:
      'A custom PHP website for a tutoring company serving grades 3\u201312 with conflict-free scheduling.',
    longDescription:
      'For this project, I directed the design and development of a custom PHP website specifically tailored for a tutoring company serving grades 3\u201312. One of the project\u2019s highlight was the creation of a custom calendar tool that efficiently tracks and books appointments while preventing scheduling conflicts.\n\nWorking closely with the academy\u2019s top tutor, we fine-tuned every aspect\u2014from seamless user account creation to appointment notifications complete with Zoom links for online sessions. This project not only simplified scheduling but also enhanced the overall tutoring experience, ensuring reliability and ease of use for both students and tutors.',
    featured: false,
  },
  {
    slug: 'tl-brown-law',
    title: 'TL Brown Law',
    category: 'Websites',
    image: '/images/TLBrownLaw1.webp',
    images: ['/images/TLBrownLaw1.webp', '/images/TLBrownLaw2.webp'],
    skills: ['UX/UI', 'Accessibility', 'Wireframing', 'WordPress', 'Communication', 'Waterfall'],
    shortDescription:
      'A bilingual law firm website consolidating two domains into one unified, multilingual experience.',
    longDescription:
      'In revamping TL Brown Law\'s digital presence, I took full responsibility for both the design and development of a new, comprehensive website for a successful law firm serving over 7,500 clients. The project involved consolidating the firm\'s bilingual needs\u2014previously handled by two separate domains\u2014into a unified site.\n\nI conducted thorough research and implemented the WPML plugin to seamlessly manage multilingual content, reducing inconsistencies and hosting costs. The website also features detailed service descriptions, a secure document submission system, a dedicated payment portal, and a live chat function, all of which I personally put together to meet the firm\'s high standards for security and usability.',
    featured: false,
  },
  {
    slug: 'hydroponics',
    title: 'Hydroponics',
    category: 'Hardware',
    image: '/images/Hydroponics1.webp',
    images: ['/images/Hydroponics1.webp', '/images/Hydroponics2.webp'],
    skills: ['Prototyping', 'Embedded Systems', 'Sensors & Actuators'],
    shortDescription:
      'A hydroponic system growing 50 plants indoors, transforming a blank wall into a sustainable oasis.',
    longDescription:
      'I built a hydroponics system to grow 50 plants in my dining room, transforming a blank wall into a green, sustainable oasis. Hydroponics, which grows plants without soil by suspending roots in nutrient-rich, circulated water and using artificial light, eliminates the need for pesticides, maximizes space by stacking plants vertically, and boosts growth\u2014using just 1/10th the water while growing crops up to 200% faster. My passion for efficient systems, sparked by a senior year project on an innovative hydroponics grocery store, inspired me to dive deeper into sustainable farming methods.\n\nTo bring this concept to life, I built a prototype using readily available materials like PVC and an old cooler, serving as a practical proof of concept. The design was created to be both functional and aesthetically appealing, seamlessly integrating into our living space. This project not only awakened my interest in sustainable living but also laid the groundwork for future enhancements, such as modular design and automated nutrient and pH regulation, to further optimize the system.',
    featured: true,
    featuredOrder: 5,
  },
  {
    slug: 'pandora',
    title: "Pandora's Box",
    category: 'Hardware',
    image: '/images/Pandora1.webp',
    images: ['/images/Pandora1.webp', '/images/Pandora2.webp', '/images/Pandora3.webp', '/images/Pandora4.webp', '/images/Pandora5.webp', '/images/Pandora6.webp', '/images/Pandora7.webp'],
    skills: ['Prototyping', 'Excel', 'API Integration', '3D Printing', 'User Stories', 'CAD', 'PowerPoint', 'Embedded Systems', 'Entrepreneurship', 'DFM', 'Sensors & Actuators', 'Agile', 'Roadmapping', 'Word', 'UX/UI', 'Technical Translation'],
    shortDescription:
      'An automated cocktail-pouring machine designed to transform the bar and restaurant experience.',
    longDescription:
      "Pandora\u2019s Box is an automated cocktail-pouring machine designed to transform the bar and restaurant experience by delivering a quick, safe, and consistent solution for ordering drinks. Born from the challenges of the pandemic, my roommate and I created this innovative product as an elegant culmination of our mechanical design, electrical engineering, and full stack development experience. Over the course of the project, we iterated through four mechanical versions and three software versions\u2014evolving from initial CAD designs to a pressurized solenoid system with a fully integrated tablet application and cloud deployment, complete with 16 bottle slots that allow the machine to serve hundreds of different drink combinations in under five seconds per pour.\n\nWe deployed our third prototype in 2020 at a Boulder, CO restaurant, where it was projected to save the business $1,500\u2013$2,000 each month. We even took it backstage at a music festival, serving VIPs 265 drinks in a single night. This project was a tremendous learning experience in taking a complex product from 0 to 1 and embracing the entrepreneurship journey. In addition to overcoming significant technical challenges, the process taught us the importance of agile development, real-time iteration, and gathering user feedback to continuously refine the product\u2014a mindset that continues to drive my approach to innovation.",
    featured: true,
    featuredOrder: 1,
  },
  {
    slug: 'crystal-garden',
    title: 'Crystal Garden',
    category: 'Hardware',
    image: '/images/CrystalGarden1.webp',
    images: ['/images/CrystalGarden1.webp', '/images/CrystalGarden2.webp', '/images/CrystalGarden3.webp'],
    skills: ['Entrepreneurship', 'Figma', 'Prototyping', 'BOM Management', 'VS Code', 'Embedded Systems', '3D Printing', 'DFM', 'Strategic Planning', 'UX/UI', 'Market Analysis', 'Communication'],
    shortDescription:
      'A 3D printed indoor planter with selenite crystal illumination, sold in stores and online.',
    longDescription:
      'The Crystal Garden is an indoor planter that transforms any space with its modern, 3D printed design and captivating illumination. A ridge of selenite crystals diffuses programmable LED lights, creating a beautiful backdrop for your plants. The ethereal quality of the selenite, which casts a soft, captivating glow, was the inspiration behind this unique decor piece.\n\nI launched the Crystal Garden to immerse myself fully in every stage of the product lifecycle, gaining hands-on experience in product ideation, 3D CAD design, marketing, manufacturing, and distribution. This project deepened my understanding of entrepreneurship and building efficient systems, while challenging me to explore innovative design approaches. Today, the Crystal Garden is featured in four brick-and-mortar stores and is available through multiple online channels. Through Nonagon Designs, I continue to refine my skills and evolve my personal brand as an artistic outlet.',
    featured: true,
    featuredOrder: 2,
  },
  {
    slug: 'optio',
    title: 'Optio',
    category: 'Web and Mobile Apps',
    image: '/images/Optio1.webp',
    images: ['/images/Optio1.webp', '/images/Optio2.webp', '/images/Optio3.webp', '/images/Optio4.webp'],
    skills: ['Roadmapping', 'Agile', 'API Integration', 'Jira', 'Zapier', 'UX/UI', 'Strategic Planning', 'ROS', 'PowerPoint', 'Hubspot', 'Word', 'Excel', 'User Stories', 'Entrepreneurship', 'Market Analysis', 'Embedded Systems', 'Technical Translation', 'BOM Management', 'Communication'],
    shortDescription:
      'MES software for manufacturing \u2014 bridging technical experts and clients on the factory floor.',
    longDescription:
      'As a product manager on the Optio team, I bridged the gap between our technical experts and manufacturing clients by overseeing the strategic development of our MES software. I defined a clear product roadmap addressing critical needs such as real-time data visualization, one-touch defect reporting, digital work instructions, and seamless ERP integration. By actively engaging with stakeholders, I gathered essential feedback that enabled rapid feature iterations via agile methodologies, transforming complex operational challenges into robust, user-friendly solutions. Our streamlined one-hour setup brought advanced digital Lean Manufacturing principles directly to the factory floor, empowering small to medium factories to reduce lead times and minimize waste.\n\nI began my role with in-depth market research and devised a comprehensive go-to-market strategy that repositioned our product from a robotics-focused solution to a scalable SaaS model. Our strategy was to first digitize manufacturing processes with our software and then integrate modular robotics solutions to capture low-hanging optimization opportunities. I led cross-functional teams\u2014working closely with engineers, designers, and manufacturing specialists\u2014to convert intricate challenges into effective software tools. By turning early adopters into passionate advocates through targeted prototype deployments and personalized account management, I validated our product in the market and delivered an easy to use, scalable platform that drives operational excellence through digital transformation and Industry 4.0 technologies.',
    featured: true,
    featuredOrder: 3,
  },
  {
    slug: 'reach-out',
    title: 'Reach Out',
    category: 'Web and Mobile Apps',
    image: '/images/ReachOut1.webp',
    images: ['/images/ReachOut1.webp', '/images/ReachOut2.webp', '/images/ReachOut3.webp', '/images/ReachOut4.webp'],
    skills: ['UX/UI', 'Wireframing', 'Technical Translation', 'Communication', 'Responsive Design', 'Accessibility'],
    shortDescription:
      'A mobile app for first responders with offline access to essential crisis resources.',
    longDescription:
      'Reach Out is an easy to use mobile app designed specifically for first responders, offering offline access to essential resources when seconds count. The app includes a wealth of tools such as instructional videos and documents to assist with mental health crises, detailed drug identification guides, and interactive maps paired with contact information for the nearest hospitals and critical facilities. Each resource is thoughtfully curated to ensure that first responders have quick, reliable access to the information they need in the field, regardless of network availability.\n\nRecognizing that every first responder team has unique requirements, Reach Out features dedicated sections for individual departments, making it easy for users to find department-specific training and resources. Available on both Android and iPhone, the app is poised to become a standard tool across first responder communities, streamlining operations and enhancing on-field decision-making. With its user-centric design and robust offline capabilities, Reach Out is set to empower emergency personnel, ensuring they\u2019re always equipped with the right tools at the right time.',
    featured: false,
  },
  {
    slug: 'health-workers-by-zip',
    title: 'Health Workers By Zip',
    category: 'Websites',
    image: '/images/HealthWorkers1.webp',
    images: ['/images/HealthWorkers1.webp', '/images/HealthWorkers2.webp', '/images/HealthWorkers3.webp', '/images/HealthWorkers4.webp'],
    skills: ['PHP', 'UX/UI', 'Resource Planning', 'Agile', 'User Stories', 'Technical Translation', 'Communication'],
    shortDescription:
      'The Uber for healthcare professionals \u2014 managing patients, organizations, providers, and admins.',
    longDescription:
      'Health Workers by Zip is essentially the Uber for healthcare professionals, a project that required managing a complex ecosystem of four distinct user types: patients, organizations, care providers, and administrators. I directed the design and development of this custom PHP platform, where meticulous testing and overcoming database hurdles were critical to ensuring smooth operation across all dashboards.\n\nThe platform includes a secure messaging system, comprehensive timesheet and approval processes, and robust account management capabilities that keep the system both reliable and scalable. Every feature was engineered to ensure that the various user interactions\u2014from posting jobs to submitting timesheets\u2014are seamless and efficient, supporting the dynamic needs of the growing at-home healthcare sector.',
    featured: false,
  },
  {
    slug: 'smart-home',
    title: 'Smart Home',
    category: 'Hardware',
    image: '/images/SmartHome1.webp',
    images: ['/images/SmartHome1.webp', '/images/SmartHome2.webp'],
    skills: ['Home Assistant', 'IoT', 'Automation', 'Embedded Systems'],
    shortDescription:
      'A comprehensive smart home system with automated lighting, climate control, and security integrations.',
    longDescription:
      'A fully integrated smart home ecosystem built around Home Assistant, connecting dozens of IoT devices across lighting, climate, security, and entertainment systems. Custom automations handle everything from presence-based lighting scenes to energy monitoring and alerts.\n\nThe system features a custom dashboard for real-time monitoring, voice control integration, and mobile notifications for security events. Built with a focus on local control and privacy, minimizing cloud dependencies while maximizing reliability and response time.',
    featured: false,
  },
  {
    slug: 'my-portfolio',
    title: 'My Portfolio Site',
    category: 'Websites',
    image: '/images/MyPortfolio1.webp',
    images: ['/images/MyPortfolio1.webp', '/images/MyPortfolio2.webp'],
    skills: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    shortDescription:
      'This very site \u2014 a cosmic glassmorphism portfolio built with Next.js, featuring canvas animations and custom fonts.',
    longDescription:
      'This portfolio is a showcase of both my work and my design philosophy. Built with Next.js and React, it features a custom canvas-based blob animation system, glassmorphic UI panels with layered transparencies, and a cosmic star field background.\n\nEvery detail is intentional \u2014 from the custom Zilap Orion display font to the parallax-responsive background gradients that react to mouse movement. The site serves as both a portfolio and a design experiment, pushing the boundaries of what a personal website can feel like.',
    featured: false,
  },
  {
    slug: 'more-sites',
    title: 'More Sites',
    category: 'Websites',
    image: '/images/MoreSites1.webp',
    images: ['/images/MoreSites1.webp', '/images/MoreSites2.webp', '/images/MoreSites3.webp', '/images/MoreSites4.webp', '/images/MoreSites5.webp', '/images/MoreSites6.webp'],
    skills: ['WordPress', 'Shopify', 'Squarespace', 'Wix', 'Webflow', 'Asana', 'MS Project', 'Communication', 'Word', 'Excel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Terraform', 'UX/UI', 'Accessibility', 'SEO', 'Google Analytics', 'Responsive Design', 'Technical Translation', 'Zapier'],
    shortDescription:
      'Over 30 websites across WordPress, Shopify, Squarespace, Wix, Webflow, and custom-built solutions.',
    longDescription:
      'I have worked on over 30 websites that span a range of platforms including WordPress, Shopify, Squarespace, Wix, Webflow, and fully custom-built solutions. My website portfolio reflects a broad spectrum of design and development work that consistently meets client needs and adapts to various technical challenges, serving industries as diverse as retail, healthcare, legal, and education.\n\nI bring a balanced approach to project management that emphasizes creative vision alongside rigorous performance and optimization standards. For more examples of my work, please visit sunlightmedia.org/portfolio, where you can see how I help bring ideas to life through thoughtful, user-centered digital solutions.',
    featured: false,
  },
];

// Helper: get all unique categories
export const getCategories = () => {
  const cats = new Set(projects.map((p) => p.category));
  return ['All', ...Array.from(cats)];
};

// Helper: get featured projects for home page carousel
export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured).sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));

// Helper: find project by slug
export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug);

// Helper: find project by title (backwards compat with old URL scheme)
export const getProjectByTitle = (title) =>
  projects.find((p) => p.title === title);

export default projects;
