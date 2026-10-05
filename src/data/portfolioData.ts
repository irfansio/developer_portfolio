import { DeveloperProfile, SystemStat, CompetencyDomain, Project } from '@/types/portfolio';

export const developerProfile: DeveloperProfile = {
  name: 'Mohammed Irfan',
  title: 'Full-Stack Software Engineer',
  experienceYears: '3+ Years',
  tagline: 'Architecting Scalable Full-Stack Systems & Real-Time Web Experiences',
  email: 'irfansio21@gmail.com',
  phone: '+91 9809597350',
  github: 'https://github.com/irfansio',
  location: 'Kerala, India (Open to Remote & Relocation)',
  status: 'Available for Full-Stack & Systems Engineering Roles',
  summary:
    'Full-Stack Software Engineer with 3+ years of experience specializing in the MERN stack, Next.js, and real-time enterprise platforms. Hands-on expertise architecting secure RESTful APIs, high-performance dashboards, Three.js 3D web experiences, and scalable cloud architectures on AWS and Docker. Actively integrating AI assistants and interactive systems into modern web products.',
};

export const systemStats: SystemStat[] = [
  {
    label: 'Production Experience',
    value: '3+ Years',
    subtext: 'MERN, Next.js & Cloud Architectures',
    iconName: 'Code2',
  },
  {
    label: 'Real-Time Telemetry Uptime',
    value: '99.98%',
    subtext: 'High-frequency WebSocket event streams',
    iconName: 'Activity',
  },
  {
    label: 'Enterprise Platforms Deployed',
    value: '5+ Systems',
    subtext: 'B2B SaaS, Safety & Compliance Portals',
    iconName: 'Server',
  },
  {
    label: 'API Latency Benchmark',
    value: '< 120ms',
    subtext: 'Optimized MongoDB & Redis indexing',
    iconName: 'Zap',
  },
];

