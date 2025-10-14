import React from "react";
import "./team.css";
// src/pages/Team.jsx
import arya from "../assets/arya.jpg";
import AbhirajPatel from "../assets/ABHIRAJ-PATEL.jpg";
import AdityaJaswani from "../assets/ADITYA-JASWANI.jpg";
import Akshat from "../assets/AKSHAT.jpg";
import AnkitaMeena from "../assets/ANKITA-MEENA.jpg";
import AnujYadav from "../assets/ANUJ-YADAV.jpg";
import Bhoomi from "../assets/BHOOMI.jpg";
import GayatriKengua from "../assets/GAYATRI-KENGUA.jpg";
import JainamBhansali from "../assets/JAINAM-BHANSALI.jpg";
import OjasSomani from "../assets/OJAS-SOMANI.jpg";
import PradeepKumar from "../assets/PRADEEP-KUMAR.jpg";
import PriyankTalwar from "../assets/PRIYANK-TALWAR.jpg";
import ProfRameshKuruva from "../assets/PROF-RAMESH-KURUVA.jpg";
import ProfSankalpPratap from "../assets/PROF-SANKALP-PRATAP.jpg";
import RajuKumar from "../assets/RAJU-KUMAR.jpg";
import SajalBansal from "../assets/SAJAL-BANSAL.jpg";
import SanjayBisnoi from "../assets/SANJAY-BISNOI.jpg";
import Shruti from "../assets/SHRUTI.jpg";
import SiddhiJain from "../assets/SIDDHI-JAIN.jpg";
import Snigdha from "../assets/SNIGDHA.jpg";
import SoomritChattopadhyay from "../assets/SOOMRIT-CHATTOPADHYAY.jpg";
import VedantDeshmukh from "../assets/VEDANT-DESHMUKH.jpg";
import YaziniSathiamoorthy from "../assets/YAZINI-SATHIAMOORTHY.jpg";
import YuvrajVerma from "../assets/YUVRAJ-VERMA.jpg";

// dictionary
const teamMembers = [
    { name: "Prof Ramesh Kuruva", role: "Faculty Advisor", image: ProfRameshKuruva },
    { name: "Prof Sankalp Pratap", role: "Faculty Advisor", image: ProfSankalpPratap },
    { name: "Anuj Yadav", role: "Campus Director", image: AnujYadav },
    { name: "Priyank Talwar", role:"Deputy Director", image: PriyankTalwar },
    { name: "Akshat", role: "Events Manager", image: Akshat },
    { name: "Ojas Somani", role: "Marketing Manager", image: OjasSomani },
    { name: "Shruti", role: "Media & Web Manager", image: Shruti },
    { name: "Yuvraj Verma", role: "Partnership Manager", image: YuvrajVerma },
  { name: "Abhiraj Patel", role: "Media Cordinator", image: AbhirajPatel },
  { name: "Aditya Jaswani", role: "Marketing Cordinator", image: AdityaJaswani },
  { name: "Ankita Meena", role: "Marketing Cordinator", image: AnkitaMeena },
 
  { name: "Bhoomi", role: "Partnership Cordinator", image: Bhoomi },
  { name: "Gayatri Kengua", role: "Partnership Cordinator", image: GayatriKengua },
  { name: "Jainam Bhansali", role: "Marketing Cordinator", image: JainamBhansali },
  { name: "Ojas Somani", role: "Team Member", image: OjasSomani },
  { name: "Pradeep Kumar", role: "Events Cordinator", image: PradeepKumar },
  { name: "Arya Sarode", role: "Events Cordinator", image: arya },
  { name: "Raju Kumar", role: "Marketing Cordinator", image: RajuKumar },
  { name: "Sajal Bansal", role: "Events Cordinator", image: SajalBansal },
  { name: "Sanjay Bisnoi", role: "Partnership Cordinator", image: SanjayBisnoi },
  { name: "Shruti", role: "Team Member", image: Shruti },
  { name: "Siddhi Jain", role: "Marketing Cordinator", image: SiddhiJain },
  { name: "Snigdha", role: "Web Cordinator", image: Snigdha },
  { name: "Soomrit Chattopadhyay", role: "Media Cordinator", image: SoomritChattopadhyay },
  { name: "Vedant Deshmukh", role: "Marketing Cordinator", image: VedantDeshmukh },
  { name: "Yazini Sathiamoorthy", role: "Events Cordinator", image: YaziniSathiamoorthy },
];




const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>
      <p className="team-subtitle">
        Meet the dedicated team behind IITB's most exciting entrepreneurship
        competition
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-img" />
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-desc">{member.desc}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
