import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_plyxsh4",
        "template_rdflusd",
        form.current,
        { publicKey: "iqYGIUzcakpU40V0_" }
      );

      form.current.reset();

      Swal.fire({
        title: "Email sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      Swal.fire({
        title: "Failed to send",
        text: err?.text || err?.message || "Check template fields & allowed domains.",
        icon: "error",
      });
    }
  };

  return (
    <section id="contact" className="mt-20 px-4 sm:px-6">
      <div className="text-center leading-10">
        <h1 className="theme-section-title text-4xl font-bold">Contact</h1>
        <p className="theme-section-copy">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>

      <div className="flex items-center justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="theme-card mt-10 flex w-full flex-col gap-3 rounded-lg p-7 md:w-2/4 lg:w-2/4 xl:w-1/4"
        >
          <p className="theme-card-heading text-xl font-bold">Email Me</p>

          <input
            className="theme-input h-12 rounded-xl p-2 placeholder:p-3"
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <input
            className="theme-input h-12 rounded-xl p-2 placeholder:px-3"
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            className="theme-input h-12 rounded-xl p-2 placeholder:p-3"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            className="theme-input h-36 rounded-xl p-2 placeholder:p-3"
            name="message"
            rows="6"
            placeholder="Message"
            required
          ></textarea>

          <button type="submit" className="theme-button-primary px-5 py-2">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
