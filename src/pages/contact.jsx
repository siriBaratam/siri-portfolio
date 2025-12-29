import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can connect EmailJS / API here
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#05050f] via-[#0b0b1f] to-[#05050f] py-24">
      <h2 className="mb-10 text-center text-3xl font-bold text-indigo-400 sm:text-4xl">
          Contact Me
        </h2>
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="text-left">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Get In Touch
            </h3>

            <p className="mb-10 max-w-md text-gray-400">
              Please use the form to share your feedback, inquiries, or collaboration requests. I will respond at the earliest.
            </p>

            <div className="space-y-4 text-gray-400">
              <p>📧 siribaratam151@gmail.com</p>
              <p>📍 Srikakulam, India</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-3xl border border-indigo-500/10 bg-[#0b0b1f]/70 p-8">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-indigo-500/10 bg-[#111827] px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.example@gmail.com"
                  required
                  className="w-full rounded-xl border border-indigo-500/10 bg-[#111827] px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me..."
                  required
                  className="w-full rounded-xl border border-indigo-500/10 bg-[#111827] px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-500 py-3 font-medium text-white transition hover:bg-indigo-600"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
