export default function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-between items-center bg-black/40 backdrop-blur-md fixed top-0 left-0 z-50">
      <h1 className="text-2xl font-bold">VBEATS</h1>

      <div className="flex gap-6 text-lg">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/editor" className="hover:text-gray-300">Editor</a>
        <a href="/about" className="hover:text-gray-300">About</a>
      </div>
    </nav>
  );
}
