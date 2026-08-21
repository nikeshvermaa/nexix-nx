"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function QuotePage() {
  const searchParams = useSearchParams();
  const machineFromUrl = searchParams.get("machine") || "";

  const [machine, setMachine] = useState(machineFromUrl);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <a
            href="/"
            className="text-sm font-bold tracking-wide text-cyan-400 hover:text-white transition"
          >
            ← BACK TO HOME
          </a>

          <div className="mt-10 text-center">
            <p className="text-cyan-400 tracking-[0.35em] text-sm font-bold">
              LET&apos;S WORK TOGETHER
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-4">
              Get a <span className="text-cyan-400">Quote.</span>
            </h1>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
              Tell us about your printing requirements and our team will
              contact you with the right machine configuration and pricing.
            </p>
          </div>
        </div>

        {/* FORM */}
        <form className="bg-[#080d17] border border-gray-800 rounded-3xl p-6 md:p-10">

          {/* CUSTOMER DETAILS */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Customer Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  WhatsApp / Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Your city"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Your country"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                />
              </div>

            </div>
          </section>

          {/* MACHINE REQUIREMENTS */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              Machine Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {/* MACHINE TYPE */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Machine Type *
                </label>

                <select
                  required
                  defaultValue={
                    machineFromUrl.startsWith("NX-SUB")
                      ? "Sublimation Printer"
                      : ""
                  }
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                >
                  <option value="">Select machine type</option>
                  <option>Sublimation Printer</option>
                  <option>Direct to Fabric Printer</option>
                  <option>UV Printer</option>
                  <option>Solvent Printer</option>
                  <option>Eco Solvent Printer</option>
                  <option>Other</option>
                </select>
              </div>

              {/* INTERESTED MACHINE */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Interested Machine
                </label>

                <select
                  value={machine}
                  onChange={(e) => setMachine(e.target.value)}
                  className="w-full bg-black border border-cyan-500 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                >
                  <option value="">Select machine</option>
                  <option value="NX-SUB-01">NEXIX NX-SUB 01</option>
                  <option value="NX-SUB-02">NEXIX NX-SUB 02</option>
                  <option value="Not Sure">
                    Not Sure / Need Recommendation
                  </option>
                </select>

                {machine && machine !== "Not Sure" && (
                  <p className="text-cyan-400 text-xs mt-2">
                    ✓ Machine selected automatically from your enquiry.
                  </p>
                )}
              </div>

              {/* PRINTHEAD */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Printhead Configuration
                </label>

                <select className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400">
                  <option value="">Select configuration</option>
                  <option>4 Printheads</option>
                  <option>8 Printheads</option>
                  <option>12 Printheads</option>
                  <option>16 Printheads</option>
                  <option>20 Printheads</option>
                  <option>24 Printheads</option>
                  <option>Need Recommendation</option>
                </select>
              </div>

              {/* COLOUR */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Colour Configuration
                </label>

                <select className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400">
                  <option value="">Select colour configuration</option>
                  <option>4 Colour</option>
                  <option>6 Colour</option>
                  <option>Special Colours</option>
                  <option>Need Recommendation</option>
                </select>
              </div>

              {/* INK SELECTION */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Ink Selection
                </label>

                <select className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400">
                  <option value="">Select ink</option>
                  <option>NEXIX NX Sublimation Ink</option>
                  <option>NEXIX NX Reactive Ink</option>
                  <option>NEXIX NX Pigment Ink</option>
                  <option>NEXIX NX Disperse Ink</option>
                  <option>NEXIX NX DTF Ink</option>
                  <option>NEXIX NX Solvent Ink</option>
                  <option>NEXIX NX Eco Solvent Ink</option>
                  <option>Other / Need Recommendation</option>
                </select>
              </div>

              {/* PRODUCTION */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Expected Production
                </label>

                <input
                  type="text"
                  placeholder="e.g. 500 linear m/day"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              {/* QUANTITY */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Quantity Required
                </label>

                <input
                  type="number"
                  min="1"
                  placeholder="Number of machines"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                />
              </div>

            </div>
          </section>

          {/* MESSAGE */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              Your Requirement
            </h2>

            <textarea
              rows={6}
              placeholder="Tell us about your printing requirements..."
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400 resize-none"
            />
          </section>

          {/* SUBMIT */}
          <div className="mt-10">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:opacity-90 transition"
            >
              REQUEST QUOTE →
            </button>

            <p className="text-gray-500 text-sm mt-4">
              Our team will review your requirement and contact you shortly.
            </p>
          </div>

        </form>
      </div>
    </main>
  );
}