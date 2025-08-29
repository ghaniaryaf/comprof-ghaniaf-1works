import { companyInfo, teamMembers } from '@/data/mockData';
import TeamMember from '../components/TeamMember';

const AboutPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">{companyInfo.history}</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultrices ultricies. 
                Sed tempor, nisl eget aliquam ultrices, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 aspect-video rounded-lg flex items-center justify-center text-white font-bold text-xl">
              HISTORY
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 aspect-video rounded-lg flex items-center justify-center text-white font-bold text-xl">
              CULTURE
            </div>
            <div>
              <p className="text-gray-600 mb-4">{companyInfo.culture}</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultrices ultricies. 
                Sed tempor, nisl eget aliquam ultrices, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;