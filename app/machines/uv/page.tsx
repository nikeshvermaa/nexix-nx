"use client";
import Link from "next/link";

const specifications = [
  ["PRINT WIDTH", "1.8 m – 5.2 m"],
  ["PRINTING SPEED", "100–200 m/hr"],
  ["PRINTHEAD OPTIONS", "Epson i3200 / Konica 512i"],
  ["COLOUR OPTIONS", "4–8 Colours"],
  ["MEDIA", "UV Paper"],
  ["CONTROL SYSTEM", "Hoson Control System"],
];

const features = [
  {
    title: "Wide Print Width",
    text: "Available in printing widths from 1.8 metres up to 5.2 metres for wide-format production.",
  },
  {
    title: "Flexible Printhead Options",
    text: "Configure the machine with Epson i3200 or Konica 512i printhead options.",
  },
  {
    title: "High Production",
    text: "Production capability ranging from 100 to 200 metres per hour.",
  },
  {
    title: "Flexible Colour Configuration",
    text: "Available with 4 to 8 colour configurations according to production requirements.",
  },
  {
    title: "Hoson Control System",
    text: "Hoson control system for machine operation and production control.",
  },
  {
    title: "Wide-Format Applications",
    text: "Designed for banners, advertising graphics and other wide-format advertising applications.",
  },
];

const applications = [
  "Banners",
  "Advertising Graphics",
  "Promotional Displays",
  "Wide-Format Advertising",
  "Commercial Graphics",
  "Large-Format Printing",
];

