import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DTF Printing Machines in Surat | NEXIX NX",
  description:
    "Explore NEXIX NX DTF printing machines for direct-to-film printing, garment printing and high-quality textile transfer applications in Surat, Gujarat and across India.",
  keywords: [
    "DTF printing machines",
    "DTF printer",
    "DTF printing machine Surat",
    "DTF printer Surat",
    "direct to film printing machine",
    "DTF textile printing machine",
    "DTF printer India",
    "digital printing machines",
    "NEXIX NX DTF",
  ],
  alternates: {
    canonical: "https://nexix-nx.com/machines/dtf",
  },
  openGraph: {
    title: "DTF Printing Machines in Surat | NEXIX NX",
    description:
      "NEXIX NX DTF printing machines for direct-to-film printing, garment decoration and textile transfer applications.",
    url: "https://nexix-nx.com/machines/dtf",
    siteName: "NEXIX NX",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const machines = [
  {
    name: "NEXIX NX DTF Printer",
    image: "/dtf/NEXIX-DTF-Printer-1.png",
    description:
      "A professional DTF printing solution designed for high-quality direct-to-film transfer printing and reliable production.",
  },
  {
    name: "NEXIX NX DTF Printing System",
    image: "/dtf/NEXIX-DTF-Printer-2.png",
    description:
      "Designed for efficient textile transfer production with consistent print output and practical production workflow.",
  },
  {
    name: "NEXIX NX DTF Production Printer",
    image: "/dtf/NEXIX-DTF-Printer-3.png",
    description:
      "A production-oriented DTF printing solution for businesses handling garment and textile transfer applications.",
  },
  {
    name: "NEXIX NX DTF Textile Printer",
    image: "/dtf/NEXIX-DTF-Printer-4.png",
    description:
      "Built for direct-to-film textile printing applications where detailed graphics and consistent output are important.",
  },
  {
    name: "NEXIX NX DTF Industrial Printer",
    image: "/dtf/NEXIX-DTF-Printer-5.png",
    description:
      "An industrial-style DTF printing solution designed for demanding production environments and textile applications.",
  },
  {
    name: "NEXIX NX DTF Printing Machine",
    image: "/dtf/NEXIX-DTF-Printer-6.png",
    description:
      "A complete DTF printing platform for businesses looking for reliable digital transfer printing technology.",
  },
  {
    name: "NEXIX NX DTF System",
    image: "/dtf/NEXIX-DTF-Printer-7.png",
    description:
      "A compact DTF printing system suitable for direct-to-film transfer workflows and custom textile production.",
  },
];

const applications = [
  "T-Shirt Printing",
  "Garment Printing",
  "Fashion & Apparel",
  "Custom Clothing",
  "Textile Transfer Printing",
  "Promotional Products",
];

export default function DTFPage() {
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
     {/* HERO */}

<section
  style={{
    maxWidth: "1250px",
    margin: "0 auto",
    padding: "90px 35px 60px",
    textAlign: "center",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "1100px",
      height: "500px",
      margin: "0 auto 45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: "20px",
    }}
  >
    <img
      src="/dtf/NEXIX-DTF-Printer-7.png"
      alt="NEXIX NX DTF Printing Machine"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    />
  </div>

  <div
    style={{
      display: "inline-block",
      padding: "8px 15px",
      borderRadius: "30px",
      background: "rgba(0,200,255,0.08)",
      color: "#35c7ff",
      fontSize: "12px",
      fontWeight: 900,
      letterSpacing: "3px",
      marginBottom: "22px",
    }}
  >
    DIGITAL TRANSFER PRINTING TECHNOLOGY
        </div>

        <h1
          style={{
            fontSize: "clamp(45px, 7vw, 82px)",
            lineHeight: "0.98",
            margin: "0 0 25px",
            fontWeight: 900,
            letterSpacing: "-3px",
          }}
        >
          DTF{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg,#35c7ff,#8b5cff,#ff3cae)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Printing Machines
          </span>
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            color: "#aebbd0",
            fontSize: "19px",
            lineHeight: "1.75",
          }}
        >
          NEXIX NX DTF printing machines are designed for direct-to-film
          printing applications, delivering detailed graphics, consistent
          print output and reliable production for garment, fashion, textile
          and custom printing businesses.
        </p>
      </section>

      {/* SEO CONTENT */}

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 35px 70px",
        }}
      >
        <div
          style={{
            padding: "35px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              color: "#ff3fae",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "3px",
              marginBottom: "15px",
            }}
          >
            DIRECT-TO-FILM PRINTING
          </div>

          <h2
            style={{
              fontSize: "38px",
              margin: "0 0 20px",
              fontWeight: 900,
            }}
          >
            Digital DTF Printing Machines
          </h2>

          <p
            style={{
              color: "#a9b6c9",
              fontSize: "16px",
              lineHeight: "1.8",
              marginBottom: "18px",
            }}
          >
            NEXIX NX provides DTF printing machines designed for direct-to-film
            printing and digital garment decoration. DTF technology enables
            printed designs to be transferred onto suitable fabrics and
            garments for a wide range of custom textile applications.
          </p>

          <p
            style={{
              color: "#a9b6c9",
              fontSize: "16px",
              lineHeight: "1.8",
              marginBottom: "18px",
            }}
          >
            DTF printing is widely used for T-shirt printing, custom clothing,
            fashion and apparel, promotional products and other textile
            applications. NEXIX NX focuses on reliable digital printing
            technology and practical production solutions for businesses.
          </p>

          <p
            style={{
              color: "#a9b6c9",
              fontSize: "16px",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            Based in Surat, Gujarat, NEXIX NX supports businesses looking for
            DTF printing machines, digital printing technology, installation
            assistance and technical support across India.
          </p>
        </div>
      </section>

      {/* MACHINE GALLERY */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "0 35px 90px",
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
          NEXIX NX DTF MACHINES
        </div>

        <h2
          style={{
            fontSize: "44px",
            margin: "0 0 35px",
            fontWeight: 900,
          }}
        >
          Explore DTF Printing Solutions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "22px",
          }}
        >
          {machines.map((machine) => (
            <div
              key={machine.name}
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                background:
                  "linear-gradient(145deg, rgba(15,23,38,0.95), rgba(5,9,17,0.95))",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <div
                style={{
                  height: "330px",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "18px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={machine.image}
                  alt={`${machine.name} - NEXIX NX DTF printing machine`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "25px",
                }}
              >
                <h3
                  style={{
                    fontSize: "23px",
                    margin: "0 0 12px",
                    fontWeight: 900,
                  }}
                >
                  {machine.name}
                </h3>

                <p
                  style={{
                    color: "#9caabd",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {machine.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATIONS */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "0 35px 90px",
        }}
      >
        <div
          style={{
            padding: "50px 40px",
            borderRadius: "22px",
            background:
              "linear-gradient(135deg, rgba(0,140,255,0.08), rgba(220,40,170,0.08))",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          <div
            style={{
              color: "#ff3fae",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "3px",
              marginBottom: "15px",
            }}
          >
            APPLICATIONS
          </div>

          <h2
            style={{
              fontSize: "40px",
              margin: "0 0 30px",
              fontWeight: 900,
            }}
          >
            DTF Printing Applications
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
                  padding: "20px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#dce5f3",
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    color: "#35c7ff",
                    marginRight: "8px",
                  }}
                >
                  ✓
                </span>
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SURAT SEO SECTION */}

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 35px 90px",
        }}
      >
        <div
          style={{
            padding: "40px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              margin: "0 0 18px",
              fontWeight: 900,
            }}
          >
            DTF Printing Machines in Surat, Gujarat
          </h2>

          <p
            style={{
              color: "#a9b6c9",
              fontSize: "16px",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            NEXIX NX is based in Surat, Gujarat and provides digital printing
            technology for textile and garment businesses. Our DTF printing
            solutions are designed for businesses looking for direct-to-film
            printing technology, machine guidance, installation assistance and
            technical support across Surat and India.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 35px 100px",
        }}
      >
        <div
          style={{
            padding: "65px 35px",
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
            READY FOR DTF PRODUCTION?
          </div>

          <h2
            style={{
              fontSize: "46px",
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
            Contact our team for DTF printing machine information,
            configurations and pricing.
          </p>

          <Link
            href="/quote"
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
          </Link>
        </div>
      </section>

      {/* MOBILE */}

      <style>{`
        @media (max-width: 768px) {
          * {
            box-sizing: border-box;
          }

          main {
            width: 100%;
            overflow-x: hidden;
          }

          main > section {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          main > section:first-child {
            padding-top: 55px !important;
          }

          main > section:first-child h1 {
            font-size: 44px !important;
            letter-spacing: -2px !important;
          }

          main > section:first-child p {
            font-size: 15px !important;
          }

          main > section:nth-of-type(2) > div {
            padding: 25px 20px !important;
          }

          main > section:nth-of-type(2) h2 {
            font-size: 30px !important;
          }

          main > section:nth-of-type(3) h2 {
            font-size: 32px !important;
          }

          main > section:nth-of-type(3) > div:last-child {
            grid-template-columns: 1fr !important;
          }

          main > section:nth-of-type(3) > div:last-child > div > div:first-child {
            height: 260px !important;
          }

          main > section:nth-of-type(4) > div {
            padding: 30px 20px !important;
          }

          main > section:nth-of-type(4) h2 {
            font-size: 31px !important;
          }

          main > section:nth-of-type(4) > div > div:last-child {
            grid-template-columns: 1fr !important;
          }

          main > section:nth-of-type(5) > div {
            padding: 30px 20px !important;
          }

          main > section:nth-of-type(5) h2 {
            font-size: 28px !important;
          }

          main > section:nth-of-type(6) > div {
            padding: 45px 20px !important;
          }

          main > section:nth-of-type(6) h2 {
            font-size: 35px !important;
          }

          main > section:nth-of-type(6) a {
            display: block !important;
            width: 100% !important;
          }
        }

        @media (max-width: 390px) {
          main > section:first-child h1 {
            font-size: 39px !important;
          }
        }
      `}</style>
    </main>
  );
}