export const competencyDomains: CompetencyDomain[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    iconName: 'Layout',
    badge: 'Modern Reactive UIs',
    description:
      'Designing performant, accessible, and reactive user interfaces that render complex real-time datasets with sub-second feedback loops.',
    skills: [
      {
        name: 'Next.js & React 19',
        category: 'Framework',
        level: 'Advanced',
        highlight: 'App Router, Server Actions, SSR/SSG caching, streaming hydration',
        productionUsage: 'Used in Ebhoom and environmental monitoring client platforms for maximum TTFB speed and zero layout shifts.',
      },
      {
        name: 'TypeScript',
        category: 'Language',
        level: 'Production Proven',
        highlight: 'Strict typing, generic models, interface polymorphism, API contracts',
        productionUsage: 'Enforces type safety across full-stack repositories, eliminating runtime undefined errors in high-throughput streams.',
      },
      {
        name: 'Redux Toolkit & State Sync',
        category: 'State Management',
        level: 'Advanced',
        highlight: 'Slice normalization, RTK Query, optimistic updates, offline cache',
        productionUsage: 'Maintains state consistency across multiple concurrent telemetry streams and role-based views.',
      },
      {
        name: 'Tailwind CSS & Framer Motion',
        category: 'Styling & Motion',
        level: 'Advanced',
        highlight: 'Fluid dark mode UI, micro-interactions, layout transitions, responsive design',
        productionUsage: 'Engineered modular design systems featuring dark-carbon aesthetics and low-overhead spring animations.',
      },
      {
        name: 'Three.js & WebGL 3D',
        category: '3D Graphics',
        level: 'Intermediate - Advanced',
        highlight: 'Interactive 3D particle fields, wireframe geometries, camera physics, canvas optimization',
        productionUsage: 'Crafting lightweight 3D web accents and exploratory product visualizations that run smoothly at 60 FPS.',
      },
      {
        name: 'Leaflet & Mapbox Geo-spatial',
        category: 'Mapping',
        level: 'Production Proven',
        highlight: 'Dynamic clustering, geo-tagging, custom polygon zones, marker state sync',
        productionUsage: 'Deployed interactive multi-site compliance maps across Kerala & Karnataka in Safetik and Ebhoom.',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & System Design',
    iconName: 'Cpu',
    badge: 'Distributed & Event-Driven',
    description:
      'Architecting fault-tolerant microservices, resilient REST APIs, transactional databases, and real-time WebSocket pipelines.',
    skills: [
      {
        name: 'Node.js & Express.js',
        category: 'Runtime & Server',
        level: 'Advanced',
        highlight: 'Asynchronous event loop, cluster multi-threading, clean middleware architecture',
        productionUsage: 'Powering high-concurrency ingestion engines processing continuous IoT effluent sensor payloads.',
      },
      {
        name: 'MongoDB & Atlas Multi-Model',
        category: 'NoSQL Database',
        level: 'Advanced',
        highlight: 'Aggregation pipelines, compound index tuning, replica set sharding, TTL collections',
        productionUsage: 'Engineered multi-tenant B2B data stores for Safetik equipment batches, user hierarchies, and historical logs.',
      },
      {
        name: 'PostgreSQL & SQL Design',
        category: 'Relational Database',
        level: 'Production Proven',
        highlight: 'Relational integrity, ACID transactions, complex joins, indexing strategies',
        productionUsage: 'Designed structured audit logs, regulatory filing records, and financial transaction entities.',
      },
      {
        name: 'JWT & Multi-Tier RBAC',
        category: 'Security & Auth',
        level: 'Advanced',
        highlight: 'Super-admin controls, role matrices, token rotation, tamper-proof session verification',
        productionUsage: 'Safeguarded multi-enterprise SaaS data ensuring strict isolation between Super Admins, Clients, and Field Technicians.',
      },
      {
        name: 'WebSockets & Socket.io',
        category: 'Real-Time Protocols',
        level: 'Advanced',
        highlight: 'Bidirectional streaming, room broadcasting, auto-reconnection, heartbeat ping',
        productionUsage: 'Delivered instant millisecond-level telemetry alerts when industrial emission parameters breached legal limits.',
      },
    ],
  },
  {
    id: 'devops',
    title: 'Cloud, DevOps & SEO',
    iconName: 'Cloud',
    badge: 'Infrastructure & Performance',
    description:
      'Containerizing applications, automating deployment pipelines, and optimizing platform discovery and Web Vitals.',
    skills: [
      {
        name: 'Amazon Web Services (AWS)',
        category: 'Cloud Infrastructure',
        level: 'Production Proven',
        highlight: 'EC2, S3, CloudFront CDN, Route53, IAM least-privilege security policies',
        productionUsage: 'Hosted and deployed multi-tier client portals with asset CDN caching and automated SSL termination.',
      },
      {
        name: 'Docker & Containerization',
        category: 'DevOps',
        level: 'Production Proven',
        highlight: 'Multi-stage builds, minimal image footprints, Docker Compose orchestration',
        productionUsage: 'Standardized development and production environments, ensuring zero dependency drift across deployments.',
      },
      {
        name: 'CI/CD Automation & Git',
        category: 'Pipelines',
        level: 'Advanced',
        highlight: 'GitHub Actions, automated linting, test suites, zero-downtime release workflows',
        productionUsage: 'Streamlined release cycles from branch pushes to live container staging with automated health verification.',
      },
      {
        name: 'Technical SEO & Core Web Vitals',
        category: 'Search Optimization',
        level: 'Advanced',
        highlight: 'Dynamic metadata, OpenGraph tags, sitemap automation, Lighthouse 98+ scores',
        productionUsage: 'Structured corporate platform architecture to achieve maximum search discoverability and fast Largest Contentful Paint.',
      },
    ],
  },
  {
    id: 'testing',
    title: 'Testing, Reliability & Tools',
    iconName: 'ShieldCheck',
    badge: 'Quality & Integrations',
    description:
      'Ensuring bulletproof API reliability, debugging intricate state synchronization, and integrating intelligent AI workflows.',
    skills: [
      {
        name: 'Postman & E2E API Validation',
        category: 'API Testing',
        level: 'Advanced',
        highlight: 'Automated test runners, environment variables, contract testing, load simulation',
        productionUsage: 'Maintained comprehensive API regression suites validating hundreds of endpoints across role permissions.',
      },
      {
        name: 'Distributed State Synchronization',
        category: 'System Reliability',
        level: 'Advanced',
        highlight: 'Race condition prevention, optimistic locking, idempotent message queues',
        productionUsage: 'Resolved state divergence between field QR equipment scans, geo-map pins, and central database registries.',
      },
      {
        name: 'AI Workflow Integration',
        category: 'Modern Innovation',
        level: 'Intermediate - Advanced',
        highlight: 'LLM API integration, prompt orchestration, structured JSON outputs, assistive agents',
        productionUsage: 'Integrated intelligent AI assistants for automated document extraction, compliance guidance, and dev tooling.',
      },
      {
        name: 'Git Version Control & Code Review',
        category: 'Collaboration',
        level: 'Advanced',
        highlight: 'Trunk-based development, semantic commits, PR architecture audits',
        productionUsage: 'Maintained strict branching standards, ensuring regression-free deployments across fast-paced production sprints.',
      },
    ],
  },
];

export const featuredProjects: Project[] = [
  {
    id: 'safetik-solutions',
    title: 'Safetik Safety Solutions (Asset & Compliance Platform)',
    shortTitle: 'Safetik Safety Solutions',
    type: 'Enterprise B2B SaaS (Role-based access / Auth protected)',
    badge: 'Enterprise Protected - Demo / Screen Previews Available',
    badgeColor: 'amber',
    summary:
      'A multi-tier B2B enterprise platform engineered to oversee safety equipment lifecycle, fire infrastructure audits, batch QR label generation, and interactive geo-spatial site maps for corporate facilities.',
    highlights: [
      'Engineered Super-Admin and multi-tier role management (Super Admin, Client Admin, Safety Inspector) with strict JWT RBAC permissions.',
      'Constructed dynamic geo-tagging and interactive zone maps for facility safety assets with live marker clustering across Kozhikode and regional hubs.',
      'Developed batch equipment management module generating unique scannable QR codes for each unit with downloadable PDF labels.',
      'Built comprehensive real-time equipment registry tracking serial numbers, refilling schedules, inspection due dates, and capacity specs.',
    ],
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Leaflet / Mapbox',
      'JWT RBAC',
      'Tailwind CSS',
      'QR Code Engine',
    ],
    architecture: {
      problem:
        'Industrial facilities frequently fail safety audits due to misplaced fire safety equipment, untracked refill cycles, and lack of verified location logs.',
      solution:
        'Architected an end-to-end asset audit platform linking batch-generated physical QR labels directly with cloud geo-coordinates, automated refilling alarms, and cryptographic access tiers.',
      keyComponents: [
        'Super Admin Multi-Tenant Governance Portal',
        'Interactive Kerala & Regional Geo-Spatial Asset Map',
        'Batch QR Generator & Label Dispatch Engine',
        'Serial & Refill Due Date State Synchronization Service',
      ],
      databaseModel: [
        'Organizations: { id, name, tier, superAdminId, settings }',
        'Equipment: { id, batchId, serialNo, capacity, brand, mfgDate, refDue, assignedUser, coordinates: [lat, lng], qrHash }',
        'BatchRegistry: { batchNo, totalUnits, assignedCount, stockCount }',
        'AuditLogs: { timestamp, inspectorId, equipmentId, status, notes }',
      ],
      securityPatterns: [
        'Multi-factor JWT token validation with HTTP-only cookie storage',
        'Granular role-based middleware verifying Super-Admin permissions on mutation endpoints',
        'Data isolation per tenant preventing cross-organization query leaks',
      ],
      dataFlowSummary:
        'Client requests -> Express Gateway -> RBAC Middleware -> MongoDB Atlas -> Normalized Redux Store -> Geo-Map & UI Modals.',
    },
    screenshots: [
      {
        url: '/projects/safetik-map-dashboard.png',
        title: 'Super Admin Portal: Geo-Spatial User & Site Map',
        caption:
          'Live interactive map interface pinpointing safety equipment facilities across Kozhikode and regional zones with Super Admin badge and navigation tree.',
        tag: 'Geo-Spatial Dashboard',
      },
      {
        url: '/projects/safetik-batch-qr-modal.png',
        title: 'Batch Unit Registry & QR Code Generation Modal',
        caption:
          'Automated batch creation (e.g. Batch bt-800) generating unique verifiable QR labels, serial tracking (bt-800-7J66Z3), and assignment state.',
        tag: 'QR Generation Engine',
      },
      {
        url: '/projects/safetik-equipment-modal.png',
        title: 'Equipment Specification & Compliance Form',
        caption:
          'Detailed inspection modal capturing capacity, content type, gross weight, serial number, refilling due date, and manufacturing cycle.',
        tag: 'Compliance Metadata',
      },
      {
        url: '/projects/safetik-equipment-list.png',
        title: 'Role-Filtered Equipment Registry Table',
        caption:
          'Centralized inventory table with instant user filtering, inspection dates, direct QR label actions, and equipment detail view.',
        tag: 'Inventory Grid',
      },
    ],
    isProtected: true,
    stats: [
      { label: 'Role Tiers', value: '4 Levels' },
      { label: 'QR Scan Speed', value: '< 200ms' },
      { label: 'Safety Assets', value: 'Thousands' },
      { label: 'Map Pin Sync', value: 'Real-time' },
    ],
  },
  {
    id: 'ocems-monitoring',
    title: 'OCEMS & KSPCB Environmental Monitoring Portals',
    shortTitle: 'OCEMS Environmental Monitoring',
    type: 'Real-Time Industrial Compliance Systems (Auth protected)',
    badge: 'Real-Time Industrial Compliance - Continuous Telemetry',
    badgeColor: 'emerald',
    summary:
      'Continuous Online Effluent and Emission Monitoring System (OCEMS) tracking heavy industrial pollutants in real-time to comply with CPCB and KSPCB statutory environmental thresholds.',
    highlights: [
      'Engineered low-latency ingestion engine streaming continuous effluent parameters: pH, BOD (Biochemical Oxygen Demand), TSS (Total Suspended Solids), and temperature.',
      'Implemented automated threshold breach alert system with immediate visual indicators and notification queues when parameters exceed legal limits.',
      'Built dynamic multi-interval charts offering day, hour, and monthly aggregations with instant drill-down capabilities.',
      'Generated compliant regulatory audit reports exported in PDF and CSV formats ready for environmental board submission.',
    ],
    techStack: [
      'React',
      'Next.js',
      'WebSockets / Socket.io',
      'Node.js',
      'Redux Toolkit',
      'REST APIs',
      'Chart.js / Recharts',
      'Tailwind CSS',
    ],
    architecture: {
      problem:
        'Industrial facilities must report continuous environmental discharge telemetry to state boards (KSPCB). Network drops and high data rates cause missing packets and heavy compliance penalties.',
      solution:
        'Developed a resilient WebSocket event pipeline with automatic queue buffering, client reconnection heartbeats, and real-time visualization widgets showing safe vs breach boundaries.',
      keyComponents: [
        'High-Frequency Telemetry Ingestion Worker',
        'WebSocket Broadcast Broker for Multi-Station Monitoring',
        'Dynamic Multi-Interval Time-Series Graph Engine',
        'Statutory Compliance Threshold Evaluator & Reporter',
      ],
      databaseModel: [
        'Stations: { stationId, industryName, location, parametersMonitored, status }',
        'TelemetryFeed: { stationId, timestamp, pH: Number, bod: Number, tss: Number, temp: Number, flowRate: Number }',
        'ThresholdBreaches: { eventId, stationId, parameter, breachValue, legalLimit, durationMinutes, acknowledged }',
      ],
      securityPatterns: [
        'Signed telemetry payloads to prevent sensor spoofing',
        'Statutory read-only auditor roles for government inspection bodies',
        'TLS encrypted WebSocket transport with ping-pong latency tracking',
      ],
      dataFlowSummary:
        'IoT Analyzer -> Gateway -> WebSocket Broker -> State Aggregator -> Dynamic Chart Visualization -> Push Alert Broadcast.',
    },
    screenshots: [
      {
        url: '/projects/kspcb-control-monitor-viewport.png',
        title: 'KSPCB Industrial Compliance Control & Monitor Viewport',
        caption:
          'Clean live monitoring interface displaying real-time compliance nodes across South India without developer overlay.',
        tag: 'KSPCB Live Portal',
      },
      {
        url: '/projects/ebhoom-3d-water-twin.png',
        title: 'Industrial Effluent Digital Twin (ETP/STP Inlets)',
        caption:
          'Live telemetry data stream tracing water purification, effluent discharge, and compliance thresholds.',
        tag: 'Effluent Telemetry Twin',
      },
      {
        url: '/projects/safetik-map-dashboard.png',
        title: 'Geographic Compliance Clustering',
        caption:
          'Regional distribution view verifying active sensor transmitters and immediate status across manufacturing corridors.',
        tag: 'Station Network',
      },
    ],
    isProtected: true,
    liveDemoUrl: 'https://ebhoomcem.kspcb.kerala.gov.in/',
    stats: [
      { label: 'Data Ingestion Rate', value: '1.5s Stream' },
      { label: 'Monitored Metrics', value: 'pH, BOD, TSS, Temp' },
      { label: 'Alert Dispatch', value: '< 1 sec' },
      { label: 'Historical Range', value: '365 Days' },
    ],
  },
  {
    id: 'ebhoom-platform',
    title: 'Ebhoom Platform Website',
    shortTitle: 'Ebhoom Platform Website',
    type: 'Public Corporate & Platform Portal',
    badge: 'High-Traffic Web Platform - Production Deployed',
    badgeColor: 'cyan',
    summary:
      'High-performance, SEO-optimized production web platform engineered for nationwide industrial telemetry, continuous OCEMS device monitoring, and interactive 3D digital twins.',
    highlights: [
      'Deployed interactive nationwide reporting map tracking 120+ active industrial monitoring sites across Mumbai, Hyderabad, Chennai, Bangalore, and Kochi.',
      'Engineered Over-The-Air (OTA) IoT edge device monitoring interface streaming 7+ parameters continuously with on-panel 4.3" touchscreen sync.',
      'Architected 3D Water Management Digital Twin visualizing real-time effluent flows, domestic treatment (STP), and statutory compliance.',
      'Achieved top Lighthouse performance scores and sub-90ms TTFB deployed on AWS CloudFront with SSG caching.',
    ],
    techStack: [
      'Next.js (App Router)',
      'Tailwind CSS',
      'TypeScript',
      'Framer Motion',
      'AWS Hosting',
      'SEO Meta Architecture',
    ],
    architecture: {
      problem:
        'The corporate platform needed to articulate complex environmental solutions to corporate executives and regulators while maintaining near-instant page loads and strong organic search authority.',
      solution:
        'Implemented modern Next.js server components, optimized asset pipelines, structured semantic HTML, and fluid interactive sections to maximize user engagement.',
      keyComponents: [
        'Modular Component Design System',
        'Dynamic OpenGraph and SEO Metadata Engine',
        'Interactive Solution Showcase & Product Walkthroughs',
        'AWS CloudFront CDN and Edge Caching Layer',
      ],
      databaseModel: [
        'Articles & CaseStudies: { slug, title, content, seoMetadata, publishDate }',
        'ContactLeads: { leadId, company, contactEmail, interestCategory, timestamp }',
      ],
      securityPatterns: [
        'Content Security Policy headers to mitigate XSS attacks',
        'Sanitized form inputs with rate-limited submission endpoints',
        'Strict HTTPS redirection and secure cookie handling',
      ],
      dataFlowSummary:
        'Next.js Edge CDN -> Static Server Pre-Rendering -> Fast Client Hydration -> Responsive UI Interactivity.',
    },
    screenshots: [
      {
        url: '/projects/ebhoom-india-deployment-map.png',
        title: 'Nationwide Industrial Deployment Map (120+ Sites)',
        caption:
          'Interactive map tracing real-time reporting from manufacturing facilities and industrial parks across Mumbai, Hyderabad, Chennai, Bangalore, and Kochi.',
        tag: 'Deployment Map',
      },
      {
        url: '/projects/ebhoom-ota-device-updation.png',
        title: 'Over The Air (OTA) Edge Device Integration',
        caption:
          'EGL2 continuous monitoring device watching processes 24/7, surfacing local alarms, and streaming 7+ parameters continuously to the EBHOOM cloud platform.',
        tag: 'OTA Edge Device',
      },
      {
        url: '/projects/ebhoom-3d-water-twin.png',
        title: 'Water Management 3D Digital Twin',
        caption:
          'Interactive digital twin tracing water across 5 inlets through storage, sewage treatment (STP), and effluent discharge (ETP) with node flow metering.',
        tag: '3D Digital Twin',
      },
    ],
    isProtected: false,
    liveDemoUrl: 'https://ebhoom.com/',
    stats: [
      { label: 'Lighthouse Score', value: '98 / 100' },
      { label: 'TTFB Speed', value: '< 90ms' },
      { label: 'Device Support', value: '100% Responsive' },
      { label: 'Architecture', value: 'Next.js App Router' },
    ],
  },
  {
    id: 'interactive-3d-automotive',
    title: 'Interactive 3D Web & Automotive Showcase (Three.js & Bolt Architecture)',
    shortTitle: 'Interactive 3D & Automotive Showcase',
    type: 'Interactive Web Experience & Modern Fleet Showcase',
    badge: 'WebGL / Three.js & Modern UI Architecture',
    badgeColor: 'purple',
    summary:
      'High-end interactive automotive web experience featuring luxury vehicle showcases, dynamic fleet booking catalogs (Porsche, Audi R8, Ferrari), and immersive 3D Digital Twin architectural models built with Three.js, React, and Bolt.',
    highlights: [
      'Engineered luxury automotive web experience ("More than a rental. A feeling") with high-contrast typography, interactive vehicle specs, and seamless booking flows.',
      'Built dynamic supercar reservation catalog featuring Porsche 911 Carrera, Audi R8 V10 Performance, and Ferrari Portofino M with live daily rates and availability indicators.',
      'Integrated 3D WebGL Digital Twin architectural models from the Ebhoom engineering suite, rendering multi-node isometric pipelines with 60 FPS performance.',
      'Leveraged modern component-driven modular UI architecture for fluid transitions, zero layout shifts, and mobile responsiveness.',
    ],
    techStack: [
      'Three.js',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'WebGL',
      'Bolt Architecture',
    ],
    architecture: {
      problem:
        'Luxury automotive services and industrial operations require immersive, high-framerate interactive visuals to showcase engineering elegance and multi-node telemetry without compromising load times.',
      solution:
        'Engineered responsive WebGL scenes and lightweight component-based booking grids that render smoothly across desktop and mobile browsers at a locked 60 FPS.',
      keyComponents: [
        'Hardware-Accelerated WebGL Rendering Canvas',
        'Dynamic Vehicle Spec & Reservation Component Architecture',
        '3D Multi-Node Digital Twin Pipe Flow Simulator',
        'Instant Availability Filter & Booking Modal Handler',
      ],
      databaseModel: [
        'VehicleFleet: { id, model, brand, category, dailyRateAED, availability, specs: { seats, luggage, transmission } }',
        'ReservationQueue: { bookingId, vehicleId, rentalPeriod, customerRef, status }',
      ],
      securityPatterns: [
        'Client-side hardware capability detection to automatically throttle canvas resolution if FPS drops',
        'Sanitized reservation payload validation with idempotent booking tokens',
      ],
      dataFlowSummary:
        'User Cursor / Selection -> Three.js Render Loop & State Store -> Interactive Catalog & Reservation Dispatch.',
    },
    screenshots: [
      {
        url: '/projects/car-rental-hero-showcase.png',
        title: 'Luxury Vehicle Hero Showcase ("More than a rental. A feeling")',
        caption:
          'High-impact luxury automotive experience with interactive typography, detailed vehicle specs, and modern design standards.',
        tag: 'Automotive Showcase',
      },
      {
        url: '/projects/car-fleet-booking-catalog.png',
        title: 'Interactive Supercar Fleet & Reservation Catalog',
        caption:
          'High-performance vehicle catalog featuring Porsche 911, Audi R8, and Ferrari with dynamic pricing, specifications, and instant booking modal.',
        tag: 'Fleet Catalog',
      },
      {
        url: '/projects/ebhoom-3d-water-twin.png',
        title: '3D Water Management Digital Twin',
        caption:
          'Interactive industrial 3D digital twin visualizing multi-node fluid flow, treatment processes, and monitoring stations.',
        tag: '3D Digital Twin',
      },
      {
        url: '/projects/ebhoom-ota-device-updation.png',
        title: 'Edge Device 3D Telemetry Render',
        caption:
          '3D hardware visual with live trend charts and continuous parameter telemetry.',
        tag: 'Device 3D Render',
      },
    ],
    isProtected: false,
    stats: [
      { label: 'Target Frame Rate', value: '60 FPS' },
      { label: 'Fleet Catalog', value: 'Interactive' },
      { label: 'Digital Twins', value: 'Multi-Node' },
      { label: 'Responsiveness', value: '100% Fluid' },
    ],
  },
];
