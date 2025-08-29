export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price?: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  image: string;
}