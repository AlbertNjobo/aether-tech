import { motion } from 'framer-motion';
import { Users, Brain, Shield, BarChart, FileCode, Target, Zap, Globe } from 'lucide-react';

const teamMembers = [
  {
    role: "Chief Executive Officer (CEO)",
    name: "Selby Mashiki",
    icon: Target,
    desc: [
      "Provides overall vision, strategic direction, and leadership.",
      "Oversees product development, partnerships, and investor relations.",
      "Ensures alignment between business goals and technological innovation.",
      "Actively contributes to AI development as part of the AI Team."
    ]
  },
  {
    role: "Managing Director",
    name: "Tinodaishe Chipikiri",
    icon: Globe,
    desc: [
      "Manages day-to-day operations and ensures organizational efficiency.",
      "Coordinates between teams to guarantee project milestones are met.",
      "Leads strategic planning, resource allocation, and workflow optimization.",
      "Supports CEO in decision-making and stakeholder engagement."
    ]
  },
  {
    role: "Chief Operating Officer (COO)",
    name: "Seth Chishakwe",
    icon: Zap,
    desc: [
      "Responsible for operational execution and internal processes.",
      "Oversees project implementation, ensuring quality control.",
      "Monitors team performance and ensures tasks align with objectives.",
      "Implements operational strategies to scale the platform sustainably."
    ]
  },
  {
    role: "AI Lead Engineer",
    name: "Lionel Chikuku",
    icon: Brain,
    desc: [
      "Leads the AI development and technical direction of R3KON GPT.",
      "Designs models for cybersecurity analysis and threat detection.",
      "Guides AI Team on coding standards and model optimization.",
      "Ensures AI output is accurate, secure, and adaptive."
    ]
  },
  {
    role: "AI Team",
    name: "Core Development Unit",
    members: "Takudzwa Shereni, Mazvita Velah, Selby Mashiki, Tinodaishe Chipikiri, Marvel Lungu, Lawrence Njobo, Alleck Dube, Ryan Musuka, Sinqobile Dube",
    icon: FileCode,
    desc: [
      "Develops and trains AI models, algorithms, and cybersecurity solutions.",
      "Conducts data preprocessing, feature engineering, and model testing.",
      "Collaborates with Lionel to ensure AI modules meet standards.",
      "Integrates AI functionality into the platform."
    ]
  },
  {
    role: "Data Analytics",
    name: "Alleck Dube & Ryan Musuka",
    icon: BarChart,
    desc: [
      "Analyze user data, cybersecurity threat patterns, and metrics.",
      "Provide actionable insights for AI model refinement.",
      "Support marketing and product teams with data-driven strategies.",
      "Track key performance indicators (KPIs)."
    ]
  },
  {
    role: "UI/UX Design",
    name: "Sinqobile Dube, Lawrence Njobo, Seth Chishakwe",
    icon: Users,
    desc: [
      "Design user interface and experience for accessibility.",
      "Create interactive dashboards, tutorials, and feedback systems.",
      "Conduct user testing to iterate designs.",
      "Integration of AI insights in a user-friendly way."
    ]
  },
  {
    role: "Marketing",
    name: "Mazvita Velah, Marvel Lungu, Tinodaishe Chipikiri",
    icon: Shield, // Using Shield as a placeholder or maybe Megaphone if available
    desc: [
      "Develop and execute branding, outreach, and promotional strategies.",
      "Manage social media, campaigns, and community engagement.",
      "Craft materials to showcase R3KON GPT’s value.",
      "Track engagement metrics and optimize marketing efforts."
    ]
  }
];

const TeamGrid = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#050B14]/80 backdrop-blur-md border border-[#00F0FF]/20 p-6 rounded-lg overflow-hidden hover:border-[#00F0FF]/60 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 text-[#00F0FF]">
                <member.icon size={24} />
                <h3 className="text-xl font-bold font-mono uppercase tracking-wider">{member.role}</h3>
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
              {member.members && (
                <p className="text-sm text-gray-400 mb-4 font-mono">{member.members}</p>
              )}
              
              <ul className="space-y-2 mt-4">
                {member.desc.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-[#00FF94] mt-1">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00F0FF]/20 group-hover:bg-[#00F0FF] transition-colors" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
