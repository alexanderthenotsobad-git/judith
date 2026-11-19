/**
 * All portfolio copy lives here so it is easy to update without touching layout.
 */

const asset = (file) => `${import.meta.env.BASE_URL}media/${file}`

export const images = {
  portrait: asset('portrait.webp'),
  logo3m: asset('3m-logo.webp'),
  logoAws: asset('aws-logo.webp'),
  logoUcla: asset('ucla-mark.webp'),
  logoAises: asset('aises-logo.webp'),
  logoAwsBuilders: asset('aws-builders-la.webp'),
  awsEvent1: asset('aws-event-1.webp'),
  awsEvent2: asset('aws-event-2.webp'),
  aisesEvent: asset('aises-event.webp'),
}

export const profile = {
  name: 'Judith Mitchell',
  firstName: 'Judith',
  lastName: 'Mitchell',
  title: 'Software Engineer · AWS APIs & Integrations',
  company: '3M',
  location: 'Los Angeles, California',
  workStyle: 'Remote at 3M',
  heroLead:
    'I build the APIs, event streams, and integrations that keep a global enterprise in sync — and I make room for the next generation of builders along the way.',
  eyebrow: 'Software Engineer at 3M',
  links: {
    linkedin: 'https://www.linkedin.com/in/judith-mitchell/',
  },
  about: [
    "I'm a software developer and technical leader focused on AWS-based APIs and enterprise integrations. In my current role at 3M, I work with large-scale systems — SAP, Salesforce, Power Automate, Snowflake, and internal applications — and I'm the primary owner of our team's Apache Kafka infrastructure.",
    "Beyond development, I partner with our architect and engineering leadership on architectural decisions and system design, and I lead knowledge-sharing sessions for the team. I enjoy mentoring newer developers and interns, and I'm committed to community and representation in tech.",
  ],
  quote:
    'I enjoy mentoring and helping newer developers and interns — and helping create pathways into technology careers.',
  quoteAttribution: 'Judith Mitchell',
}

export const stats = [
  { value: 4, suffix: '+', label: 'years building AWS integrations at 3M' },
  { value: 100, suffix: '+', label: 'production APIs maintained and enhanced' },
  { value: 255, suffix: 'K+', label: 'events a day flowing through Kafka' },
  { value: 250, suffix: '+', label: 'students reached through UCLA’s AIR project' },
]

export const skillGroups = {
  marquee: [
    'REST APIs',
    'Event-driven architecture',
    'Apache Kafka',
    'Amazon MSK',
    'AWS Lambda',
    'OAuth 2.0',
    'AWS IAM',
    'SAP',
    'Salesforce',
    'Snowflake',
    'Power Automate',
    'Enterprise integrations',
  ],
  about: [
    {
      icon: 'cloud',
      title: 'Cloud-native APIs',
      text: 'REST and event-driven services on AWS, with OAuth 2.0 and IAM enforcing access end to end.',
    },
    {
      icon: 'stream',
      title: 'Kafka & event streams',
      text: 'Amazon MSK topics, partitions, and ACLs — plus multi-region failover for high-volume pipelines.',
    },
    {
      icon: 'compass',
      title: 'Architecture partner',
      text: 'A technical partner to architects and engineering leadership on design decisions and system reviews.',
    },
    {
      icon: 'spark',
      title: 'Mentorship & community',
      text: 'Knowledge-sharing sessions, intern mentoring, and AISES pathways into STEM careers.',
    },
  ],
}

