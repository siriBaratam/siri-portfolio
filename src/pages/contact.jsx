import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .send(
        "service_ed58zop",
        "template_4kwbgzw",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "lByzLfWZQegWOX7ze"
      )
      .then(() => {
        setSuccessMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        // Auto-hide alert after 4 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-[#05050f] via-[#0b0b1f] to-[#05050f] py-24">
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
              Please use this form to share your feedback, inquiries, or
              collaboration requests. I will respond at the earliest.
            </p>
            <div className="space-y-4 text-gray-400">
              <p>📧 siribaratam151@gmail.com</p>
              <p>📍 Srikakulam, India</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-3xl border border-indigo-500/10 bg-[#0b0b1f]/70 p-8 transition hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full rounded-xl border px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none ${
                    errors.name
                      ? "border-red-400 bg-[#111827]"
                      : "border-indigo-500/10 bg-[#111827] focus:border-indigo-500"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.example@gmail.com"
                  className={`w-full rounded-xl border px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none ${
                    errors.email
                      ? "border-red-400 bg-[#111827]"
                      : "border-indigo-500/10 bg-[#111827] focus:border-indigo-500"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Message */}
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
                  className={`w-full rounded-xl border px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none ${
                    errors.message
                      ? "border-red-400 bg-[#111827]"
                      : "border-indigo-500/10 bg-[#111827] focus:border-indigo-500"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-500 py-3 font-medium text-white transition hover:bg-indigo-600 cursor-pointer"
              >
                Send Message
              </button>

              {/* Success Alert */}
              {successMessage && (
                <p className="mt-3 text-sm text-green-400">
                  {successMessage}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
