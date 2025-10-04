export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-zinc-900 mb-6">About Memeder</h1>

        <div className="prose prose-zinc max-w-none">
          <p className="text-lg text-zinc-600 mb-6">
            Memeder is a Tinder-like application for memes where you can discover,
            rate, and enjoy the best memes on the internet.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900 mb-4 mt-8">How It Works</h2>
          <ul className="space-y-3 text-zinc-600">
            <li className="flex items-start">
              <span className="text-2xl mr-3">👆</span>
              <span>Swipe right to like memes you find funny</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">👈</span>
              <span>Swipe left to pass on memes that don't resonate</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">❤️</span>
              <span>Build your personal collection of favorite memes</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-zinc-900 mb-4 mt-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-zinc-200 rounded-lg p-4">
              <h3 className="font-medium text-zinc-900 mb-2">Frontend</h3>
              <ul className="text-sm text-zinc-600 space-y-1">
                <li>• React.js</li>
                <li>• Tailwind CSS</li>
                <li>• React Router</li>
                <li>• Vite</li>
              </ul>
            </div>
            <div className="border border-zinc-200 rounded-lg p-4">
              <h3 className="font-medium text-zinc-900 mb-2">Backend</h3>
              <ul className="text-sm text-zinc-600 space-y-1">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• MongoDB</li>
                <li>• JWT Authentication</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-zinc-900 mb-4 mt-8">Contributing</h2>
          <p className="text-zinc-600 mb-4">
            This is an open-source project and we welcome contributions!
            Whether you're fixing bugs, adding features, or improving documentation,
            your help is appreciated.
          </p>
          <a
            href="https://github.com/MLSAKIIT/Memeder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-zinc-900 hover:text-zinc-600 font-medium"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  )
}
