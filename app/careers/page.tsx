"use client";

import { useState } from "react";
import Link from "next/link";

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      title: "Service Engineer",
      type: "Full Time",
      location: "India",
      description:
        "Installation, commissioning, troubleshooting and technical support for digital textile printing machines.",
    },
    {
      title: "Technical Support Executive",
      type: "Full Time",
      location: "Surat / West India",
      description:
        "Handle customer technical queries, machine problems, profile matching and coordinate with engineering teams.",
    },
    {
      title: "Sales Executive",
      type: "Full Time",
      location: "India",
      description:
        "Build customer relationships, understand printing requirements and provide suitable machine and ink solutions.",
    },
    {
      title: "Application & Color Specialist",
      type: "Full Time",
      location: "India",
      description:
        "Support customers with colour management, profiling, ink selection and print-quality optimisation.",
    },
  ];

  return (
    <main className="careersPage">

      {/* HERO */}
      <section className="careersHero">
        <div className="careerGlow glowOne"></div>
        <div className="careerGlow glowTwo"></div>

        <div className="careerHeroContent">
          <div className="careerEyebrow">
            NEXIX NX • CAREERS
          </div>

          <h1>
            Build The Future Of
            <br />
            <span>Digital Printing</span>
          </h1>

          <p>
            Join a growing team working with advanced digital printing
            machines, inks, engineering and technical support.
          </p>

          <div className="careerHeroButtons">
            <a href="#openings" className="careerPrimaryBtn">
              VIEW OPENINGS
              <span>→</span>
            </a>

            <a href="#apply" className="careerSecondaryBtn">
              APPLY NOW
            </a>
          </div>
        </div>

        <div className="careerOrb">
          <div className="orbRing ringOne"></div>
          <div className="orbRing ringTwo"></div>
          <div className="orbRing ringThree"></div>

          <div className="orbCore">
            <span>NX</span>
          </div>

          <div className="orbParticle particleOne"></div>
          <div className="orbParticle particleTwo"></div>
          <div className="orbParticle particleThree"></div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="whyJoin">
        <div className="sectionHeading">
          <span>WHY NEXIX NX</span>
          <h2>
            More Than A Job.
            <br />
            <strong>A Career In Technology.</strong>
          </h2>

          <p>
            We believe great people build great technology. Join us and
            become part of a team helping shape the future of digital
            printing.
          </p>
        </div>

        <div className="benefitGrid">

          <div className="benefitCard">
            <div className="benefitNumber">01</div>
            <div className="benefitIcon">⚙</div>
            <h3>Work With Technology</h3>
            <p>
              Work with modern digital printing machines, printheads,
              inks, colour management and advanced printing systems.
            </p>
          </div>

          <div className="benefitCard">
            <div className="benefitNumber">02</div>
            <div className="benefitIcon">↗</div>
            <h3>Grow With Us</h3>
            <p>
              Develop your technical, engineering, sales and customer
              management skills while working on real industry projects.
            </p>
          </div>

          <div className="benefitCard">
            <div className="benefitNumber">03</div>
            <div className="benefitIcon">◎</div>
            <h3>Global Exposure</h3>
            <p>
              Work with customers, suppliers and printing technologies
              connected to markets across India and around the world.
            </p>
          </div>

          <div className="benefitCard">
            <div className="benefitNumber">04</div>
            <div className="benefitIcon">◇</div>
            <h3>Build The Future</h3>
            <p>
              Be part of our long-term vision to develop machines and
              printing inks made in India for the global market.
            </p>
          </div>

        </div>
      </section>

      {/* OPENINGS */}
      <section className="careerOpenings" id="openings">

        <div className="sectionHeading">
          <span>CAREER OPPORTUNITIES</span>

          <h2>
            Find Your
            <br />
            <strong>Next Opportunity</strong>
          </h2>

          <p>
            Explore our current opportunities and find a role where your
            skills can make an impact.
          </p>
        </div>

        <div className="jobsGrid">

          {jobs.map((job, index) => (
            <div className="jobCard" key={job.title}>

              <div className="jobTop">
                <span className="jobNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="jobArrow">↗</span>
              </div>

              <div className="jobTags">
                <span>{job.type}</span>
                <span>{job.location}</span>
              </div>

              <h3>{job.title}</h3>

              <p>{job.description}</p>

              <a
                href="#apply"
                className="jobApply"
                onClick={() => {
                  const positionInput =
                    document.getElementById("position") as HTMLSelectElement;

                  if (positionInput) {
                    positionInput.value = job.title;
                  }
                }}
              >
                APPLY FOR THIS ROLE
                <span>→</span>
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* WORK WITH US */}
      <section className="careerStatement">

        <div className="statementGrid">

          <div>
            <span>OUR VISION</span>

            <h2>
              Printing Technology
              <br />
              <strong>Without Borders.</strong>
            </h2>
          </div>

          <div>
            <p>
              From machine installation and technical support to inks,
              colour management and future manufacturing, we are building
              a complete digital printing ecosystem.
            </p>

            <p>
              If you are passionate about technology, engineering,
              printing or customer solutions, we would love to hear from
              you.
            </p>
          </div>

        </div>

      </section>

      {/* APPLICATION FORM */}
      <section className="applicationSection" id="apply">

        <div className="applicationHeading">
          <span>JOIN NEXIX NX</span>

          <h2>
            Send Us Your
            <br />
            <strong>Application</strong>
          </h2>

          <p>
            Don't see the perfect opening? Send us your details anyway.
            We are always interested in meeting talented people.
          </p>
        </div>

        <div className="applicationBox">

          {submitted ? (
            <div className="successMessage">
              <div className="successIcon">✓</div>

              <h3>Application Received</h3>

              <p>
                Thank you for your interest in NEXIX NX. Our team will
                review your application and contact you if your profile
                matches an opportunity.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="careerSecondaryBtn"
              >
                SEND ANOTHER APPLICATION
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >

              <div className="formGrid">

                <div className="formGroup">
                  <label>FULL NAME *</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label>EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label>PHONE NUMBER *</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label>POSITION *</label>

                  <select id="position" required defaultValue="">
                    <option value="" disabled>
                      Select a position
                    </option>

                    <option value="Service Engineer">
                      Service Engineer
                    </option>

                    <option value="Technical Support Executive">
                      Technical Support Executive
                    </option>

                    <option value="Sales Executive">
                      Sales Executive
                    </option>

                    <option value="Application & Color Specialist">
                      Application & Color Specialist
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="formGroup">
                  <label>EXPERIENCE</label>

                  <select defaultValue="">
                    <option value="" disabled>
                      Select experience
                    </option>

                    <option value="Fresher">
                      Fresher
                    </option>

                    <option value="1-2 Years">
                      1–2 Years
                    </option>

                    <option value="3-5 Years">
                      3–5 Years
                    </option>

                    <option value="5+ Years">
                      5+ Years
                    </option>
                  </select>
                </div>

                <div className="formGroup">
                  <label>LOCATION</label>

                  <input
                    type="text"
                    placeholder="Your current city"
                  />
                </div>

                <div className="formGroup fullWidth">
                  <label>RESUME / CV</label>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                  />

                  <small>
                    PDF, DOC or DOCX • Recommended maximum size 5 MB
                  </small>
                </div>

                <div className="formGroup fullWidth">
                  <label>MESSAGE</label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about yourself, your experience and why you would like to join NEXIX NX..."
                  ></textarea>
                </div>

              </div>

              <button type="submit" className="submitApplication">
                SUBMIT APPLICATION
                <span>→</span>
              </button>

            </form>
          )}

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="careerCTA">

        <div>
          <span>NEXIX NX</span>

          <h2>
            Ready To Build
            <br />
            <strong>The Future?</strong>
          </h2>

          <p>
            Join us and grow with a company building the next generation
            of digital printing technology.
          </p>
        </div>

        <a href="#apply" className="careerPrimaryBtn">
          START YOUR JOURNEY
          <span>→</span>
        </a>

      </section>

      {/* FOOTER */}
      <footer className="careerFooter">

        <div className="footerBrand">
          <div className="footerLogo">
            NEXIX <span>NX</span>
          </div>

          <p>
            Printing Technology Without Borders
          </p>
        </div>

        <div className="footerLinks">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT US</Link>
          <Link href="/support">SUPPORT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>

        <div className="footerCopyright">
          © 2026 NEXIX NX. All Rights Reserved.
        </div>

      </footer>

      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .careersPage {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 20%, rgba(0, 170, 255, 0.09), transparent 30%),
            radial-gradient(circle at 80% 40%, rgba(220, 0, 150, 0.08), transparent 30%),
            #02050c;
          color: white;
          overflow: hidden;
        }

        .careersHero {
          min-height: 720px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 120px 9%;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .careerHeroContent {
          position: relative;
          z-index: 5;
          max-width: 720px;
        }

        .careerEyebrow,
        .sectionHeading > span,
        .applicationHeading > span,
        .statementGrid span,
        .careerCTA span {
          color: #65cfff;
          letter-spacing: 5px;
          font-size: 13px;
          font-weight: 800;
        }

        .careerHeroContent h1 {
          font-size: clamp(60px, 7vw, 110px);
          line-height: 0.95;
          margin: 25px 0;
          font-weight: 900;
          letter-spacing: -5px;
        }

        .careerHeroContent h1 span,
        .sectionHeading strong,
        .applicationHeading strong,
        .statementGrid strong,
        .careerCTA strong {
          background: linear-gradient(
            90deg,
            #39c8ff,
            #8664ff,
            #f02ca4
          );
          -webkit-background-clip: text;
          color: transparent;
        }

        .careerHeroContent p {
          color: #9ca9bd;
          font-size: 19px;
          line-height: 1.7;
          max-width: 650px;
        }

        .careerHeroButtons {
          display: flex;
          gap: 15px;
          margin-top: 35px;
          flex-wrap: wrap;
        }

        .careerPrimaryBtn,
        .careerSecondaryBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          min-height: 58px;
          padding: 0 30px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: 2px;
          font-size: 13px;
          transition: 0.3s ease;
          cursor: pointer;
          border: none;
        }

        .careerPrimaryBtn {
          color: white;
          background: linear-gradient(
            90deg,
            #1dbbff,
            #7659ff,
            #ed2b9c
          );
          box-shadow: 0 0 35px rgba(84, 120, 255, 0.25);
        }

        .careerPrimaryBtn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 45px rgba(85, 110, 255, 0.4);
        }

        .careerSecondaryBtn {
          color: white;
          border: 1px solid rgba(100,190,255,0.35);
          background: rgba(5,15,30,0.7);
        }

        .careerSecondaryBtn:hover {
          transform: translateY(-4px);
          border-color: #65cfff;
        }

        .careerOrb {
          width: 430px;
          height: 430px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .orbCore {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 35% 25%, #58dcff, #6e47ff 50%, #13051d);
          box-shadow:
            0 0 45px rgba(57,200,255,0.5),
            0 0 100px rgba(148,60,255,0.25);
          animation: floatCore 4s ease-in-out infinite;
          z-index: 5;
        }

        .orbCore span {
          font-size: 54px;
          font-weight: 900;
          letter-spacing: 5px;
        }

        .orbRing {
          position: absolute;
          border: 1px solid rgba(75,200,255,0.45);
          border-radius: 50%;
          transform-style: preserve-3d;
        }

        .ringOne {
          width: 310px;
          height: 120px;
          transform: rotateX(65deg) rotateZ(25deg);
          animation: rotateRing 7s linear infinite;
        }

        .ringTwo {
          width: 350px;
          height: 145px;
          transform: rotateX(65deg) rotateZ(-35deg);
          animation: rotateRingReverse 9s linear infinite;
        }

        .ringThree {
          width: 390px;
          height: 170px;
          transform: rotateY(65deg) rotateZ(15deg);
          animation: rotateRing 11s linear infinite;
        }

        .orbParticle {
          width: 9px;
          height: 9px;
          position: absolute;
          border-radius: 50%;
          background: #4dd8ff;
          box-shadow: 0 0 25px #4dd8ff;
        }

        .particleOne {
          top: 45px;
          right: 65px;
          animation: particleFloat 3s infinite;
        }

        .particleTwo {
          bottom: 65px;
          left: 70px;
          background: #f232b4;
          box-shadow: 0 0 25px #f232b4;
          animation: particleFloat 4s infinite reverse;
        }

        .particleThree {
          top: 170px;
          left: 10px;
          background: #8664ff;
          box-shadow: 0 0 25px #8664ff;
          animation: particleFloat 5s infinite;
        }

        .careerGlow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.12;
        }

        .glowOne {
          background: #00bfff;
          top: -200px;
          left: -200px;
        }

        .glowTwo {
          background: #d7009b;
          right: -200px;
          bottom: -200px;
        }

        .whyJoin,
        .careerOpenings,
        .applicationSection {
          padding: 120px 9%;
        }

        .sectionHeading {
          max-width: 760px;
          margin-bottom: 65px;
        }

        .sectionHeading h2,
        .applicationHeading h2 {
          font-size: clamp(45px, 5vw, 75px);
          line-height: 1;
          margin: 18px 0;
          letter-spacing: -3px;
        }

        .sectionHeading p,
        .applicationHeading p {
          color: #8996aa;
          line-height: 1.8;
          font-size: 17px;
        }

        .benefitGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .benefitCard {
          min-height: 330px;
          padding: 30px;
          position: relative;
          border: 1px solid rgba(100,170,255,0.15);
          border-radius: 18px;
          background:
            linear-gradient(
              145deg,
              rgba(18,35,65,0.75),
              rgba(5,10,20,0.8)
            );
          transform-style: preserve-3d;
          transition: 0.4s ease;
        }

        .benefitCard:hover {
          transform: translateY(-10px) rotateX(3deg) rotateY(-3deg);
          border-color: rgba(70,200,255,0.5);
          box-shadow: 0 25px 60px rgba(0,0,0,0.4);
        }

        .benefitNumber {
          position: absolute;
          right: 25px;
          top: 20px;
          color: #3c5879;
          font-size: 13px;
        }

        .benefitIcon {
          font-size: 38px;
          margin-bottom: 50px;
          color: #59d5ff;
        }

        .benefitCard h3 {
          font-size: 23px;
          margin-bottom: 15px;
        }

        .benefitCard p,
        .jobCard p,
        .statementGrid p {
          color: #8996aa;
          line-height: 1.7;
        }

        .careerOpenings {
          background: rgba(3,8,17,0.8);
        }

        .jobsGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .jobCard {
          padding: 35px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.09);
          background: linear-gradient(
            145deg,
            rgba(15,28,52,0.9),
            rgba(4,9,18,0.9)
          );
          transition: 0.4s ease;
        }

        .jobCard:hover {
          transform: translateY(-8px);
          border-color: rgba(235,55,180,0.5);
          box-shadow: 0 25px 70px rgba(0,0,0,0.4);
        }

        .jobTop {
          display: flex;
          justify-content: space-between;
        }

        .jobNumber {
          color: #53627a;
          letter-spacing: 3px;
        }

        .jobArrow {
          font-size: 25px;
          color: #61d4ff;
        }

        .jobTags {
          display: flex;
          gap: 8px;
          margin: 35px 0 20px;
          flex-wrap: wrap;
        }

        .jobTags span {
          padding: 7px 11px;
          border: 1px solid rgba(100,190,255,0.2);
          border-radius: 30px;
          color: #72cfff;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .jobCard h3 {
          font-size: 30px;
          margin-bottom: 15px;
        }

        .jobApply {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
          color: white;
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .jobApply span {
          color: #62d6ff;
          font-size: 18px;
        }

        .careerStatement {
          padding: 100px 9%;
          background:
            radial-gradient(circle at 50% 50%, rgba(91,70,255,0.12), transparent 55%);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .statementGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        .statementGrid h2 {
          font-size: clamp(45px, 5vw, 75px);
          line-height: 1;
          margin-top: 20px;
        }

        .statementGrid p {
          font-size: 18px;
          margin-bottom: 25px;
        }

        .applicationSection {
          background:
            radial-gradient(circle at 80% 30%, rgba(231,42,155,0.08), transparent 35%);
        }

        .applicationHeading {
          max-width: 700px;
          margin-bottom: 60px;
        }

        .applicationBox {
          max-width: 1050px;
          padding: 45px;
          border: 1px solid rgba(80,190,255,0.15);
          border-radius: 22px;
          background: rgba(7,15,28,0.8);
          box-shadow: 0 30px 100px rgba(0,0,0,0.35);
        }

        .formGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .formGroup {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .fullWidth {
          grid-column: 1 / -1;
        }

        .formGroup label {
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 800;
          color: #b4c0d2;
        }

        .formGroup input,
        .formGroup select,
        .formGroup textarea {
          width: 100%;
          border: 1px solid rgba(100,160,220,0.18);
          border-radius: 8px;
          padding: 16px;
          color: white;
          background: rgba(2,7,15,0.9);
          outline: none;
          font-size: 14px;
          transition: 0.25s ease;
        }

        .formGroup input:focus,
        .formGroup select:focus,
        .formGroup textarea:focus {
          border-color: #48cfff;
          box-shadow: 0 0 20px rgba(48,190,255,0.08);
        }

        .formGroup textarea {
          resize: vertical;
        }

        .formGroup small {
          color: #65758e;
          font-size: 11px;
        }

        .submitApplication {
          margin-top: 35px;
          border: none;
          border-radius: 8px;
          min-height: 58px;
          padding: 0 30px;
          color: white;
          background: linear-gradient(
            90deg,
            #21bcff,
            #7659ff,
            #ed2c9c
          );
          font-weight: 900;
          letter-spacing: 2px;
          cursor: pointer;
          display: flex;
          gap: 20px;
          align-items: center;
          transition: 0.3s ease;
        }

        .submitApplication:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(80,100,255,0.25);
        }

        .successMessage {
          text-align: center;
          padding: 70px 20px;
        }

        .successIcon {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          margin: 0 auto 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 35px;
          background: linear-gradient(135deg,#20c9ff,#8c4cff);
          box-shadow: 0 0 40px rgba(50,190,255,0.25);
        }

        .successMessage h3 {
          font-size: 30px;
        }

        .successMessage p {
          max-width: 600px;
          margin: 15px auto 30px;
          color: #8996aa;
          line-height: 1.7;
        }

        .careerCTA {
          margin: 0 5%;
          padding: 80px;
          border-radius: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          background:
            linear-gradient(
              120deg,
              rgba(15,75,110,0.65),
              rgba(62,25,90,0.65)
            );
          border: 1px solid rgba(90,200,255,0.2);
        }

        .careerCTA h2 {
          font-size: clamp(40px, 5vw, 70px);
          line-height: 1;
          margin: 18px 0;
        }

        .careerCTA p {
          color: #a5b1c4;
          max-width: 600px;
          line-height: 1.7;
        }

        .careerFooter {
          margin-top: 100px;
          padding: 50px 9%;
          border-top: 1px solid rgba(255,255,255,0.07);
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 30px;
          align-items: center;
        }

        .footerLogo {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .footerLogo span {
          background: linear-gradient(90deg,#4ecfff,#e52b9f);
          -webkit-background-clip: text;
          color: transparent;
        }

        .footerBrand p {
          color: #66758d;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .footerLinks {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .footerLinks a {
          color: #8996aa;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .footerLinks a:hover {
          color: #5fd4ff;
        }

        .footerCopyright {
          text-align: right;
          color: #56647a;
          font-size: 11px;
        }

        @keyframes floatCore {
          0%,100% {
            transform: translateY(0) rotateY(0deg);
          }

          50% {
            transform: translateY(-15px) rotateY(12deg);
          }
        }

        @keyframes rotateRing {
          from {
            transform: rotateX(65deg) rotateZ(0deg);
          }

          to {
            transform: rotateX(65deg) rotateZ(360deg);
          }
        }

        @keyframes rotateRingReverse {
          from {
            transform: rotateX(65deg) rotateZ(360deg);
          }

          to {
            transform: rotateX(65deg) rotateZ(0deg);
          }
        }

        @keyframes particleFloat {
          0%,100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }

          50% {
            transform: translateY(-25px) scale(1.5);
            opacity: 1;
          }
        }

        @media (max-width: 1000px) {

          .careerHero {
            flex-direction: column;
            text-align: center;
            gap: 70px;
          }

          .careerHeroContent p {
            margin-left: auto;
            margin-right: auto;
          }

          .careerHeroButtons {
            justify-content: center;
          }

          .benefitGrid {
            grid-template-columns: 1fr 1fr;
          }

          .statementGrid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .careerCTA {
            flex-direction: column;
            text-align: center;
          }

          .careerCTA p {
            margin-left: auto;
            margin-right: auto;
          }

          .careerFooter {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footerCopyright {
            text-align: center;
          }

        }

        @media (max-width: 650px) {

          .careersHero,
          .whyJoin,
          .careerOpenings,
          .applicationSection {
            padding: 80px 6%;
          }

          .careerHeroContent h1 {
            font-size: 58px;
            letter-spacing: -3px;
          }

          .careerOrb {
            transform: scale(0.75);
            margin-top: -50px;
          }

          .benefitGrid,
          .jobsGrid,
          .formGrid {
            grid-template-columns: 1fr;
          }

          .fullWidth {
            grid-column: auto;
          }

          .applicationBox {
            padding: 25px;
          }

          .careerCTA {
            margin: 0 5%;
            padding: 50px 25px;
          }

          .careerPrimaryBtn,
          .careerSecondaryBtn {
            width: 100%;
          }

        }

      `}</style>
    </main>
  );
}