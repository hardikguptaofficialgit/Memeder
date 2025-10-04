import { Button } from '../components/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-zinc-900 mb-4">
            Swipe Right for Laughs
          </h1>
          <p className="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto">
            Discover, rate, and enjoy the best memes on the internet.
            Swipe right to like, left to pass.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Placeholder for Meme Cards */}
        <div className="mt-20">
          <div className="max-w-md mx-auto border border-zinc-200 rounded-lg p-8 text-center bg-zinc-50">
            <div className="text-6xl mb-4">🎭</div>
            <h3 className="text-lg font-medium text-zinc-900 mb-2">
              Meme cards will appear here
            </h3>
            <p className="text-zinc-600">
              Contributors can implement the swipeable meme card component
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-3">👆</div>
            <h3 className="text-lg font-medium text-zinc-900 mb-2">Easy Swiping</h3>
            <p className="text-zinc-600">Swipe right to like, left to pass</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="text-lg font-medium text-zinc-900 mb-2">Save Favorites</h3>
            <p className="text-zinc-600">Build your personal meme collection</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-medium text-zinc-900 mb-2">Fast & Fun</h3>
            <p className="text-zinc-600">Smooth animations and responsive design</p>
          </div>
        </div>
      </div>
    </div>
  )
}
