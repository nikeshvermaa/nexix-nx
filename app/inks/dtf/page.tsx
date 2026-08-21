"use client";

import Link from "next/link";

export default function DtfInkPage() {
  const product = {
    name: "NX-DTF Ink",
    description:
      "Made in Korea and engineered for reliable DTF garment printing with strong colour reproduction, excellent white coverage and consistent printhead performance.",
    colours: "CMYK + White",
    printheads: "Epson i3200",
    packaging: "1 L / 5 L",
    origin: "Made in Korea",
  };

  return (
    <main className="dtfPage">
      <div className="backgroundGlow glowCyan" />
      <div className="backgroundGlow glowMagenta" />

      {/* NAVIGATION */}
      <nav className="nav">
        <Link href="/inks" className="backLink">
          ← ALL INKS
        </Link>

        <div className="navBrand">
          <span>NX</span> INK TECHNOLOGY
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="heroLeft">
          <div className="eyebrow">DTF & GARMENT INKS</div>

          <h1>
            DTF
            <br />
            <span>Ink.</span>
          </h1>

          <p className="heroDescription">
            {product.description}
          </p>

          <div className="colorLine">
            <i className="cyan" />
            <i className="magenta" />
            <i className="yellow" />
            <i className="black" />
            <i className="white" />
          </div>

          <div className="buttons">
            <a href="#details" className="primaryButton">
              EXPLORE INK <span>→</span>
            </a>

            <a href="#details" className="secondaryButton">
              TECHNICAL DETAILS
            </a>
          </div>
        </div>

        {/* PRODUCT VISUAL */}
<div className="heroRight">
  <img
    src="/images/inks/dtf-bottles.png"
    alt="NX-DTF Ink"
    className="dtfBottleImage"
  />

  <div className="floatingColor c">
    C
  </div>

  <div className="floatingColor m">
    M
  </div>

  <div className="floatingColor w">
    W
  </div>
</div>
</section>
     {/* PRODUCT DETAILS */}
<section id="details" className="detailsSection">
  <div className="sectionTopLine">
    <div className="sectionNumber">01 / DTF TECHNOLOGY</div>
    <div className="sectionStatus">
      <span className="statusDot" />
      PREMIUM GARMENT INK
    </div>
  </div>

  <div className="detailsHeader">
    <div>
      <span className="sectionEyebrow">NX-DTF TECHNOLOGY</span>

      <h2>
        Built for
        <br />
        <span>powerful prints.</span>
      </h2>
    </div>

    <p>
      Professional DTF ink engineered for vibrant colour reproduction,
      excellent white coverage and stable Epson i3200 performance.
    </p>
  </div>

  {/* FEATURE STRIP */}
  <div className="featureStrip">

    <div className="featureItem cyanFeature">
      <div className="featureIcon">
        ✦
      </div>
      <div>
        <strong>Vibrant Colours</strong>
        <span>High colour density</span>
      </div>
    </div>

    <div className="featureItem magentaFeature">
      <div className="featureIcon">
        ◇
      </div>
      <div>
        <strong>Excellent White</strong>
        <span>Strong opacity</span>
      </div>
    </div>

    <div className="featureItem yellowFeature">
      <div className="featureIcon">
        ◌
      </div>
      <div>
        <strong>Smooth Flow</strong>
        <span>Consistent printing</span>
      </div>
    </div>

    <div className="featureItem whiteFeature">
      <div className="featureIcon">
        ⬡
      </div>
      <div>
        <strong>Printhead Safe</strong>
        <span>Reliable performance</span>
      </div>
    </div>

  </div>

  {/* SPECIFICATION CARDS */}
  <div className="specGrid">

    <div className="specCard specCyan">
      <div className="cardGlow" />

      <div className="cardIcon">
        <span>◉</span>
      </div>

      <span className="cardNumber">01</span>

      <div className="cardContent">
        <span>AVAILABLE COLOURS</span>
        <strong>CMYK + White</strong>
        <small>
          Full colour set for professional DTF production
        </small>
      </div>
    </div>

    <div className="specCard specMagenta">
      <div className="cardGlow" />

      <div className="cardIcon">
        <span>▣</span>
      </div>

      <span className="cardNumber">02</span>

      <div className="cardContent">
        <span>PRINTHEAD COMPATIBILITY</span>
        <strong>Epson i3200</strong>
        <small>
          Optimized for stable high-performance printing
        </small>
      </div>
    </div>

    <div className="specCard specYellow">
      <div className="cardGlow" />

      <div className="cardIcon">
        <span>◇</span>
      </div>

      <span className="cardNumber">03</span>

      <div className="cardContent">
        <span>PACKAGING</span>
        <strong>1 L / 5 L</strong>
        <small>
          Available in multiple production pack sizes
        </small>
      </div>
    </div>

    <div className="specCard specWhite">
      <div className="cardGlow" />

      <div className="cardIcon">
        <span>◎</span>
      </div>

      <span className="cardNumber">04</span>

      <div className="cardContent">
        <span>ORIGIN</span>
        <strong>Made in Korea</strong>
        <small>
          Premium ink engineered for reliable production
        </small>
      </div>
    </div>

  </div>

  {/* QUOTE CTA */}
  <div className="quoteArea">

    <div className="quoteText">
      <span>READY FOR PRODUCTION?</span>
      <strong>Get the right ink for your DTF workflow.</strong>
    </div>

    <Link href="/quote" className="quoteButton">
      <span>REQUEST INK QUOTE</span>
      <b>→</b>
    </Link>

  </div>

</section>
      <style jsx>{`
        .dtfPage {
          min-height: 100vh;
          background:
            radial-gradient(circle at 78% 38%, rgba(0, 180, 255, 0.12), transparent 28%),
            radial-gradient(circle at 88% 65%, rgba(255, 0, 150, 0.09), transparent 25%),
            #05070c;
          color: #fff;
          overflow: hidden;
          position: relative;
        }

        .backgroundGlow {
          position: fixed;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.08;
          pointer-events: none;
        }

        .glowCyan {
          background: #00c8ff;
          right: -180px;
          top: 100px;
        }

        .glowMagenta {
          background: #ff1493;
          left: -220px;
          bottom: 0;
        }

        .nav {
          height: 80px;
          padding: 0 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          z-index: 5;
        }

        .backLink {
          color: #9da5b5;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.18em;
          font-weight: 700;
          transition: 0.3s;
        }

        .backLink:hover {
          color: #5ee7ff;
        }

        .navBrand {
          font-size: 11px;
          letter-spacing: 0.22em;
          color: #737b8b;
        }

        .navBrand span {
          color: #55ddff;
          font-weight: 900;
        }

        .hero {
          min-height: calc(100vh - 80px);
          padding: 80px 7vw 100px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        .heroLeft {
          max-width: 650px;
        }

        .eyebrow,
        .sectionEyebrow {
          color: #55ddff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.28em;
          margin-bottom: 22px;
        }

        h1 {
          font-size: clamp(4rem, 8vw, 8rem);
          line-height: 0.83;
          letter-spacing: -0.055em;
          margin: 0 0 34px;
          font-weight: 950;
        }

        h1 span {
          background: linear-gradient(
            90deg,
            #5ee7ff,
            #ff4eb8,
            #ffd84d
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .heroDescription {
          color: #969eae;
          max-width: 590px;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 34px;
        }

        .colorLine {
          display: flex;
          width: 250px;
          height: 5px;
          margin-bottom: 42px;
          overflow: hidden;
        }

        .colorLine i {
          flex: 1;
        }

        .cyan {
          background: #4ddcff;
        }

        .magenta {
          background: #ff3b9d;
        }

        .yellow {
          background: #ffe348;
        }

        .black {
          background: #222;
        }

        .white {
          background: #fff;
        }

        .buttons {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .primaryButton,
        .secondaryButton {
          min-width: 190px;
          padding: 18px 25px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: 0.3s;
        }

        .primaryButton {
          background: #fff;
          color: #05070c;
        }

        .primaryButton:hover {
          transform: translateY(-3px);
        }

        .secondaryButton {
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
        }

        .secondaryButton:hover {
          border-color: #55ddff;
          color: #55ddff;
        }

        .heroRight {
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .dtfBottleImage {
  width: min(680px, 52vw);
  max-width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 25px 35px rgba(0, 0, 0, 0.45));
}
        .orb {
          width: min(390px, 55vw);
          aspect-ratio: 1;
          border-radius: 50%;
          display: grid;
          place-items: center;
          position: relative;
          background:
            radial-gradient(circle at 30% 25%, #fff, transparent 5%),
            radial-gradient(
              circle at 35% 30%,
              #63dfff 0%,
              #1683b5 20%,
              #06131b 57%,
              #020407 75%
            );
          box-shadow:
            0 0 70px rgba(55, 220, 255, 0.22),
            inset -30px -40px 80px rgba(0, 0, 0, 0.7);
          animation: float 6s ease-in-out infinite;
        }

        .orb span {
          font-size: 100px;
          font-weight: 900;
          color: #fff;
          text-shadow: 0 10px 30px #000;
        }

        .inkLabel {
          position: absolute;
          bottom: 35px;
          padding: 15px 24px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(5, 7, 12, 0.7);
          backdrop-filter: blur(12px);
          text-align: center;
          letter-spacing: 0.18em;
        }

        .inkLabel strong {
          display: block;
          color: #55ddff;
          font-size: 15px;
        }

        .inkLabel small {
          color: #8991a0;
          font-size: 9px;
        }

        .floatingColor {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          position: absolute;
          display: grid;
          place-items: center;
          font-weight: 900;
          box-shadow: 0 0 30px currentColor;
        }

        .c {
          color: #55ddff;
          background: #55ddff;
          color: #fff;
          top: 18%;
          left: 15%;
        }

        .m {
          color: #ff329c;
          background: #ff329c;
          top: 25%;
          right: 10%;
        }

        .w {
          color: #fff;
          background: #fff;
          color: #111;
          bottom: 17%;
          left: 20%;
        }

        .detailsSection {
  padding: 110px 7vw 120px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  z-index: 2;
  background:
    radial-gradient(
      circle at 15% 30%,
      rgba(0, 200, 255, 0.08),
      transparent 25%
    ),
    radial-gradient(
      circle at 85% 60%,
      rgba(255, 30, 160, 0.07),
      transparent 25%
    );
}

/* TOP LINE */

.sectionTopLine {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 55px;
}

.sectionNumber {
  color: #55ddff;
  font-size: 11px;
  letter-spacing: 0.25em;
  font-weight: 800;
}

.sectionStatus {
  color: #737b8b;
  font-size: 10px;
  letter-spacing: 0.18em;
  display: flex;
  align-items: center;
  gap: 9px;
}

.statusDot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #55ddff;
  box-shadow: 0 0 15px #55ddff;
  animation: statusPulse 2s ease-in-out infinite;
}

/* HEADER */

.detailsHeader {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 50px;
  margin-bottom: 50px;
}

.detailsHeader h2 {
  font-size: clamp(3rem, 5.5vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.055em;
  margin: 0;
  font-weight: 900;
}

.detailsHeader h2 span {
  background: linear-gradient(
    90deg,
    #55ddff,
    #ff329c,
    #ffd83d
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.detailsHeader p {
  max-width: 430px;
  color: #8e96a6;
  line-height: 1.8;
  font-size: 15px;
  margin-bottom: 5px;
}

/* FEATURE STRIP */

.featureStrip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 30px;
}

.featureItem {
  min-height: 88px;
  padding: 20px 18px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-right: 1px solid rgba(255,255,255,0.08);
  transition: 0.35s ease;
}

.featureItem:last-child {
  border-right: none;
}

.featureItem:hover {
  background: rgba(255,255,255,0.035);
  transform: translateY(-3px);
}

.featureIcon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
}

.featureItem strong {
  display: block;
  font-size: 13px;
  margin-bottom: 5px;
}

.featureItem span {
  display: block;
  color: #737b8b;
  font-size: 11px;
}

.cyanFeature .featureIcon {
  color: #55ddff;
  box-shadow: 0 0 25px rgba(85,221,255,0.12);
}

.magentaFeature .featureIcon {
  color: #ff329c;
  box-shadow: 0 0 25px rgba(255,50,156,0.12);
}

.yellowFeature .featureIcon {
  color: #ffd83d;
  box-shadow: 0 0 25px rgba(255,216,61,0.12);
}

.whiteFeature .featureIcon {
  color: #fff;
  box-shadow: 0 0 25px rgba(255,255,255,0.08);
}

/* SPEC CARDS */

.specGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  perspective: 1200px;
}

.specCard {
  min-height: 260px;
  padding: 26px;
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.1);
  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.07),
      rgba(255,255,255,0.015)
    );
  backdrop-filter: blur(14px);
  transform-style: preserve-3d;
  transition:
    transform 0.45s cubic-bezier(.2,.8,.2,1),
    border-color 0.35s,
    box-shadow 0.35s;
}

.specCard:hover {
  transform:
    perspective(900px)
    rotateX(5deg)
    rotateY(-5deg)
    translateY(-10px);
}

.specCyan:hover {
  border-color: rgba(85,221,255,0.55);
  box-shadow:
    0 25px 70px rgba(0,200,255,0.13),
    inset 0 0 35px rgba(85,221,255,0.04);
}

.specMagenta:hover {
  border-color: rgba(255,50,156,0.55);
  box-shadow:
    0 25px 70px rgba(255,50,156,0.13),
    inset 0 0 35px rgba(255,50,156,0.04);
}

.specYellow:hover {
  border-color: rgba(255,216,61,0.55);
  box-shadow:
    0 25px 70px rgba(255,216,61,0.12),
    inset 0 0 35px rgba(255,216,61,0.04);
}

.specWhite:hover {
  border-color: rgba(255,255,255,0.45);
  box-shadow:
    0 25px 70px rgba(255,255,255,0.08),
    inset 0 0 35px rgba(255,255,255,0.03);
}

.cardGlow {
  position: absolute;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  filter: blur(55px);
  opacity: 0.15;
  right: -50px;
  top: -50px;
  pointer-events: none;
}

.specCyan .cardGlow {
  background: #00c8ff;
}

.specMagenta .cardGlow {
  background: #ff329c;
}

.specYellow .cardGlow {
  background: #ffd83d;
}

.specWhite .cardGlow {
  background: #fff;
}

.cardIcon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(0,0,0,0.25);
  font-size: 23px;
  position: relative;
  z-index: 1;
  transform: translateZ(25px);
}

.specCyan .cardIcon {
  color: #55ddff;
  box-shadow: 0 0 25px rgba(85,221,255,0.12);
}

.specMagenta .cardIcon {
  color: #ff329c;
  box-shadow: 0 0 25px rgba(255,50,156,0.12);
}

.specYellow .cardIcon {
  color: #ffd83d;
  box-shadow: 0 0 25px rgba(255,216,61,0.12);
}

.specWhite .cardIcon {
  color: #fff;
}

.cardNumber {
  position: absolute;
  top: 30px;
  right: 28px;
  color: #555d6c;
  font-size: 10px;
  letter-spacing: 0.2em;
}

.cardContent {
  position: absolute;
  left: 26px;
  right: 26px;
  bottom: 25px;
  transform: translateZ(20px);
}

.cardContent > span {
  display: block;
  color: #70798a;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.18em;
  margin-bottom: 12px;
}

.cardContent strong {
  display: block;
  font-size: 21px;
  line-height: 1.25;
  margin-bottom: 9px;
}

.cardContent small {
  display: block;
  color: #777f90;
  font-size: 11px;
  line-height: 1.5;
}

/* QUOTE AREA */

.quoteArea {
  margin-top: 28px;
  padding: 25px 28px;
  border-radius: 18px;
  border: 1px solid rgba(85,221,255,0.18);
  background:
    linear-gradient(
      100deg,
      rgba(0,200,255,0.07),
      rgba(255,50,156,0.05),
      rgba(255,216,61,0.04)
    );
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  position: relative;
  overflow: hidden;
}

.quoteArea::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.05),
    transparent
  );
  transform: translateX(-100%);
  animation: shine 5s linear infinite;
}

.quoteText {
  position: relative;
  z-index: 1;
}

.quoteText span {
  display: block;
  color: #55ddff;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.2em;
  margin-bottom: 7px;
}

.quoteText strong {
  font-size: 18px;
}

.quoteButton {
  position: relative;
  z-index: 1;
  min-width: 245px;
  height: 58px;
  padding: 0 22px;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    #00bfff,
    #7655ff,
    #ff329c
  );
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.13em;
  box-shadow:
    0 12px 35px rgba(0,160,255,0.18),
    0 0 30px rgba(255,50,156,0.08);
  transition: 0.35s ease;
}

.quoteButton:hover {
  transform: translateY(-4px);
  box-shadow:
    0 18px 45px rgba(0,160,255,0.25),
    0 0 40px rgba(255,50,156,0.15);
}

.quoteButton b {
  font-size: 23px;
  font-weight: 400;
}

/* ANIMATIONS */

@keyframes statusPulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-15px);
          }
        }

        @media (max-width: 900px) {
          .featureStrip {
  grid-template-columns: repeat(2, 1fr);
}

.featureItem:nth-child(2) {
  border-right: none;
}

.specGrid {
  grid-template-columns: repeat(2, 1fr);
}

.quoteArea {
  flex-direction: column;
  align-items: stretch;
}

.quoteButton {
  width: 100%;
}

        @media (max-width: 600px) {
         .sectionTopLine {
  align-items: flex-start;
  gap: 15px;
}

.sectionStatus {
  display: none;
}

.featureStrip {
  grid-template-columns: 1fr;
}

.featureItem {
  border-right: none;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.featureItem:last-child {
  border-bottom: none;
}

.specGrid {
  grid-template-columns: 1fr;
}

.specCard {
  min-height: 230px;
}

.quoteText strong {
  font-size: 16px;
}

.quoteButton {
  min-width: 0;
}
      `}</style>
    </main>
  );
}