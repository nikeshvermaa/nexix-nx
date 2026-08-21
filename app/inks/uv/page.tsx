"use client";

import Link from "next/link";

export default function UVInksPage() {
  return (
    <main className="inkProductPage">

      {/* HERO */}
      <section className="inkHero uvHero">

        <div className="inkGlow glowOne"></div>
        <div className="inkGlow glowTwo"></div>

        <div className="inkHeroContent">

          <div className="inkEyebrow">
            UV PRINTING • RIGID APPLICATIONS
          </div>

          <h1>
            UV <span>Inks</span>
          </h1>

          <p>
            Advanced UV printing inks engineered for vivid colours,
            excellent adhesion and reliable performance across
            demanding rigid and industrial applications.
          </p>

          <div className="inkButtons">
            <Link href="/quote" className="inkPrimaryBtn">
              REQUEST QUOTE
              <span>→</span>
            </Link>

            <Link href="/support" className="inkSecondaryBtn">
              TALK TO ENGINEER
            </Link>
          </div>

          <div className="inkFeatures">

            <div>
              <strong>01</strong>
              <span>High Adhesion</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Vivid Colours</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Fast Curing</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Wide Substrate Range</span>
            </div>

          </div>

        </div>

        {/* 3D PRODUCT */}
        <div className="inkProductVisual">

          <div className="productOrb orbBlue"></div>
          <div className="productOrb orbPink"></div>

          <div className="productImageWrap">

            <div className="productRing ringOne"></div>
            <div className="productRing ringTwo"></div>

            <img
              src="/images/inks/uv.png"
              alt="NEXIX NX UV Ink"
              className="inkBottleImage"
            />

          </div>

          <div className="floatingBadge badgeOne">
            <span>UV</span>
            PREMIUM INK
          </div>

          <div className="floatingBadge badgeTwo">
            <span>1L</span>
            PREMIUM QUALITY
          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}
      <section className="inkInfoSection">

        <div className="sectionHeading">

          <span>ENGINEERED FOR PERFORMANCE</span>

          <h2>
            Built for <strong>Professional UV Printing</strong>
          </h2>

          <p>
            NEXIX NX UV inks are designed for demanding printing
            environments where colour quality, adhesion and consistency
            matter.
          </p>

        </div>


        <div className="inkCards">

          <div className="inkInfoCard">
            <div className="cardNumber">01</div>
            <h3>Excellent Adhesion</h3>
            <p>
              Designed for reliable ink adhesion across a wide range
              of suitable rigid and industrial substrates.
            </p>
          </div>

          <div className="inkInfoCard">
            <div className="cardNumber">02</div>
            <h3>Vivid Colour Output</h3>
            <p>
              Strong colour reproduction helps achieve sharp,
              vibrant and professional-looking prints.
            </p>
          </div>

          <div className="inkInfoCard">
            <div className="cardNumber">03</div>
            <h3>Fast Curing</h3>
            <p>
              Optimised for UV curing systems to support efficient
              production workflows.
            </p>
          </div>

          <div className="inkInfoCard">
            <div className="cardNumber">04</div>
            <h3>Industrial Applications</h3>
            <p>
              Suitable for a variety of rigid-media and industrial
              printing applications.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="inkBottomCTA">

        <div>
          <span>NEED THE RIGHT INK?</span>

          <h2>
            Let our technical team
            <strong> help you choose.</strong>
          </h2>

          <p>
            Tell us about your printer, printhead and application.
            Our team can help you find the right ink solution.
          </p>
        </div>

        <Link href="/support" className="inkCTAButton">
          CONTACT TECHNICAL SUPPORT →
        </Link>

      </section>

    </main>
  );
}