export default function UVPage() {
  return (
    <main className="uvPage">
      <style jsx>{`
        .uvPage {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 80% 10%, rgba(0,150,255,0.12), transparent 30%),
            radial-gradient(circle at 20% 70%, rgba(255,40,160,0.08), transparent 35%),
            #03060d;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        .uvHeader {
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 0 7%;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(3,6,13,0.9);
        }

        .backLink {
          color: white;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          white-space: nowrap;
        }

        .brand {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1px;
          white-space: nowrap;
        }

        .brandNx {
          background: linear-gradient(90deg,#00d9ff,#7c55ff,#ff299d);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .uvSection {
          max-width: 1300px;
          margin: 0 auto;
          padding-left: 6%;
          padding-right: 6%;
          box-sizing: border-box;
        }

        .hero {
          padding-top: 90px;
          padding-bottom: 70px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
          gap: 65px;
          align-items: center;
        }

        .eyebrow,
        .sectionEyebrow {
          color: #35c9ff;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 4px;
          margin-bottom: 20px;
        }

        .heroTitle {
          margin: 0;
          font-size: clamp(55px, 7vw, 90px);
          line-height: 0.9;
          font-weight: 900;
          letter-spacing: -4px;
        }

        .gradientText {
          background: linear-gradient(90deg,#00d9ff,#765cff,#ff299d,#ffd000);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .heroText {
          max-width: 620px;
          color: #aebbd0;
          font-size: 20px;
          line-height: 1.75;
          margin-top: 30px;
        }

        .heroActions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .primaryButton,
        .secondaryButton,
        .ctaButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          min-height: 52px;
          padding: 16px 28px;
          border-radius: 8px;
          color: white;
          text-decoration: none;
          font-weight: 900;
        }

        .primaryButton,
        .ctaButton {
          background: linear-gradient(90deg,#00cfff,#765cff,#ff299d);
        }

        .secondaryButton {
          border: 1px solid rgba(255,255,255,0.2);
        }

        .machineImageBox {
          min-height: 480px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.10);
          background: linear-gradient(145deg,rgba(13,23,40,0.95),rgba(4,8,15,0.95));
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 35px;
          box-sizing: border-box;
          box-shadow: 0 30px 100px rgba(0,120,255,0.10);
        }

        .machineImage {
          display: block;
          width: 100%;
          max-width: 720px;
          max-height: 480px;
          object-fit: contain;
        }

        .statsSection {
          padding-bottom: 90px;
        }

        .statsGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .statCard {
          padding: 28px 22px;
          border-radius: 14px;
          background: rgba(10,17,29,0.85);
          border: 1px solid rgba(255,255,255,0.09);
          box-sizing: border-box;
        }

        .statValue {
          font-size: 26px;
          font-weight: 900;
          background: linear-gradient(90deg,#35c9ff,#8b5cff,#ff3cae);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .statLabel {
          margin-top: 9px;
          color: #7e8ca2;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .overview,
        .features,
        .specifications,
        .applications,
        .ctaSection {
          padding-bottom: 110px;
        }

        .overviewContent {
          max-width: 900px;
        }

        .pinkEyebrow {
          color: #ff42ae;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 4px;
        }

        .sectionTitle {
          font-size: clamp(38px,5vw,62px);
          line-height: 1.05;
          margin: 18px 0;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .mutedTitle {
          color: #8996aa;
        }

        .bodyText {
          color: #aab7ca;
          font-size: 18px;
          line-height: 1.8;
        }

        .featuresTitle,
        .specTitle,
        .applicationsTitle {
          font-size: 48px;
          margin: 15px 0 40px;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
        }

        .featureCard {
          min-height: 190px;
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.09);
          box-sizing: border-box;
        }

        .featureCard:nth-child(odd) {
          background: linear-gradient(145deg,#0b1423,#070b13);
        }

        .featureCard:nth-child(even) {
          background: linear-gradient(145deg,#110b19,#080b13);
        }

        .featureDot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg,#35c9ff,#ff3cae);
          margin-bottom: 23px;
        }

        .featureCard h3 {
          margin: 0;
          font-size: 19px;
        }

        .featureCard p {
          color: #91a0b6;
          line-height: 1.7;
          font-size: 14px;
        }

        .specTable {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.09);
        }

        .specRow {
          display: grid;
          grid-template-columns: 35% 65%;
          padding: 22px 28px;
          box-sizing: border-box;
        }

        .specRow:nth-child(odd) {
          background: rgba(12,18,29,0.9);
        }

        .specRow:nth-child(even) {
          background: rgba(6,10,17,0.9);
        }

        .specRow:not(:last-child) {
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .specLabel {
          color: #7d8aa0;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .specValue {
          color: #f2f5fa;
          font-weight: 700;
        }

        .applicationGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .applicationCard {
          padding: 22px;
          border-radius: 12px;
          background: #080d16;
          border: 1px solid rgba(255,255,255,0.09);
          color: #dbe4f1;
          font-weight: 700;
          box-sizing: border-box;
        }

        .ctaBox {
          padding: 65px 35px;
          border-radius: 22px;
          text-align: center;
          background: linear-gradient(120deg,rgba(20,65,105,0.9),rgba(70,15,65,0.9));
          border: 1px solid rgba(255,255,255,0.12);
          box-sizing: border-box;
        }

        .ctaEyebrow {
          color: #35c9ff;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 4px;
        }

        .ctaTitle {
          font-size: 48px;
          margin: 18px 0;
          font-weight: 900;
        }

        .ctaText {
          color: #a8b6ca;
          font-size: 17px;
          margin-bottom: 30px;
        }

        @media (max-width: 900px) {
          .heroGrid {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .machineImageBox {
            min-height: 360px;
          }

          .statsGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .featureGrid,
          .applicationGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .uvHeader {
            min-height: 72px;
            padding: 0 18px;
            gap: 12px;
          }

          .backLink {
            font-size: 12px;
          }

          .brand {
            font-size: 20px;
          }

          .uvSection {
            padding-left: 18px;
            padding-right: 18px;
          }

          .hero {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .heroGrid {
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: stretch;
          }

          .heroTitle {
            font-size: clamp(52px, 16vw, 76px);
            letter-spacing: -3px;
          }

          .heroText {
            font-size: 17px;
            line-height: 1.65;
            margin-top: 22px;
          }

          .heroActions {
            flex-direction: column;
            width: 100%;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
            min-height: 56px;
          }

          .machineImageBox {
            min-height: 280px;
            width: 100%;
            padding: 22px;
            border-radius: 18px;
          }

          .machineImage {
            max-height: 310px;
          }

          .statsSection {
            padding-bottom: 58px;
          }

          .statsGrid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .statCard {
            padding: 20px 16px;
            min-height: 105px;
          }

          .statValue {
            font-size: 20px;
          }

          .statLabel {
            font-size: 9px;
            line-height: 1.4;
          }

          .overview,
          .features,
          .specifications,
          .applications,
          .ctaSection {
            padding-bottom: 70px;
          }

          .sectionEyebrow,
          .pinkEyebrow,
          .ctaEyebrow {
            font-size: 10px;
            letter-spacing: 3px;
          }

          .sectionTitle {
            font-size: 39px;
          }

          .bodyText {
            font-size: 16px;
            line-height: 1.7;
          }

          .featuresTitle,
          .specTitle,
          .applicationsTitle {
            font-size: 38px;
            margin-bottom: 28px;
          }

          .featureGrid,
          .applicationGrid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .featureCard {
            min-height: auto;
            padding: 24px;
          }

          .specTable {
            border-radius: 14px;
          }

          .specRow {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 18px;
          }

          .specLabel {
            font-size: 10px;
          }

          .specValue {
            font-size: 15px;
            line-height: 1.5;
            overflow-wrap: anywhere;
          }

          .applicationCard {
            padding: 18px;
          }

          .ctaBox {
            padding: 45px 20px;
            border-radius: 18px;
          }

          .ctaTitle {
            font-size: 39px;
            line-height: 1.05;
          }

          .ctaText {
            font-size: 15px;
            line-height: 1.6;
          }

          .ctaButton {
            width: 100%;
            min-height: 56px;
          }
        }

        @media (max-width: 420px) {
          .uvHeader {
            padding: 0 14px;
          }

          .backLink {
            font-size: 11px;
          }

          .brand {
            font-size: 18px;
          }

          .statsGrid {
            grid-template-columns: 1fr;
          }

          .heroTitle {
            font-size: 51px;
          }

          .machineImageBox {
            min-height: 245px;
            padding: 16px;
          }

          .machineImage {
            max-height: 270px;
          }
        }
      `}</style>

      <header className="uvHeader">
        <Link href="/" className="backLink">
          ← BACK TO HOME
        </Link>

        <div className="brand">
          <span className="brandNx">NX</span>{" "}
          NEXIX NX
        </div>
      </header>

      <section className="uvSection hero">
        <div className="heroGrid">
          <div>
            <div className="eyebrow">WIDE-FORMAT UV PRINTING</div>

            <h1 className="heroTitle">
              NEXIX
              <br />
              <span className="gradientText">NX-UV</span>
            </h1>

            <p className="heroText">
              A wide-format UV printing solution designed for advertising,
              banners and demanding large-format production, with flexible
              print widths from 1.8 to 5.2 metres.
            </p>

            <div className="heroActions">
              <Link href="/quote?machine=NX-UV" className="primaryButton">
                GET A QUOTE →
              </Link>

              <a href="#specifications" className="secondaryButton">
                VIEW SPECIFICATIONS
              </a>
            </div>
          </div>

          <div className="machineImageBox">
            <img
              src="/machine-uv.png"
              alt="NEXIX NX-UV wide-format UV printer"
              className="machineImage"
            />
          </div>
        </div>
      </section>

      <section className="uvSection statsSection">
        <div className="statsGrid">
          {[
            ["1.8–5.2 m", "PRINT WIDTH"],
            ["100–200", "M/HR"],
            ["i3200 / 512i", "PRINTHEAD OPTIONS"],
            ["4–8", "COLOUR OPTIONS"],
          ].map(([value, label]) => (
            <div className="statCard" key={label}>
              <div className="statValue">{value}</div>
              <div className="statLabel">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="uvSection overview">
        <div className="overviewContent">
          <div className="pinkEyebrow">WIDE-FORMAT PRODUCTION</div>

          <h2 className="sectionTitle">
            Built for wide-format
            <br />
            <span className="mutedTitle">advertising production.</span>
          </h2>

          <p className="bodyText">
            NX-UV provides flexible wide-format printing from 1.8 metres up
            to 5.2 metres, with multiple printhead and colour configurations
            to suit different production requirements.
          </p>
        </div>
      </section>

      <section className="uvSection features">
        <div className="sectionEyebrow">KEY FEATURES</div>

        <h2 className="featuresTitle">Flexible printing.</h2>

        <div className="featureGrid">
          {features.map((feature, index) => (
            <div className="featureCard" key={feature.title}>
              <div className="featureDot" />

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="specifications" className="uvSection specifications">
        <div className="pinkEyebrow">TECHNICAL DATA</div>

        <h2 className="specTitle">Technical Specifications</h2>

        <div className="specTable">
          {specifications.map(([label, value]) => (
            <div className="specRow" key={label}>
              <span className="specLabel">{label}</span>
              <span className="specValue">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="uvSection applications">
        <div className="sectionEyebrow">APPLICATIONS</div>

        <h2 className="applicationsTitle">Wide-format applications.</h2>

        <div className="applicationGrid">
          {applications.map((application) => (
            <div className="applicationCard" key={application}>
              ✓ {application}
            </div>
          ))}
        </div>
      </section>

      <section className="uvSection ctaSection">
        <div className="ctaBox">
          <div className="ctaEyebrow">READY FOR WIDE-FORMAT PRODUCTION?</div>

          <h2 className="ctaTitle">Talk to NEXIX NX.</h2>

          <p className="ctaText">
            Get configuration options, machine specifications and pricing
            information from our team.
          </p>

          <Link href="/quote?machine=NX-UV" className="ctaButton">
            GET A QUOTE →
          </Link>
        </div>
      </section>
    </main>
  );
}
