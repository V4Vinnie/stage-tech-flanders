import React, { useState } from 'react';

const StageTechFlanders = () => {
  const [hoveredGoal, setHoveredGoal] = useState(null);

  const Logo = ({ onCircleHover }) => (
    <svg className="logo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#FF8A65', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#E91E63', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#17A2B8', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#2962FF', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="grad3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#D81B60', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#8E24AA', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle 
        cx="200" 
        cy="100" 
        r="70" 
        fill="url(#grad1)" 
        opacity="0.9"
        style={{cursor: 'pointer', transition: 'opacity 0.3s'}}
        onMouseEnter={() => onCircleHover(0)}
        onMouseLeave={() => onCircleHover(null)}
      />
      <circle 
        cx="140" 
        cy="180" 
        r="70" 
        fill="url(#grad2)" 
        opacity="0.9"
        style={{cursor: 'pointer', transition: 'opacity 0.3s'}}
        onMouseEnter={() => onCircleHover(1)}
        onMouseLeave={() => onCircleHover(null)}
      />
      <circle 
        cx="260" 
        cy="180" 
        r="70" 
        fill="url(#grad3)" 
        opacity="0.9"
        style={{cursor: 'pointer', transition: 'opacity 0.3s'}}
        onMouseEnter={() => onCircleHover(2)}
        onMouseLeave={() => onCircleHover(null)}
      />
      <circle 
        cx="200" 
        cy="100" 
        r="30" 
        fill="white"
        style={{cursor: 'pointer', pointerEvents: 'none'}}
      />
      <circle 
        cx="140" 
        cy="180" 
        r="30" 
        fill="white"
        style={{cursor: 'pointer', pointerEvents: 'none'}}
      />
      <circle 
        cx="260" 
        cy="180" 
        r="30" 
        fill="white"
        style={{cursor: 'pointer', pointerEvents: 'none'}}
      />
    </svg>
  );

  const pillars = [
    {
      title: "Innovation Acceleration",
      description: "Supporting startups and scale-ups through tailored programs and partnerships with initiatives like Imec.Istart and Flanders DC."
    },
    {
      title: "Internationalization",
      description: "Leveraging flagship brands such as BARCO and Tomorrowland to showcase Flemish technology worldwide."
    },
    {
      title: "Education & Skills",
      description: "Developing new curricula and lifelong learning opportunities for emerging Stage Tech careers."
    }
  ];

  const roadmaps = [
    {
      title: "1. 3D Capture & Holographic Visualization",
      description: "Bringing volumetric imaging and holographic projection to live events."
    },
    {
      title: "2. Localized Immersion",
      description: "Creating interactive, immersive experiences for audiences."
    },
    {
      title: "3. Modularity & Logistics",
      description: "Designing transportable, scalable stage solutions powered by digital twins and XR."
    }
  ];

  const goals = [
    "StageTech Flanders is an innovative program designed to foster and maximize cross-pollination between creation, exploitation, and technology within the performing arts and experiential sectors. By bridging the gap between artistic vision and technological advancement, the program aims to elevate the quality and impact of live performances and immersive experiences.",
    "At its core, StageTech Flanders establishes a network of performance venues—referred to as 'stages'—where content creators gain access to cutting-edge technology for experimentation and validation. This initiative thrives on close collaboration with both the tech companies driving these innovations and the venue operators themselves. Each location within the network specializes in distinct forms of content, such as spatial audio, dance, virtual reality, or projection, and is connected with businesses and academic institutions that possess expertise in these areas.",
    "The network will launch in 2026 with four pilot locations across Flanders. Over the following years, it will expand by adding existing sites, and from 2028 onward, a new location in the Rupel region will be incorporated. This growth will create a complementary ecosystem of venues that collectively cover all stages of experimentation and validation—from initial concept to full implementation."
  ];

  return (
    <div className="min-h-screen p-5 md:p-10" style={{backgroundColor: '#3B82F6'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          color: white;
        }
        
        p, h1, h2, h3, h4, h5, h6, span, div, a, li {
          color: white;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .logo {
          max-width: 280px;
          width: 100%;
          margin: 0 auto 2px;
          display: block;
          filter: drop-shadow(0 10px 30px rgba(0,0,0,0.2));
        }
        
        .header-title {
          text-align: center;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
        
        .header-subtitle {
          text-align: center;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          display: block;
        }
        
        .header-with-bg {
          position: relative;
        }
        
        .header-with-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: hue-rotate(180deg) saturate(1.1);
          z-index: 0;
        }
        
        .header-content {
          position: relative;
          z-index: 20;
        }
        
        .header-nav {
          position: relative;
          z-index: 20;
        }
        
        .nav-column-vision {
          background: #6366f1;
        }
        
        .nav-column-vision:hover {
          background: #4f46e5;
        }
        
        .nav-column-goal {
          background: #6366f1;
        }
        
        .nav-column-goal:hover {
          background: #4f46e5;
        }
        
        .nav-column-pillars {
          background: #6366f1;
        }
        
        .nav-column-pillars:hover {
          background: #4f46e5;
        }
        
        .nav-column-roadmaps {
          background: #6366f1;
        }
        
        .nav-column-roadmaps:hover {
          background: #4f46e5;
        }
        
        .nav-column-why {
          background: #6366f1;
        }
        
        .nav-column-why:hover {
          background: #4f46e5;
        }
        
        .nav-column-vision a,
        .nav-column-goal a,
        .nav-column-pillars a,
        .nav-column-roadmaps a,
        .nav-column-why a {
          background: transparent !important;
        }
        
        
        .pillar-card {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .pillar-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #17a2b8, #667eea, #e91e63);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .pillar-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-color: #667eea;
        }
        
        .pillar-card:hover::before {
          transform: scaleX(1);
        }
        
        .goal-item {
          transition: all 0.3s ease;
        }
        
        .goal-item.highlighted {
          background-color: #818cf8 !important;
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
          border-left-width: 6px;
        }
        
        .roadmaps-container {
          position: relative;
          min-height: 400px;
        }
        
        .roadmap-arrow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }
        
        .roadmap-arrow svg {
          width: 100%;
          height: 100%;
        }
        
        .roadmap-item {
          position: relative;
          z-index: 2;
        }
      `}</style>
      
        {/* Header */}
      <div className="relative">
        {/* Background Image Options - Replace the URL below with any of these alternatives:
          1. Current: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80)' - Stage/Performance
          2. Concert Stage: 'url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80)' - Concert lighting
          3. Tech Stage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80)' - Festival stage
          4. LED Screen: 'url(https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80)' - LED display technology
          5. Hologram: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80)' - Holographic technology
          6. Stage Lights: 'url(https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=1200&q=80)' - Stage lighting effects
          7. Arena: 'url(https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1200&q=80)' - Large venue
          8. Abstract Tech: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80)' - Abstract technology
        */}
        <div 
          className="relative px-12 pt-16 pb-0 text-center overflow-hidden header-with-bg max-w-4xl mx-auto"
          style={{
            minHeight: '500px',
            borderBottom: '4px solid white'
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 opacity-40 z-0"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-blue-600/30 z-0"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
          <div className="header-content w-full flex flex-col items-center justify-center pb-4">
          <Logo />
            <h1 className="header-title text-white text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg" style={{marginTop: '-5px', marginBottom: '0', color: 'white'}}>
              StageTech Flanders
            </h1>
            <h2 className="header-subtitle text-white text-sm md:text-base font-semibold drop-shadow-lg" style={{color: 'white', marginTop: '8px'}}>
            Positioning Flanders as a Global Leader in Stage Innovation
            </h2>
          </div>
        </div>
      </div>
      <nav className="header-nav bg-white" style={{zIndex: 20, width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', display: 'flex', flexDirection: 'row'}}>
        <div className="nav-column-vision flex flex-col" style={{width: '20%', flex: '1 1 20%', minWidth: 0}}>
          <a href="#vision" className="font-semibold transition-all border-r border-white/20 flex items-center justify-center" style={{padding: '16px 0', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <svg className="mx-auto" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" style={{width: '32px', height: '32px', color: 'white', display: 'block'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </a>
          <a href="#vision" className="font-semibold transition-all border-r border-white/20 flex items-center justify-center" style={{padding: '12px 0', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span className="text-sm font-medium text-white" style={{color: 'white', textAlign: 'center'}}>Vision</span>
          </a>
        </div>
        <div className="nav-column-goal flex flex-col" style={{width: '20%', flex: '1 1 20%', minWidth: 0}}>
          <a href="#goal" className="font-semibold transition-all border-r border-white/20 flex items-center justify-center" style={{padding: '16px 0', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <svg className="mx-auto" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" style={{width: '32px', height: '32px', color: 'white', display: 'block'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </a>
          <a href="#goal" className="font-semibold transition-all border-r border-white/20 flex items-center justify-center" style={{padding: '12px 0', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span className="text-sm font-medium text-white" style={{color: 'white', textAlign: 'center'}}>Goal</span>
          </a>
        </div>
        <div className="nav-column-pillars flex flex-col" style={{width: '20%', flex: '1 1 20%', minWidth: 0}}>
          <a href="#pillars" className="font-semibold transition-all border-r border-white/20 flex items-center justify-center" style={{padding: '16px 0', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <svg className="mx-auto" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" style={{width: '32px', height: '32px', color: 'white', display: 'block'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </a>
          <a href="#pillars" className="font-semibold transition-all border-r border-white/20 flex items-center justify-center" style={{padding: '12px 0', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span className="text-sm font-medium text-white" style={{color: 'white', textAlign: 'center'}}>Pillars</span>
          </a>
        </div>
        <div className="nav-column-roadmaps flex flex-col" style={{width: '20%', flex: '1 1 20%', minWidth: 0}}>
          <a href="#roadmaps" className="font-semibold transition-all border-r border-white/20 flex items-center justify-center" style={{padding: '16px 0', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <svg className="mx-auto" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" style={{width: '32px', height: '32px', color: 'white', display: 'block'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </a>
          <a href="#roadmaps" className="font-semibold transition-all border-r border-white/20 flex items-center justify-center" style={{padding: '12px 0', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span className="text-sm font-medium text-white" style={{color: 'white', textAlign: 'center'}}>Roadmaps</span>
          </a>
        </div>
        <div className="nav-column-why flex flex-col" style={{width: '20%', flex: '1 1 20%', minWidth: 0}}>
          <a href="#why-it-matters" className="font-semibold transition-all flex items-center justify-center" style={{padding: '16px 0', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <svg className="mx-auto" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" style={{width: '32px', height: '32px', color: 'white', display: 'block'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </a>
          <a href="#why-it-matters" className="font-semibold transition-all flex items-center justify-center" style={{padding: '12px 0', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span className="text-sm font-medium text-white" style={{color: 'white', textAlign: 'center'}}>Why It Matters</span>
          </a>
        </div>
      </nav>
      
      <div className="rounded-3xl overflow-hidden shadow-2xl" style={{backgroundColor: '#6366f1', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)'}}>

        {/* Content */}
        <div style={{backgroundColor: '#6366f1', width: 'calc(100vw - 7.5rem)', marginLeft: 'calc(-50vw + 50% + 3.75rem)', marginRight: 'calc(-50vw + 50% + 3.75rem)', paddingLeft: '1.25rem', paddingRight: '1.25rem', paddingTop: '2rem', paddingBottom: '2rem'}}>
          {/* Vision */}
          <div id="vision" className="p-8 rounded-2xl mb-10 border-l-4 border-white scroll-mt-8" style={{backgroundColor: '#6366f1'}}>
            <h2 className="text-white text-2xl font-bold mb-4">
              Our Vision
            </h2>
            <p className="text-white leading-relaxed">
              StageTech Flanders is a collaboration between the Flemish Government, imec, Ent.a and Howest, Thomas More, Ritcs, Luca School of Arts, PXL, AP Hogeschool.
              We aim to create a thriving ecosystem where technology and stage performances converge. We focus on technology that drives multi-person experiences, ranging from music festivals
              to immersive experiences.
              By fostering collaboration between research institutions, industry leaders, and creative talent, 
              Stage Tech Flanders wants to enable experimentation and validation of state-of-the-art technology for the entertainment industry.
            </p>
          </div>

          {/* Goal */}
          <div id="goal" className="scroll-mt-8 mb-10" style={{position: 'relative'}}>
            <h2 className="text-white text-2xl font-bold mb-6 pb-3 border-b-4 border-white inline-block">
              Goal
            </h2>
            
            <div style={{display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'center'}}>
              <div className="grid gap-4 mt-6" style={{flex: '1'}}>
              {goals.map((item, index) => (
                <div 
                  key={index} 
                  className={`goal-item p-5 rounded-xl border-l-4 border-white shadow-sm ${hoveredGoal === index ? 'highlighted' : ''}`}
                  style={{backgroundColor: '#6366f1'}}
                >
                  <p className="text-white font-medium text-sm">
                    <span className="mr-2">•</span>{item}
                  </p>
                </div>
              ))}
              </div>
              <div style={{flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Logo onCircleHover={setHoveredGoal} />
              </div>
            </div>
          </div>

          {/* Strategic Pillars */}
          <h2 id="pillars" className="text-white text-2xl font-bold mb-6 pb-3 border-b-4 border-white inline-block scroll-mt-8">
            Strategic Pillars
          </h2>
          
          <div style={{display: 'flex', flexDirection: 'row', gap: '1.5rem', marginTop: '2rem', marginBottom: '2.5rem'}}>
            {pillars.map((pillar, index) => (
              <div key={index} className="pillar-card p-8 rounded-2xl border-2 border-white" style={{backgroundColor: '#6366f1', flex: '1 1 0%', minWidth: 0}}>
                <h3 className="text-white text-lg font-bold mb-3">{pillar.title}</h3>
                <p className="text-white text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Research Roadmaps */}
          <h2 id="roadmaps" className="text-white text-2xl font-bold mb-6 pb-3 border-b-4 border-white inline-block scroll-mt-8">
            Research Roadmaps
          </h2>
          
          <div className="roadmaps-container" style={{position: 'relative', marginTop: '2rem', marginBottom: '4rem', minHeight: '450px'}}>
            <div className="roadmap-arrow" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
              <svg viewBox="0 0 1000 450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
                <defs>
                  <marker id="arrowhead-right" markerWidth="4" markerHeight="4" refX="3.67" refY="2" orient="auto">
                    <polygon points="0 0, 3.67 2, 0 4" fill="white" />
                  </marker>
                </defs>
                <path 
                  d="M 80 380 Q 250 250, 500 120 Q 750 60, 920 60" 
                  stroke="white" 
                  strokeWidth="10" 
                  fill="none" 
                  markerEnd="url(#arrowhead-right)"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div style={{position: 'relative', zIndex: 2, height: '100%'}}>
              {roadmaps.map((roadmap, index) => {
                // Positions aligned with the arrow path: M 80 380 Q 250 250, 500 120 Q 750 60, 920 60
                // Converting SVG coordinates (0-1000, 0-450) to percentages
                // Moving down: first 4 lines, second 10 lines, third 8 lines
                // First item left-aligned with title (0% left)
                const positions = [
                  { left: '0%', top: 'calc(84% + 4 * 1.5rem)' },      // 4 lines down, left-aligned with title
                  { left: '50%', top: 'calc(27% + 12 * 1.5rem)' },    // 12 lines down (10 + 2)
                  { right: '0%', top: 'calc(13% + 8 * 1.5rem)' }     // 8 lines down, right-aligned with body text margin
                ];
                return (
                  <div 
                    key={index} 
                    className="roadmap-item p-6 rounded-xl border-l-4 border-white" 
                    style={{
                      backgroundColor: '#6366f1', 
                      width: '28%',
                      position: 'absolute',
                      ...(positions[index].left !== undefined ? { left: positions[index].left } : {}),
                      ...(positions[index].right !== undefined ? { right: positions[index].right } : {}),
                      top: positions[index].top,
                      transform: index === 0 ? 'translateY(-50%)' : index === 2 ? 'translateX(0) translateY(-50%)' : 'translate(-50%, -50%)'
                    }}
                  >
                    <h4 className="text-white text-base font-bold mb-2">{roadmap.title}</h4>
                    <p className="text-white text-sm leading-relaxed">{roadmap.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why It Matters */}
          <div id="why-it-matters" className="text-white p-8 rounded-2xl mt-10 scroll-mt-8" style={{backgroundColor: '#6366f1'}}>
            <h2 className="text-white text-2xl font-bold mb-4">Why It Matters</h2>
            <p className="text-white leading-relaxed">
              The entertainment industry is evolving toward immersive, experience-driven formats. 
              Stage Tech Flanders ensures that Flanders leads this transformation, combining 
              technological excellence with creative vision.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <p className="text-white text-xl font-bold mb-4">
              Join us in shaping the future of stage technology.
            </p>
            <div className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg">
              #StageTechFlanders
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with Partner Logos */}
      <footer style={{backgroundColor: '#6366f1', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', padding: '3rem 1.25rem', borderTop: '2px solid rgba(255, 255, 255, 0.2)'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h3 className="text-white text-lg font-semibold mb-6 text-center">Our Partners</h3>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem 3rem'}}>
            {/* Partner logos - Replace src with actual logo image paths */}
            {/* Flemish Government */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', opacity: 0.9}}>
              <img src="/logos/flemish-government.svg" alt="Flemish Government" style={{height: '50px', filter: 'grayscale(100%) brightness(0) invert(1)', objectFit: 'contain'}} onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block';}} />
              <span className="text-white font-semibold text-sm" style={{display: 'none'}}>Flemish Government</span>
            </div>
            {/* imec */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', opacity: 0.9}}>
              <img src="/logos/imec.svg" alt="imec" style={{height: '50px', filter: 'grayscale(100%) brightness(0) invert(1)', objectFit: 'contain'}} onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block';}} />
              <span className="text-white font-semibold text-sm" style={{display: 'none'}}>imec</span>
            </div>
            {/* Ent.a */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', opacity: 0.9}}>
              <img src="/logos/enta.svg" alt="Ent.a" style={{height: '50px', filter: 'grayscale(100%) brightness(0) invert(1)', objectFit: 'contain'}} onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block';}} />
              <span className="text-white font-semibold text-sm" style={{display: 'none'}}>Ent.a</span>
            </div>
            {/* Howest */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', opacity: 0.9}}>
              <img src="/logos/howest.svg" alt="Howest" style={{height: '50px', filter: 'grayscale(100%) brightness(0) invert(1)', objectFit: 'contain'}} onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block';}} />
              <span className="text-white font-semibold text-sm" style={{display: 'none'}}>Howest</span>
            </div>
            {/* Thomas More */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', opacity: 0.9}}>
              <img src="/logos/thomas-more.svg" alt="Thomas More" style={{height: '50px', filter: 'grayscale(100%) brightness(0) invert(1)', objectFit: 'contain'}} onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block';}} />
              <span className="text-white font-semibold text-sm" style={{display: 'none'}}>Thomas More</span>
            </div>
            {/* Ritcs */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', opacity: 0.9}}>
              <img src="/logos/ritcs.svg" alt="Ritcs" style={{height: '50px', filter: 'grayscale(100%) brightness(0) invert(1)', objectFit: 'contain'}} onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block';}} />
              <span className="text-white font-semibold text-sm" style={{display: 'none'}}>Ritcs</span>
            </div>
            {/* Luca School of Arts */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', opacity: 0.9}}>
              <img src="/logos/luca.svg" alt="Luca School of Arts" style={{height: '50px', filter: 'grayscale(100%) brightness(0) invert(1)', objectFit: 'contain'}} onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block';}} />
              <span className="text-white font-semibold text-sm" style={{display: 'none'}}>Luca School of Arts</span>
            </div>
            {/* PXL */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', opacity: 0.9}}>
              <img src="/logos/pxl.svg" alt="PXL" style={{height: '50px', filter: 'grayscale(100%) brightness(0) invert(1)', objectFit: 'contain'}} onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block';}} />
              <span className="text-white font-semibold text-sm" style={{display: 'none'}}>PXL</span>
            </div>
            {/* AP Hogeschool */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', opacity: 0.9}}>
              <img src="/logos/ap-hogeschool.svg" alt="AP Hogeschool" style={{height: '50px', filter: 'grayscale(100%) brightness(0) invert(1)', objectFit: 'contain'}} onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block';}} />
              <span className="text-white font-semibold text-sm" style={{display: 'none'}}>AP Hogeschool</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StageTechFlanders;
