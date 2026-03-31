import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Railton Santos', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Full Stack Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  logo: 'rai-logo.png',
  title: `sup! `,
  name: 'Railton Santos',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `Brazilian from São Paulo. Based in <b>Brisbane, QLD, Australia</b>.`,
  paragraphTwo: `Creative Full Stack Developer with 10+ years of experience building web and mobile products.`,
  paragraphThree: `Strong logical thinking and problem solving skills, with a focus on breaking down complex problems into clean, scalable and efficient solutions.`,
  paragraphFour: `Core stack includes <b>PHP</b>, <b>JS/TypeScript</b>, with experience in React, React Native, Vue.js, Node.js and databases like MySQL and MongoDB.`,
  paragraphFive: `Good experience with Python and C#, along with strong <b>Shopify</b> development experience, including building and maintaining <span style="white-space: nowrap;">e-commerce</span> stores and custom online platforms.`,
  paragraphSix: `Experience with modern development tools and LLM-based workflows to support coding, debugging, refactoring, testing and rapid prototyping, always focusing on clean and maintainable solutions.`,
  paragraphSeven: `Focused on clean UI/UX, performance and building smooth user experiences with strong attention to detail across the full product.`,
  paragraphEight: `<b>I like to kill bugs while drinking strong coffee ☕</b>`,
  resume: 'RailtonSantos.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'propertymash.gif',
    title: 'Propertymash ',
    info: 'Web Portal',
    info2:
      'Real estate website with a large-scale search engine which presents data of 500+ new and off the plan apartments across the biggest cities in Australia.',
    info3:
      'Entirely built using Wordpress integrated with the FoxEnterprise CRM providing the best reliability for the client to update their data and for the end user to access it with high performance... Also built some special WP vanilla plugins to meet the client’s needs...',
    url: 'https://propertymash.com',
    repo: '',
    involvement: ['Design Layout', 'Front End', 'Back End'],
  },
  {
    id: nanoid(),
    img: 'pennyplace.gif',
    title: 'Penny Place',
    info: 'iOS App',
    info2:
      'Interactive iPad application Vue.js + Cordova built to provide the fastest access to off the plan apartments information and a powerful presentation to help the client showcase the project to their potential buyers.',
    info3:
      'All the data is synchronized with a powerful sales CRM running in the back and providing real time prospects status to every single salesperson.',
    url: 'https://apps.apple.com/ro/app/penny-place/id1477788500',
    repo: '',
    involvement: ['Design Layout', 'Front End'],
  },
  {
    id: nanoid(),
    img: 'iris-bridgestone.png',
    title: 'IRIS Auto - Bridgestone',
    info: 'Transparency App & Analytics Portal',
    involvement: ['Front End', 'Back End'],
    info2:
      'The app enables technicians to record personalized video explanations of vehicle conditions, repairs needed, and parts required directly on their mobile device. Videos are instantly shared with customers via text message or email. Built with React Native for both iOS and Android, featuring QR code authentication and seamless video upload.',
    info3:
      'Location and store managers access a comprehensive  Laravel admin portal to track video analytics, monitor technician performance and manage accounts.',
    url: 'https://www.youtube.com/watch?v=edpHzI4BGwM',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'wfc.png',
    title: 'WFC eCommerce',
    info: 'Shopify platform',
    info2:
      'Custom Shopify-based e-commerce store focused on performance, conversion optimization and smooth user experience for online retail.',
    info3:
      'Worked on Shopify development including theme customization, UI/UX improvements, performance optimization and integration of third-party apps and APIs. Supported multiple e-commerce features such as product display, checkout flow enhancements and store maintenance for a scalable online retail experience.',
    url: 'https://wfc.com.au/',
    repo: '',
    involvement: ['Front End', 'UI/UX', 'Shopify'],
  },
  {
    id: nanoid(),
    img: 'wp.png',
    title: 'Custom Websites',
    info: 'WordPress solutions',
    info2:
      'Custom-built WordPress websites using modern development workflows and advanced integrations, focused on performance, scalability and tailored client requirements.',
    info3:
      'Developed custom WordPress solutions using technologies such as Laravel and React. Built beyond standard themes, including custom functionality, optimized performance layers and scalable architectures for complex business needs.',
    info4:
      'Notable projects include Logan Leisure Centres and Digital Child, delivering high-performance platforms with modern frontend and backend integrations.',
    url: 'https://loganleisurecentres.com.au/',
    repo: '',
    involvement: ['Design Layout', 'Front End', 'Back End'],
  },
  {
    id: nanoid(),
    img: 'wms.gif',
    title: 'WMS',
    info: 'Website',
    info2:
      'Clean Wordpress theme built to provide the Water Modeling Solutions team the best experience on presenting, organizing and updating amazing case studies accross many cities in Australia and the islands.',
    info3: '',
    url: 'https://wmseng.com.au/',
    repo: '',
    involvement: ['Design Layout', 'Front End', 'Back End'],
  },
  {
    id: nanoid(),
    img: 'panorama.gif',
    title: 'Panorama',
    info: 'iOS App',
    info2:
      'An interactive sales book application which provides everything a salesperson needs to showcase a project to potential buyers with the fastest access to documents and syncronized data.',
    info3: '',
    url: 'https://apps.apple.com/us/app/panorama-top-of-the-town/id1479155980',
    repo: '',
    involvement: ['Design Layout', 'Front End'],
  },
  {
    id: nanoid(),
    img: 'moda.gif',
    title: 'Moda',
    info: 'iOS/Kiosk App',
    info2:
      'A powerful interactive cross-platform sales book application made to attend everything a salesperson needs to run an amazing presentation and captivate the attention of potential buyers from start to finish of the prospect...',
    info3: '',
    url: 'https://modathehills.com.au/',
    repo: '',
    involvement: ['Design Layout', 'Front End'],
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'railtondsanto@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/rai.lton/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/rai_lton',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/RailtonSt/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/railton-santos-37bb6a106/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RailtonSantos',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
