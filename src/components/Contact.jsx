const Contact = () => {
  return (
    <div className="mt-10">
      <div className="text-center leading-10">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-gray-400">
        Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>
      <div className="flex justify-center items-center">
        <form className="flex flex-col gap-3 border border-gray-600 rounded-lg p-7 mt-5">
          <p className="text-xl font-bold">Email Me</p>
          <input
            className="border border-gray-600 rounded-xl h-12 placeholder:p-3"
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
          />
          <input
            className="border border-gray-600 rounded-xl h-12 placeholder:px-3"
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
          />
          <input
            className="border border-gray-600 rounded-xl h-12 placeholder:p-3"
            type="text"
            name="subject"
            id=""
            placeholder="Subject"
          />
          <textarea
            className="border border-gray-600 rounded-xl h-36 placeholder:p-3"
            name="message"
            id=""
            cols="50"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-2 px-5 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition duration-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
