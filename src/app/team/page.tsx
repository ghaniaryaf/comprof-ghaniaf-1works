"use client"
import { teamMembers } from '@/data/mockData';
import TeamMember from '../components/TeamMember';

const TeamPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Team</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Meet the talented individuals who make our company great. Our team brings together diverse expertise and a shared passion for innovation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Join Our Team</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            We&#39;re always looking for talented individuals to join our growing team. If you&#39;re passionate about technology and innovation, we&#39;d love to hear from you.
          </p>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" onClick={() => window.location.href = 'https://www.linkedin.com/'}>
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;