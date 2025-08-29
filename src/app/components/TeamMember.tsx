import { TeamMember } from '@/types';

interface TeamMemberProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
      <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
        {member.name.charAt(0)}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-blue-600 mb-3">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;