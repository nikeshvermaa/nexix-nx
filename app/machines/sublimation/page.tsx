import Link from "next/link";

const machines = [
  {
    name: "NEXIX NX-SUB 01",
    label: "HEAVY-DUTY SUBLIMATION PRINTER",
    image: "/sublimation-1.png",
    description:
      "A robust 1.8 m sublimation printer with a heavy-duty body, designed for demanding textile production and excellent output, especially for dark designs.",
    highlight: "Heavy-duty construction • Excellent dark-design output",
    specs: [
      ["PRINT WIDTH", "1800 mm / 1.8 m"],
      ["SPEED", "200–750 linear m/hr"],
      ["PRINTHEADS", "4 / 8 / 12 / 16 / 20 / 24"],
      ["COLOUR OPTIONS", "4 Colour / 6 Colour"],
      ["INK", "Sublimation + Special Colors"],
      ["MEDIA", "Polyester"],
      ["CONTROL", "A.T. Control System Board"],
    ],
  },
  {
    name: "NEXIX NX-SUB 02",
    label: "COMPACT HIGH-PRODUCTION SUBLIMATION",
    image: "/sublimation-2.png",
    description:
      "A compact 1.8 m sublimation printer designed to reduce space coverage while delivering high production and excellent print output.",
    highlight: "Compact footprint • High-production focused",
    specs: [
      ["PRINT WIDTH", "1800 mm / 1.8 m"],
      ["SPEED", "200–750 linear m/hr"],
      ["PRINTHEADS", "4 / 8 / 12 / 16 / 20 / 24"],
      ["COLOUR OPTIONS", "4 Colour / 6 Colour"],
      ["INK", "Sublimation + Special Colors"],
      ["MEDIA", "Polyester"],
      ["CONTROL", "A.T. Control System Board"],
    ],
  },
];

