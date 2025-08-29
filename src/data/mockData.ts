import { TeamMember, Service, Testimonial } from '@/types';

export const companyInfo = {
  name: "Asri Panca Teknik",
  tagline: "Integrated Security Solutions Provider",
  logo: "https://media.licdn.com/dms/image/v2/C4D0BAQE3XQzms8_Rag/company-logo_200_200/company-logo_200_200/0/1630540201197/asri_panca_teknik_logo?e=2147483647&v=beta&t=qYS1hvglksrIpWIAjjAp9h7GXfWjiVWRKifrsLa_gno", 
  description: "Leading provider of cutting-edge technology solutions for businesses worldwide.",
  mission: "To empower businesses with innovative technology solutions that drive growth and efficiency.",
  history: "Founded in 2010, Asri Panca Teknik has been at the forefront of digital innovation. Our journey began with a small team of passionate developers and has grown into a multinational organization serving clients across various industries.",
  culture: "At Asri Panca Teknik, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our team members to think creatively and push the boundaries of what's possible with technology."
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO & Founder",
    bio: "John has over 15 years of experience in the tech industry. He founded NexTech with a vision to make advanced technology accessible to all businesses.",
    image: "/team/john-smith.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Sarah leads our technical team with expertise in cloud computing and AI. She holds a PhD in Computer Science from MIT.",
    image: "/team/sarah-johnson.jpg"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Lead Developer",
    bio: "Michael specializes in full-stack development and has contributed to numerous open-source projects.",
    image: "/team/michael-chen.jpg"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    bio: "Emily has a proven track record in building brand presence and driving growth through strategic marketing initiatives.",
    image: "/team/emily-rodriguez.jpg"
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Security Systems",
    description: "Custom security systems designed to protect your business assets and ensure safety.",
    price: "Starting at $5,000",
    image: "/services/web-dev.jpg"
  },
  {
    id: 2,
    title: "Technical Support Center",
    description: "24/7 technical support services to ensure your systems are always running smoothly.",
    price: "Starting at $8,000",
    image: "/services/mobile-dev.jpg"
  },
  {
    id: 3,
    title: "Inventory Monitoring & Control",
    description: "Real-time inventory tracking and management solutions to optimize your supply chain.",
    price: "Custom pricing",
    image: "/services/cloud-solutions.jpg"
  },
  {
    id: 4,
    title: "Cybersecurity Solutions",
    description: "Comprehensive cybersecurity services to protect your business from digital threats.",
    price: "Starting at $3,000",
    image: "/services/ui-ux-design.jpg"
  },
  {
    id: 5,
    title: "Airplane Parts Supplier",
    description: "High-quality airplane parts and components for the aviation industry.",
    price: "Custom pricing",
    image: "/services/airplane-parts.jpg"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert Williams",
    company: "TechGrowth Inc.",
    text: "Good Company",
    image: "/testimonials/robert-williams.jpg"
  },
  {
    id: 2,
    name: "Lisa Anderson",
    company: "Global Retail Corp",
    text: "Best vendor ever",
    image: "/testimonials/lisa-anderson.jpg"
  },
  {
    id: 3,
    name: "David Kim",
    company: "FinTech Solutions",
    text: "Great experience working with them",
    image: "/testimonials/david-kim.jpg"
  }
];