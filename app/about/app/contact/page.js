export default function ContactPage() {
  return (
    <main className="min-h-screen p-6 pt-24 max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6">Contact Us</h1>

      <p className="text-gray-300 text-lg mb-8">
        Have questions, feedback, or feature requests?  
        Reach out — we’d love to hear from you!
      </p>

      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-white/5 rounded-lg border border-white/20 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-white/5 rounded-lg border border-white/20 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-white/5 rounded-lg border border-white/20 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      <p className="text-sm text-gray-500 mt-10">
        Or email us directly at:  
        <span className="text-blue-400"> support@vbeats.com </span>
      </p>
    </main>
  );
}
