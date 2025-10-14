import React from 'react';
import "./howitworks.css";
import { 
  Users, Lightbulb, FileText, Mic, Trophy, Rocket, ArrowRight, Target, UserCheck, ClipboardCheck, DollarSign, Globe, BookOpen
} from 'lucide-react';


// Brand Colors
const PRIMARY_ACCENT = "#EC2088"; 
const SECONDARY_DARK = "#292563"; 

const detailedStages = [
  {
    number: 1,
    title: "Team Formation",
    description: "Form a team of 2-4 members from IITB. Diverse skills make stronger teams!",
    icon: Users,
    bullets: ["Register on the portal", "Fill team member details", "Receive confirmation email"]
  },
  {
    number: 2,
    title: "Idea Development",
    description: "Develop your innovative business idea addressing real-world problems.",
    icon: Lightbulb,
    bullets: ["Choose your competition track", "Research problem space", "Define unique value proposition"]
  },
  {
    number: 3,
    title: "Round 1: Submission",
    description: "Submit a detailed business proposal outlining your solution.",
    icon: FileText,
    bullets: ["Executive summary (500 words)", "Market analysis and opportunity", "Business model and revenue streams", "Team background and roles"]
  },
  {
    number: 4,
    title: "Round 2: Pitch",
    description: "Top 18 teams present their ideas to judges and mentors.",
    icon: Mic,
    bullets: ["10-minute pitch presentation", "5-minute Q&A session", "Feedback from industry experts", "Networking with mentors"]
  },
  {
    number: 5,
    title: "Finals",
    description: "Top 5 teams compete in the grand finale with live pitches.",
    icon: Trophy,
    bullets: ["15-minute comprehensive presentation", "Live demo (if applicable)", "Panel of investors and judges", "Immediate feedback and results"]
  },
  {
    number: 6,
    title: "Post-Competition",
    description: "Winners receive funding, mentorship, and incubation support.",
    icon: Rocket,
    bullets: ["Seed funding disbursement", "Access to Incubation facilities", "Ongoing mentorship program", "Investor network connections"]
  }
];

const TimelineItem = ({ stage, index }) => {
  const IconComponent = stage.icon;
  const isEven = index % 2 === 1;

  return (
    <div className={`timeline-item ${isEven ? 'timeline-item-right' : 'timeline-item-left'}`}>
      <div className="timeline-card">
        <h3>{stage.number}. {stage.title}</h3>
        <p>{stage.description}</p>
        <ul>
          {stage.bullets.map((bullet, idx) => (
            <li key={idx}>
              <ArrowRight size={16} /> {bullet}
            </li>
          ))}
        </ul>
      </div>
      <div className="timeline-marker">
        <IconComponent size={24} />
      </div>
    </div>
  );
};

const InfoBlock = ({ title, content, icon: Icon, imageSrc, list, isImageRight }) => (
  <section className={`info-block ${isImageRight ? 'image-right' : ''}`}>
    <div className="info-text">
      {Icon && <Icon size={32} style={{ color: PRIMARY_ACCENT }} />}
      <h2>{title}</h2>
      <p>{content}</p>
      {list && (
        <ul>
          {list.map((item, idx) => (
            <li key={idx}>
              <ArrowRight size={16} /> {item}
            </li>
          ))}
        </ul>
      )}
    </div>
    {imageSrc && (
      <div className="info-image">
        <img src={imageSrc} alt={title} onError={(e)=> e.target.src='https://placehold.co/600x400/36454F/FFFFFF?text=Hult+Prize+Activity'} />
      </div>
    )}
  </section>
);

const HowItWorks = () => (
  <div className="competitions-page">
    <header className="hero-header">
      <h2>Hult Prize Challenge 2025</h2>
      
      <p>Your journey to win $1M USD in seed funding starts here.</p>
    </header>

    <main>
      <h2 className="section-title">How It Works</h2>

      <InfoBlock
        title="The Hult Prize Challenge"
        content="The Hult Prize challenges students to launch for-profit startups that support at least one UN Sustainable Development Goal (SDG)."
        icon={Trophy}
        imageSrc={`https://placehold.co/600x400/${PRIMARY_ACCENT.substring(1)}/ffffff?text=1+Million+Prize`}
      />

      <InfoBlock
        title="Who is eligible to compete?"
        content="We welcome teams of 2-4 students from almost every country in the world who meet the following criteria:"
        icon={UserCheck}
        imageSrc={`https://placehold.co/600x400/${SECONDARY_DARK.substring(1)}/FFFFFF?text=Eligible+Students`}
        list={[
          "At least 18 years of age",
          "Enrolled in degree program",
          "Pitching a for-profit business supporting at least one SDG"
        ]}
        isImageRight
      />

      <h2 className="section-title">Detailed Competition Stages</h2>
      <div className="timeline">
        {detailedStages.map((stage, idx) => (
          <TimelineItem key={stage.number} stage={stage} index={idx} />
        ))}
      </div>
    </main>
  </div>
);

export default HowItWorks;
