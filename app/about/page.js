export default function AboutPage() {
  return (
    <main className="min-h-screen p-6 pt-24 max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6">About VBEATS</h1>

      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        VBEATS is a next-generation editing platform built for Gen-Z creators.
        Whether you’re making YouTube thumbnails, Instagram edits, reels,
        remixes, or HD posters — VBEATS gives you all tools for free.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Our Mission</h2>
      <p className="text-gray-300 mb-6">
        To make professional-level editing accessible to everyone — fast,
        powerful, and completely free.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Why VBEATS?</h2>
      <ul className="text-gray-300 space-y-3 text-left mx-auto max-w-md">
        <li>🎨 Photo, Video & Audio tools</li>
        <li>⚡ Super-fast & lightweight</li>
        <li>💎 Advanced Gen-Z effects</li>
        <li>🌍 Multi-language support</li>
        <li>🔥 100% Free forever</li>
      </ul>

      <p className="text-sm text-gray-500 mt-12">
        © {new Date().getFullYear()} VBEATS. All Rights Reserved.
      </p>
    </main>
  );
}
