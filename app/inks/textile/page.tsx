"use client";
import Link from "next/link";
import { useState } from "react";

export default function TextileInksPage() {
  const [selectedInk, setSelectedInk] = useState("sublimation");
  const textileInks = {
    sublimation: { number:"01", label:"SUBLIMATION", name:"NX-Sublimation Ultra HD", description:"Made in Korea and engineered for high-speed polyester printing with strong colour reproduction and reliable printhead performance.", colors:"4 Colour CMYK", optional:"Optional: CMYK + FMFY", fabric:"Polyester", printheads:"Epson i3200 and Kyocera", packaging:"1 L / 5 L", origin:"Made in Korea", accent:"#00d9ff", image:"/images/inks/sublimation.png" },
    reactive: { number:"02", label:"REACTIVE", name:"NX-Reactive Ink", description:"Made in Korea for digital textile applications requiring a broad colour set and professional production printhead compatibility.", colors:"CMYK + RGB + Light Grey + Light Black + Pink + Green", optional:"", fabric:"Viscose, Cambric, Cotton and many more", printheads:"Kyocera, Ricoh, Epson i3200 and Epson S3200", packaging:"5 L – 15 L", origin:"Made in Korea", accent:"#ff209b", image:"/images/inks/reactive.png" },
    pigment: { number:"03", label:"PIGMENT", name:"NX-Pigment Ink", description:"Made in Korea and developed for textile production with a broad colour configuration and professional printhead compatibility.", colors:"CMYK + RGB + Light Grey + Light Black + Pink + Green", optional:"", fabric:"Viscose, Cambric, Cotton and many more", printheads:"Kyocera, Ricoh, Epson i3200 and Epson S3200", packaging:"5 L – 15 L", origin:"Made in Korea", accent:"#ffe000", image:"/images/inks/pigment.png" }
  } as const;
  const currentInk = textileInks[selectedInk as keyof typeof textileInks];
  return (
    <main className="textilePage">

      {/* BACKGROUND INK SYSTEM */}
      <div className="inkBackground">
        <span className="inkBlob cyan" />
        <span className="inkBlob magenta" />
        <span className="inkBlob yellow" />
        <span className="inkBlob black" />

        <span className="inkDrop drop1" />
        <span className="inkDrop drop2" />
        <span className="inkDrop drop3" />
        <span className="inkDrop drop4" />
      </div>

      {/* NAV */}
      <nav className="productNav">
        <Link href="/inks" className="backLink">
          ← ALL INKS
        </Link>

        <div className="navBrand">
          <span>NX</span> INK TECHNOLOGY
        </div>

        <div className="navCategory">
          TEXTILE / 01
        </div>
      </nav>


      {/* HERO */}
      <section className="textileHero">

        <div className="heroCopy">

          <div className="eyebrow">
            TEXTILE INKS
          </div>

          <h1>
            {currentInk.label}
            <br />
            <span>Ink.</span>
          </h1>

          <p className="heroDescription">
            {currentInk.description}
          </p>

          <div className="colorLine">
            <i className="c" />
            <i className="m" />
            <i className="y" />
            <i className="k" />
          </div>

          <div className="heroButtons">
            <a href="#product" className="primaryButton">
              EXPLORE INK
              <span>↘</span>
            </a>

            <a href="#specs" className="secondaryButton">
              TECHNICAL DETAILS
            </a>
          </div>

        </div>


        {/* 3D PRODUCT */}
        <div className="productStage">

          <div className="orbitalRing ring1" />
          <div className="orbitalRing ring2" />
          <div className="orbitalRing ring3" />

          <div className="colorGlow cyanGlow" />
          <div className="colorGlow magentaGlow" />
          <div className="colorGlow yellowGlow" />

          <div className="productImageWrap">

          <img
  src="/textile-bottles.png"
  alt="NX Sublimation Ink 5L and 1L bottles"
  className="productImage"
/>

          </div>

          <div className="floatingColor cOrb">C</div>
          <div className="floatingColor mOrb">M</div>
          <div className="floatingColor yOrb">Y</div>
          <div className="floatingColor kOrb">K</div>

          <div className="productTag">
            <span>NX</span>
            INK TECHNOLOGY
          </div>

        </div>

      </section>


      {/* PRODUCT INFORMATION */}
      <section id="product" className="productSection">
        <div className="sectionIntro">
          <div className="eyebrow">NX TEXTILE TECHNOLOGY</div>
          <h2>Three ink systems.<br /><span>One textile platform.</span></h2>
          <p>Choose the ink technology that matches your fabric, production process and colour requirements.</p>
        </div>

        <div className="inkTypeGrid">
          {Object.entries(textileInks).map(([key, ink]) => (
            <button key={key} type="button" onClick={() => setSelectedInk(key)}
              className={`inkTypeCard ${selectedInk === key ? "active" : ""}`}
              style={{"--ink-accent": ink.accent} as React.CSSProperties}>
              <span>{ink.number}</span>
              <em>{ink.label}</em>
              <strong>{ink.name}</strong>
              <small>{ink.fabric}</small>
              <b>VIEW DETAILS ↗</b>
            </button>
          ))}
        </div>

        <div className="selectedInkPanel" style={{"--ink-accent": currentInk.accent} as React.CSSProperties}>
          <div className="selectedInkVisual">
            <img
  className="selectedInkBottleImage"
  src={currentInk.image}
  alt={currentInk.name}
/>
            <div className="selectedInkStamp"><span>NX</span> INK TECHNOLOGY</div>
          </div>
          <div className="selectedInkInfo">
            <div className="productNumber">{currentInk.number} / TEXTILE INKS</div>
            <h3>{currentInk.name}</h3>
            <p className="productDescription">{currentInk.description}</p>

            <div className="inkSpecsGrid">
              <div><span>AVAILABLE COLOURS</span><strong>{currentInk.colors}</strong>{currentInk.optional && <small>{currentInk.optional}</small>}</div>
              <div><span>FABRIC</span><strong>{currentInk.fabric}</strong></div>
              <div><span>PRINTHEAD COMPATIBILITY</span><strong>{currentInk.printheads}</strong></div>
              <div><span>PACKAGING</span><strong>{currentInk.packaging}</strong></div>
              <div><span>ORIGIN</span><strong>{currentInk.origin}</strong></div>
            </div>

            <a href="/quote" className="quoteButton">REQUEST INK QUOTE <span>→</span></a>
          </div>
        </div>
      </section>

      {/* COLOR TECHNOLOGY */}
      <section className="colorSection">
        <div className="eyebrow">COLOUR ENGINEERING</div>
        <h2>More than CMYK.<br /><span>Colour built for textiles.</span></h2>
        <p>Standard CMYK sublimation with an optional extended CMYK + FMFY configuration, plus extended colour sets for reactive and pigment printing.</p>
        <div className="colourAvailabilityGrid">
          <div className="colourAvailabilityCard cyanAccent"><span>01 / SUBLIMATION</span><strong>4 COLOUR</strong><p>CMYK</p><small>Optional CMYK + FMFY</small></div>
          <div className="colourAvailabilityCard magentaAccent"><span>02 / REACTIVE</span><strong>10 COLOUR</strong><p>CMYK + RGB + Light Grey + Light Black + Pink + Green</p></div>
          <div className="colourAvailabilityCard yellowAccent"><span>03 / PIGMENT</span><strong>10 COLOUR</strong><p>CMYK + RGB + Light Grey + Light Black + Pink + Green</p></div>
        </div>
        <div className="colorSystem">
          <Color name="CYAN" letter="C" className="cyan" />
          <Color name="MAGENTA" letter="M" className="magenta" />
          <Color name="YELLOW" letter="Y" className="yellow" />
          <Color name="BLACK" letter="K" className="black" />
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="finalCTA">

        <div>
          <div className="eyebrow">
            NX INK TECHNOLOGY
          </div>

          <h2>
            Ready to print
            <br />
            <span>better?</span>
          </h2>
        </div>

        <a href="/quote" className="finalButton">
          TALK TO OUR TEAM
          <span>↗</span>
        </a>

      </section>


      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .textilePage {
          min-height: 100vh;
          background:
            radial-gradient(circle at 70% 20%, rgba(0,210,255,.08), transparent 30%),
            radial-gradient(circle at 20% 55%, rgba(255,0,120,.07), transparent 30%),
            #03050a;
          color: white;
          overflow: hidden;
          position: relative;
        }

        .productNav {
          height: 80px;
          padding: 0 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,.08);
          position: relative;
          z-index: 10;
        }

        .backLink,
        .navCategory {
          color: #8993a7;
          font-size: 11px;
          letter-spacing: 2px;
          text-decoration: none;
        }

        .backLink:hover {
          color: white;
        }

        .navBrand {
          font-size: 12px;
          letter-spacing: 4px;
          font-weight: 700;
        }

        .navBrand span {
          color: #00d9ff;
          margin-right: 8px;
        }

        .textileHero {
          min-height: calc(100vh - 80px);
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          align-items: center;
          padding: 50px 6vw 90px;
          position: relative;
          z-index: 2;
        }

        .heroCopy {
          position: relative;
          z-index: 5;
          max-width: 620px;
        }

        .eyebrow {
          font-size: 11px;
          letter-spacing: 4px;
          color: #56d9ff;
          font-weight: 700;
          margin-bottom: 25px;
        }

        h1 {
          font-size: clamp(70px, 8vw, 135px);
          line-height: .82;
          letter-spacing: -7px;
          margin: 0;
          font-weight: 800;
        }

        h1 span {
          background: linear-gradient(
            90deg,
            #00d9ff,
            #ff2ca8,
            #ffe600
          );
          -webkit-background-clip: text;
          color: transparent;
        }

        .heroDescription {
          margin-top: 40px;
          max-width: 550px;
          color: #9da6b8;
          font-size: 17px;
          line-height: 1.7;
        }

        .colorLine {
          display: flex;
          width: 190px;
          height: 5px;
          margin: 30px 0;
        }

        .colorLine i {
          flex: 1;
        }

        .colorLine .c { background: #00d9ff; }
        .colorLine .m { background: #ff209b; }
        .colorLine .y { background: #ffe000; }
        .colorLine .k { background: #111; }

        .heroButtons {
          display: flex;
          gap: 15px;
          margin-top: 35px;
        }

        .primaryButton,
        .secondaryButton {
          padding: 16px 25px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .primaryButton {
          background: white;
          color: black;
        }

        .primaryButton span {
          margin-left: 25px;
        }

        .secondaryButton {
          border: 1px solid rgba(255,255,255,.15);
          color: white;
        }

        .productStage {
          height: 650px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
        }

        .productImageWrap {
          position: relative;
          width: min(700px, 90%);
          z-index: 5;
          animation: bottleFloat 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .productImage {
          width: 100%;
          display: block;
          filter:
            drop-shadow(0 40px 40px rgba(0,0,0,.65))
            drop-shadow(0 0 40px rgba(0,190,255,.15));
        }

        .orbitalRing {
          position: absolute;
          width: 600px;
          height: 220px;
          border: 1px solid rgba(0,220,255,.25);
          border-radius: 50%;
          transform: rotateX(65deg);
          animation: orbit 12s linear infinite;
        }

        .ring2 {
          border-color: rgba(255,0,160,.25);
          transform: rotateX(65deg) rotateZ(60deg);
          animation-duration: 15s;
        }

        .ring3 {
          border-color: rgba(255,225,0,.18);
          transform: rotateX(65deg) rotateZ(-60deg);
          animation-duration: 20s;
        }

        .colorGlow {
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: .35;
          animation: glowPulse 5s ease-in-out infinite;
        }

        .cyanGlow {
          background: #00d9ff;
          left: 20%;
        }

        .magentaGlow {
          background: #ff009d;
          right: 15%;
          top: 30%;
          animation-delay: 1s;
        }

        .yellowGlow {
          background: #ffe600;
          bottom: 10%;
          left: 45%;
          animation-delay: 2s;
        }

        .floatingColor {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          position: absolute;
          font-weight: 800;
          font-size: 13px;
          z-index: 6;
          box-shadow: 0 0 30px currentColor;
          animation: floatOrb 5s ease-in-out infinite;
        }

        .cOrb {
          background: #00cfff;
          color: white;
          top: 12%;
          left: 20%;
        }

        .mOrb {
          background: #ff1498;
          color: white;
          right: 12%;
          top: 25%;
          animation-delay: 1s;
        }

        .yOrb {
          background: #ffe000;
          color: black;
          bottom: 15%;
          right: 25%;
          animation-delay: 2s;
        }

        .kOrb {
          background: #111;
          border: 1px solid #555;
          color: white;
          bottom: 20%;
          left: 12%;
          animation-delay: 3s;
        }

        .productTag {
          position: absolute;
          right: 5%;
          bottom: 8%;
          border: 1px solid rgba(255,255,255,.15);
          padding: 13px 18px;
          font-size: 9px;
          letter-spacing: 3px;
          color: #8993a7;
          backdrop-filter: blur(10px);
        }

        .productTag span {
          color: #00d9ff;
          margin-right: 7px;
          font-weight: 800;
        }

        .productSection {
          padding: 150px 6vw;
          position: relative;
          z-index: 2;
        }

        .sectionIntro {
          max-width: 800px;
          margin-bottom: 80px;
        }

        .sectionIntro h2,
        .colorSection h2,
        .finalCTA h2 {
          font-size: clamp(50px, 6vw, 90px);
          line-height: .95;
          letter-spacing: -4px;
          margin: 0 0 25px;
        }

        .sectionIntro h2 span,
        .colorSection h2 span,
        .finalCTA h2 span {
          color: #727b8d;
        }

        .sectionIntro p,
        .colorSection > p {
          color: #8e98aa;
          max-width: 650px;
          line-height: 1.7;
          font-size: 17px;
        }

        .productGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 650px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 24px;
          overflow: hidden;
          background: rgba(10,14,24,.7);
        }

        .productVisualCard {
          position: relative;
          min-height: 650px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 45%, rgba(0,210,255,.13), transparent 40%),
            radial-gradient(circle at 60% 60%, rgba(255,0,150,.1), transparent 40%);
        }

        .cardBottle {
          width: 85%;
          position: relative;
          z-index: 3;
          animation: bottleFloat 7s ease-in-out infinite;
        }

        .miniLabel {
          position: absolute;
          left: 35px;
          top: 35px;
          color: #00d9ff;
          font-size: 10px;
          letter-spacing: 3px;
          z-index: 5;
        }

        .cardBottom {
          position: absolute;
          bottom: 30px;
          left: 35px;
          right: 35px;
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          letter-spacing: 2px;
          color: #737c8e;
          z-index: 5;
        }

        .cardBottom strong {
          color: white;
        }

        .productInfo {
          padding: 70px;
          border-left: 1px solid rgba(255,255,255,.08);
        }

        .productNumber {
          color: #00d9ff;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 25px;
        }

        .productInfo h3 {
          font-size: 55px;
          letter-spacing: -3px;
          margin: 0 0 25px;
        }

        .productDescription {
          color: #8c96a8;
          line-height: 1.7;
          max-width: 520px;
        }

        .smallTitle {
          color: #697387;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }

        .packaging {
          margin-top: 45px;
        }

        .packageGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .package {
          border: 1px solid rgba(255,255,255,.12);
          padding: 20px;
          border-radius: 10px;
          transition: .3s;
        }

        .package.active {
          border-color: #00d9ff;
          box-shadow: inset 0 0 30px rgba(0,210,255,.05);
        }

        .package strong {
          display: block;
          font-size: 22px;
        }

        .package span {
          display: block;
          margin-top: 7px;
          font-size: 9px;
          letter-spacing: 2px;
          color: #6f788a;
        }

        .features {
          margin-top: 35px;
        }

        .feature {
          display: flex;
          gap: 18px;
          padding: 17px 0;
          border-bottom: 1px solid rgba(255,255,255,.07);
        }

        .featureNumber {
          font-size: 10px;
          color: var(--feature);
          letter-spacing: 2px;
          padding-top: 4px;
        }

        .feature strong {
          display: block;
          margin-bottom: 5px;
        }

        .feature small {
          color: #707a8c;
        }

        .quoteButton,
        .finalButton {
          margin-top: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid rgba(0,220,255,.5);
          padding: 20px 25px;
          color: white;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 2px;
          transition: .3s;
        }

        .quoteButton:hover,
        .finalButton:hover {
          background: white;
          color: black;
        }

        .quoteButton span,
        .finalButton span {
          font-size: 22px;
        }

        .colorSection {
          padding: 160px 6vw;
          text-align: center;
        }

        .colorSection > p {
          margin: 0 auto 70px;
        }

       .colorSystem {
  max-width: 1250px;
  margin: 80px auto 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  perspective: 1600px;
}

.colorCard {
  height: 320px;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid rgba(255,255,255,.12);
  background:
    radial-gradient(circle at 50% 35%, rgba(255,255,255,.06), transparent 35%),
    rgba(8,12,20,.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition: transform .5s ease, border-color .5s ease;
}

.colorCard:hover {
  transform: translateY(-12px) rotateX(4deg) rotateY(-4deg);
  border-color: var(--color);
}
        .finalCTA {
          margin: 0 6vw 100px;
          padding: 70px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background:
            radial-gradient(circle at 80% 50%, rgba(0,220,255,.08), transparent 35%);
        }

        .finalButton {
          width: 270px;
          margin: 0;
        }

        .inkBackground {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .inkBlob {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: .08;
          animation: backgroundFloat 15s ease-in-out infinite;
        }

        .inkBlob.cyan {
          background: #00d9ff;
          left: -100px;
          top: 20%;
        }

        .inkBlob.magenta {
          background: #ff008c;
          right: -100px;
          top: 10%;
          animation-delay: 3s;
        }

        .inkBlob.yellow {
          background: #ffe000;
          left: 40%;
          bottom: -150px;
          animation-delay: 6s;
        }

        .inkBlob.black {
          background: #111;
          right: 30%;
          bottom: 10%;
        }

        .inkDrop {
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          animation: particleFloat 8s linear infinite;
        }

        .drop1 {
          background: #00d9ff;
          left: 20%;
          top: 20%;
          box-shadow: 0 0 20px #00d9ff;
        }

        .drop2 {
          background: #ff209b;
          right: 20%;
          top: 40%;
          box-shadow: 0 0 20px #ff209b;
          animation-delay: 2s;
        }

        .drop3 {
          background: #ffe000;
          left: 60%;
          top: 15%;
          box-shadow: 0 0 20px #ffe000;
          animation-delay: 4s;
        }

        .drop4 {
          background: white;
          left: 40%;
          bottom: 20%;
          animation-delay: 5s;
        }

        @keyframes bottleFloat {
          0%,100% {
            transform: translateY(0) rotateY(-3deg);
          }
          50% {
            transform: translateY(-18px) rotateY(3deg);
          }
        }

        @keyframes orbit {
          from {
            transform: rotateX(65deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(65deg) rotateZ(360deg);
          }
        }

        @keyframes glowPulse {
          0%,100% {
            transform: scale(.9);
            opacity: .25;
          }
          50% {
            transform: scale(1.15);
            opacity: .45;
          }
        }

        @keyframes floatOrb {
          0%,100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }
@keyframes inkSphereFloat {
  0%, 100% {
    transform: translateY(0) rotateY(-12deg) rotateX(5deg) rotateZ(0deg);
  }

  25% {
    transform: translateY(-12px) rotateY(8deg) rotateX(-4deg) rotateZ(2deg);
  }

  50% {
    transform: translateY(-24px) rotateY(18deg) rotateX(5deg) rotateZ(-2deg);
  }

  75% {
    transform: translateY(-12px) rotateY(8deg) rotateX(-4deg) rotateZ(2deg);
  }
}

        @keyframes backgroundFloat {
          0%,100% {
            transform: translate(0,0);
          }
          50% {
            transform: translate(100px,-80px);
          }
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(80px) scale(.5);
            opacity: 0;
          }
          20%,80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-300px) scale(1.4);
            opacity: 0;
          }
        }

        .inkTypeGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:55px 0 30px}
        .inkTypeCard{position:relative;min-height:220px;padding:28px;text-align:left;border:1px solid rgba(255,255,255,.1);border-radius:20px;background:linear-gradient(145deg,#111722,#05070b);color:#fff;cursor:pointer;transition:.35s;overflow:hidden}
        .inkTypeCard:hover,.inkTypeCard.active{transform:translateY(-7px);border-color:var(--ink-accent);box-shadow:0 20px 50px rgba(0,0,0,.4),0 0 35px color-mix(in srgb,var(--ink-accent) 20%,transparent)}
        .inkTypeCard span,.inkTypeCard em{display:block;color:var(--ink-accent);font-size:9px;letter-spacing:3px;font-weight:800;font-style:normal}
        .inkTypeCard em{margin-top:8px}.inkTypeCard strong{display:block;margin-top:22px;font-size:23px}.inkTypeCard small{display:block;margin-top:12px;color:#7f899b;line-height:1.5}.inkTypeCard b{display:block;margin-top:22px;color:var(--ink-accent);font-size:9px;letter-spacing:2px}
        .selectedInkPanel{display:grid;grid-template-columns:.85fr 1.15fr;min-height:600px;border:1px solid rgba(255,255,255,.1);border-radius:26px;overflow:hidden;background:rgba(8,12,20,.8);box-shadow:0 30px 80px rgba(0,0,0,.35)}
        .selectedInkVisual{position:relative;display:grid;place-items:center;min-height:600px;background:radial-gradient(circle,color-mix(in srgb,var(--ink-accent) 14%,transparent),transparent 50%)}
        .selectedInkBottleImage{
          width:min(88%,620px);
          max-height:520px;
          object-fit:contain;
          position:relative;
          z-index:2;
          filter:drop-shadow(0 35px 35px rgba(0,0,0,.6)) drop-shadow(0 0 35px color-mix(in srgb,var(--ink-accent) 18%,transparent));
          animation:textileInkFloat 5s ease-in-out infinite;
        }
        .selectedInkOrb{width:260px;height:260px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 29% 23%,#fff,transparent 17%),radial-gradient(circle at 38% 36%,var(--ink-accent),#050505 78%);box-shadow:inset -35px -35px 55px #000a,inset 18px 15px 30px #fff3,0 35px 80px #000a,0 0 80px color-mix(in srgb,var(--ink-accent) 45%,transparent);animation:textileInkFloat 5s ease-in-out infinite}
        .selectedInkOrb span{font-size:70px;font-weight:900;color:#fff;text-shadow:0 5px 20px #000}
        .selectedInkStamp{position:absolute;left:35px;bottom:35px;border:1px solid #ffffff22;padding:14px 18px;color:#8993a7;font-size:9px;letter-spacing:3px}.selectedInkStamp span{color:var(--ink-accent);font-weight:900;margin-right:7px}
        .selectedInkInfo{padding:65px;border-left:1px solid #ffffff12}.selectedInkInfo h3{font-size:clamp(40px,4vw,65px);line-height:.95;letter-spacing:-3px;margin:0 0 25px}
        .inkSpecsGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:38px}.inkSpecsGrid>div{min-height:105px;padding:18px;border:1px solid #ffffff12;border-radius:12px}.inkSpecsGrid span{display:block;color:#687286;font-size:8px;letter-spacing:2px;margin-bottom:10px}.inkSpecsGrid strong{display:block;color:#fff;font-size:13px;line-height:1.55}.inkSpecsGrid small{display:block;margin-top:7px;color:var(--ink-accent);font-size:10px}
        .colourAvailabilityGrid{max-width:1250px;margin:60px auto 80px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.colourAvailabilityCard{padding:30px;text-align:left;border:1px solid #ffffff12;border-radius:18px;background:#080c14bf}.colourAvailabilityCard span{color:var(--availability);font-size:9px;letter-spacing:2px;font-weight:800}.colourAvailabilityCard strong{display:block;margin-top:25px;font-size:30px}.colourAvailabilityCard p{color:#fff;line-height:1.6}.colourAvailabilityCard small{color:#707a8c}.cyanAccent{--availability:#00d9ff}.magentaAccent{--availability:#ff209b}.yellowAccent{--availability:#ffe000}
        @keyframes textileInkFloat{0%,100%{transform:translateY(0) rotateY(-8deg) rotateX(5deg)}50%{transform:translateY(-18px) rotateY(8deg) rotateX(-3deg)}}

        @media(max-width: 900px) {

          .inkTypeGrid,
          .colourAvailabilityGrid { grid-template-columns:1fr; }

          .selectedInkPanel { grid-template-columns:1fr; }
          .selectedInkInfo { border-left:0; border-top:1px solid rgba(255,255,255,.08); }

          .textileHero,
          .productGrid {
            grid-template-columns: 1fr;
          }

          .productStage {
            height: 500px;
            order: -1;
          }

          .productInfo {
            border-left: 0;
            border-top: 1px solid rgba(255,255,255,.08);
            padding: 40px;
          }

          .colorSystem {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cmykCard {
            min-height: 350px;
          }

          .finalCTA {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }

        }

        @media(max-width: 600px) {

          .productNav {
            padding: 0 20px;
          }

          .navCategory {
            display: none;
          }

          .textileHero,
          .productSection,
          .colorSection {
            padding-left: 20px;
            padding-right: 20px;
          }

          h1 {
            font-size: 70px;
          }

          .productInfo {
            padding: 30px;
          }

          .productInfo h3 {
            font-size: 42px;
          }

          .colorSystem {
            grid-template-columns: 1fr;
          }
          .inkSpecsGrid { grid-template-columns:1fr; }
          .selectedInkInfo { padding:30px; }

          .cmykCard {
            min-height: 340px;
          }

          .finalCTA {
            margin-left: 20px;
            margin-right: 20px;
            padding: 35px;
          }

        }

   /* =========================
   CMYK 3D INK SYSTEM
========================= */

.cmykCard {
  position: relative;
  height: 380px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 18px;

  border-radius: 28px;

  border: 1px solid rgba(255,255,255,0.12);

  background:
    radial-gradient(
      circle at 50% 35%,
      color-mix(in srgb, var(--cmyk-color) 12%, transparent),
      transparent 65%
    ),
    rgba(8,12,20,0.75);

  box-shadow:
    0 25px 60px rgba(0,0,0,0.45),
    inset 0 1px 0 rgba(255,255,255,0.08);

  transform-style: preserve-3d;
  perspective: 1000px;

  transition:
    transform 0.45s ease,
    border-color 0.45s ease,
    box-shadow 0.45s ease;
}

.cmykCard:hover {
  transform:
    translateY(-14px)
    rotateX(5deg)
    rotateY(-5deg);

  border-color: var(--cmyk-color);

  box-shadow:
    0 35px 80px rgba(0,0,0,0.55),
    0 0 50px color-mix(
      in srgb,
      var(--cmyk-color) 35%,
      transparent
    );
}


/* 3D INK BALL */

.cmykSphere {
  width: 170px;
  height: 170px;

  position: relative;
  z-index: 2;

  border-radius: 50%;

  transform-style: preserve-3d;

  background:
    radial-gradient(
      circle at 30% 25%,
      rgba(255,255,255,0.95) 0%,
      rgba(255,255,255,0.35) 7%,
      transparent 18%
    ),
    radial-gradient(
      circle at 38% 35%,
      var(--cmyk-color) 0%,
      color-mix(
        in srgb,
        var(--cmyk-color) 70%,
        black
      ) 55%,
      black 100%
    );

  box-shadow:
    inset -24px -28px 38px rgba(0,0,0,0.55),
    inset 14px 12px 24px rgba(255,255,255,0.20),
    0 25px 50px rgba(0,0,0,0.55),
    0 0 45px color-mix(
      in srgb,
      var(--cmyk-color) 50%,
      transparent
    );

  transform:
    translateZ(45px)
    rotateX(6deg)
    rotateY(-8deg);

  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease;
}


/* GLASS REFLECTION */

.cmykSphere::before {
  content: "";

  position: absolute;

  width: 58px;
  height: 30px;

  top: 23px;
  left: 30px;

  border-radius: 50%;

  background: rgba(255,255,255,0.42);

  filter: blur(7px);

  transform: rotate(-25deg);
}


/* SECONDARY LIGHT */

.cmykSphere::after {
  content: "";

  position: absolute;

  inset: 8px;

  border-radius: 50%;

  border: 1px solid rgba(255,255,255,0.08);

  pointer-events: none;
}


/* LETTER */

.cmykSphere span {
  position: absolute;

  inset: 0;

  display: grid;
  place-items: center;

  color: white;

  font-size: 44px;
  font-weight: 900;

  text-shadow:
    0 4px 12px rgba(0,0,0,0.8),
    0 0 20px rgba(255,255,255,0.35);

  transform: translateZ(25px);
}


/* HOVER SPHERE */

.cmykCard:hover .cmykSphere {
  transform:
    translateZ(75px)
    rotateX(10deg)
    rotateY(12deg)
    scale(1.08);

  box-shadow:
    inset -24px -28px 38px rgba(0,0,0,0.50),
    inset 14px 12px 24px rgba(255,255,255,0.25),
    0 35px 65px rgba(0,0,0,0.60),
    0 0 75px color-mix(
      in srgb,
      var(--cmyk-color) 65%,
      transparent
    );
}


/* NAME */

.cmykName {
  color: white;

  font-size: 21px;
  font-weight: 800;

  letter-spacing: 0.08em;
  text-transform: uppercase;

  text-shadow:
    0 3px 12px rgba(0,0,0,0.7);
}


/* INK CODE */

.cmykCode {
  color: color-mix(
    in srgb,
    var(--cmyk-color) 75%,
    white
  );

  font-size: 13px;
  font-weight: 700;

  letter-spacing: 0.14em;
  text-transform: uppercase;

  opacity: 0.9;
}


/* =========================
   CMYK COLOR SYSTEM — FINAL
========================= */

.colorSystem {
  width: min(1250px, 100%);
  margin: 80px auto 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  perspective: 1600px;
}

.cmykCard {
  --cmyk-color: #00d9ff;
  position: relative;
  min-height: 380px;
  padding: 36px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,.14);
  background:
    radial-gradient(circle at 50% 25%, var(--cmyk-color), transparent 45%),
    linear-gradient(145deg, #151a24, #05070b) !important;
  box-shadow:
    0 25px 60px rgba(0,0,0,.55),
    inset 0 1px 0 rgba(255,255,255,.10) !important;
  transform-style: preserve-3d;
  transition: transform .45s ease, box-shadow .45s ease, border-color .45s ease;
  overflow: visible;
}

.cmykCard:hover {
  transform: translateY(-12px) rotateX(4deg) rotateY(-4deg);
  border-color: var(--cmyk-color);
  box-shadow:
    0 35px 80px rgba(0,0,0,.65),
    0 0 55px var(--cmyk-color) !important;
}

.cmykSphere {
  width: 170px !important;
  height: 170px !important;
  min-width: 170px !important;
  min-height: 170px !important;
  position: relative !important;
  display: grid !important;
  place-items: center !important;
  flex: 0 0 170px;
  border-radius: 50% !important;
  background:
    radial-gradient(circle at 30% 24%,
      rgba(255,255,255,.95) 0%,
      rgba(255,255,255,.35) 8%,
      transparent 20%),
    radial-gradient(circle at 38% 38%,
      var(--cmyk-color) 0%,
      color-mix(in srgb, var(--cmyk-color) 70%, black) 58%,
      #050505 100%) !important;
  box-shadow:
    inset -22px -25px 35px rgba(0,0,0,.58),
    inset 12px 10px 22px rgba(255,255,255,.20),
    0 25px 50px rgba(0,0,0,.60),
    0 0 45px var(--cmyk-color) !important;
  transform: translateZ(50px) rotateX(6deg) rotateY(-8deg) !important;
  transition: transform .45s ease, box-shadow .45s ease;
}

.cmykSphere::before {
  content: "";
  position: absolute;
  width: 58px;
  height: 28px;
  top: 23px;
  left: 28px;
  border-radius: 50%;
  background: rgba(255,255,255,.45);
  filter: blur(7px);
  transform: rotate(-25deg);
}

.cmykSphere span {
  position: relative !important;
  z-index: 5 !important;
  color: #fff !important;
  font-size: 44px !important;
  font-weight: 900 !important;
  text-shadow: 0 4px 14px rgba(0,0,0,.9);
}

.cmykCard:hover .cmykSphere {
  transform: translateZ(80px) rotateX(10deg) rotateY(12deg) scale(1.08) !important;
}

.cmykName {
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 21px;
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.cmykCode {
  position: relative;
  z-index: 3;
  color: var(--cmyk-color) !important;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.cmykCard.cyan { --cmyk-color: #00d9ff; }
.cmykCard.magenta { --cmyk-color: #ff209b; }
.cmykCard.yellow { --cmyk-color: #ffe000; }
.cmykCard.black { --cmyk-color: #555b66; }

@media (max-width: 900px) {
  .colorSystem {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .colorSystem {
    grid-template-columns: 1fr;
  }

  .cmykCard {
    min-height: 340px;
  }
}

`}</style>

    </main>
  );
}


function Feature({
  number,
  color,
  title,
  text,
}: {
  number: string;
  color: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="feature"
      style={{ "--feature": color } as React.CSSProperties}
    >
      <div className="featureNumber">{number}</div>

      <div>
        <strong>{title}</strong>
        <small>{text}</small>
      </div>
    </div>
  );
}
function Color({
  name,
  letter,
  className,
}: {
  name: string;
  letter: string;
  className: string;
}) {
  const colors: Record<string, string> = {
    cyan: "#00d9ff",
    magenta: "#ff209b",
    yellow: "#ffe000",
    black: "#16181d",
  };

  const color = colors[className] ?? "#00d9ff";

  return (
    <div
      style={{
        width: "100%",
        height: "380px",
        minHeight: "380px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "18px",
        position: "relative",
        overflow: "visible",
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.14)",
        background: `radial-gradient(circle at 50% 35%, ${color}22, transparent 60%), linear-gradient(145deg, #111722, #05070b)`,
        boxShadow: `0 25px 60px rgba(0,0,0,.5), 0 0 35px ${color}22`,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "170px",
          height: "170px",
          minWidth: "170px",
          minHeight: "170px",
          flexShrink: 0,
          position: "relative",
          display: "grid",
          placeItems: "center",
          borderRadius: "50%",
          background: `radial-gradient(circle at 30% 24%, rgba(255,255,255,.95) 0%, rgba(255,255,255,.3) 7%, transparent 20%), radial-gradient(circle at 38% 38%, ${color} 0%, ${color}aa 45%, #050505 100%)`,
          boxShadow: `inset -24px -28px 38px rgba(0,0,0,.6), inset 12px 10px 22px rgba(255,255,255,.2), 0 22px 45px rgba(0,0,0,.6), 0 0 45px ${color}88`,
          border: "1px solid rgba(255,255,255,.15)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "58px",
            height: "28px",
            top: "22px",
            left: "28px",
            borderRadius: "50%",
            background: "rgba(255,255,255,.42)",
            filter: "blur(7px)",
            transform: "rotate(-25deg)",
          }}
        />
        <span
          style={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            fontSize: "44px",
            lineHeight: 1,
            fontWeight: 900,
            textShadow: "0 4px 14px rgba(0,0,0,.9)",
          }}
        >
          {letter}
        </span>
      </div>

      <div
        style={{
          color: "#fff",
          fontSize: "21px",
          lineHeight: 1.2,
          fontWeight: 800,
          letterSpacing: ".08em",
          textTransform: "uppercase",
        }}
      >
        {name}
      </div>

      <div
        style={{
          color,
          fontSize: "13px",
          lineHeight: 1.2,
          fontWeight: 700,
          letterSpacing: ".12em",
          textTransform: "uppercase",
        }}
      >
        NX • {letter} INK
      </div>
    </div>
  );
}

