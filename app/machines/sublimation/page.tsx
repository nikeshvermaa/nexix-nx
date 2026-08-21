import Link from "next/link";

const machines = [
  {
    name: "NEXIX NX-SUB 01",
    label: "HEAVY-DUTY SUBLIMATION PRINTER",
    image: "/sublimation-1.png",
    description:
      "A robust 1.8 m sublimation printer with a heavy-duty body, designed for demanding textile production and excellent output, especially for dark designs.",
    highlight:
      "Heavy-duty construction • Excellent dark-design output",
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
    highlight:
      "Compact footprint • High-production focused",
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
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 15% 20%, rgba(0,190,255,0.10), transparent 28%), radial-gradient(circle at 85% 45%, rgba(255,0,160,0.10), transparent 30%), #02050a",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        paddingBottom: "90px",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          height: "76px",
          padding: "0 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(2,5,10,0.85)",
          backdropFilter: "blur(18px)",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1px",
          }}
        >
          ← BACK TO HOME
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontSize: "27px",
              fontWeight: 900,
              letterSpacing: "-3px",
              background:
                "linear-gradient(135deg,#00d9ff,#7c55ff,#ff299d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NX
          </span>

          <span
            style={{
              fontSize: "20px",
              fontWeight: 900,
              letterSpacing: "1px",
            }}
          >
            NEXIX NX
          </span>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "85px 5% 65px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#00d9ff",
            fontSize: "11px",
            fontWeight: 900,
            letterSpacing: "4px",
            marginBottom: "20px",
          }}
        >
          DIGITAL TEXTILE TECHNOLOGY
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(45px, 6vw, 78px)",
            lineHeight: 1,
            fontWeight: 900,
            letterSpacing: "-3px",
          }}
        >
          Sublimation{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg,#00d9ff,#7c55ff,#ff299d,#ffd000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Printers
          </span>
        </h1>

        <p
          style={{
            maxWidth: "720px",
            margin: "25px auto 0",
            color: "#9da7b7",
            fontSize: "16px",
            lineHeight: 1.8,
          }}
        >
          High-performance digital sublimation printing solutions engineered
          for precision, productivity and outstanding polyester textile
          printing.
        </p>
      </section>

      {/* MACHINES */}
      <section
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "0 5%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "28px",
          }}
        >
          {machines.map((machine, index) => (
            <article
              key={machine.name}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.12)",
                background:
                  "linear-gradient(145deg, rgba(14,23,38,0.96), rgba(3,7,13,0.98))",
                boxShadow: "0 25px 70px rgba(0,0,0,0.35)",
              }}
            >
              {/* TOP ACCENT */}
              <div
                style={{
                  height: "3px",
                  background:
                    index === 0
                      ? "linear-gradient(90deg,#00d9ff,#7c55ff,#ff299d)"
                      : "linear-gradient(90deg,#ff299d,#ffd000,#00d9ff)",
                }}
              />

              {/* MACHINE IMAGE */}
              <div
                style={{
                  height: "390px",
                  padding: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "radial-gradient(circle at center, rgba(0,150,255,0.13), transparent 65%)",
                }}
              >
                <img
                  src={machine.image}
                  alt={machine.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter:
                      "drop-shadow(0 25px 25px rgba(0,0,0,0.65))",
                  }}
                />
              </div>

              {/* MACHINE INFORMATION */}
              <div
                style={{
                  padding: "30px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    color: index === 0 ? "#00d9ff" : "#ff299d",
                    fontSize: "10px",
                    fontWeight: 900,
                    letterSpacing: "3px",
                    marginBottom: "10px",
                  }}
                >
                  {machine.label}
                </div>

                <h2
                  style={{
                    margin: "0 0 14px",
                    fontSize: "31px",
                    fontWeight: 900,
                    letterSpacing: "-1px",
                  }}
                >
                  {machine.name}
                </h2>

                <p
                  style={{
                    color: "#a3adbd",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    margin: "0 0 14px",
                  }}
                >
                  {machine.description}
                </p>

                <div
                  style={{
                    padding: "13px 15px",
                    marginBottom: "25px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.035)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#dce3ed",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  ✦ {machine.highlight}
                </div>

                {/* SPECIFICATIONS */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "9px",
                    marginBottom: "25px",
                  }}
                >
                  {machine.specs.map(([label, value]) => (
                    <div
                      key={label}
                      style={{
                        minHeight: "68px",
                        padding: "12px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.035)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div
                        style={{
                          color: "#727e90",
                          fontSize: "9px",
                          fontWeight: 900,
                          letterSpacing: "1px",
                          marginBottom: "7px",
                        }}
                      >
                        {label}
                      </div>

                      <div
                        style={{
                          color: "#e7ebf2",
                          fontSize: "12px",
                          lineHeight: 1.4,
                          fontWeight: 700,
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* BUTTONS */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                  }}
                >
                  <Link
                    href={`/machines/sublimation/${index === 0 ? "nx-sub-01" : "nx-sub-02"}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "14px",
                      borderRadius: "7px",
                      textDecoration: "none",
                      color: "white",
                      fontSize: "11px",
                      fontWeight: 900,
                      border: "1px solid rgba(0,217,255,0.5)",
                      background:
                        "linear-gradient(90deg,rgba(0,217,255,0.12),rgba(124,85,255,0.12))",
                    }}
                  >
                    VIEW DETAILS →
                  </Link>

                  <Link
                    href={`/quote?machine=${index === 0 ? "NX-SUB-01" : "NX-SUB-02"}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "14px",
                      borderRadius: "7px",
                      textDecoration: "none",
                      color: "white",
                      fontSize: "11px",
                      fontWeight: 900,
                      background:
                        "linear-gradient(90deg,#00cfff,#7c55ff,#ff299d)",
                    }}
                  >
                    GET A QUOTE
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          maxWidth: "1400px",
          margin: "70px auto 0",
          padding: "30px 5%",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
          color: "#687180",
          fontSize: "11px",
          letterSpacing: "1px",
        }}
      >
        NEXIX NX — DIGITAL PRINTING TECHNOLOGY
      </footer>
    </main>
  );
}