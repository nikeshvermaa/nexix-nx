import Link from "next/link";

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
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 80% 10%, rgba(0,140,255,0.10), transparent 30%), radial-gradient(circle at 20% 80%, rgba(255,0,180,0.08), transparent 30%), #03060b",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          height: "110px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7%",
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(3,6,11,0.88)",
          backdropFilter: "blur(14px)",
        }}
      >
        <Link
          href="/#machines"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: 800,
          }}
        >
          ← BACK TO MACHINES
        </Link>

        <div
          style={{
            fontSize: "25px",
            fontWeight: 900,
            letterSpacing: "-1px",
          }}
        >
          <span style={{ color: "#35c7ff" }}>NX</span>{" "}
          <span>NEXIX NX</span>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "90px 20px 70px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            color: "#42c9ff",
            letterSpacing: "7px",
            fontSize: "14px",
            fontWeight: 800,
            marginBottom: "22px",
          }}
        >
          DIGITAL TEXTILE TECHNOLOGY
        </div>

        <h1
          style={{
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 0.95,
            margin: 0,
            fontWeight: 900,
            letterSpacing: "-4px",
          }}
        >
          Direct-to-Fabric
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg,#42c9ff,#7765ff,#ed3ba9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Printers
          </span>
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "30px auto 0",
            color: "#9caabd",
            fontSize: "19px",
            lineHeight: 1.7,
          }}
        >
          Advanced direct-to-fabric printing technology engineered for
          high-quality textile production, reliable operation and industrial
          productivity.
        </p>
      </section>

      {/* MACHINES */}
      <section
        style={{
          maxWidth: "1450px",
          margin: "0 auto",
          padding: "0 30px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
            gap: "30px",
          }}
        >
          {machines.map((machine) => (
            <article
              key={machine.name}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "22px",
                overflow: "hidden",
                background:
                  "linear-gradient(145deg, rgba(16,24,38,0.96), rgba(5,9,16,0.96))",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  height: "360px",
                  padding: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "radial-gradient(circle, rgba(35,70,110,0.18), transparent 65%)",
                }}
              >
                <img
                  src={machine.image}
                  alt={machine.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div style={{ padding: "35px" }}>
                <div
                  style={{
                    color:
                      machine.name.includes("32")
                        ? "#ed3ba9"
                        : "#42c9ff",
                    fontSize: "12px",
                    fontWeight: 900,
                    letterSpacing: "4px",
                    marginBottom: "15px",
                  }}
                >
                  {machine.category}
                </div>

                <h2
                  style={{
                    fontSize: "38px",
                    margin: "0 0 18px",
                    fontWeight: 900,
                    letterSpacing: "-1px",
                  }}
                >
                  {machine.name}
                </h2>

                <p
                  style={{
                    color: "#9caabd",
                    lineHeight: 1.7,
                    fontSize: "16px",
                    minHeight: "82px",
                  }}
                >
                  {machine.description}
                </p>

                {/* SPECS */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginTop: "30px",
                  }}
                >
                  {machine.specs.map(([label, value]) => (
                    <div
                      key={label}
                      style={{
                        padding: "18px",
                        borderRadius: "10px",
                        background: "rgba(255,255,255,0.035)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div
                        style={{
                          color: "#6f7d91",
                          fontSize: "10px",
                          fontWeight: 900,
                          letterSpacing: "2px",
                          marginBottom: "8px",
                        }}
                      >
                        {label}
                      </div>

                      <div
                        style={{
                          color: "white",
                          fontSize: "14px",
                          fontWeight: 700,
                          lineHeight: 1.4,
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* APPLICATIONS */}
                <div style={{ marginTop: "35px" }}>
                  <h3
                    style={{
                      fontSize: "13px",
                      letterSpacing: "3px",
                      color: "#42c9ff",
                      marginBottom: "15px",
                    }}
                  >
                    APPLICATIONS
                  </h3>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "9px",
                    }}
                  >
                    {machine.applications.map((item) => (
                      <div
                        key={item}
                        style={{
                          padding: "11px 13px",
                          borderRadius: "7px",
                          background: "rgba(255,255,255,0.035)",
                          color: "#d9e1ec",
                          fontSize: "12px",
                        }}
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* FEATURES */}
                <div style={{ marginTop: "35px" }}>
                  <h3
                    style={{
                      fontSize: "13px",
                      letterSpacing: "3px",
                      color: "#ed3ba9",
                      marginBottom: "15px",
                    }}
                  >
                    KEY FEATURES
                  </h3>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "9px",
                    }}
                  >
                    {machine.features.map((item) => (
                      <div
                        key={item}
                        style={{
                          padding: "11px 13px",
                          borderRadius: "7px",
                          background: "rgba(255,255,255,0.035)",
                          color: "#d9e1ec",
                          fontSize: "12px",
                        }}
                      >
                        ✦ {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* BUTTON */}
                <div style={{ marginTop: "35px" }}>
                  <Link
                    href={`/quote?machine=${encodeURIComponent(
                      machine.name
                    )}`}
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "17px",
                      borderRadius: "9px",
                      background:
                        "linear-gradient(90deg,#42c9ff,#7765ff,#ed3ba9)",
                      color: "white",
                      textDecoration: "none",
                      fontWeight: 900,
                      fontSize: "14px",
                      letterSpacing: "1px",
                    }}
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
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 100px",
          padding: "80px 30px",
          textAlign: "center",
          borderRadius: "25px",
          background:
            "linear-gradient(120deg, rgba(20,48,75,0.8), rgba(62,12,57,0.75))",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            color: "#42c9ff",
            letterSpacing: "5px",
            fontSize: "12px",
            fontWeight: 900,
            marginBottom: "20px",
          }}
        >
          READY TO PRODUCE?
        </div>

        <h2
          style={{
            fontSize: "50px",
            margin: "0 0 20px",
            fontWeight: 900,
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

        <Link
          href="/quote"
          style={{
            display: "inline-block",
            padding: "17px 35px",
            borderRadius: "9px",
            background:
              "linear-gradient(90deg,#42c9ff,#7765ff,#ed3ba9)",
            color: "white",
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          GET A QUOTE →
        </Link>
      </section>
    </main>
  );
}