// HultPrizeLanding.jsx (React Component)
import './home.css'
import React, { useState, useEffect } from 'react';
// import './HultPrizeStyle.css'; // Assume the CSS is imported

const heroImages = [
  { id: 1, url: "../assets/hult.jpg", alt: 'Hult Prize winners celebrating' },] //   { id: 2, url: 'image-url-2.jpg', alt: 'Hult Prize event networking' },   //   { id: 3, url: 'image-url-3.jpg', alt: 'Hult Prize judges panel' },      //   { id: 4, url: 'image-url-4.jpg', alt: 'Student founders at work' },     // ];

// Helper component for the fading images
const FadingHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      <div className="hero-bg-fade"></div>
      {heroImages.map((img, index) => (
        <div
          key={img.id}
          className="hero-image"
          style={{
            backgroundImage: `url(${img.url})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
          aria-label={img.alt}
          role="img"
        >
          {/* Use Image Tags to represent the required images for the fade effect */}
          {index === 0 && <span style={{display: 'none'}}></span>}
          {index === 1 && <span style={{display: 'none'}}></span>}
          {index === 2 && <span style={{display: 'none'}}></span>}
          {index === 3 && <span style={{display: 'none'}}></span>}
        </div>
      ))}
      <div className="hero-content">
        <h1>Changing the World Through Social Enterprise.</h1>
        <p>Hult Prize: The world's largest engine for the launch of for-good, for-profit startups from students.</p>
        <a href="#competition" className="cta-button">Start Your Journey</a>
      </div>
    </div>
  );
};

// Main component
const HultPrizeLanding = () => {
  return (
    <>
      <header className="header">
        <div className="logo-text">HULT PRIZE</div>
        <nav>
          <a href="#nationals" className="cta-button" style={{backgroundColor: 'var(--color-heritage)'}}>IIT Bombay Nationals 2025</a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <FadingHero />

        {/* SOCIAL ENTERPRISE MISSION SECTION */}
        <section className="social-enterprise-mission" id="mission">
          <div className="container mission-content">
            <div className="mission-text">
              <h2>Launching Ideas That Change the World</h2>
              <p>The Hult Prize is a global startup program that challenges young people to build **for-profit businesses** that create measurable **social and environmental impact.</p>
             <p>Since 2010, it has grown into one of the world’s largest student movements for social entrepreneurship, engaging millions of participants in more than 130 countries. We seek to harness innovative ideas and entrepreneurial spirit to tackle the world's most pressing social challenges.</p>
              <a href="#competition" className="cta-button" style={{backgroundColor: 'var(--color-purple)'}}>Learn The Challenge</a>
            </div>
            <div className="mission-graphic">
              <p>Hult Prize: Unity, Progress, and the Power of Collective Impact.</p>
              <span style={{display: 'none'}}></span>
            </div>
          </div>
        </section>

        <hr />

        {/* IIT BOMBAY NATIONALS SECTION */}
        <section className="iit-bombay-nationals" id="nationals">
          <div className="container">
            <h2 className="text-center">IIT Bombay Hosts Hult Prize India Nationals 2025</h2>
            <p className="text-center date">March 29 - 30, 2025</p>

            <div className="nationals-content">
              <div className="main-article">
                [cite_start]<p>IIT Bombay recently hosted the Hult Prize India Nationals 2025 on **March 29 and 30, 2025**, bringing together over **60 student-led startups** from across India to compete for a spot in the global finals[cite: 4, 10]. Focused on driving sustainable social impact, the event showcased entrepreneurial ideas aimed at creating a better future.</p>
                <img src="telegraph-india-courtesy-1.jpg" alt="IIT Bombay Deputy Director addressing Hult Prize event" className="article-image"/>
                <span style={{display: 'none'}}></span>
                <div className="article-text">
                  <p>The event, focused on driving sustainable social impact, featured addresses by **Prof. [cite_start]Milind Atrey**, Deputy Director (Academics, Research and Translation)[cite: 4, 10]. Showing the global importance of the event, **Ms. [cite_start]Lori van Dam**, CEO of the Hult Prize Foundation, flew in from Boston to support the Indian chapter[cite: 4, 10].</p>
                  <p>The program, anchored by Prof. Sankalp Pratap, featured a powerful keynote by **Prof. Kavi Arya** from IIT Bombay’s e-Yantra spotlighting the transformative power of tech-driven social innovation, and a fireside chat with **Mr. [cite_start]Nikhil Nahar**, Co-founder of SolarSquare Energy, on building scalable ventures in sustainability[cite: 4, 10].</p>
                  <p>After a rigorous evaluation, **eight finalists** were selected. **Prof. Krishna P. Kaliappan**, Dean – Strategy, IIT Bombay, announced **Team Altheros** as the national winner. [cite_start]Their innovative and scalable solution earned them the honour of representing India at the global finals in London[cite: 4, 10]. [cite_start]The winning team will compete in the global accelerator program for the ultimate prize: a **$1 million equity-free grant** to launch their social enterprise[cite: 4].</p>
                  [cite_start]<p>By hosting the Hult Prize India Nationals 2025, IIT Bombay reaffirmed its role as a catalyst for innovation and social entrepreneurship, actively nurturing ideas that aim to solve some of the world’s most pressing challenges[cite: 4].</p>
                </div>
              </div>

              <div className="judges-panel">
                <img src="telegraph-india-courtesy-2.jpg" alt="Hult Prize India Nationals Judges Panel" className="article-image"/>
                <span style={{display: 'none'}}></span>
                <h3>Distinguished Judging Panel</h3>
                [cite_start]<p>The competition was judged by a panel of CSR leaders, entrepreneurs, and changemakers/impact investors[cite: 4, 10], including:</p>
                <ul>
                  <li><strong>Mr. [cite_start]Ajay Popat</strong> (President, Ion Exchange India Ltd) [cite: 4, 10]</li>
                  <li><strong>Ms. [cite_start]Ruchi Jain</strong> (Founder, Taru Naturals) [cite: 4, 10]</li>
                  <li><strong>Mr. [cite_start]Deval Sanghavi</strong> (Co-Founder, Dasra) [cite: 4, 10]</li>
                  <li><strong>Ms. [cite_start]Poyni Bhatt</strong> (Former CEO, SINE IIT Bombay) [cite: 4, 10]</li>
                  <li><strong>Mr. [cite_start]Anil Nair</strong> (CEO, St. Jude India ChildCare Centres) [cite: 4, 10]</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr />

        {/* COMPETITION JOURNEY STATS */}
        <section className="competition-journey" id="competition">
          <div className="container text-center journey-header">
            <h2>Join the World's Largest Student Startup Competition</h2>
            <p>Through our annual competition, students build, scale, and pitch innovative startups, with the winning team receiving **$1M USD** in funding to take their business to the next level.</p>
            <h3>The Competition Journey</h3>
          </div>
          <div className="container stats-grid">
            <div className="stat-item">
              <div className="stat-number">130+</div>
              [cite_start]<div className="stat-label">Participating Countries [cite: 4]</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              [cite_start]<div className="stat-label">Entrepreneurs [cite: 4]</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200K+</div>
              [cite_start]<div className="stat-label">Annual Participants [cite: 5]</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$1M USD</div>
              [cite_start]<div className="stat-label">Annual Prize Funding [cite: 4]</div>
            </div>
          </div>
        </section>

        {/* WINNERS/FINALISTS SECTION (Placeholder - content not provided) */}
        {/* <section className="winners-finalists">
          <div className="container">
            <h2 className="text-center">Global Finalists & Past Winners</h2>
            <p className="text-center">Highlighting the teams that have gone on to create massive global impact.</p>
          </div>
        </section> */}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hult Prize. All rights reserved.</p>
          [cite_start]<p>Contact for Guidelines: <a href="mailto:hpbrand@hultprize.org">hpbrand@hultprize.org</a> [cite: 136]</p>
          [cite_start]<p>Designed in accordance with the Hult Prize Qualifiers Brand and Visual Identity Standards[cite: 3, 4, 5].</p>
        </div>
      </footer>
    </>
  );
};

export default HultPrizeLanding;