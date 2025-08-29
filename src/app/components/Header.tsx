import Link from 'next/link';
import { companyInfo } from '@/data/mockData';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            APT
          </div>
          <span className="text-xl font-bold text-gray-800">{companyInfo.name}</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/team" className="text-gray-600 hover:text-blue-600 transition-colors">Our Team</Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
        </nav>

        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;