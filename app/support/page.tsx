"use client";

import { FormEvent, useState } from "react";

export default function SupportPage() {
  const [supportType, setSupportType] = useState("Technical Support");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      "Thank you! Your support request has been received. Our team will contact you shortly."
    );
  };

  return (
    <main className="supportPage">

      {/* HERO */}
      <section className="supportHero">
        <div className="supportHeroGlow"></div>

        <div className="supportHeroContent">
          <span className="supportEyebrow">
            NEXIX NX CUSTOMER SUPPORT
          </span>

          <h1>
            We're Here to
            <span> Support You.</span>
          </h1>

          <p>
            Get technical assistance, speak with our engineers,
            or connect with our sales team for machine and ink
            requirements.
          </p>

          <div className="supportHeroButtons">
            <button
              className="supportPrimaryButton"
              onClick={() =>
                document
                  .getElementById("technical-support")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              TECHNICAL SUPPORT
            </button>

            <button
              className="supportSecondaryButton"
              onClick={() =>
                document
                  .getElementById("sales-support")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              SALES SUPPORT
            </button>
          </div>
        </div>
      </section>

      {/* SUPPORT CHOICES */}
      <section className="supportChoiceSection">

        <div className="supportSectionHeading">
          <span>HOW CAN WE HELP?</span>
          <h2>
            Choose the right
            <strong> support team.</strong>
          </h2>
          <p>
            Whether you are facing a technical problem or looking
            for the right printing solution, our team is ready to help.
          </p>
        </div>

        <div className="supportChoiceGrid">

          <div className="supportChoiceCard technicalCard">
            <div className="supportCardIcon">⚙</div>

            <span>01</span>

            <h3>Technical Support</h3>

            <p>
              Get assistance from our technical team for machines,
              printing quality, RIP, profiles and troubleshooting.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("technical-support")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              GET TECHNICAL HELP →
            </button>
          </div>

          <div className="supportChoiceCard salesCard">
            <div className="supportCardIcon">▣</div>

            <span>02</span>

            <h3>Sales Support</h3>

            <p>
              Talk to our sales team about machines, inks,
              configurations, pricing, demonstrations and requirements.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("sales-support")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              TALK TO SALES →
            </button>
          </div>

        </div>
      </section>

      {/* TECHNICAL SUPPORT */}
      <section
        id="technical-support"
        className="supportFormSection"
      >

        <div className="supportFormIntro">
          <span>01 / TECHNICAL SUPPORT</span>

          <h2>
            Need help with your
            <strong> machine?</strong>
          </h2>

          <p>
            Tell us what you are experiencing. Our engineers will
            review your request and help you find the right solution.
          </p>

          <div className="supportProblemList">

            <div>
              <strong>01</strong>
              <span>Machine related problem</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Profile / colour matching issue</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Talk to an engineer</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Printhead / nozzle problem</span>
            </div>

            <div>
              <strong>05</strong>
              <span>RIP / software issue</span>
            </div>

            <div>
              <strong>06</strong>
              <span>Installation / maintenance support</span>
            </div>

          </div>
        </div>

        <form
          className="supportForm"
          onSubmit={handleSubmit}
        >

          <div className="formHeader">
            <span>TECHNICAL REQUEST</span>
            <h3>Tell us about your problem</h3>
          </div>

          <div className="formGrid">

            <div className="formField">
              <label>FULL NAME *</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="formField">
              <label>COMPANY NAME *</label>
              <input
                type="text"
                name="company"
                placeholder="Company name"
                required
              />
            </div>

            <div className="formField">
              <label>PHONE / WHATSAPP *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>

            <div className="formField">
              <label>EMAIL *</label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="formField">
              <label>CITY / COUNTRY *</label>
              <input
                type="text"
                name="location"
                placeholder="Surat, India"
                required
              />
            </div>

            <div className="formField">
              <label>MACHINE MODEL</label>
              <input
                type="text"
                name="machine"
                placeholder="Machine model"
              />
            </div>

            <div className="formField fullField">
              <label>WHAT TYPE OF SUPPORT DO YOU NEED? *</label>

              <select
                value={supportType}
                onChange={(e) => setSupportType(e.target.value)}
                required
              >
                <option>Technical Support</option>
                <option>Machine Related Problem</option>
                <option>Profile / Colour Matching</option>
                <option>Printhead / Nozzle Problem</option>
                <option>RIP / Software Issue</option>
                <option>Installation Support</option>
                <option>Maintenance / Troubleshooting</option>
                <option>Talk to an Engineer</option>
                <option>Other</option>
              </select>
            </div>

            <div className="formField fullField">
              <label>DESCRIBE YOUR PROBLEM *</label>

              <textarea
                name="problem"
                rows={6}
                placeholder="Please explain your machine problem or technical requirement..."
                required
              ></textarea>
            </div>

          </div>

          <button
            type="submit"
            className="formSubmitButton"
          >
            SEND TECHNICAL REQUEST →
          </button>

        </form>

      </section>

      {/* SALES SUPPORT */}
      <section
        id="sales-support"
        className="supportFormSection salesSupportSection"
      >

        <div className="supportFormIntro">
          <span>02 / SALES SUPPORT</span>

          <h2>
            Looking for the right
            <strong> printing solution?</strong>
          </h2>

          <p>
            Tell our sales team what you are looking for and
            we will help you select the right machine, ink and
            configuration for your production.
          </p>

          <div className="supportProblemList">

            <div>
              <strong>01</strong>
              <span>Machine inquiry</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Machine specifications</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Pricing / quotation</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Which machine suits my production?</span>
            </div>

            <div>
              <strong>05</strong>
              <span>Ink / printhead inquiry</span>
            </div>

            <div>
              <strong>06</strong>
              <span>Machine demonstration</span>
            </div>

            <div>
              <strong>07</strong>
              <span>Installation & training</span>
            </div>

            <div>
              <strong>08</strong>
              <span>Dealer / distribution inquiry</span>
            </div>

          </div>
        </div>

        <form
          className="supportForm"
          onSubmit={handleSubmit}
        >

          <div className="formHeader">
            <span>SALES REQUEST</span>
            <h3>Tell us what you are looking for</h3>
          </div>

          <div className="formGrid">

            <div className="formField">
              <label>FULL NAME *</label>
              <input
                type="text"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="formField">
              <label>COMPANY NAME *</label>
              <input
                type="text"
                placeholder="Company name"
                required
              />
            </div>

            <div className="formField">
              <label>PHONE / WHATSAPP *</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>

            <div className="formField">
              <label>EMAIL *</label>
              <input
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="formField">
              <label>CITY / COUNTRY *</label>
              <input
                type="text"
                placeholder="Surat, India"
                required
              />
            </div>

            <div className="formField">
              <label>PRODUCT / MACHINE</label>
              <input
                type="text"
                placeholder="Machine or ink you are interested in"
              />
            </div>

            <div className="formField fullField">
              <label>WHAT ARE YOU INTERESTED IN? *</label>

              <select required>
                <option value="">
                  Select your requirement
                </option>

                <option>
                  Digital Printing Machine
                </option>

                <option>
                  Direct-to-Fabric Machine
                </option>

                <option>
                  Sublimation Machine
                </option>

                <option>
                  UV Printer
                </option>

                <option>
                  Textile Ink
                </option>

                <option>
                  Printhead / Configuration
                </option>

                <option>
                  Machine Demonstration
                </option>

                <option>
                  Pricing / Quotation
                </option>

                <option>
                  Dealer / Distribution
                </option>

                <option>
                  Other
                </option>
              </select>
            </div>

            <div className="formField fullField">
              <label>YOUR REQUIREMENT *</label>

              <textarea
                rows={6}
                placeholder="Tell us about your production requirement, fabric, expected production, machine requirement or any other details..."
                required
              ></textarea>
            </div>

          </div>

          <button
            type="submit"
            className="formSubmitButton salesSubmit"
          >
            SEND SALES INQUIRY →
          </button>

        </form>

      </section>

      {/* BOTTOM CTA */}
      <section className="supportBottomCTA">

        <span>NEXIX NX</span>

        <h2>
          Printing technology.
          <strong> Human support.</strong>
        </h2>

        <p>
          From machine installation to production,
          our team is here when you need us.
        </p>

        <div className="supportCTAStats">
          <div>
            <strong>24/7</strong>
            <span>Technical Support</span>
          </div>

          <div>
            <strong>40+</strong>
            <span>Expert Engineers</span>
          </div>

          <div>
            <strong>900+</strong>
            <span>Machines Installed</span>
          </div>
        </div>

      </section>

    </main>
  );
}