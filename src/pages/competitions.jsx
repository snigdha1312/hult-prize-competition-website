import React from 'react';
import { 
  Users, Lightbulb, FileText, Mic, Trophy, ArrowRight, Target, UserCheck, ClipboardCheck, DollarSign, Globe, BookOpen, Calendar, CheckCircle
} from 'lucide-react';
import './competitions.css';

// Brand Colors
const PRIMARY_ACCENT = "#EC2088"; 
const SECONDARY_DARK = "#292563"; 

// Competition Tracks


// Competition Stages
const stages = [
  { title: "STAGE 1: Qualifiers", date: "September - February", description: "Thousands of student entrepreneurs pitch their ideas on campus or online." },
  { title: "STAGE 2: Nationals", date: "April - May", description: "Qualifying teams pitch at their national competition or equivalent online." },
  { title: "STAGE 3: Digital Incubator", date: "June - July", description: "National winners access mentors and resources to validate their startup." },
  { title: "STAGE 4: Global Accelerator", date: "August", description: "Top startups receive intensive mentorship and investor exposure in London." },
  { title: "STAGE 5: Global Finals", date: "September", description: "Finalists pitch globally for a chance to win $1M USD." },
];

// Local Timeline Events
const timelineEvents = [
  { date: "Jan 15", title: "Registration Opens", status: "Completed" },
  { date: "Feb 10", title: "Registration Closes", status: "Ongoing" },
  { date: "Feb 15", title: "Round 1: Idea Submission", status: "" },
  { date: "Mar 1", title: "Round 2: Pitch Presentation", status: "" },
  { date: "Mar 20", title: "Finals & Award Ceremony", status: "" },
];

// Eligibility & Rules
const eligibility = [
  "Current IITB students (UG/PG/PhD)",
  "Teams of 2-4 members",
  "One team per participant",
  "Original ideas only",
];

const keyRules = [
  "Submit original business ideas",
  "Attend all scheduled rounds",
  "Follow code of conduct",
  "Meet submission deadlines",
];

// Components
const SectionTitle = ({ children }) => <h2 className="section-title">{children}</h2>;

const StageCard = ({ title, date, description }) => (
  <div className="stage-card">
    <h3>{title}</h3>
    <div className="stage-date">{date}</div>
    <p>{description}</p>
  </div>
);

const TimelineItem = ({ date, title, status, isLast }) => {
  const completed = status === "Completed";
  const ongoing = status === "Ongoing";
  return (
    <div className="timeline-item">
      <div className="timeline-icon-wrapper">
        <div className={`timeline-icon ${completed ? 'completed' : ongoing ? 'ongoing' : ''}`}>
          {completed ? <CheckCircle size={16} /> : <Calendar size={16} />}
        </div>
        {!isLast && <div className="timeline-line"></div>}
      </div>
      <div className={`timeline-content ${ongoing ? 'ongoing' : ''}`}>
        <div className="timeline-header">
          <p className="timeline-date">{date}</p>
          {(completed || ongoing) && <span className={`timeline-status ${completed ? 'completed' : 'ongoing'}`}>{status}</span>}
        </div>
        <h3 className="timeline-title">{title}</h3>
      </div>
    </div>
  );
};

// Main Page
const Competitions = () => {
  return (
    <div className="competitions-page">
      {/* Hero */}
      <header className="hero-header">
        <h1>Hult Prize IITB Competition</h1>
        <p>The ultimate challenge in social entrepreneurship.</p>
      </header>

      <main>
        {/* Competition Journey */}
        <section className="journey-section">
          <SectionTitle>The Global Competition Journey</SectionTitle>
          <p className="journey-description">
            A Year of Global Competition. Teams receive mentorship and compete to win $1M in seed funding.
          </p>
          <div className="stage-grid">
            {stages.map((stage, idx) => <StageCard key={idx} {...stage} />)}
          </div>
        </section>

        {/* Competition Tracks */}
     

        {/* Local Timeline */}
        <section className="timeline-section">
          <SectionTitle>IITB Timeline & Key Dates</SectionTitle>
          <div className="timeline-container">
            {timelineEvents.map((event, idx) => (
              <TimelineItem key={idx} {...event} isLast={idx === timelineEvents.length - 1} />
            ))}
          </div>
        </section>

        {/* Eligibility & Rules */}
        <section className="eligibility-section">
          <SectionTitle>Eligibility & Key Rules</SectionTitle>
          <div className="eligibility-grid">
            <div className="eligibility-column">
              <h3>Eligibility</h3>
              <ul>
                {eligibility.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="eligibility-column">
              <h3>Key Rules</h3>
              <ul>
                {keyRules.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Ready to Compete?</h2>
          <p>Don't miss this opportunity to turn your innovative ideas into reality.</p>
          <button>Register Now</button>
        </section>
      </main>
    </div>
  );
};

export default Competitions;
