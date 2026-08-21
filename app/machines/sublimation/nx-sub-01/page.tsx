export default function NXSub01Page() {
  const specs = [
    ["Print Width", "1800 mm / 1.8 m"],
    ["Printing Speed", "200–750 linear m/hr"],
    ["Printhead Options", "4 / 8 / 12 / 16 / 20 / 24"],
    ["Colour Configuration", "4 Colour / 6 Colour"],
    ["Ink", "Sublimation + Special Colors"],
    ["Media", "Polyester"],
    ["Control System", "A.T. Control System Board"],
  ];

  const features = [
    {
      title: "Heavy-Duty Construction",
      text: "A robust machine body designed for demanding textile production environments.",
    },
    {
      title: "Easy A.T. Control System",
      text: "Onboard A.T. control system designed for straightforward machine operation.",
    },
    {
      title: "Excellent Dark-Design Output",
      text: "Engineered to deliver strong and consistent output for demanding dark-design applications.",
    },
    {
      title: "Flexible Printhead Options",
      text: "Available with 4, 8, 12, 16, 20 or 24 printhead configurations.",
    },
    {
      title: "High Production Capability",
      text: "Production speeds ranging from 200 to 750 linear metres per hour.",
    },
    {
      title: "Flexible Colour Options",
      text: "Available in 4-colour and 6-colour configurations with support for special colours.",
    },
  ];

  const applications = [
    "Polyester Textile",
    "Fashion & Apparel",
    "Sportswear",
    "Home Textiles",
    "Custom Textile Production",
    "High-Volume Textile Printing",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 80% 10%, rgba(0,140,255,0.10), transparent 30%), radial-gradient(circle at 20% 70%, rgba(230,0,160,0.08), transparent 30%), #020409",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          height: "88px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7%",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(2,4,9,0.88)",
          backdropFilter: "blur(14px)",
        }}
      >
        <a
          href="/machines/sublimation"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "0.5px",
          }}
        >
          ← BACK TO SUBLIMATION
        </a>

        <div
          style={{
            fontSize: "24px",
            fontWeight: 900,
            letterSpacing: "-1px",
          }}
        >
          <span
            style={{
              background:
                "linear-gradient(90deg,#36c8ff,#7667ff,#ff3cac)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            NX
          </span>{" "}
          NEXIX NX
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "90px 6% 70px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "70px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <div
              style={{
                color: "#42cfff",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "4px",
                marginBottom: "22px",
              }}
            >
              HEAVY-DUTY SUBLIMATION PRINTER
            </div>

            <h1
              style={{
                fontSize: "clamp(48px, 6vw, 82px)",
                lineHeight: "0.95",
                margin: 0,
                fontWeight: 900,
                letterSpacing: "-3px",
              }}
            >
              NEXIX
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#38c9ff,#7965ff,#f33ba9,#ffbd3c)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                NX-SUB 01
              </span>
            </h1>

            <p
              style={{
                fontSize: "21px",
                lineHeight: 1.7,
                color: "#b7c2d5",
                marginTop: "30px",
                maxWidth: "600px",
              }}
            >
              A robust 1.8 m sublimation printer with a heavy-duty body,
              designed for demanding textile production and excellent output,
              especially for dark designs.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "35px",
              }}
            >
              <a
                href="/quote?machine=NX-SUB-01"
                style={{
                  padding: "16px 28px",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(90deg,#38c9ff,#7765ff,#ed3ba9)",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 800,
                }}
              >
                GET A QUOTE →
              </a>

              <a
                href="#specifications"
                style={{
                  padding: "16px 28px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 800,
                }}
              >
                VIEW SPECIFICATIONS
              </a>
            </div>
          </div>

          {/* MACHINE IMAGE */}
          <div
            style={{
              minHeight: "480px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.10)",
              background:
                "linear-gradient(145deg, rgba(12,20,34,0.95), rgba(4,8,15,0.8))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "35px",
              boxShadow: "0 30px 100px rgba(0,100,255,0.10)",
            }}
          >
            <img
              src="/sublimation-1.png"
              alt="NEXIX NX-SUB 01 sublimation printer"
              style={{
                width: "100%",
                maxWidth: "700px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </section>

      {/* QUICK SPECS */}
      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 6% 90px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "14px",
          }}
        >
          {[
            ["1800 mm", "PRINT WIDTH"],
            ["200–750", "LINEAR M/HR"],
            ["4–24", "PRINTHEAD OPTIONS"],
            ["4 / 6", "COLOUR OPTIONS"],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                padding: "28px 24px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(10,16,27,0.75)",
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 900,
                  background:
                    "linear-gradient(90deg,#42cfff,#9b67ff,#ff4bad)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {value}
              </div>

              <div
                style={{
                  marginTop: "9px",
                  fontSize: "11px",
                  color: "#8793a8",
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "70px 6% 110px",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
          }}
        >
          <div
            style={{
              color: "#43ceff",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "4px",
            }}
          >
            BUILT FOR DEMANDING PRODUCTION
          </div>

          <h2
            style={{
              fontSize: "clamp(38px, 5vw, 62px)",
              margin: "18px 0",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Heavy-duty engineering.
            <br />
            <span style={{ color: "#8b96a9" }}>
              Reliable textile production.
            </span>
          </h2>

          <p
            style={{
              color: "#aab6c9",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            NX-SUB 01 is designed for customers who need a robust 1.8 m
            sublimation printing platform with flexible printhead
            configurations, high production capability and an easy-to-operate
            onboard control system.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 6% 110px",
        }}
      >
        <div
          style={{
            color: "#ff48b0",
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "4px",
          }}
        >
          KEY FEATURES
        </div>

        <h2
          style={{
            fontSize: "48px",
            margin: "15px 0 45px",
            letterSpacing: "-2px",
          }}
        >
          Designed around production.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={{
                padding: "30px",
                minHeight: "190px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.09)",
                background:
                  index % 2 === 0
                    ? "linear-gradient(145deg,#0b1423,#070b13)"
                    : "linear-gradient(145deg,#100b19,#080b13)",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#39caff,#ff3cac)",
                  marginBottom: "25px",
                }}
              />

              <h3
                style={{
                  margin: 0,
                  fontSize: "20px",
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  color: "#91a0b7",
                  lineHeight: 1.7,
                  marginTop: "12px",
                }}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section
        id="specifications"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 6% 110px",
        }}
      >
        <div
          style={{
            color: "#43ceff",
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "4px",
          }}
        >
          TECHNICAL DATA
        </div>

        <h2
          style={{
            fontSize: "48px",
            margin: "15px 0 40px",
            letterSpacing: "-2px",
          }}
        >
          Technical Specifications
        </h2>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {specs.map(([name, value], index) => (
            <div
              key={name}
              style={{
                display: "grid",
                gridTemplateColumns: "35% 65%",
                padding: "22px 28px",
                background:
                  index % 2 === 0
                    ? "rgba(12,18,29,0.9)"
                    : "rgba(6,10,17,0.9)",
                borderBottom:
                  index === specs.length - 1
                    ? "none"
                    : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                style={{
                  color: "#77859b",
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "1px",
                }}
              >
                {name.toUpperCase()}
              </span>

              <span
                style={{
                  color: "white",
                  fontWeight: 700,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 6% 110px",
        }}
      >
        <div
          style={{
            color: "#ff48b0",
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "4px",
          }}
        >
          APPLICATIONS
        </div>

        <h2
          style={{
            fontSize: "48px",
            margin: "15px 0 40px",
            letterSpacing: "-2px",
          }}
        >
          Built for polyester printing.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "14px",
          }}
        >
          {applications.map((application) => (
            <div
              key={application}
              style={{
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.09)",
                background: "#080d16",
                color: "#cbd4e2",
                fontWeight: 700,
              }}
            >
              ✓ {application}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "20px 6% 120px",
        }}
      >
        <div
          style={{
            padding: "65px",
            borderRadius: "22px",
            textAlign: "center",
            background:
              "linear-gradient(120deg, rgba(37,166,255,0.15), rgba(213,46,157,0.15))",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div
            style={{
              color: "#43ceff",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "4px",
            }}
          >
            READY TO PRODUCE?
          </div>

          <h2
            style={{
              fontSize: "48px",
              margin: "18px 0",
            }}
          >
            Talk to NEXIX NX.
          </h2>

          <p
            style={{
              color: "#9caabd",
              fontSize: "17px",
              marginBottom: "30px",
            }}
          >
            Get machine specifications, configuration options and pricing
            information from our team.
          </p>

          <a
            href="/quote?machine=NX-SUB-01"
            style={{
              display: "inline-block",
              padding: "17px 38px",
              borderRadius: "8px",
              background:
                "linear-gradient(90deg,#38c9ff,#7765ff,#ed3ba9)",
              color: "white",
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            GET A QUOTE →
          </a>
        </div>
      </section>


      {/* MOBILE RESPONSIVE */}
      <style>{`
        @media (max-width: 768px) {
          * { box-sizing: border-box; }
          main { width: 100%; overflow-x: hidden; }

          /* Header */
          header {
            height: 68px !important;
            padding: 0 16px !important;
            gap: 10px !important;
          }
          header a {
            font-size: 10px !important;
            letter-spacing: 0 !important;
            white-space: nowrap !important;
          }
          header > div {
            font-size: 16px !important;
            white-space: nowrap !important;
          }

          /* Hero */
          main > section:nth-of-type(1) {
            width: 100% !important;
            padding: 52px 18px 45px !important;
          }
          main > section:nth-of-type(1) > div {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          main > section:nth-of-type(1) h1 {
            font-size: 48px !important;
            line-height: 0.98 !important;
            letter-spacing: -2px !important;
          }
          main > section:nth-of-type(1) p {
            font-size: 15px !important;
            line-height: 1.7 !important;
            margin-top: 20px !important;
          }
          main > section:nth-of-type(1) > div > div:first-child > div:last-child {
            width: 100% !important;
          }
          main > section:nth-of-type(1) > div > div:first-child > div:last-child a {
            flex: 1 1 100% !important;
            width: 100% !important;
            text-align: center !important;
          }

          /* Hero machine image */
          main > section:nth-of-type(1) > div > div:last-child {
            min-height: 270px !important;
            height: auto !important;
            padding: 18px !important;
            border-radius: 18px !important;
          }
          main > section:nth-of-type(1) > div > div:last-child img {
            width: 100% !important;
            max-width: 100% !important;
            max-height: 260px !important;
            object-fit: contain !important;
          }

          /* Quick specs: 2 x 2 */
          main > section:nth-of-type(2) {
            padding: 0 18px 60px !important;
          }
          main > section:nth-of-type(2) > div {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
          }
          main > section:nth-of-type(2) > div > div {
            min-width: 0 !important;
            padding: 20px 14px !important;
            border-radius: 12px !important;
          }
          main > section:nth-of-type(2) > div > div > div:first-child {
            font-size: 21px !important;
            line-height: 1.15 !important;
            overflow-wrap: anywhere !important;
          }
          main > section:nth-of-type(2) > div > div > div:last-child {
            font-size: 9px !important;
            line-height: 1.35 !important;
          }

          /* Intro */
          main > section:nth-of-type(3) {
            padding: 45px 18px 70px !important;
          }
          main > section:nth-of-type(3) h2 {
            font-size: 36px !important;
            line-height: 1.08 !important;
            letter-spacing: -1.5px !important;
          }
          main > section:nth-of-type(3) p {
            font-size: 15px !important;
            line-height: 1.75 !important;
          }

          /* Features: 1 column */
          main > section:nth-of-type(4) {
            padding: 0 18px 70px !important;
          }
          main > section:nth-of-type(4) h2 {
            font-size: 34px !important;
            line-height: 1.1 !important;
            margin-bottom: 28px !important;
          }
          main > section:nth-of-type(4) > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          main > section:nth-of-type(4) > div:last-child > div {
            min-height: auto !important;
            padding: 23px !important;
          }

          /* Technical specifications */
          main > section:nth-of-type(5) {
            padding: 0 18px 70px !important;
          }
          main > section:nth-of-type(5) h2 {
            font-size: 34px !important;
            line-height: 1.1 !important;
          }
          main > section:nth-of-type(5) > div:last-child > div {
            grid-template-columns: 1fr !important;
            gap: 7px !important;
            padding: 17px 18px !important;
          }
          main > section:nth-of-type(5) > div:last-child > div span {
            display: block !important;
          }
          main > section:nth-of-type(5) > div:last-child > div span:first-child {
            margin-bottom: 5px !important;
          }

          /* Applications: 1 column */
          main > section:nth-of-type(6) {
            padding: 0 18px 70px !important;
          }
          main > section:nth-of-type(6) h2 {
            font-size: 34px !important;
            line-height: 1.1 !important;
          }
          main > section:nth-of-type(6) > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          /* CTA */
          main > section:nth-of-type(7) {
            padding: 10px 18px 70px !important;
          }
          main > section:nth-of-type(7) > div {
            padding: 40px 20px !important;
            border-radius: 18px !important;
          }
          main > section:nth-of-type(7) h2 {
            font-size: 36px !important;
            line-height: 1.08 !important;
          }
          main > section:nth-of-type(7) p {
            font-size: 14px !important;
            line-height: 1.65 !important;
          }
          main > section:nth-of-type(7) a {
            display: block !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
        }

        @media (max-width: 390px) {
          header { padding: 0 13px !important; }
          header a { font-size: 9px !important; }
          header > div { font-size: 14px !important; }
          main > section:nth-of-type(1) h1 { font-size: 42px !important; }
          main > section:nth-of-type(1) > div > div:last-child { min-height: 235px !important; }
          main > section:nth-of-type(2) > div > div > div:first-child { font-size: 18px !important; }
        }
      `}</style>
    </main>
  );
}