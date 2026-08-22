import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Direct-to-Fabric Printing Machines | NEXIX NX",
  description:
    "Explore NEXIX NX direct-to-fabric printing machines for high-quality textile production, including the NX-DTF 08 and NX-DTF 32 industrial printers.",
  keywords: [
    "NEXIX NX direct-to-fabric printers",
    "direct-to-fabric printing machines",
    "digital textile printing machines",
    "direct fabric printing machine",
    "industrial textile printer",
    "fabric printing machine",
    "NEXIX NX-DTF 08",
    "NEXIX NX-DTF 32",
  ],
  alternates: {
    canonical: "https://nexix-nx.com/machines/direct-to-fabric",
  },
  openGraph: {
    title: "Direct-to-Fabric Printing Machines | NEXIX NX",
    description:
      "Advanced NEXIX NX direct-to-fabric printing machines engineered for high-quality textile production and industrial productivity.",
    url: "https://nexix-nx.com/machines/direct-to-fabric",
    siteName: "NEXIX NX",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DirectToFabricPage() {
  const machines = [
    {
      name: "NEXIX NX-DTF 08",
      category: "PRECISION DIRECT-TO-FABRIC",
      description:
        "A high-performance direct-to-fabric printer designed for precision textile production, excellent colour reproduction and reliable continuous operation.",
      image: "/machine-direct-fabric.png",
      specs: [
        ["PRINT WIDTH", "1800 mm / 1.8 m"],
        ["PRINTHEADS", "8 × Kyocera KJ4"],
        ["RESOLUTION", "Up to 1440 DPI"],
        ["SPEED", "Up to 200 linear m/hr"],
        ["INK", "Pigment / Reactive"],
        ["COLOUR OPTIONS", "4 Colour / 8 Colour"],
        ["FABRIC", "Cotton / Viscose / Polyester / Silk / Blends"],
        ["CONTROL", "Industrial Control System"],
      ],
      applications: [
        "Cotton Textile",
        "Viscose & Rayon",
        "Fashion & Apparel",
        "Saree & Dupatta",
        "Sportswear",
        "Home Textiles",
        "Upholstery",
        "Custom Fabric Production",
      ],
      features: [
        "Direct printing onto fabric",
        "No transfer paper required",
        "Precision fabric feeding",
        "Automatic roll-to-roll take-up",
        "Controlled fabric tension",
        "High-capacity bulk ink system",
        "Multi-zone temperature control",
        "Designed for continuous production",
      ],
    },
    {
      name: "NEXIX NX-DTF 32",
      category: "INDUSTRIAL HIGH-PRODUCTION",
      description:
        "An ultra-wide industrial direct-to-fabric printing solution engineered for high-volume textile production, maximum productivity and consistent print quality.",
      image: "/machine-direct-fabric.png",
      specs: [
        ["PRINT WIDTH", "3200 mm / 3.2 m"],
        ["PRINTHEADS", "32 × Kyocera KJ4"],
        ["RESOLUTION", "Up to 1440 DPI"],
        ["SPEED", "Up to 500 linear m/hr"],
        ["INK", "Reactive / Pigment"],
        ["COLOUR OPTIONS", "4 Colour / 8 Colour"],
        ["FABRIC", "Cotton / Linen / Viscose / Polyester / Blends"],
        ["CONTROL", "Industrial Control System"],
      ],
      applications: [
        "Industrial Garment Production",
        "High-Volume Textile Printing",
        "Home Textiles",
        "Fashion Fabrics",
        "Saree & Dupatta",
        "Upholstery",
        "Interior Fabrics",
        "Large-Scale Fabric Production",
      ],
      features: [
        "3.2 m ultra-wide printing",
        "Direct-to-fabric printing",
        "No transfer paper required",
        "Heavy-duty sticky-belt feeding",
        "Precision fabric tension control",
        "High-capacity industrial ink system",
        "Automatic roll-to-roll operation",
        "Designed for high-volume production",
      ],
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          max-width: 100%;
          overflow-x: hidden;
        }

        .dtfPage {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 80% 10%,
              rgba(0,140,255,0.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 20% 80%,
              rgba(255,0,180,0.08),
              transparent 30%
            ),
            #03060b;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        .dtfHeader {
          width: 100%;
          min-height: 110px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(3,6,11,0.88);
          backdrop-filter: blur(14px);
        }

        .dtfBack {
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: 800;
          white-space: nowrap;
        }

        .dtfBrand {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1px;
          white-space: nowrap;
        }

        .dtfHero {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 20px 70px;
          text-align: center;
        }

        .dtfEyebrow {
          color: #42c9ff;
          letter-spacing: 7px;
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 22px;
        }

        .dtfHeroTitle {
          font-size: clamp(48px, 7vw, 88px);
          line-height: 0.95;
          margin: 0;
          font-weight: 900;
          letter-spacing: -4px;
        }

        .dtfGradient {
          background: linear-gradient(
            90deg,
            #42c9ff,
            #7765ff,
            #ed3ba9
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dtfHeroText {
          max-width: 850px;
          margin: 30px auto 0;
          color: #9caabd;
          font-size: 19px;
          line-height: 1.7;
        }

        .dtfMachines {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
          padding: 0 30px 100px;
        }

        .dtfMachineGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px;
        }

        .dtfMachineCard {
          width: 100%;
          min-width: 0;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 22px;
          overflow: hidden;
          background:
            linear-gradient(
              145deg,
              rgba(16,24,38,0.96),
              rgba(5,9,16,0.96)
            );
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
        }

        .dtfMachineImage {
          width: 100%;
          height: 360px;
          padding: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle,
              rgba(35,70,110,0.18),
              transparent 65%
            );
        }

        .dtfMachineImage img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .dtfMachineContent {
          width: 100%;
          padding: 35px;
        }

        .dtfCategory {
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 4px;
          margin-bottom: 15px;
        }

        .dtfMachineName {
          font-size: 38px;
          margin: 0 0 18px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .dtfDescription {
          color: #9caabd;
          line-height: 1.7;
          font-size: 16px;
          margin: 0;
        }

        .dtfSpecs {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 30px;
        }

        .dtfSpec {
          min-width: 0;
          padding: 18px;
          border-radius: 10px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.07);
        }

        .dtfSpecLabel {
          color: #6f7d91;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .dtfSpecValue {
          color: white;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
          overflow-wrap: anywhere;
        }

        .dtfSection {
          margin-top: 35px;
        }

        .dtfSectionTitle {
          font-size: 13px;
          letter-spacing: 3px;
          margin: 0 0 15px;
        }

        .dtfApplicationsTitle {
          color: #42c9ff;
        }

        .dtfFeaturesTitle {
          color: #ed3ba9;
        }

        .dtfItemGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }

        .dtfItem {
          min-width: 0;
          padding: 11px 13px;
          border-radius: 7px;
          background: rgba(255,255,255,0.035);
          color: #d9e1ec;
          font-size: 12px;
          line-height: 1.45;
        }

        .dtfQuoteWrap {
          margin-top: 35px;
        }

        .dtfQuote {
          display: block;
          width: 100%;
          text-align: center;
          padding: 17px;
          border-radius: 9px;
          background:
            linear-gradient(
              90deg,
              #42c9ff,
              #7765ff,
              #ed3ba9
            );
          color: white;
          text-decoration: none;
          font-weight: 900;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .dtfBottomCta {
          width: calc(100% - 60px);
          max-width: 1200px;
          margin: 0 auto 100px;
          padding: 80px 30px;
          text-align: center;
          border-radius: 25px;
          background:
            linear-gradient(
              120deg,
              rgba(20,48,75,0.8),
              rgba(62,12,57,0.75)
            );
          border: 1px solid rgba(255,255,255,0.1);
        }

        .dtfCtaEyebrow {
          color: #42c9ff;
          letter-spacing: 5px;
          font-size: 12px;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .dtfCtaTitle {
          font-size: 50px;
          margin: 0 0 20px;
          font-weight: 900;
        }

        .dtfCtaText {
          color: #9caabd;
          font-size: 17px;
          margin: 0 0 30px;
        }

        .dtfCtaButton {
          display: inline-block;
          padding: 17px 35px;
          border-radius: 9px;
          background:
            linear-gradient(
              90deg,
              #42c9ff,
              #7765ff,
              #ed3ba9
            );
          color: white;
          text-decoration: none;
          font-weight: 900;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .dtfMachineGrid {
            grid-template-columns: 1fr;
          }

          .dtfMachines {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .dtfHeader {
            min-height: 74px;
            height: auto;
            padding: 16px 18px;
            gap: 12px;
          }

          .dtfBack {
            font-size: 13px;
          }

          .dtfBrand {
            font-size: 18px;
          }

          .dtfHero {
            padding: 55px 18px 45px;
          }

          .dtfEyebrow {
            font-size: 10px;
            letter-spacing: 4px;
            line-height: 1.7;
            margin-bottom: 16px;
          }

          .dtfHeroTitle {
            font-size: clamp(42px, 13vw, 62px);
            letter-spacing: -2.5px;
          }

          .dtfHeroText {
            margin-top: 22px;
            font-size: 15px;
            line-height: 1.7;
          }

          .dtfMachines {
            width: 100%;
            padding: 0 14px 60px;
          }

          .dtfMachineGrid {
            width: 100%;
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 22px;
          }

          .dtfMachineCard {
            width: 100%;
            max-width: 100%;
            border-radius: 18px;
          }

          .dtfMachineImage {
            height: 255px;
            padding: 18px 14px;
          }

          .dtfMachineImage img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .dtfMachineContent {
            padding: 24px 18px 22px;
          }

          .dtfCategory {
            font-size: 9px;
            letter-spacing: 2.5px;
            line-height: 1.5;
            margin-bottom: 10px;
          }

          .dtfMachineName {
            font-size: 29px;
            line-height: 1.05;
            letter-spacing: -1px;
            margin-bottom: 15px;
          }

          .dtfDescription {
            font-size: 14px;
            line-height: 1.65;
          }

          .dtfSpecs {
            grid-template-columns: minmax(0, 1fr);
            gap: 9px;
            margin-top: 22px;
          }

          .dtfSpec {
            padding: 14px;
          }

          .dtfSpecLabel {
            font-size: 9px;
            letter-spacing: 1.7px;
          }

          .dtfSpecValue {
            font-size: 13px;
          }

          .dtfSection {
            margin-top: 27px;
          }

          .dtfSectionTitle {
            font-size: 11px;
            letter-spacing: 2.5px;
          }

          .dtfItemGrid {
            grid-template-columns: minmax(0, 1fr);
            gap: 7px;
          }

          .dtfItem {
            font-size: 12px;
            padding: 10px 12px;
          }

          .dtfQuoteWrap {
            margin-top: 27px;
          }

          .dtfQuote {
            padding: 15px;
            font-size: 13px;
          }

          .dtfBottomCta {
            width: calc(100% - 28px);
            margin-bottom: 55px;
            padding: 50px 20px;
            border-radius: 20px;
          }

          .dtfCtaEyebrow {
            font-size: 9px;
            letter-spacing: 3px;
          }

          .dtfCtaTitle {
            font-size: 34px;
            line-height: 1.05;
          }

          .dtfCtaText {
            font-size: 14px;
            line-height: 1.6;
          }

          .dtfCtaButton {
            width: 100%;
            padding: 15px;
          }
        }

        /* VERY SMALL PHONES */
        @media (max-width: 380px) {
          .dtfHeader {
            padding-left: 13px;
            padding-right: 13px;
          }

          .dtfBack {
            font-size: 11px;
          }

          .dtfBrand {
            font-size: 16px;
          }

          .dtfMachineImage {
            height: 225px;
          }

          .dtfMachineName {
            font-size: 26px;
          }
        }
      `}</style>

      <main className="dtfPage">
        {/* HEADER */}
        <header className="dtfHeader">
          <Link href="/#machines" className="dtfBack">
            ← BACK TO MACHINES
          </Link>

          <div className="dtfBrand">
            <span style={{ color: "#35c7ff" }}>NX</span>{" "}
            <span>NEXIX NX</span>
          </div>
        </header>

        {/* HERO */}
        <section className="dtfHero">
          <div className="dtfEyebrow">
            DIGITAL TEXTILE TECHNOLOGY
          </div>

          <h1 className="dtfHeroTitle">
            Direct-to-Fabric
            <br />
            <span className="dtfGradient">Printers</span>
          </h1>

          <p className="dtfHeroText">
            Advanced direct-to-fabric printing technology engineered for
            high-quality textile production, reliable operation and industrial
            productivity.
          </p>
        </section>

        {/* MACHINES */}
        <section className="dtfMachines">
          <div className="dtfMachineGrid">
            {machines.map((machine) => (
              <article
                key={machine.name}
                className="dtfMachineCard"
              >
                {/* IMAGE */}
                <div className="dtfMachineImage">
                  <img
                    src={machine.image}
                    alt={machine.name}
                  />
                </div>

                {/* CONTENT */}
                <div className="dtfMachineContent">
                  <div
                    className="dtfCategory"
                    style={{
                      color: machine.name.includes("32")
                        ? "#ed3ba9"
                        : "#42c9ff",
                    }}
                  >
                    {machine.category}
                  </div>

                  <h2 className="dtfMachineName">
                    {machine.name}
                  </h2>

                  <p className="dtfDescription">
                    {machine.description}
                  </p>

                  {/* SPECS */}
                  <div className="dtfSpecs">
                    {machine.specs.map(([label, value]) => (
                      <div
                        key={label}
                        className="dtfSpec"
                      >
                        <div className="dtfSpecLabel">
                          {label}
                        </div>

                        <div className="dtfSpecValue">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* APPLICATIONS */}
                  <div className="dtfSection">
                    <h3 className="dtfSectionTitle dtfApplicationsTitle">
                      APPLICATIONS
                    </h3>

                    <div className="dtfItemGrid">
                      {machine.applications.map((item) => (
                        <div
                          key={item}
                          className="dtfItem"
                        >
                          ✓ {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="dtfSection">
                    <h3 className="dtfSectionTitle dtfFeaturesTitle">
                      KEY FEATURES
                    </h3>

                    <div className="dtfItemGrid">
                      {machine.features.map((item) => (
                        <div
                          key={item}
                          className="dtfItem"
                        >
                          ✦ {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BUTTON */}
                  <div className="dtfQuoteWrap">
                    <Link
                      href={`/quote?machine=${encodeURIComponent(
                        machine.name
                      )}`}
                      className="dtfQuote"
                    >
                      GET A QUOTE →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="dtfBottomCta">
          <div className="dtfCtaEyebrow">
            READY TO PRODUCE?
          </div>

          <h2 className="dtfCtaTitle">
            Talk to NEXIX NX.
          </h2>

          <p className="dtfCtaText">
            Get machine specifications, configuration options and pricing
            information from our team.
          </p>

          <Link
            href="/quote"
            className="dtfCtaButton"
          >
            GET A QUOTE →
          </Link>
        </section>
      </main>
    </>
  );
}