export const experience = [
  {
    id: '3m-se',
    company: '3M',
    logo: images.logo3m,
    logoAlt: '3M logo',
    logoFit: 'contain',
    role: 'Software Engineer',
    type: 'Full-time',
    period: 'Nov 2022 — Present',
    duration: '4 yrs 1 mo',
    location: 'Remote',
    current: true,
    bullets: [
      'Design and implement REST and event-driven AWS APIs that integrate SAP, Salesforce, Power Automate, Snowflake, and in-house applications — maintaining and enhancing 100+ APIs used across 3M.',
      'Own Apache Kafka / Amazon MSK infrastructure: topics, partitions, and ACLs for high-volume pipelines handling 255,000+ events per day, and currently leading failover design for a new MSK cluster in an additional AWS region.',
      'Secure internal and external integrations with OAuth 2.0 and AWS IAM, using fine-grained policies and token-based authentication.',
      'Serve as Scrum Master for the Integrations portfolio — sprint planning, standups, and gate reviews — while partnering with the team architect and engineering leadership on system design.',
      'Mentor newer developers and interns, and lead knowledge-sharing sessions across the team.',
    ],
    tags: ['AWS', 'Amazon MSK', 'Apache Kafka', 'OAuth 2.0', 'AWS IAM', 'SAP', 'Salesforce', 'Snowflake', 'Scrum'],
  },
  {
    id: '3m-intern',
    company: '3M',
    logo: images.logo3m,
    logoAlt: '3M logo',
    logoFit: 'contain',
    role: 'Intelligent Automation Solutions Intern',
    type: 'Internship',
    period: 'Jun 2022 — Aug 2022',
    duration: '3 mos',
    location: 'Minnesota, United States',
    bullets: [
      'Built an Intelligent Document Processing application on AWS Lambda, Amazon Textract (OCR), and Amazon Comprehend (NLP) to automate invoice data extraction for 3M’s Intelligent Automation Solutions team.',
    ],
    tags: ['AWS Lambda', 'Amazon Textract', 'Amazon Comprehend', 'Machine Learning'],
  },
  {
    id: 'aises-outreach',
    company: 'American Indian Science and Engineering Society',
    logo: images.logoAises,
    logoAlt: 'AISES logo',
    logoFit: 'contain',
    role: 'Outreach Coordinator',
    type: 'Part-time',
    period: 'Jun 2021 — Jun 2022',
    duration: '1 yr 1 mo',
    location: 'UCLA',
    bullets: [
      'Supported outreach and professional development for Indigenous students in STEM at AISES at UCLA.',
      'Shared my own path into software engineering to help students and early-career professionals find mentors, internships, and careers in tech.',
      'Part of the UCLA chapter recognized as AISES Professional Chapter of the Year at the 2021 AISES National Conference.',
    ],
    tags: ['Community Outreach', 'Mentorship', 'Professional Development'],
  },
  {
    id: 'ucla-air-director',
    company: 'UCLA Community Programs Office',
    logo: images.logoUcla,
    logoAlt: 'UCLA Bruins logo',
    logoFit: 'cover',
    role: 'AIR Assistant Project Director',
    type: 'Part-time',
    period: 'Jun 2019 — Jun 2022',
    duration: '3 yrs 1 mo',
    location: 'Los Angeles, California',
    bullets: [
      'Assistant project coordinator for UCLA’s American Indian Recruitment (AIR) project, working to increase admission of American Indian and Alaska Native students into higher education.',
      'Created higher education workshops for Native American high school seniors and K–12 tutoring programs — working with 60 seniors in 2020–21 and meeting with 250+ students in 2021–22.',
      'Prepared annual and summer budget proposals and projected costs for advertising, graphics, supplies, and transportation.',
      'Coordinated meetings and adapted affiliation agreements for each tutoring site, including COVID-19 safety requirements.',
    ],
    tags: ['Community Outreach', 'Program Coordination', 'Budget Proposals', 'Tutoring'],
  },
  {
    id: 'ucla-air-site',
    company: 'UCLA',
    logo: images.logoUcla,
    logoAlt: 'UCLA Bruins logo',
    logoFit: 'cover',
    role: 'AIR Site Coordinator',
    type: 'Part-time',
    period: 'Jan 2020 — Jun 2020',
    duration: '6 mos',
    location: 'UCLA',
    bullets: [
      'Site coordinator for UCLA’s American Indian Recruitment Project.',
      'Tutored mathematics, science, computer programming, and reading comprehension with the Pukuu Project, United American Indian Involvement, and the Ventura County Indian Education Program.',
      'Provided peer counseling for K–12 American Indian students, focused on academic, physical, emotional, and spiritual health.',
    ],
    tags: ['Tutoring', 'Peer Counseling', 'STEM Education'],
  },
]

