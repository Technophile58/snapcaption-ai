// import React from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <section className="hero-section fade-in">
//       <div className="hero-content slide-up">
//         <h1 className="hero-title fade-in">
//           👋 Welcome to <br />
//           <span className="hero-highlight floating">SnapCaption AI 🤖✨</span>
//         </h1>

//         <p className="hero-description slide-up">
//           Turn your images into <b>smart, meaningful, beautifully written captions</b> 
//           in seconds using the power of 
//           <span className="gemini"> Google Gemini AI 💬</span>.
//           No effort — just upload, click, and get creative captions instantly!
//         </p>

//         <p className="hero-tagline fade-in">
//           📸 Perfect for photographers, designers, students, creators & social media lovers.
//         </p>

//         <Link to="/login">
//           <button className="btn-primary hero-btn slide-up">🚀 Get Started</button>
//         </Link>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero-section fade-in">
      <div className="hero-content slide-up">

        <h1 className="hero-title fade-in">
          👋 Welcome to
          <br />
          <span className="hero-highlight floating">SnapCaption AI ✨</span>
        </h1>

        <p className="hero-subtext slide-up">
          Turn your images into <strong>smart, meaningful, beautifully written captions</strong>
          in seconds using <span className="gemini">Google Gemini AI 💬</span>.
        </p>

        <p className="hero-details fade-in">
          No effort — simply upload your image and get 
          <strong> creative, aesthetic captions instantly</strong>.
        </p>

        <p className="hero-smalltag fade-in">
          📸 Perfect for photographers, students, designers & social media creators.
        </p>

        <Link to="/login">
          <button className="btn-hero">🚀 Get Started</button>
        </Link>

      </div>
    </section>
  );
}
