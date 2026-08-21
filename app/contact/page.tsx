"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="contactPage">

      {/* =====================================================
          CONTACT HERO
      ===================================================== */}

      <section className="contactHero">

        <div className="contactGrid"></div>

        <div className="contactGlow contactGlowOne"></div>
        <div className="contactGlow contactGlowTwo"></div>

        <div className="contactHeroContent">

          <div className="contactEyebrow">
            NEXIX NX • LET'S CONNECT
          </div>

          <h1>
            Let's Build
            <span> Something Great.</span>
          </h1>

          <p>
            Looking for digital printing machines, premium inks,
            technical support or a customised printing solution?
            Our team is ready to help.
          </p>

          <div className="contactHeroButtons">

            <a
              href="tel:+916354671731"
              className="contactPrimaryBtn"
            >
              CALL US
              <span>→</span>
            </a>

            <a
              href="mailto:nikeshvermaa@gmail.com"
              className="contactSecondaryBtn"
            >
              SEND EMAIL
            </a>

          </div>

        </div>

        {/* 3D ORBIT */}

        <div className="contactOrbital">

          <div className="contactOrbit orbitOne"></div>
          <div className="contactOrbit orbitTwo"></div>
          <div className="contactOrbit orbitThree"></div>

          <div className="contactCore">
            NX
          </div>

          <div className="orbitDot dotOne"></div>
          <div className="orbitDot dotTwo"></div>
          <div className="orbitDot dotThree"></div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CARDS
      ===================================================== */}

      <section className="contactInformation">

        <div className="contactSectionHeading">

          <span>GET IN TOUCH</span>

          <h2>
            Talk directly with
            <strong> our team.</strong>
          </h2>

          <p>
            Choose the department that matches your requirement
            and our team will get back to you.
          </p>

        </div>


        <div className="contactCards">

          {/* GENERAL */}

          <div className="contactCard">

            <div className="contactCardIcon">
              ✉
            </div>

            <div className="contactCardNumber">
              01
            </div>

            <h3>General Enquiries</h3>

            <p>
              For general questions, company information,
              partnerships and other enquiries.
            </p>

            <a href="mailto:nikeshvermaa@gmail.com">
              nikeshvermaa@gmail.com
              <span>→</span>
            </a>

          </div>


          {/* SALES */}

          <div className="contactCard salesCard">

            <div className="contactCardIcon">
              ◈
            </div>

            <div className="contactCardNumber">
              02
            </div>

            <h3>Sales Support</h3>

            <p>
              Looking for a machine, ink solution, pricing,
              specifications or a customised quotation?
            </p>

            <a href="mailto:nexix.sales@gmail.com">
              nexix.sales@gmail.com
              <span>→</span>
            </a>

          </div>


          {/* TECHNICAL */}

          <div className="contactCard technicalCard">

            <div className="contactCardIcon">
              ⚙
            </div>

            <div className="contactCardNumber">
              03
            </div>

            <h3>Technical Support</h3>

            <p>
              Need help with machine troubleshooting,
              installation, profiles, colour matching or
              technical guidance?
            </p>

            <a href="mailto:nexix.support@gmail.com">
              nexix.support@gmail.com
              <span>→</span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENQUIRY FORM
      ===================================================== */}

      <section className="contactFormSection">

        <div className="contactFormIntro">

          <span>START A CONVERSATION</span>

          <h2>
            Tell us what
            <strong> you need.</strong>
          </h2>

          <p>
            Fill in your details and tell us about your
            requirement. Our team can then understand your
            application before contacting you.
          </p>


          <div className="contactQuickInfo">

            <div>
              <small>PHONE</small>
              <a href="tel:+916354671731">
                +91 63546 71731
              </a>
            </div>

            <div>
              <small>EMAIL</small>
              <a href="mailto:nikeshvermaa@gmail.com">
                nikeshvermaa@gmail.com
              </a>
            </div>

          </div>

        </div>


        <form
          className="contactForm"
          action="mailto:nikeshvermaa@gmail.com"
          method="post"
          encType="text/plain"
        >

          <div className="formRow">

            <div className="formGroup">

              <label htmlFor="name">
                FULL NAME
              </label>

              <input
                id="name"
                name="Name"
                type="text"
                placeholder="Your full name"
                required
              />

            </div>


            <div className="formGroup">

              <label htmlFor="company">
                COMPANY
              </label>

              <input
                id="company"
                name="Company"
                type="text"
                placeholder="Company name"
              />

            </div>

          </div>


          <div className="formRow">

            <div className="formGroup">

              <label htmlFor="email">
                EMAIL
              </label>

              <input
                id="email"
                name="Email"
                type="email"
                placeholder="your@email.com"
                required
              />

            </div>


            <div className="formGroup">

              <label htmlFor="phone">
                PHONE / WHATSAPP
              </label>

              <input
                id="phone"
                name="Phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                required
              />

            </div>

          </div>


          <div className="formRow">

            <div className="formGroup">

              <label htmlFor="requirement">
                REQUIREMENT
              </label>

              <select
                id="requirement"
                name="Requirement"
                defaultValue=""
                required
              >

                <option value="" disabled>
                  Select your requirement
                </option>

                <option>
                  Digital Printing Machine
                </option>

                <option>
                  Textile Printing Machine
                </option>

                <option>
                  UV Printing Machine
                </option>

                <option>
                  Printing Ink
                </option>

                <option>
                  Technical Support
                </option>

                <option>
                  Profile / Colour Matching
                </option>

                <option>
                  Machine Installation
                </option>

                <option>
                  Partnership / Dealer Enquiry
                </option>

                <option>
                  Other
                </option>

              </select>

            </div>


            <div className="formGroup">

              <label htmlFor="location">
                CITY / COUNTRY
              </label>

              <input
                id="location"
                name="Location"
                type="text"
                placeholder="e.g. Surat, India"
              />

            </div>

          </div>


          <div className="formGroup">

            <label htmlFor="message">
              MESSAGE
            </label>

            <textarea
              id="message"
              name="Message"
              rows={6}
              placeholder="Tell us about your machine, printing application or requirement..."
              required
            />

          </div>


          <button
            type="submit"
            className="contactSubmitBtn"
          >
            SEND ENQUIRY
            <span>→</span>
          </button>

        </form>

      </section>


      {/* =====================================================
          OFFICE LOCATION
      ===================================================== */}

      <section className="contactOffice">

        <div className="officeVisual">

          <div className="officeGrid"></div>

          <div className="locationPin">
            <div className="pinPulse"></div>
            <span>●</span>
          </div>

          <div className="locationLabel">
            <small>NEXIX NX</small>
            <strong>SURAT</strong>
          </div>

        </div>


        <div className="officeDetails">

          <span>OUR OFFICE</span>

          <h2>
            Visit us in
            <strong> Surat.</strong>
          </h2>

          <p>
            Our office is located at Platinum Business Park Hub,
            Surat, Gujarat. Reach out to our team before visiting
            so we can arrange the right person for your requirement.
          </p>


          <div className="officeAddress">

            <div className="addressIcon">
              ◎
            </div>

            <div>

              <small>OFFICE ADDRESS</small>

              <strong>
                Platinum Business Park Hub
              </strong>

              <span>
                Surat, Gujarat, India
              </span>

            </div>

          </div>


          <a
            href="https://www.google.com/maps/search/?api=1&query=Platinum+Business+Park+Hub+Surat+Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            className="mapButton"
          >
            OPEN IN GOOGLE MAPS →
          </a>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contactFinalCTA">

        <div>

          <span>NEXIX NX</span>

          <h2>
            Printing technology
            <strong> without borders.</strong>
          </h2>

          <p>
            Machines. Inks. Engineering. Support.
            One team for your complete digital printing journey.
          </p>

        </div>


        <div className="finalCTAActions">

          <a
            href="tel:+916354671731"
            className="contactPrimaryBtn"
          >
            CALL +91 63546 71731
          </a>

          <Link
            href="/quote"
            className="contactSecondaryBtn"
          >
            GET A QUOTE
          </Link>

        </div>

      </section>

    </main>
  );
}