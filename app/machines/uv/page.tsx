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
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 80% 10%, rgba(0,150,255,0.12), transparent 30%), radial-gradient(circle at 20% 70%, rgba(255,40,160,0.08), transparent 35%), #03060d",
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
          background: "rgba(3,6,13,0.9)",
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 800,
          }}
        >
          ← BACK TO HOME
        </Link>

        <div
          style={{
            fontSize: "25px",
            fontWeight: 900,
            letterSpacing: "-1px",
          }}
        >
          <span
            style={{
              background: "linear-gradient(90deg,#00d9ff,#7c55ff,#ff299d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
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
            gridTemplateColumns: "1fr 1.05fr",
            gap: "65px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <div
              style={{
                color: "#35c9ff",
                fontSize: "12px",
                fontWeight: 900,
                letterSpacing: "4px",
                marginBottom: "20px",
              }}
            >
              WIDE-FORMAT UV PRINTING
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(55px, 7vw, 90px)",
                lineHeight: "0.9",
                fontWeight: 900,
                letterSpacing: "-4px",
              }}
            >
              NEXIX
              <br />

              <span
                style={{
                  background:
                    "linear-gradient(90deg,#00d9ff,#765cff,#ff299d,#ffd000)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                NX-UV
              </span>
            </h1>

            <p
              style={{
                maxWidth: "620px",
                color: "#aebbd0",
                fontSize: "20px",
                lineHeight: 1.75,
                marginTop: "30px",
              }}
            >
              A wide-format UV printing solution designed for advertising,
              banners and demanding large-format production, with flexible
              print widths from 1.8 to 5.2 metres.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >
              <Link
                href="/quote?machine=NX-UV"
                style={{
                  padding: "16px 28px",
                  borderRadius: "8px",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 900,
                  background:
                    "linear-gradient(90deg,#00cfff,#765cff,#ff299d)",
                }}
              >
                GET A QUOTE →
              </Link>

              <a
                href="#specifications"
                style={{
                  padding: "16px 28px",
                  borderRadius: "8px",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 800,
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                VIEW SPECIFICATIONS
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div
            style={{
              minHeight: "480px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.10)",
              background:
                "linear-gradient(145deg,rgba(13,23,40,0.95),rgba(4,8,15,0.95))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "35px",
              boxShadow: "0 30px 100px rgba(0,120,255,0.10)",
            }}
          >
            {/* Replace this filename if your UV machine image has a different name */}
            <img
              src="/machine-uv.png"
              alt="NEXIX NX-UV wide-format UV printer"
              style={{
                width: "100%",
                maxWidth: "720px",
                maxHeight: "480px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
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
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "14px",
          }}
        >
          {[
            ["1.8–5.2 m", "PRINT WIDTH"],
            ["100–200", "M/HR"],
            ["i3200 / 512i", "PRINTHEAD OPTIONS"],
            ["4–8", "COLOUR OPTIONS"],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                padding: "28px 22px",
                borderRadius: "14px",
                background: "rgba(10,17,29,0.85)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: 900,
                  background:
                    "linear-gradient(90deg,#35c9ff,#8b5cff,#ff3cae)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </div>

              <div
                style={{
                  marginTop: "9px",
                  color: "#7e8ca2",
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "1.5px",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "50px 6% 100px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              color: "#ff42ae",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "4px",
            }}
          >
            WIDE-FORMAT PRODUCTION
          </div>

          <h2
            style={{
              fontSize: "clamp(38px,5vw,62px)",
              lineHeight: 1.05,
              margin: "18px 0",
              fontWeight: 900,
              letterSpacing: "-2px",
            }}
          >
            Built for wide-format
            <br />
            <span style={{ color: "#8996aa" }}>
              advertising production.
            </span>
          </h2>

          <p
            style={{
              color: "#aab7ca",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            NX-UV provides flexible wide-format printing from 1.8 metres up
            to 5.2 metres, with multiple printhead and colour configurations
            to suit different production requirements.
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
            color: "#35c9ff",
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: "4px",
          }}
        >
          KEY FEATURES
        </div>

        <h2
          style={{
            fontSize: "48px",
            margin: "15px 0 40px",
            fontWeight: 900,
            letterSpacing: "-2px",
          }}
        >
          Flexible printing.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "15px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={{
                minHeight: "190px",
                padding: "30px",
                borderRadius: "16px",
                background:
                  index % 2 === 0
                    ? "linear-gradient(145deg,#0b1423,#070b13)"
                    : "linear-gradient(145deg,#110b19,#080b13)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#35c9ff,#ff3cae)",
                  marginBottom: "23px",
                }}
              />

              <h3
                style={{
                  margin: 0,
                  fontSize: "19px",
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  color: "#91a0b6",
                  lineHeight: 1.7,
                  fontSize: "14px",
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
            color: "#ff42ae",
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: "4px",
          }}
        >
          TECHNICAL DATA
        </div>

        <h2
          style={{
            fontSize: "48px",
            margin: "15px 0 35px",
            fontWeight: 900,
          }}
        >
          Technical Specifications
        </h2>

        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          {specifications.map(([label, value], index) => (
            <div
              key={label}
              style={{
                display: "grid",
                gridTemplateColumns: "35% 65%",
                padding: "22px 28px",
                background:
                  index % 2 === 0
                    ? "rgba(12,18,29,0.9)"
                    : "rgba(6,10,17,0.9)",
                borderBottom:
                  index === specifications.length - 1
                    ? "none"
                    : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                style={{
                  color: "#7d8aa0",
                  fontSize: "12px",
                  fontWeight: 900,
                  letterSpacing: "1.5px",
                }}
              >
                {label}
              </span>

              <span
                style={{
                  color: "#f2f5fa",
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
            color: "#35c9ff",
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: "4px",
          }}
        >
          APPLICATIONS
        </div>

        <h2
          style={{
            fontSize: "48px",
            margin: "15px 0 35px",
            fontWeight: 900,
          }}
        >
          Wide-format applications.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "14px",
          }}
        >
          {applications.map((application) => (
            <div
              key={application}
              style={{
                padding: "22px",
                borderRadius: "12px",
                background: "#080d16",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "#dbe4f1",
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
          padding: "0 6% 120px",
        }}
      >
        <div
          style={{
            padding: "65px 35px",
            borderRadius: "22px",
            textAlign: "center",
            background:
              "linear-gradient(120deg,rgba(20,65,105,0.9),rgba(70,15,65,0.9))",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div
            style={{
              color: "#35c9ff",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "4px",
            }}
          >
            READY FOR WIDE-FORMAT PRODUCTION?
          </div>

          <h2
            style={{
              fontSize: "48px",
              margin: "18px 0",
              fontWeight: 900,
            }}
          >
            Talk to NEXIX NX.
          </h2>

          <p
            style={{
              color: "#a8b6ca",
              fontSize: "17px",
              marginBottom: "30px",
            }}
          >
            Get configuration options, machine specifications and pricing
            information from our team.
          </p>

          <Link
            href="/quote?machine=NX-UV"
            style={{
              display: "inline-block",
              padding: "17px 38px",
              borderRadius: "8px",
              background:
                "linear-gradient(90deg,#35c9ff,#765cff,#ed3ba9)",
              color: "white",
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            GET A QUOTE →
          </Link>
        </div>
      </section>
    </main>
  );
}