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
    <section id="contact" className="mt-20">
      <div className="text-center leading-10">
        <h1 className="text-4xl font-bold text-orange-400">Contact</h1>
        <p className="text-gray-400">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>

      <div className="flex justify-center items-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 border border-gray-600 rounded-lg p-7 mt-10 w-full md:w-2/4 lg:w-2/4 xl:w-1/4"
        >
          <p className="text-xl font-bold">Email Me</p>

          {/* IMPORTANT: names must match template variables */}
          <input
            className="border p-2 border-gray-600 rounded-xl h-12 placeholder:p-3"
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <input
            className="border p-2 border-gray-600 rounded-xl h-12 placeholder:px-3"
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            className="border p-2 border-gray-600 rounded-xl h-12 placeholder:p-3"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            className="border p-2 border-gray-600 rounded-xl h-36 placeholder:p-3"
            name="message"
            rows="6"
            placeholder="Message"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-2 px-5 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
