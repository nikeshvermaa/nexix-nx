"use client";

import Link from "next/link";

const inkCategories = [
  {
    number: "01",
    title: "Textile Inks",
    subtitle: "Sublimation · Reactive · Pigment",
    description:
      "High-performance textile inks engineered for vibrant color, reliable production and demanding fabric applications.",
    className: "textileInk",
    symbol: "T",
  },
  {
    number: "02",
    title: "DTF & Garment Inks",
    subtitle: "DTF · DTG · Garment Printing",
    description:
      "Premium garment printing inks designed for rich colors, strong coverage and consistent transfer performance.",
    className: "dtfInk",
    symbol: "D",
  },
  {
    number: "03",
    title: "UV Inks",
    subtitle: "UV Printing · Rigid Applications",
    description:
      "Advanced UV printing inks for rigid media, signage, graphics and high-value industrial applications.",
    className: "uvInk",
    symbol: "U",
  },
  {
    number: "04",
    title: "Solvent Inks",
    subtitle: "Eco-Solvent · Solvent",
    description:
      "Reliable inks for wide-format applications including signage, banners, vehicle graphics and outdoor printing.",
    className: "solventInk",
    symbol: "S",
  },
];

export default function InksPage() {
  return (
    <main className="inksPage">

      {/* HERO */}
      <section className="inksHero">

        <div className="inksHeroGlow" />

        <div className="inksHeroContent">

          <div className="inksEyebrow">
            PRECISION INK TECHNOLOGY
          </div>

          <h1>
            The right ink.
            <br />
            <span>Perfect print.</span>
          </h1>

          <div className="inksAccentLine" />

          <p>
            Discover high-performance digital printing inks engineered
            for textile, garment, UV and wide-format applications.
          </p>

          <div className="inksHeroButtons">

            <a href="#inkCategories" className="inksPrimaryBtn">
              EXPLORE INKS <span>→</span>
            </a>

            <a href="#inkFinder" className="inksSecondaryBtn">
              FIND YOUR INK <span>⌕</span>
            </a>

          </div>

        </div>

       {/* CMYK 3D INK SCENE */}
<div className="ink3DScene cmykInkScene">

  {/* Ambient glow */}
  <div className="cmykAmbientGlow" />

  {/* CMYK ink orbs */}
  <div className="cmykInkOrb cyanOrb">
    <div className="inkGloss" />
  </div>

  <div className="cmykInkOrb magentaOrb">
    <div className="inkGloss" />
  </div>

  <div className="cmykInkOrb yellowOrb">
    <div className="inkGloss" />
  </div>

  <div className="cmykInkOrb blackOrb">
    <div className="inkGloss" />
  </div>

  {/* Orbit rings */}
  <div className="cmykOrbit orbitCyan" />
  <div className="cmykOrbit orbitMagenta" />

  {/* Small floating ink particles */}
  <span className="cmykParticle particleC" />
  <span className="cmykParticle particleM" />
  <span className="cmykParticle particleY" />
  <span className="cmykParticle particleK" />

  {/* Technology label */}
  <div className="floatingLabel cmykLabel">
    <span>NX</span>
    INK TECHNOLOGY
  </div>

</div>
      </section>


      {/* CATEGORY INTRO */}
      <section className="inkIntro" id="inkCategories">

        <div className="sectionEyebrow">
          OUR INK TECHNOLOGY
        </div>

        <h2>
          Engineered for
          <span> every application.</span>
        </h2>

        <p>
          From high-speed textile production to garment printing,
          UV graphics and outdoor signage — choose the ink technology
          built for your application.
        </p>

      </section>


      {/* CATEGORY CARDS */}
      <section className="inkCategories">

        {inkCategories.map((ink) => (
          <Link
            href={`/inks/${ink.className.replace("Ink", "")}`}
            className={`inkCategoryCard ${ink.className}`}
            key={ink.number}
          >

            <div className="cardTop">

              <span className="cardNumber">
                {ink.number}
              </span>

              <span className="cardArrow">
                ↗
              </span>

            </div>

            <div className="ink3DIcon">

              <div className="inkIconLiquid">
                {ink.symbol}
              </div>

              <div className="iconRing" />

            </div>

            <div className="cardContent">

              <div className="cardSubtitle">
                {ink.subtitle}
              </div>

              <h3>
                {ink.title}
              </h3>

              <p>
                {ink.description}
              </p>

            </div>

            <div className="cardBottom">
              <span>EXPLORE TECHNOLOGY</span>
              <span>→</span>
            </div>

          </Link>
        ))}

      </section>
     

      {/* INK FINDER */}
      <section className="inkFinder" id="inkFinder">

        <div className="finderGlow" />

        <div className="finderContent">

          <div className="sectionEyebrow">
            NOT SURE WHICH INK?
          </div>

          <h2>
            Find the right
            <span> ink for your machine.</span>
          </h2>

          <p>
            Tell us your printer, printhead and application.
            Our team can help you identify the right ink technology
            for your production requirements.
          </p>

          <Link href="/quote" className="finderButton">
            OPEN INK FINDER <span>→</span>
          </Link>

        </div>

        <div className="finderOrb">

          <div className="finderRing ringA" />
          <div className="finderRing ringB" />
          <div className="finderRing ringC" />

          <div className="finderDrop">
            <span>NX</span>
          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="inksBottomCTA">

        <div className="sectionEyebrow">
          NEXIX NX
        </div>

        <h2>
          Better ink.
          <br />
          <span>Better production.</span>
        </h2>

        <p>
          Premium digital printing technology backed by
          engineering expertise and technical support.
        </p>

        <Link href="/quote" className="inksPrimaryBtn">
          TALK TO OUR TEAM <span>→</span>
        </Link>

      </section>

    </main>
  );
}