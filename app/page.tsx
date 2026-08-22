"use client";
import Link from "next/link";

export default function Home() {
  const machines = [
    {
      title: "SUBLIMATION",
      subtitle: "High-speed textile printing",
      icon: "💧",
      link: "/machines/sublimation",
    },
    {
      title: "DIRECT TO FABRIC",
      subtitle: "Industrial textile printing",
      icon: "👕",
      link: "/machines/direct-to-fabric",
    },
    {
      title: "UV PRINTERS",
      subtitle: "Flatbed & roll-to-roll",
      icon: "☀",
      link: "/machines/uv",
    },
    {
      title: "SOLVENT PRINTERS",
      subtitle: "High-quality wide-format printing",
      icon: "◉",
      link: "/machines/solvent",
    },
    {
      title: "ECO SOLVENT",
      subtitle: "Reliable commercial printing",
      icon: "🌿",
      link: "/machines/eco-solvent",
    },
    {
      title: "ALLIED MACHINES",
      subtitle: "Supporting equipment & solutions",
      icon: "⚙",
      link: "/machines/allied",
    },
  ];

  const stats = [
    ["40+", "Expert Engineers", "#00d9ff"],
    ["900+", "Machines Installed", "#ff299d"],
    ["20+", "Countries We Serve", "#00e6c3"],
    ["100%", "Quality & Service", "#ffd000"],
    ["24/7", "Technical Support", "#a65cff"],
  ];

  return (
    <main className="site">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .site {
          min-height: 100vh;
          color: #fff;
          background:
            radial-gradient(circle at 78% 22%, rgba(0, 145, 255, .13), transparent 24%),
            radial-gradient(circle at 88% 58%, rgba(255, 0, 160, .10), transparent 25%),
            #020408;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .nav {
          height: 78px;
          padding: 0 4%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(2, 5, 10, .82);
          border-bottom: 1px solid rgba(255,255,255,.08);
          backdrop-filter: blur(18px);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 230px;
          text-decoration: none;
          color: #fff;
        }

        .brandMark {
          width: 48px;
          height: 42px;
          display: grid;
          place-items: center;
          font-size: 28px;
          font-weight: 950;
          letter-spacing: -4px;
          background: linear-gradient(135deg,#00d9ff 5%,#7857ff 48%,#ff2da6 90%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .brandName {
          font-size: 21px;
          font-weight: 900;
          letter-spacing: 1px;
          line-height: 1;
        }

        .brandTag {
          margin-top: 5px;
          color: rgba(255,255,255,.48);
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .navLinks {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex: 1;
        }

        .navLinks a {
          color: rgba(255,255,255,.88);
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .5px;
          transition: color .2s ease, transform .2s ease;
        }

        .navLinks a:hover {
          color: #00d9ff;
          transform: translateY(-1px);
        }

        .quoteBtn {
          border: 1px solid #ff2da6;
          background: rgba(255,45,166,.03);
          color: #fff;
          padding: 13px 23px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 900;
          cursor: pointer;
          white-space: nowrap;
          transition: .25s ease;
        }

        .quoteBtn:hover {
          background: linear-gradient(90deg,rgba(0,217,255,.15),rgba(255,45,166,.15));
          box-shadow: 0 0 25px rgba(255,45,166,.18);
        }

        .hero {
          min-height: 680px;
          padding: 72px 4% 48px;
          display: grid;
          grid-template-columns: 43% 57%;
          align-items: center;
          position: relative;
        }

        .heroContent {
          position: relative;
          z-index: 10;
          max-width: 650px;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 24px;
          font-size: 12px;
          letter-spacing: 4px;
          font-weight: 900;
          background: linear-gradient(90deg,#00d9ff,#ff299d,#ffd000);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(52px, 5.2vw, 78px);
          line-height: .99;
          letter-spacing: -3.5px;
          font-weight: 900;
        }

        .gradientWord {
          background: linear-gradient(90deg,#00d9ff,#7c55ff,#ff299d,#ffd000);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .accentLine {
          width: 88px;
          height: 3px;
          margin: 25px 0 20px;
          background: linear-gradient(90deg,#00d9ff,#ff299d,#ffd000);
          box-shadow: 0 0 14px rgba(0,217,255,.25);
        }

        .tagline {
          margin: 0 0 12px;
          font-size: 21px;
          font-weight: 500;
        }

        .tagline span { color: #00d9ff; }

        .heroDescription {
          max-width: 560px;
          color: #9ca6b5;
          font-size: 15px;
          line-height: 1.75;
          margin: 0;
        }

        .heroActions {
          display: flex;
          gap: 16px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .primaryBtn, .secondaryBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .3px;
          transition: .25s ease;
        }

        .primaryBtn {
          color: #fff;
          background: linear-gradient(90deg,#00cfff,#7b5cff,#ff299d,#ffd000);
          box-shadow: 0 12px 35px rgba(0,170,255,.12);
        }

        .secondaryBtn {
          color: #fff;
          border: 1px solid rgba(255,255,255,.3);
          background: rgba(255,255,255,.02);
        }

        .primaryBtn:hover, .secondaryBtn:hover {
          transform: translateY(-2px);
        }

        .scrollHint {
          margin-top: 32px;
          color: #8b929e;
          font-size: 10px;
          letter-spacing: 2.5px;
        }

        .machineStage {
          height: 610px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          isolation: isolate;
        }

        .machineStage::before {
          content: "";
          position: absolute;
          width: 560px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(0,140,255,.20), rgba(255,0,160,.09), transparent 68%);
          filter: blur(22px);
          z-index: -2;
        }

        .ringOuter, .ringInner {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .ringOuter {
          width: 610px;
          height: 380px;
          border: 1px solid rgba(0,185,255,.45);
          transform: rotate(-8deg);
          box-shadow: 0 0 35px rgba(0,160,255,.18);
        }

        .ringInner {
          width: 530px;
          height: 330px;
          border: 1px solid rgba(255,0,170,.34);
          transform: rotate(8deg);
          box-shadow: 0 0 35px rgba(255,0,170,.12);
        }

        .platform {
          position: absolute;
          bottom: 30px;
          width: 560px;
          height: 85px;
          border-radius: 50%;
          transform: perspective(600px) rotateX(64deg);
          border: 1px solid rgba(0,210,255,.7);
          background: radial-gradient(ellipse,rgba(0,120,255,.22),rgba(255,0,150,.12),transparent 70%);
          box-shadow:
            0 0 30px rgba(0,180,255,.38),
            0 0 80px rgba(255,0,150,.16);
        }

        .machineImage {
          width: min(720px, 110%);
          position: relative;
          z-index: 5;
          transform: translateY(-6px) perspective(1000px) rotateY(-3deg);
          filter:
            drop-shadow(0 28px 30px rgba(0,0,0,.78))
            drop-shadow(0 0 24px rgba(0,160,255,.18));
          transition: transform .5s ease, filter .5s ease;
        }

        .machineImage:hover {
          transform: translateY(-12px) perspective(1000px) rotateY(-3deg) scale(1.02);
          filter:
            drop-shadow(0 30px 35px rgba(0,0,0,.8))
            drop-shadow(0 0 32px rgba(0,180,255,.28));
        }

      .stats {
  margin: 0 4%;
  padding: 24px 18px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  background: rgba(8, 13, 22, 0.78);
  box-shadow:
    0 0 50px rgba(0, 100, 255, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  perspective: 1200px;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;
  animation: statsEntrance 1.2s cubic-bezier(.16, 1, .3, 1) both;
}

.stats::before {
  content: "";
  position: absolute;
  top: 0;
  left: -35%;
  width: 35%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 200, 255, 0.12),
    rgba(255, 0, 180, 0.10),
    transparent
  );
  transform: skewX(-20deg);
  animation: statsLight 4s ease-in-out infinite;
  pointer-events: none;
}

.stat {
  text-align: center;
  padding: 8px 15px;
  border-right: 1px solid rgba(255, 255, 255, 0.10);
  position: relative;
  transform-style: preserve-3d;
  transition:
    transform 0.45s cubic-bezier(.16, 1, .3, 1),
    filter 0.45s ease;
  animation: statFloat 4s ease-in-out infinite;
}

.stat:nth-child(2) {
  animation-delay: 0.15s;
}

.stat:nth-child(3) {
  animation-delay: 0.3s;
}

.stat:nth-child(4) {
  animation-delay: 0.45s;
}

.stat:nth-child(5) {
  animation-delay: 0.6s;
}

.stat:hover {
  transform:
    translateY(-10px)
    translateZ(35px)
    rotateX(4deg)
    rotateY(-4deg);
  filter: brightness(1.25);
}

.stat::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -8px;
  width: 55%;
  height: 2px;
  transform: translateX(-50%) scaleX(0);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 200, 255, 0.9),
    rgba(255, 0, 180, 0.9),
    transparent
  );
  transition: transform 0.45s ease;
}

.stat:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.stat:last-child {
  border-right: none;
}

.statNumber {
  font-size: 29px;
  font-weight: 900;
  line-height: 1;
  transform: translateZ(25px);
  text-shadow:
    0 3px 0 rgba(0, 0, 0, 0.35),
    0 0 18px currentColor;
  transition:
    transform 0.45s ease,
    text-shadow 0.45s ease;
}

.stat:hover .statNumber {
  transform: translateZ(55px) scale(1.12);
  text-shadow:
    0 5px 0 rgba(0, 0, 0, 0.35),
    0 0 30px currentColor;
}

.statText {
  margin-top: 8px;
  color: #9da5b3;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3px;
  transform: translateZ(15px);
  transition:
    transform 0.45s ease,
    color 0.45s ease;
}

.stat:hover .statText {
  color: #ffffff;
  transform: translateZ(35px);
}

@keyframes statsEntrance {
  from {
    opacity: 0;
    transform: perspective(1200px) rotateX(12deg) translateY(50px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: perspective(1200px) rotateX(0deg) translateY(0) scale(1);
  }
}

@keyframes statsLight {
  0% {
    left: -35%;
  }

  55% {
    left: 110%;
  }

  100% {
    left: 110%;
  }
}

@keyframes statFloat {
  0%,
  100% {
    transform: translateY(0) translateZ(0);
  }

  50% {
    transform: translateY(-3px) translateZ(8px);
  }
}

@media (max-width: 900px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .stat:last-child {
    border-bottom: none;
  }
}

@media (max-width: 600px) {
  .stats {
    grid-template-columns: 1fr;
    margin: 0 5%;
  }

  .stat {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 14px;
  }
}
        .machinesSection {
          padding: 100px 4% 90px;
        }

        .sectionEyebrow {
          color: #00d9ff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .sectionTitle {
          margin: 10px 0 38px;
          font-size: clamp(38px,4vw,54px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .machineGrid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
        }

        .machineCard {
          min-height: 270px;
          padding: 26px;
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.11);
          background: linear-gradient(145deg,rgba(15,25,40,.9),rgba(3,7,13,.96));
          text-decoration: none;
          color: #fff;
          transition: transform .3s ease,border-color .3s ease,box-shadow .3s ease;
        }

        .machineCard:hover {
          transform: translateY(-6px);
          border-color: rgba(0,217,255,.42);
          box-shadow: 0 20px 55px rgba(0,0,0,.28);
        }

        .machineCard::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -70px;
          bottom: -90px;
          border-radius: 50%;
          background: radial-gradient(circle,rgba(0,190,255,.18),transparent 68%);
          filter: blur(5px);
          transition: .3s ease;
        }

        .machineCard:nth-child(even)::after {
          background: radial-gradient(circle,rgba(255,0,160,.17),transparent 68%);
        }

        .machineCard:hover::after {
          transform: scale(1.25);
        }

        .cardIcon {
          font-size: 30px;
          margin-bottom: 38px;
        }

        .machineCard h3 {
          margin: 0;
          font-size: 17px;
          line-height: 1.25;
        }

        .machineCard p {
          margin: 12px 0 0;
          color: #8f99a8;
          font-size: 13px;
          line-height: 1.55;
          max-width: 210px;
        }

        .cardArrow {
          position: absolute;
          left: 26px;
          bottom: 22px;
          font-size: 24px;
          transition: transform .25s ease;
        }

        .machineCard:hover .cardArrow {
          transform: translateX(7px);
        }

        .footer {
          padding: 35px 4%;
          text-align: center;
          color: #707783;
          font-size: 11px;
          border-top: 1px solid rgba(255,255,255,.07);
        }

        @media (max-width: 1050px) {
          .navLinks { gap: 18px; }
          .brand { min-width: 190px; }
          .hero {
            grid-template-columns: 1fr;
            padding-top: 55px;
          }
          .heroContent { max-width: 760px; }
          .machineStage { margin-top: -15px; height: 500px; }
          .machineGrid { grid-template-columns: repeat(2,1fr); }
        }

        @media (max-width: 760px) {
          .nav { height: 70px; }
          .navLinks { display: none; }
          .brand { min-width: auto; }
          .quoteBtn { padding: 11px 15px; }
          .hero {
            padding: 52px 6% 25px;
          }
          .hero h1 { font-size: 49px; }
          .machineStage {
            height: 390px;
            margin-top: 10px;
          }
          .ringOuter { width: 360px; height: 245px; }
          .ringInner { width: 315px; height: 215px; }
          .platform { width: 350px; bottom: 10px; }
          .machineImage { width: 112%; }
          .stats {
            grid-template-columns: repeat(2,1fr);
            gap: 20px 0;
            margin: 0 6%;
          }
          .stat:nth-child(2), .stat:nth-child(4) { border-right: none; }
          .stat:nth-child(3) { border-right: 1px solid rgba(255,255,255,.1); }
          .machinesSection { padding: 75px 6%; }
          .machineGrid { grid-template-columns: 1fr; }
        }

    /* =========================================================
   NEXIX NX — GLOBAL WORLD MAP
   ========================================================= */

.worldMapSection {
  position: relative;
  width: 100%;
  min-height: 900px;
  padding: 120px 4% 100px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 45%, rgba(20, 100, 180, 0.12), transparent 35%),
    radial-gradient(circle at 20% 70%, rgba(0, 180, 255, 0.06), transparent 30%),
    #02060d;
  color: white;
}

/* HEADER */

.worldMapHeader {
  position: relative;
  z-index: 20;
  max-width: 760px;
  margin: 0 auto 50px;
  text-align: center;
}

.worldMapHeader > span {
  display: inline-block;
  margin-bottom: 16px;
  font-size: 11px;
  letter-spacing: 4px;
  color: #69d9ff;
  font-weight: 700;
}

.worldMapHeader h2 {
  margin: 0;
  font-size: clamp(36px, 5vw, 68px);
  line-height: 1;
  font-weight: 700;
  letter-spacing: -2px;
}

.worldMapHeader h2 strong {
  color: #62d8ff;
}

.worldMapHeader p {
  max-width: 600px;
  margin: 24px auto 0;
  color: rgba(255,255,255,.58);
  font-size: 15px;
  line-height: 1.8;
}

/* MAP AREA */

.worldMap {
  position: relative;
  width: min(1400px, 100%);
  height: 620px;
  margin: auto;
  overflow: hidden;
  perspective: 1400px;
}

/* MAP IMAGE */

.worldMapImage {
  position: absolute;
  inset: 30px 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform:
    perspective(1400px)
    rotateX(7deg)
    scale(1.04);
  animation: mapFloat 8s ease-in-out infinite;
}

.worldMapImage::after {
  content: "";
  position: absolute;
  inset: 15%;
  background: radial-gradient(
    ellipse,
    rgba(60, 190, 255, .16),
    transparent 65%
  );
  filter: blur(30px);
  pointer-events: none;
}

.worldMapImage img {
  width: 100%;
  height: 100%;
  object-fit: contain;

  /*
   * Your SVG has a white background.
   * Invert + screen makes the background disappear
   * and turns the map lines into a futuristic light map.
   */
  filter:
    invert(1)
    brightness(.72)
    contrast(1.5);

  opacity: .72;
  mix-blend-mode: screen;
}

@keyframes mapFloat {
  0%, 100% {
    transform:
      perspective(1400px)
      rotateX(7deg)
      scale(1.04)
      translateY(0);
  }

  50% {
    transform:
      perspective(1400px)
      rotateX(7deg)
      scale(1.06)
      translateY(-10px);
  }
}

/* SCANNING LIGHT */

.mapScan {
  position: absolute;
  left: 8%;
  right: 8%;
  height: 2px;
  top: 10%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(80,220,255,.15),
    #69d9ff,
    rgba(255,70,220,.7),
    transparent
  );

  box-shadow:
    0 0 12px rgba(80,220,255,.8),
    0 0 35px rgba(80,220,255,.35);

  animation: mapScan 5s linear infinite;
  z-index: 5;
}

@keyframes mapScan {
  0% {
    top: 8%;
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    top: 92%;
    opacity: 0;
  }
}

/* CONNECTION LINES */

.mapConnection {
  position: absolute;
  height: 1px;
  transform-origin: left center;
  background: linear-gradient(
    90deg,
    rgba(60,220,255,.0),
    rgba(60,220,255,.55),
    rgba(160,90,255,.4),
    transparent
  );

  box-shadow: 0 0 8px rgba(60,220,255,.3);
  animation: connectionPulse 3s ease-in-out infinite;
  z-index: 4;
}

.connection1 {
  width: 52%;
  left: 28%;
  top: 48%;
  transform: rotate(-9deg);
}

.connection2 {
  width: 48%;
  left: 34%;
  top: 54%;
  transform: rotate(8deg);
  animation-delay: .8s;
}

.connection3 {
  width: 42%;
  left: 39%;
  top: 50%;
  transform: rotate(21deg);
  animation-delay: 1.4s;
}

.connection4 {
  width: 55%;
  left: 20%;
  top: 56%;
  transform: rotate(-22deg);
  animation-delay: 2s;
}

@keyframes connectionPulse {
  0%, 100% {
    opacity: .25;
  }

  50% {
    opacity: .85;
  }
}

/* MAP POINTS */

.mapPoint {
  position: absolute;
  z-index: 15;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  cursor: default;
}

.mapPoint i {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #6ee7ff;
  box-shadow:
    0 0 6px #6ee7ff,
    0 0 18px rgba(80,220,255,.9);
}

.mapPoint i::after {
  content: "";
  position: absolute;
  inset: -7px;
  border: 1px solid rgba(100,220,255,.55);
  border-radius: 50%;
  animation: pointPulse 2s ease-out infinite;
}

@keyframes pointPulse {
  0% {
    transform: scale(.4);
    opacity: 1;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.mapPoint strong {
  display: block;
  color: #dff9ff;
  font-size: 12px;
  font-weight: 700;
  text-shadow: 0 0 12px rgba(90,220,255,.8);
}

.mapPoint small {
  display: block;
  margin-top: 3px;
  color: #64d9ff;
  font-size: 8px;
  letter-spacing: 2px;
}

/* HEAD OFFICE */

.mapPoint.surat i {
  width: 14px;
  height: 14px;
  background: #ffd34d;
  box-shadow:
    0 0 8px #ffd34d,
    0 0 25px rgba(255,210,60,.9);
}

.mapPoint.surat strong {
  color: #ffd34d;
  font-size: 14px;
}

.mapPoint.surat small {
  color: #ffd34d;
}

/* INDIA LOCATIONS */

.surat {
  left: 65%;
  top: 59%;
}

.delhi {
  left: 65%;
  top: 48%;
}

.ahmedabad {
  left: 62%;
  top: 56%;
}

.panipat {
  left: 66%;
  top: 45%;
}

.amritsar {
  left: 63%;
  top: 40%;
}

.tiruppur {
  left: 65%;
  top: 69%;
}

.kolkata {
  left: 70%;
  top: 57%;
}

.mumbai {
  left: 61%;
  top: 62%;
}

/* GLOBAL LOCATIONS */

.usa {
  left: 23%;
  top: 39%;
}

.brazil {
  left: 31%;
  top: 70%;
}

.uae {
  left: 57%;
  top: 49%;
}

.saudi {
  left: 56%;
  top: 55%;
}

.bangladesh {
  left: 71%;
  top: 55%;
}

.thailand {
  left: 73%;
  top: 61%;
}

.vietnam {
  left: 76%;
  top: 58%;
}

.china {
  left: 78%;
  top: 41%;
}

.japan {
  left: 87%;
  top: 45%;
}

/* CENTER BRAND */

.mapCenterBrand {
  position: absolute;
  z-index: 12;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 24px 42px;

  border: 1px solid rgba(100,210,255,.2);
  border-radius: 18px;

  background: rgba(3,12,24,.72);
  backdrop-filter: blur(12px);

  box-shadow:
    0 0 40px rgba(40,170,255,.12),
    inset 0 0 30px rgba(40,170,255,.04);

  text-align: center;
}

.mapCenterBrand strong {
  display: block;
  font-size: clamp(28px, 4vw, 52px);
  letter-spacing: 7px;

  background: linear-gradient(
    90deg,
    #5edaff,
    #8f7cff,
    #ff62d8
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.mapCenterBrand span {
  display: block;
  margin-top: 8px;
  color: rgba(220,245,255,.55);
  font-size: 9px;
  letter-spacing: 4px;
}

/* STATS */

.worldMapStats {
  position: relative;
  z-index: 20;

  display: flex;
  justify-content: center;
  gap: 90px;

  margin-top: 35px;
}

.worldMapStats div {
  text-align: center;
}

.worldMapStats strong {
  display: block;
  color: #68dcff;
  font-size: 28px;
}

.worldMapStats span {
  display: block;
  margin-top: 5px;
  color: rgba(255,255,255,.45);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* MOBILE */

@media (max-width: 900px) {

  .worldMapSection {
    min-height: 700px;
    padding: 80px 15px;
  }

  .worldMap {
    height: 470px;
  }

  .mapPoint strong {
    font-size: 9px;
  }

  .mapPoint small {
    font-size: 6px;
  }

  .mapPoint i {
    width: 7px;
    height: 7px;
  }

  .mapCenterBrand {
    padding: 15px 22px;
  }

  .mapCenterBrand strong {
    font-size: 25px;
    letter-spacing: 4px;
  }

  .mapCenterBrand span {
    font-size: 6px;
    letter-spacing: 2px;
  }

  .worldMapStats {
    gap: 30px;
  }

  .worldMapStats strong {
    font-size: 20px;
  }

  .worldMapStats span {
    font-size: 7px;
  }
}
    `}</style>

      {/* NAVBAR */}
      <nav className="nav">
        <a href="#" className="brand">
          <div className="brandMark">NX</div>
          <div>
            <div className="brandName">NEXIX NX</div>
            <div className="brandTag">WE SELL TRUST WITH MACHINES</div>
          </div>
        </a>

        <input
  type="checkbox"
  id="mobileMenuToggle"
  className="mobileMenuToggle"
/>

<label htmlFor="mobileMenuToggle" className="mobileMenuButton">
  <span></span>
  <span></span>
  <span></span>
</label>

<div className="mobileMenu">
  <Link href="#home">HOME</Link>
  <Link href="#machines">MACHINES</Link>
  <Link href="/inks">INKS</Link>
  <Link href="/support">SUPPORT</Link>
  <Link href="/about">ABOUT US</Link>
  <Link href="/contact">CONTACT</Link>
  <Link href="/careers">CAREERS</Link>
</div>
        <div className="navLinks">
          <a href="#">HOME</a>
          <a href="#machines">MACHINES</a>
         <div className="navDropdown">
  <Link href="/inks" className="navDropdownTitle">
    INKS <span>⌄</span>
  </Link>

  <div className="navDropdownMenu">

    <Link href="/inks/textile" className="inkMenuCard">
      <div className="inkMenuIcon textileIcon">T</div>
      <div className="inkMenuContent">
        <strong>Textile Inks</strong>
        <small>Sublimation · Reactive · Pigment</small>
      </div>
      <span className="inkMenuArrow">→</span>
    </Link>

   <Link href="/inks/dtf" className="inkMenuCard">
      <div className="inkMenuIcon dtfIcon">D</div>
      <div className="inkMenuContent">
        <strong>DTF & Garment Inks</strong>
        <small>DTF · DTG · Garment Printing</small>
      </div>
      <span className="inkMenuArrow">→</span>
   </Link>

    <a href="#uv-inks" className="inkMenuCard">
      <div className="inkMenuIcon uvIcon">U</div>
      <div className="inkMenuContent">
        <strong>UV Inks</strong>
        <small>UV Printing · Rigid Applications</small>
      </div>
      <span className="inkMenuArrow">→</span>
    </a>

    <a href="#solvent-inks" className="inkMenuCard">
  <div className="inkMenuIcon solventIcon">S</div>

  <div className="inkMenuContent">
    <strong>Solvent Inks</strong>
    <span>Eco-Solvent · Solvent</span>
  </div>

  <span className="inkMenuArrow">→</span>
</a>

    <a href="#ink-finder" className="inkFinderCard">
      <div>
        <strong>INK FINDER</strong>
        <small>Find the right ink for your application</small>
      </div>
      <span>→</span>
    </a>

  </div>
</div>
         <Link href="/support">SUPPORT</Link>
          <Link href="/about">ABOUT US</Link>
          <Link href="/contact">CONTACT</Link>
        </div>

 <Link href="/careers" className="quoteBtn">
  CAREERS
</Link>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="heroContent">
          <div className="eyebrow">PRECISE ENGINEERING. PERFECT PRINTS.</div>

          <h1>
            Engineering the
            <br />
            Future of
            <br />
            <span className="gradientWord">Digital</span> Printing
          </h1>

          <div className="accentLine" />

          <h3 className="tagline">
            We sell <span>trust</span> with machines.
          </h3>

          <p className="heroDescription">
            NEXIX NX offers world-class digital printing machines and premium
            inks with unmatched service and technical support.
          </p>

          <div className="heroActions">
            <a className="primaryBtn" href="#machines">
              EXPLORE MACHINES&nbsp; →
            </a>
            <a className="secondaryBtn" href="/inks">
              EXPLORE INKS&nbsp; →
            </a>
          </div>

          <div className="scrollHint">◉ &nbsp; SCROLL TO EXPLORE</div>
        </div>

        <div className="machineStage">
          <div className="ringOuter" />
          <div className="ringInner" />
          <div className="platform" />

          <img
            className="machineImage"
            src="/machines.png"
            alt="NEXIX NX digital printing machines"
          />
        </div>
      </section>

      {/* 3D STATS */}
<section className="stats3D">
  <div className="stats3D-inner">
    {stats.map(([number, text, color], index) => (
      <div
        className="stat3D"
        key={text}
        style={{
          ["--stat-color" as string]: color,
          ["--delay" as string]: `${index * 0.12}s`,
        }}
      >
        <div className="stat3D-glow" />

        <div className="stat3D-content">
          <div className="stat3D-number">
            {number}
          </div>

          <div className="stat3D-label">
            {text}
          </div>
        </div>

        <div className="stat3D-shine" />
      </div>
    ))}
  </div>
</section>
    
     {/* OUR MACHINES - MOVING ANIMATION */}
<section
  id="machines"
  style={{
    padding: "100px 0",
    overflow: "hidden",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 30px",
    }}
  >
    <div
      style={{
        color: "#42c9ff",
        fontSize: "13px",
        fontWeight: 900,
        letterSpacing: "5px",
        marginBottom: "18px",
      }}
    >
      OUR TECHNOLOGY
    </div>

    <h2
      style={{
        fontSize: "clamp(42px, 5vw, 64px)",
        fontWeight: 900,
        margin: 0,
        letterSpacing: "-3px",
      }}
    >
      Our Machines
    </h2>
  </div>

  {/* MOVING TRACK */}
  <div
    style={{
      marginTop: "55px",
      width: "100%",
      overflow: "hidden",
      position: "relative",
    }}
  >
    <div
      className="machines-track"
      style={{
        display: "flex",
        width: "max-content",
        gap: "22px",
        animation: "machineScroll 28s linear infinite",
      }}
    >
      {/* SET 1 */}
      {[
        {
          title: "Sublimation",
          subtitle: "High-Speed Textile Printing",
          icon: "💧",
          link: "/machines/sublimation",
          text:
            "High-performance sublimation printers engineered for polyester textile production.",
        },
        {
          title: "Direct-to-Fabric",
          subtitle: "Industrial Fabric Printing",
          icon: "👕",
          link: "/machines/direct-to-fabric",
          text:
            "Direct fabric printing solutions for high-quality textile production.",
        },
        {
          title: "UV Printing",
          subtitle: "Wide-Format UV Technology",
          icon: "☀️",
          link: "/machines/uv",
          text:
            "Versatile UV printing technology for banners, advertising and rigid applications.",
        },
        
        /* DUPLICATE SET FOR INFINITE LOOP */
        {
          title: "Sublimation",
          subtitle: "High-Speed Textile Printing",
          icon: "💧",
          link: "/machines/sublimation",
          text:
            "High-performance sublimation printers engineered for polyester textile production.",
        },
        {
          title: "Direct-to-Fabric",
          subtitle: "Industrial Fabric Printing",
          icon: "👕",
          link: "/machines/direct-to-fabric",
          text:
            "Direct fabric printing solutions for high-quality textile production.",
        },
        {
          title: "UV Printing",
          subtitle: "Wide-Format UV Technology",
          icon: "☀️",
          link: "/machines/uv",
          text:
            "Versatile UV printing technology for banners, advertising and rigid applications.",
        },
        
      ].map((machine, index) => (
        <Link
          href={machine.link}
          key={`${machine.title}-${index}`}
          className="machine-card"
          style={{
            width: "340px",
            minWidth: "340px",
            minHeight: "300px",
            padding: "32px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.10)",
            background:
              "linear-gradient(145deg, rgba(15,23,38,0.98), rgba(5,9,16,0.98))",
            textDecoration: "none",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            transition: "transform 0.35s ease, border-color 0.35s ease",
          }}
        >
          <div>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                background:
                  "linear-gradient(135deg, rgba(66,201,255,0.16), rgba(237,59,169,0.16))",
                marginBottom: "25px",
              }}
            >
              {machine.icon}
            </div>

            <div
              style={{
                color: "#42c9ff",
                fontSize: "11px",
                fontWeight: 900,
                letterSpacing: "3px",
                marginBottom: "10px",
              }}
            >
              NEXIX NX
            </div>

            <h3
              style={{
                fontSize: "27px",
                margin: "0 0 10px",
                fontWeight: 900,
              }}
            >
              {machine.title}
            </h3>

            <div
              style={{
                color: "#ed3ba9",
                fontSize: "12px",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              {machine.subtitle}
            </div>

            <p
              style={{
                color: "#9caabd",
                fontSize: "14px",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {machine.text}
            </p>
          </div>

          <div
            style={{
              marginTop: "25px",
              fontSize: "13px",
              fontWeight: 900,
              color: "white",
            }}
          >
            EXPLORE MACHINE →
          </div>
        </Link>
      ))}
       </div>
  </div>
</section>

{/* WORLDWIDE SERVICE NETWORK */}
<section className="worldwideNetwork">
  <div className="worldwideNetworkImage">
    <img
      src="/worldwide-network.png"
      alt="NEXIX NX Worldwide Service Network"
    />
  </div>
</section>

{/* CUSTOMER REVIEWS */}
<section id="reviews" className="customerReviews">
  <div className="customerReviewsHeader">
    <span>CLIENT EXPERIENCE</span>
    <h2>What Our <strong>Customers Say</strong></h2>
    <p>
      Trusted by printing businesses and textile professionals
      across India and international markets.
    </p>
  </div>

  <div className="reviewsGrid">

    <div className="reviewCard">
      <div className="reviewStars">★★★★★</div>

      <p>
        “Excellent technical support and very professional service.
        Their engineers understood our machine issue quickly and
        solved it efficiently.”
      </p>

      <div className="reviewCustomer">
        <div className="reviewAvatar">RK</div>
        <div>
          <strong>Rajesh Kumar</strong>
          <span>Textile Printing Industry</span>
        </div>
      </div>
    </div>

    <div className="reviewCard">
      <div className="reviewStars">★★★★★</div>

      <p>
        “Very good experience with the installation and technical
        team. Fast response and excellent knowledge of digital
        printing machines.”
      </p>

      <div className="reviewCustomer">
        <div className="reviewAvatar">AS</div>
        <div>
          <strong>Amit Shah</strong>
          <span>Digital Printing Company</span>
        </div>
      </div>
    </div>

    <div className="reviewCard">
      <div className="reviewStars">★★★★★</div>

      <p>
        “Professional service with quick troubleshooting. The team
        provides reliable support whenever we need assistance.”
      </p>

      <div className="reviewCustomer">
        <div className="reviewAvatar">MP</div>
        <div>
          <strong>Manish Patel</strong>
          <span>Textile Manufacturer</span>
        </div>
      </div>
    </div>
<div className="reviewCard">
  <div className="reviewStars">★★★★★</div>

  <p>
    “The installation team was very knowledgeable and completed
    the machine setup smoothly. Their technical support has been
    excellent.”
  </p>

  <div className="reviewCustomer">
    <div className="reviewAvatar">VK</div>
    <div>
      <strong>Vikram Kapoor</strong>
      <span>Textile Printing Company</span>
    </div>
  </div>
</div>

<div className="reviewCard">
  <div className="reviewStars">★★★★★</div>

  <p>
    “Whenever we face a technical problem, the response is quick.
    The engineers have strong knowledge of digital printing
    technology.”
  </p>

  <div className="reviewCustomer">
    <div className="reviewAvatar">NP</div>
    <div>
      <strong>Nilesh Patel</strong>
      <span>Digital Textile Printer</span>
    </div>
  </div>
</div>

<div className="reviewCard">
  <div className="reviewStars">★★★★★</div>

  <p>
    “A reliable technical team with excellent machine knowledge.
    Their support helped us reduce downtime and keep production
    running.”
  </p>

  <div className="reviewCustomer">
    <div className="reviewAvatar">SM</div>
    <div>
      <strong>Sanjay Mehta</strong>
      <span>Printing Solutions</span>
    </div>
  </div>
</div>
  </div>
</section>
{/* ================= FOOTER ================= */}

<footer className="siteFooter">

  <div className="footerGlow"></div>

  <div className="footerContainer">

    {/* BRAND */}
    <div className="footerBrand">

      <div className="footerLogo">
        <span>NEXIX</span>
        <strong>NX</strong>
      </div>

      <p>
        Advanced digital printing technology, technical support
        and machine solutions for the modern textile industry.
      </p>

      <div className="footerTagline">
        PRINTING TECHNOLOGY WITHOUT BORDERS
      </div>

    </div>


    {/* QUICK LINKS */}
    <div className="footerColumn">

      <h3>QUICK LINKS</h3>

      <Link href="/about">About Us</Link>
      <a href="#machines">Machines</a>
      <Link href="/support">Services</Link>
      <a href="/#reviews">Customer Reviews</a>
     <Link href="/contact">Contact Us</Link>

    </div>

 {/* MACHINES */}
<div className="footerColumn">
  <h3>MACHINES</h3>

  <a href="/machines/direct-to-fabric">
    Direct-to-Fabric
  </a>

  <a href="/machines/sublimation">
    Sublimation
  </a>

  <a href="/machines/uv">
    UV Printing
  </a>

  <a href="/inks/textile">
    Textile Inks
  </a>
</div>

{/* CONTACT DETAILS */}
<div className="footerColumn contactDetails">
  <h3>CONTACT DETAILS</h3>

  <div className="contactItem">
    <span className="contactLabel">EMAIL</span>

    <a
      className="contactLink"
      href="mailto:nikeshvermaa@gmail.com"
    >
      nikeshvermaa@gmail.com
    </a>
  </div>

  <div className="contactItem">
    <span className="contactLabel">PHONE</span>

    <a
      className="contactLink contactPhone"
      href="tel:+914512546512"
    >
      +91 4563214567
    </a>
  </div>

  <div className="contactItem">
    <span className="contactLabel">LOCATION</span>

    <div className="contactValue">
      Platinum Business Park, Surat
    </div>
  </div>
</div>

  {/* SOCIAL + BOTTOM */}
  <div className="footerBottom">

    <div className="footerSocials">

      <a href="#" aria-label="Instagram">
        ◎
      </a>

      <a href="#" aria-label="Facebook">
        f
      </a>

      <a href="#" aria-label="LinkedIn">
        in
      </a>

      <a href="#" aria-label="YouTube">
        ▶
      </a>

    </div>

    <p>
      © 2026 NEXIX NX. All Rights Reserved.
    </p>

    <span>
      Digital Printing Technology • Global Service Network
    </span>

 </div>
</div>
</footer>
</main>
);
}