export default function SublimationPage() {
  return (
    <main className="subPage">

      {/* HEADER */}
      <header className="subHeader">
        <Link href="/" className="backLink">
          ← BACK TO HOME
        </Link>

        <div className="brand">
          <span className="brandMark">NX</span>
          <span className="brandName">NEXIX NX</span>
        </div>
      </header>

      {/* HERO */}
      <section className="subHero">
        <div className="eyebrow">
          DIGITAL TEXTILE TECHNOLOGY
        </div>

        <h1>
          Sublimation{" "}
          <span>Printers</span>
        </h1>

        <p>
          High-performance digital sublimation printing solutions engineered
          for precision, productivity and outstanding polyester textile
          printing.
        </p>
      </section>

      {/* MACHINES */}
      <section className="machineSection">
        <div className="machineGrid">

          {machines.map((machine, index) => (
            <article
              key={machine.name}
              className={`machineCard ${
                index === 0 ? "machineBlue" : "machinePink"
              }`}
            >

              {/* TOP ACCENT */}
              <div className="machineAccent" />

              {/* MACHINE IMAGE */}
              <div className="machineImageBox">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="machineImage"
                />
              </div>

              {/* MACHINE DETAILS */}
              <div className="machineContent">

                <div className="machineLabel">
                  {machine.label}
                </div>

                <h2>{machine.name}</h2>

                <p className="machineDescription">
                  {machine.description}
                </p>

                <div className="machineHighlight">
                  ✦ {machine.highlight}
                </div>

                {/* SPECIFICATIONS */}
                <div className="specGrid">
                  {machine.specs.map(([label, value]) => (
                    <div className="specBox" key={label}>
                      <div className="specLabel">
                        {label}
                      </div>

                      <div className="specValue">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="machineButtons">

                  <Link
                    href={`/machines/sublimation/${
                      index === 0 ? "nx-sub-01" : "nx-sub-02"
                    }`}
                    className="detailsButton"
                  >
                    VIEW DETAILS →
                  </Link>

                  <Link
                    href={`/quote?machine=${
                      index === 0 ? "NX-SUB-01" : "NX-SUB-02"
                    }`}
                    className="quoteButton"
                  >
                    GET A QUOTE →
                  </Link>

                </div>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="subFooter">
        NEXIX NX — DIGITAL PRINTING TECHNOLOGY
      </footer>

      {/* RESPONSIVE CSS */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .subPage {
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(0,190,255,0.10),
              transparent 28%
            ),
            radial-gradient(
              circle at 85% 45%,
              rgba(255,0,160,0.10),
              transparent 30%
            ),
            #02050a;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          padding-bottom: 90px;
        }

        /* HEADER */

        .subHeader {
          height: 76px;
          width: 100%;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(2,5,10,0.90);
          backdrop-filter: blur(18px);
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .backLink {
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brandMark {
          font-size: 27px;
          font-weight: 900;
          letter-spacing: -3px;
          background:
            linear-gradient(
              135deg,
              #00d9ff,
              #7c55ff,
              #ff299d
            );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brandName {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        /* HERO */

        .subHero {
          max-width: 1400px;
          margin: 0 auto;
          padding: 85px 5% 65px;
          text-align: center;
        }

        .eyebrow {
          color: #00d9ff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 4px;
          margin-bottom: 20px;
        }

        .subHero h1 {
          margin: 0;
          font-size: clamp(45px, 6vw, 78px);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -3px;
        }

        .subHero h1 span {
          background:
            linear-gradient(
              90deg,
              #00d9ff,
              #7c55ff,
              #ff299d,
              #ffd000
            );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subHero p {
          max-width: 720px;
          margin: 25px auto 0;
          color: #9da7b7;
          font-size: 16px;
          line-height: 1.8;
        }

        /* MACHINE SECTION */

        .machineSection {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .machineGrid {
          display: grid;
          grid-template-columns: repeat(
            2,
            minmax(0, 1fr)
          );
          gap: 28px;
        }

        .machineCard {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          background:
            linear-gradient(
              145deg,
              rgba(14,23,38,0.98),
              rgba(3,7,13,0.99)
            );
          box-shadow:
            0 25px 70px rgba(0,0,0,0.35);
        }

        .machineBlue {
          border: 1px solid rgba(0,217,255,0.35);
        }

        .machinePink {
          border: 1px solid rgba(255,41,157,0.35);
        }

        .machineAccent {
          height: 3px;
          width: 100%;
          background:
            linear-gradient(
              90deg,
              #00d9ff,
              #7c55ff,
              #ff299d
            );
        }

        .machinePink .machineAccent {
          background:
            linear-gradient(
              90deg,
              #ff299d,
              #ffd000,
              #00d9ff
            );
        }

        /* IMAGE */

        .machineImageBox {
          height: 390px;
          padding: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle at center,
              rgba(0,150,255,0.13),
              transparent 65%
            );
        }

        .machineImage {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter:
            drop-shadow(
              0 25px 25px rgba(0,0,0,0.65)
            );
        }

        /* CONTENT */

        .machineContent {
          padding: 30px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .machineLabel {
          color: #00d9ff;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 3px;
          margin-bottom: 10px;
        }

        .machinePink .machineLabel {
          color: #ff299d;
        }

        .machineContent h2 {
          margin: 0 0 14px;
          font-size: 31px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .machineDescription {
          color: #a3adbd;
          font-size: 14px;
          line-height: 1.75;
          margin: 0 0 14px;
        }

        .machineHighlight {
          padding: 13px 15px;
          margin-bottom: 25px;
          border-radius: 8px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.07);
          color: #dce3ed;
          font-size: 12px;
          font-weight: 700;
        }

        /* SPECS */

        .specGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
          margin-bottom: 25px;
        }

        .specBox {
          min-height: 68px;
          padding: 12px;
          border-radius: 8px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.07);
        }

        .specLabel {
          color: #727e90;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
          margin-bottom: 7px;
        }

        .specValue {
          color: #e7ebf2;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 700;
        }

        /* BUTTONS */

        .machineButtons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .detailsButton,
        .quoteButton {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 14px;
          border-radius: 7px;
          text-decoration: none;
          color: white;
          font-size: 11px;
          font-weight: 900;
          text-align: center;
        }

        .detailsButton {
          border: 1px solid rgba(0,217,255,0.5);
          background:
            linear-gradient(
              90deg,
              rgba(0,217,255,0.12),
              rgba(124,85,255,0.12)
            );
        }

        .quoteButton {
          background:
            linear-gradient(
              90deg,
              #00cfff,
              #7c55ff,
              #ff299d
            );
        }

        /* FOOTER */

        .subFooter {
          max-width: 1400px;
          margin: 70px auto 0;
          padding: 30px 5%;
          border-top: 1px solid rgba(255,255,255,0.08);
          text-align: center;
          color: #687180;
          font-size: 11px;
          letter-spacing: 1px;
        }

        /* =====================================
           MOBILE
           ===================================== */

        @media (max-width: 768px) {

          .subPage {
            padding-bottom: 50px;
          }

          .subHeader {
            height: 68px;
            padding: 0 20px;
          }

          .backLink {
            font-size: 10px;
            letter-spacing: 0.7px;
          }

          .brand {
            gap: 7px;
          }

          .brandMark {
            font-size: 23px;
          }

          .brandName {
            font-size: 16px;
            letter-spacing: 0.5px;
          }

          /* HERO */

          .subHero {
            padding: 55px 20px 40px;
          }

          .eyebrow {
            font-size: 9px;
            letter-spacing: 3px;
            line-height: 1.7;
            margin-bottom: 15px;
          }

          .subHero h1 {
            font-size: 43px;
            line-height: 1.02;
            letter-spacing: -2px;
          }

          .subHero p {
            margin-top: 20px;
            font-size: 14px;
            line-height: 1.7;
          }

          /* IMPORTANT:
             ONE MACHINE PER ROW
          */

          .machineSection {
            padding: 0 16px;
          }

          .machineGrid {
            display: flex;
            flex-direction: column;
            gap: 24px;
            width: 100%;
          }

          .machineCard {
            width: 100%;
            border-radius: 16px;
          }

          /* BIGGER MACHINE IMAGE */

          .machineImageBox {
            height: 250px;
            padding: 18px;
          }

          .machineImage {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          /* DETAILS */

          .machineContent {
            padding: 22px 18px 20px;
          }

          .machineLabel {
            font-size: 9px;
            letter-spacing: 2.5px;
            line-height: 1.6;
          }

          .machineContent h2 {
            font-size: 27px;
            margin-bottom: 12px;
          }

          .machineDescription {
            font-size: 13px;
            line-height: 1.7;
          }

          .machineHighlight {
            font-size: 11px;
            line-height: 1.5;
            margin-bottom: 18px;
          }

          /* KEEP SPECS TWO COLUMNS */

          .specGrid {
            grid-template-columns: 1fr 1fr;
            gap: 7px;
            margin-bottom: 18px;
          }

          .specBox {
            min-height: 72px;
            padding: 10px;
          }

          .specLabel {
            font-size: 8px;
            margin-bottom: 6px;
          }

          .specValue {
            font-size: 11px;
            line-height: 1.4;
          }

          /* BUTTONS FULL WIDTH */

          .machineButtons {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .detailsButton,
          .quoteButton {
            width: 100%;
            min-height: 50px;
            font-size: 11px;
          }

          .subFooter {
            margin-top: 45px;
            padding: 25px 20px;
            font-size: 9px;
          }
        }

        /* SMALL PHONES */

        @media (max-width: 390px) {

          .subHeader {
            padding: 0 15px;
          }

          .brandName {
            font-size: 14px;
          }

          .brandMark {
            font-size: 21px;
          }

          .subHero {
            padding-left: 16px;
            padding-right: 16px;
          }

          .subHero h1 {
            font-size: 38px;
          }

          .machineSection {
            padding: 0 12px;
          }

          .machineImageBox {
            height: 220px;
          }

          .machineContent {
            padding: 20px 15px;
          }

          .machineContent h2 {
            font-size: 24px;
          }

          .specValue {
            font-size: 10px;
          }
        }

      `}</style>
    </main>
  );
}