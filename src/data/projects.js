// src/data/projects.js
// Canonical project data — single source of truth for all project listings

const projects = [
  {
    slug: 'the-blue-list',
    title: 'The Blue List',
    category: 'Websites',
    image: '/images/TheBlueList1.webp',
    images: ['/images/TheBlueList1.webp', '/images/TheBlueList2.webp', '/images/TheBlueList3.webp'],
    skills: ['HTML', 'CSS', 'JavaScript'],
    shortDescription:
      'A cutting-edge college search engine that revolutionizes how high school students explore higher education',
    longDescription:
      'For The Blue List, I spearheaded the design and development of a cutting-edge college search engine that revolutionizes how high school students explore higher education. This platform features a dynamic map search and an advanced filtering system that lets students narrow their options by region, state, GPA range of accepted students, campus size, available majors, and even "vibe tags"—carefully selected by college counselors to capture the unique character of each school. To achieve this, I collaborated closely with both technical teams and educational experts, ensuring the filtering system was not only robust but also delivered results in under 0.5 seconds—a significant upgrade over the previous site. The result is a beautiful, intuitive, and highly responsive experience that empowers students to make well-informed college decisions while providing a seamless user experience.',
    featured: true,
    featuredOrder: 4,
  },
  {
    slug: 'smart-konnection',
    title: 'Smart Konnection',
    category: 'Websites',
    image: '/images/SmartKonnection1.webp',
    images: ['/images/SmartKonnection1.webp', '/images/SmartKonnection2.webp'],
    skills: ['React', 'Node.js', 'Express'],
    shortDescription:
      'A custom-built e-commerce marketplace focused on supporting local brick and mortar stores',
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
    skills: ['PHP', 'HTML', 'CSS', 'Bootstrap'],
    shortDescription:
      'A custom PHP platform specifically tailored for a tutoring company serving grades 3–12',
    longDescription:
      'For Elevate Scholars Academy, I directed the design and development of a custom PHP platform specifically tailored for a tutoring company serving grades 3–12. The project\'s highlight was the creation of a custom calendar tool that efficiently tracks and books appointments while preventing scheduling conflicts.\n\nWorking closely with the academy\'s top tutor, we fine-tuned every aspect—from seamless user account creation to the integration of appointment notifications complete with Zoom links for online sessions. This project not only simplified scheduling but also enhanced the overall tutoring experience, ensuring reliability and ease of use for both students and tutors.',
    featured: false,
  },
  {
    slug: 'tl-brown-law',
    title: 'TL Brown Law',
    category: 'Websites',
    image: '/images/TLBrownLaw1.webp',
    images: ['/images/TLBrownLaw1.webp', '/images/TLBrownLaw2.webp'],
    skills: ['WordPress', 'WPML', 'PHP'],
    shortDescription:
      'A bilingual law firm website consolidating two domains into one unified, multilingual experience.',
    longDescription:
      'In revamping TL Brown Law\'s digital presence, I took full responsibility for both the design and development of a new, comprehensive website for a successful law firm serving over 7,500 clients. The project involved consolidating the firm\'s bilingual needs—previously handled by two separate domains—into a unified site.\n\nI conducted thorough research and implemented the WPML plugin to seamlessly manage multilingual content, reducing inconsistencies and hosting costs. The website also features detailed service descriptions, a secure document submission system, a dedicated payment portal, and a live chat function, all of which I personally built to meet the firm\'s high standards for security and usability.',
    featured: false,
  },
  {
    slug: 'hydroponics',
    title: 'Hydroponics',
    category: 'Gardening',
    image: '/images/Hydroponics1.webp',
    images: ['/images/Hydroponics1.webp', '/images/Hydroponics2.webp'],
    skills: ['Python', 'Raspberry Pi', 'Sensors'],
    shortDescription:
      'An automated hydroponic growing system with real-time monitoring and environmental controls.',
    longDescription:
      'The Hydroponics project is a fully automated indoor growing system that combines hardware sensors with software intelligence. Using a Raspberry Pi as the central controller, the system monitors water pH levels, nutrient concentration, temperature, and humidity in real time.\n\nCustom Python scripts handle the automation logic—triggering pumps for nutrient delivery, adjusting grow lights on schedules optimized for plant growth cycles, and sending alerts when readings fall outside ideal ranges. The project represents a hands-on intersection of software engineering and sustainable agriculture, turning a spare room into a precision-controlled growing environment.',
    featured: true,
    featuredOrder: 5,
  },
  {
    slug: 'pandora',
    title: 'Pandora',
    category: 'Tech',
    image: '/images/Pandora1.webp',
    images: ['/images/Pandora1.webp', '/images/Pandora2.webp', '/images/Pandora3.webp', '/images/Pandora4.webp', '/images/Pandora5.webp', '/images/Pandora6.webp', '/images/Pandora7.webp'],
    skills: ['Node.js', 'Express', 'MongoDB'],
    shortDescription:
      'A personal knowledge base and project management tool with real-time collaboration features.',
    longDescription:
      'Pandora is a self-hosted knowledge management platform built for organizing ideas, research, and project documentation in one place. Named after the mythological box of knowledge, it features a Node.js backend with MongoDB for flexible document storage.\n\nThe platform supports rich-text editing, file attachments, tagging systems, and cross-referencing between entries. It was designed as an internal tool for managing the complexity of running multiple concurrent projects, providing quick access to technical notes, client requirements, and architectural decisions.',
    featured: true,
    featuredOrder: 1,
  },
  {
    slug: 'crystal-garden',
    title: 'CrystalGarden',
    category: 'Gardening',
    image: '/images/CrystalGarden1.webp',
    images: ['/images/CrystalGarden1.webp', '/images/CrystalGarden2.webp', '/images/CrystalGarden3.webp'],
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    shortDescription:
      'A digital companion app for tracking crystal and mineral collections with detailed specimen data.',
    longDescription:
      'CrystalGarden is a web application designed for mineral and crystal enthusiasts to catalog, track, and learn about their collections. The app features a clean, visual interface where users can log specimens with photos, origin data, Mohs hardness ratings, and personal notes.\n\nBuilt with React for a responsive single-page experience, the app includes search and filter functionality, a visual gallery mode, and educational content about crystal properties. It\'s a passion project that combines my interests in both technology and the natural world.',
    featured: true,
    featuredOrder: 2,
  },
  {
    slug: 'optio',
    title: 'Optio',
    category: 'Web and Mobile Apps',
    image: '/images/Optio1.webp',
    images: ['/images/Optio1.webp', '/images/Optio2.webp', '/images/Optio3.webp', '/images/Optio4.webp'],
    skills: ['Flutter', 'Firebase', 'Dart'],
    shortDescription:
      'A decision-making app that helps users weigh options with structured pros/cons analysis and scoring.',
    longDescription:
      'Optio is a Flutter-based mobile application designed to help people make better decisions when faced with multiple choices. Whether choosing between job offers, apartments, or investment options, the app guides users through a structured evaluation process.\n\nUsers define their criteria, weight each factor by importance, and score each option. Optio then calculates weighted scores and presents clear visualizations comparing the alternatives. Built with Flutter for a smooth native experience on both iOS and Android, with Firebase handling user accounts and cloud-synced decision boards.',
    featured: true,
    featuredOrder: 3,
  },
  {
    slug: 'reach-out',
    title: 'Reach Out',
    category: 'Web and Mobile Apps',
    image: '/images/ReachOut1.webp',
    images: ['/images/ReachOut1.webp', '/images/ReachOut2.webp', '/images/ReachOut3.webp', '/images/ReachOut4.webp'],
    skills: ['React Native', 'Expo', 'Firebase'],
    shortDescription:
      'A mobile app connecting volunteers with local community service opportunities in real time.',
    longDescription:
      'Reach Out is a React Native mobile application designed to bridge the gap between willing volunteers and organizations in need. The app uses location-based services to surface nearby community service opportunities—from food bank shifts to park cleanups—and lets users sign up with a single tap.\n\nBuilt with Expo for cross-platform deployment and backed by Firebase for real-time data sync, the app includes user profiles with volunteer hour tracking, push notifications for new opportunities, and an organization dashboard for posting and managing events. The goal is to make volunteering as easy as ordering food delivery.',
    featured: false,
  },
  {
    slug: 'health-workers-by-zip',
    title: 'Health Workers By Zip',
    category: 'Websites',
    image: '/images/HealthWorkers1.webp',
    images: ['/images/HealthWorkers1.webp', '/images/HealthWorkers2.webp', '/images/HealthWorkers3.webp', '/images/HealthWorkers4.webp'],
    skills: ['Django', 'Python', 'PostgreSQL'],
    shortDescription:
      'A searchable directory connecting communities with local healthcare workers by zip code.',
    longDescription:
      'Health Workers By Zip is a Django-powered web application that makes it easy for people to find healthcare professionals in their area. Users enter a zip code and can filter results by specialty, insurance accepted, languages spoken, and availability.\n\nThe backend uses PostgreSQL with geospatial queries for accurate distance calculations, while the frontend presents results in both list and map views. The platform was built to address healthcare accessibility gaps, particularly in underserved communities where finding a nearby provider can be a significant barrier to care.',
    featured: false,
  },
  {
    slug: 'smart-home',
    title: 'Smart Home',
    category: 'Tech',
    image: '/images/SmartHome1.webp',
    images: ['/images/SmartHome1.webp', '/images/SmartHome2.webp'],
    skills: ['Home Assistant', 'IoT', 'Automation'],
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
      'This very site — a cosmic glassmorphism portfolio built with Next.js, featuring canvas animations and custom fonts.',
    longDescription:
      'This portfolio is a showcase of both my work and my design philosophy. Built with Next.js and React, it features a custom canvas-based blob animation system, glassmorphic UI panels with layered transparencies, and a cosmic star field background.\n\nEvery detail is intentional — from the custom Zilap Orion display font to the parallax-responsive background gradients that react to mouse movement. The site serves as both a portfolio and a design experiment, pushing the boundaries of what a personal website can feel like.',
    featured: false,
  },
  {
    slug: 'more-sites',
    title: 'More Sites',
    category: 'Websites',
    image: '/images/MoreSites1.webp',
    images: ['/images/MoreSites1.webp', '/images/MoreSites2.webp', '/images/MoreSites3.webp', '/images/MoreSites4.webp', '/images/MoreSites5.webp', '/images/MoreSites6.webp'],
    skills: ['WordPress', 'HTML', 'CSS'],
    shortDescription:
      'A collection of additional WordPress and custom websites built for various clients and industries.',
    longDescription:
      'Beyond the featured projects, I\'ve designed and developed numerous websites across industries — from restaurant landing pages to professional service firms. These projects demonstrate versatility in working with different platforms, client requirements, and design aesthetics.\n\nEach site was tailored to the client\'s brand identity and business goals, with attention to SEO, mobile responsiveness, and conversion optimization. Platforms used range from custom-coded solutions to WordPress with bespoke themes.',
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
