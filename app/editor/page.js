export default function Editor() {
  return (
    <main className="min-h-screen p-6 pt-24 text-center">
      <h1 className="text-4xl font-bold mb-4">VBEATS Editor</h1>

      <p className="text-lg text-gray-300 mb-8">
        Upload your photo or video and start editing — Gen-Z advanced tools coming soon.
      </p>

      <div className="border-2 border-gray-600 border-dashed rounded-xl p-10 max-w-xl mx-auto">
        <input
          type="file"
          accept="image/*,video/*"
          className="p-4 bg-black text-gray-300 cursor-pointer"
        />
      </div>
    </main>
  );
}