export const community = {
  aws: {
    eyebrow: 'AWS Community',
    role: 'User Group Lead',
    title: 'AWS User Group Los Angeles',
    alias: 'AWS Builders LA',
    logo: images.logoAwsBuilders,
    logoAlt: 'AWS Builders LA user group crest',
    lead: 'I lead AWS Builders LA — the Los Angeles AWS user group — a community of builders, cloud enthusiasts, creators, and business leaders from across the city.',
    aboutUs:
      'AWS Builders LA is a dynamic community dedicated to bringing together AWS builders, enthusiasts, creators, and business leaders from across Los Angeles. Our mission is to foster new connections and partnerships through building and learning together. Whether you are a seasoned AWS expert, a co-founder, or a business professional using cloud tools for practical solutions, the group is a collaborative space to share knowledge and exchange ideas. Join us for meetups, hands-on workshops, and networking events as we explore the endless possibilities of AWS technology.',
    highlights: [
      'Hands-on AWS GameDays — hackathon-meets-workshop challenges with live leaderboards.',
      'Trivia and networking nights for every level, from first-time cloud learners to daily AWS users.',
      'Spotlighting women in tech, including the launch of the AWS Orange County Women in Tech group.',
    ],
    quote:
      'What a privilege it is to be part of such a wonderful community — connecting, sharing knowledge, and learning together.',
    photos: [
      {
        src: images.awsEvent1,
        alt: 'AWS GameDay participants posing together in a conference room in Santa Monica',
        caption: 'AWS GameDay · Amazon LAX10, Santa Monica',
        width: 1200,
        height: 803,
      },
      {
        src: images.awsEvent2,
        alt: 'Members of the Los Angeles AWS user group gathered after a community meetup',
        caption: 'LA AWS community night',
        width: 1200,
        height: 800,
      },
    ],
  },
  aises: {
    eyebrow: 'Giving Back',
    title: 'AISES',
    fullName: 'American Indian Science and Engineering Society',
    definition:
      'AISES is a national, nonprofit organization focused on substantially increasing the representation of American Indians, Alaska Natives, Native Hawaiians, Pacific Islanders, First Nations, and other Indigenous peoples of North America in science, technology, engineering, and math (STEM) studies and careers.',
    paragraphs: [
      'Through AISES I support Native American students and early-career professionals — sharing my experiences and helping create pathways into technology careers.',
      'I served as Outreach Coordinator for AISES at UCLA, the chapter recognized as AISES Professional Chapter of the Year at the 2021 AISES National Conference.',
    ],
    award: {
      title: 'Professional Chapter of the Year',
      detail: '2021 AISES National Conference · AISES at UCLA',
    },
    stat: { value: '445+', label: 'AISES chapters nationwide' },
    photo: {
      src: images.aisesEvent,
      alt: 'AISES at UCLA students standing together under the arched walkways on campus',
      caption: 'AISES at UCLA · Indigenous students in STEM',
    },
  },
}

export const education = {
  school: 'UCLA',
  logo: images.logoUcla,
  degree: "Bachelor's degree",
  field: 'Mathematics and Computer Science',
  years: '2018 — 2022',
  location: 'Los Angeles, California',
  highlights: [
    'Outreach Coordinator, AISES at UCLA',
    'Assistant Project Director, American Indian Recruitment Project',
  ],
}

export const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Apr 2026',
    expires: 'Apr 2029',
    status: 'Active',
    logo: images.logoAws,
    logoFit: 'cover',
    featured: true,
    skill: 'Amazon Web Services (AWS)',
  },
  {
    name: 'LFC104: Ethics for Open Source Development',
    issuer: 'The Linux Foundation',
    issued: 'Nov 2026',
    monogram: 'LF',
  },
  {
    name: 'LFC101: Inclusive Speaker Orientation',
    issuer: 'The Linux Foundation',
    issued: 'Sep 2026',
    monogram: 'LF',
  },
  {
    name: 'McKinsey.org Forward Program',
    issuer: 'McKinsey & Company',
    issued: 'Jul 2026',
    monogram: 'M',
  },
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'community', label: 'Community' },
  { id: 'credentials', label: 'Credentials' },
]
