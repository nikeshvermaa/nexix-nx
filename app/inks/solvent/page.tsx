"use client";

import Link from "next/link";

export default function SolventInksPage() {
  return (
    <main className="inkProductPage solventPage">

      {/* HERO */}
      <section className="inkHero solventHero">

        <div className="inkGlow solventGlowOne"></div>
        <div className="inkGlow solventGlowTwo"></div>

        <div className="inkHeroContent">

          <div className="inkEyebrow">
            ECO-SOLVENT • SOLVENT • WIDE-FORMAT
          </div>

          <h1>
            Solvent <span>Inks</span>
          </h1>

          <p>
            Reliable wide-format printing inks developed for rich
            colour output, excellent print quality and demanding
            indoor and outdoor applications.
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
              <span>Rich Colours</span>
            </div>

            <div>
              <strong>02</strong>
              <span>UV Resistant</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Outdoor Durability</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Excellent Print Quality</span>
            </div>

          </div>

        </div>


        {/* 3D PRODUCT */}
        <div className="inkProductVisual">

          <div className="productOrb solventOrbOne"></div>
          <div className="productOrb solventOrbTwo"></div>

          <div className="productImageWrap">

            <div className="productRing ringOne"></div>
            <div className="productRing ringTwo"></div>

            <img
              src="/images/inks/solvent.png"
              alt="NEXIX NX Solvent Ink"
              className="inkBottleImage"
            />

          </div>


          <div className="floatingBadge badgeOne">
            <span>NX</span>
            SOLVENT SERIES
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

          <span>WIDE-FORMAT PRINTING TECHNOLOGY</span>

          <h2>
            Designed for <strong>Reliable Production</strong>
          </h2>

          <p>
            NEXIX NX solvent ink solutions are designed for
            wide-format applications where colour quality,
            durability and consistency are essential.
          </p>

        </div>


        <div className="inkCards">

          <div className="inkInfoCard">
            <div className="cardNumber">01</div>

            <h3>Rich Colour Output</h3>

            <p>
              Designed to produce strong and vibrant colour
              reproduction for professional wide-format printing.
            </p>
          </div>


          <div className="inkInfoCard">
            <div className="cardNumber">02</div>

            <h3>Outdoor Durability</h3>

            <p>
              Suitable ink solutions for applications requiring
              resistance to demanding outdoor conditions.
            </p>
          </div>


          <div className="inkInfoCard">
            <div className="cardNumber">03</div>

            <h3>Excellent Print Quality</h3>

            <p>
              Consistent ink performance helps deliver sharp,
              detailed and professional prints.
            </p>
          </div>


          <div className="inkInfoCard">
            <div className="cardNumber">04</div>

            <h3>Wide-Format Applications</h3>

            <p>
              Developed for signage, graphics, commercial
              printing and other wide-format applications.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="inkBottomCTA">

        <div>

          <span>LOOKING FOR THE RIGHT SOLUTION?</span>

          <h2>
            Talk to our
            <strong> ink specialists.</strong>
          </h2>

          <p>
            Share your printer model, printhead and application
            requirements with our technical team.
          </p>

        </div>

        <Link href="/support" className="inkCTAButton">
          CONTACT TECHNICAL SUPPORT →
        </Link>

      </section>

    </main>
  );
}