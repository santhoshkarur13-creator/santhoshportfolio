export const projectsData = [
    {
        id: 'cooling-masters',
        name: 'Cooling Masters CRM',
        icon: './assets/cooling-masters.png',
        description: 'A full-stack web-based CRM application designed to manage AC product sales and service operations in a single platform.',
        fullDescription: 'Cooling Masters is a full-stack web-based CRM application designed to manage AC product sales and service operations in a single platform. The system connects customers, administrators, delivery personnel, and service technicians to streamline business workflows. This application allows users to browse and purchase AC products, request repair services, and track their orders. On the backend, administrators can manage inventory, assign tasks, and monitor operations through a centralized dashboard. Delivery partners handle product shipments, while service technicians resolve maintenance and repair requests.',
        features: [
            'Multi-role login system (Admin, Customer, Technician, Delivery)',
            'Product and service management',
            'Real-time dashboards for each role',
            'Order and service tracking system',
            'Role-based access control'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        link: 'https://sales-service-crm.onrender.com/',
    },
    {
        id: 'digital-library',
        name: 'Digital Library System',
        icon: './assets/lms.png',
        description: 'This Digital Library System is a web-based platform designed to automate book borrowing, member management, and inventory tracking.',
        fullDescription: 'This Digital Library System is a comprehensive web-based platform designed to automate book borrowing, member management, and inventory tracking. It features secure JWT authentication for members and admins to manage the catalog and view borrowing history. The system uses a MySQL database to maintain real-time records and automatically updates book availability during transactions. A key feature is the automated fine engine that calculates penalties based on overdue return dates to ensure efficient library operations.',
        features: [
            'Secure JWT Authentication & Authorization',
            'Admin Dashboard for Book & Member Management',
            'Automated fine calculation engine',
            'Real-time book availability updates',
            'Detailed transaction and borrowing history'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
        link: 'https://lms-1-jvmi.onrender.com/',
    },
    {
        id: 'geo-based-app',
        name: 'Geo based app',
        icon: './assets/work-2.png',
        description: 'mobile app',
        fullDescription: 'A location-based mobile application that helps users discover nearby points of interest and services. It utilizes device GPS capabilities to provide real-time recommendations and features a highly interactive map interface.',
        features: [
            'Real-time GPS tracking',
            'Interactive Map Interface',
            'Location-based recommendations',
            'Offline support for saved locations'
        ],
        technologies: ['React Native', 'Google Maps API', 'Firebase'],
        link: '',
    },
    {
        id: 'photography-site',
        name: 'Photography site',
        icon: '/assets/work-3.png',
        description: 'Web Design',
        fullDescription: 'A visually stunning portfolio website for a professional photographer. The site is optimized for high-resolution images, featuring masonry grid layouts, lazy loading, and smooth page transitions to create an immersive gallery experience.',
        features: [
            'Masonry Grid Image Gallery',
            'Lazy loading for high-resolution images',
            'Smooth page transitions',
            'Fully responsive design'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
        link: '',
    },
    {
        id: 'ui-ux-designing',
        name: 'UI/UX designing',
        icon: '/assets/work-4.png',
        description: 'UI/UX Design',
        fullDescription: 'A collection of user interface designs and user experience case studies. This project highlights the process of wireframing, prototyping, and high-fidelity mockups created for various client projects.',
        features: [
            'Interactive Prototypes',
            'User Flow Diagrams',
            'High-fidelity Mockups',
            'Design System Implementation'
        ],
        technologies: ['Figma', 'Adobe XD', 'Prototyping'],
        link: '',
    }
];
