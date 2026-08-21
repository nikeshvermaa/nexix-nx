export default function NXSub02Page() {
  const specifications = [
    ["PRINT WIDTH", "1800 mm / 1.8 m"],
    ["SPEED", "200–750 linear m/hr"],
    ["PRINTHEADS", "4 / 8 / 12 / 16 / 20 / 24"],
    ["COLOUR OPTIONS", "4 Colour / 6 Colour"],
    ["INK", "Sublimation + Special Colors"],
    ["MEDIA", "Polyester"],
    ["CONTROL", "A.T. Control System Board"],
  ];

  const features = [
    "Compact body with reduced space coverage",
    "High-production configuration",
    "Excellent print output",
    "Easy-to-operate A.T. Control System",
    "Multiple printhead configurations",
    "Supports 4-colour and 6-colour production",
    "Special colour configurations available",
    "Designed for polyester textile applications",
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
          "radial-gradient(circle at 80% 10%, rgba(0,140,255,0.10), transparent 30%), radial-gradient(circle at 20% 70%, rgba(200,40,180,0.08), transparent 35%), #03060d",
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
        }}
      >
        <a
          href="/machines/sublimation"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: 800,
          }}
        >
          ← BACK TO SUBLIMATION
        </a>

        <div
          style={{
            fontSize: "25px",
            fontWeight: 900,
            letterSpacing: "-1px",
          }}
        >
          <span
            style={{
              background: "linear-gradient(90deg,#00d9ff,#8b5cf6)",
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
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "75px 35px 55px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: "30px",
            background: "rgba(255,50,180,0.08)",
            color: "#ff3fae",
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: "3px",
            marginBottom: "22px",
          }}
        >
          COMPACT HIGH-PRODUCTION SUBLIMATION
        </div>

        <h1
          style={{
            fontSize: "clamp(45px,7vw,82px)",
            lineHeight: "0.95",
            margin: "0 0 25px",
            fontWeight: 900,
            letterSpacing: "-3px",
          }}
        >
          NEXIX NX-SUB 02
        </h1>

        <p
          style={{
            maxWidth: "850px",
            fontSize: "20px",
            lineHeight: "1.7",
            color: "#aebbd0",
            margin: 0,
          }}
        >
          A compact 1.8 m sublimation printer engineered to reduce space
          coverage while delivering high production, excellent print output
          and reliable operation for polyester textile applications.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "0 35px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "28px",
          }}
        >
          {/* LEFT - IMAGE */}
          <div
            style={{
              minHeight: "500px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.10)",
              background:
                "linear-gradient(145deg, rgba(17,26,42,0.95), rgba(5,9,17,0.95))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding: "35px",
            }}
          >
            <img
              src="/sublimation-2.png"
              alt="NEXIX NX-SUB 02 sublimation printer"
              style={{
                width: "100%",
                maxHeight: "460px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* RIGHT - HIGHLIGHTS */}
          <div
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.10)",
              background:
                "linear-gradient(145deg, rgba(14,21,34,0.95), rgba(5,8,15,0.95))",
              padding: "35px",
            }}
          >
            <div
              style={{
                color: "#35c7ff",
                fontSize: "12px",
                fontWeight: 900,
                letterSpacing: "3px",
                marginBottom: "15px",
              }}
            >
              BUILT FOR PRODUCTION
            </div>

            <h2
              style={{
                fontSize: "34px",
                margin: "0 0 18px",
                fontWeight: 900,
              }}
            >
              Compact. Fast. Production Ready.
            </h2>

            <p
              style={{
                color: "#9caabd",
                fontSize: "16px",
                lineHeight: "1.7",
                marginBottom: "28px",
              }}
            >
              NX-SUB 02 combines a compact machine structure with high
              production capability, making it suitable for textile
              manufacturers looking for efficient floor-space utilization.
            </p>

            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  padding: "15px 17px",
                  marginBottom: "10px",
                  borderRadius: "9px",
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#e5edf8",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <span style={{ color: "#39c9ff", marginRight: "8px" }}>
                  ✓
                </span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* SPECIFICATIONS */}
        <section style={{ marginTop: "80px" }}>
          <div
            style={{
              color: "#35c7ff",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "3px",
              marginBottom: "14px",
            }}
          >
            TECHNICAL SPECIFICATIONS
          </div>

          <h2
            style={{
              fontSize: "42px",
              margin: "0 0 30px",
              fontWeight: 900,
            }}
          >
            Machine Specifications
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "14px",
            }}
          >
            {specifications.map(([label, value]) => (
              <div
                key={label}
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  background: "rgba(14,20,32,0.85)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    color: "#7f8da4",
                    fontWeight: 900,
                    letterSpacing: "2px",
                    marginBottom: "10px",
                  }}
                >
                  {label}
                </div>

                <div
                  style={{
                    fontSize: "17px",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PERFORMANCE */}
        <section
          style={{
            marginTop: "70px",
            padding: "45px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(0,140,255,0.10), rgba(220,40,170,0.10))",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "25px",
              textAlign: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "42px",
                  fontWeight: 900,
                  background: "linear-gradient(90deg,#35c7ff,#9b5cff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                1.8 m
              </div>
              <div style={{ color: "#a9b5c8" }}>Print Width</div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "42px",
                  fontWeight: 900,
                  background: "linear-gradient(90deg,#35c7ff,#ff3cae)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                750
              </div>
              <div style={{ color: "#a9b5c8" }}>Linear m/hr Maximum</div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "42px",
                  fontWeight: 900,
                  background: "linear-gradient(90deg,#8b5cff,#ff3cae)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                24
              </div>
              <div style={{ color: "#a9b5c8" }}>Maximum Printheads</div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section style={{ marginTop: "75px" }}>
          <div
            style={{
              color: "#ff3fae",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "3px",
              marginBottom: "14px",
            }}
          >
            APPLICATIONS
          </div>

          <h2
            style={{
              fontSize: "40px",
              margin: "0 0 28px",
              fontWeight: 900,
            }}
          >
            Designed for Polyester Printing
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
                  padding: "20px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#dce5f3",
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
            marginTop: "80px",
            padding: "70px 40px",
            borderRadius: "24px",
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(20,42,72,0.95), rgba(45,12,48,0.95))",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div
            style={{
              color: "#55cfff",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "4px",
              marginBottom: "18px",
            }}
          >
            READY TO PRODUCE?
          </div>

          <h2
            style={{
              fontSize: "48px",
              margin: "0 0 18px",
              fontWeight: 900,
            }}
          >
            Talk to NEXIX NX.
          </h2>

          <p
            style={{
              color: "#a9b7cc",
              fontSize: "17px",
              marginBottom: "30px",
            }}
          >
            Get machine specifications, configuration options and pricing
            information from our team.
          </p>

          <a
            href="/quote?machine=NX-SUB-02"
            style={{
              display: "inline-block",
              padding: "17px 38px",
              borderRadius: "8px",
              background:
                "linear-gradient(90deg,#39c9ff,#7755ff,#ed3ba9)",
              color: "white",
              textDecoration: "none",
              fontWeight: 900,
              fontSize: "16px",
            }}
          >
            GET A QUOTE →
          </a>
        </section>
      </section>
    </main>
  );
}