import { useState } from 'react'
import { Button } from '../components/Button'

export default function AddMeme() {
  const [form, setForm] = useState({
    title: '',
    imageUrl: '',
    description: '',
    tags: '', // comma separated for now (UI only)
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-zinc-900">Add Meme</h1>
        <p className="mt-2 text-zinc-600">Fill in the details below to add your meme.</p>

        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-zinc-700">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter meme title"
              className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-zinc-700">Image URL</label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/meme.jpg"
              className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-zinc-700">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              placeholder="Say something about the meme..."
              className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            />
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-zinc-700">Tags</label>
            <input
              id="tags"
              name="tags"
              type="text"
              value={form.tags}
              onChange={handleChange}
              placeholder="comma, separated, tags"
              className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            />
            <p className="mt-1 text-xs text-zinc-500">Enter tags separated by commas.</p>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <Button type="submit" disabled>
              Submit Meme
            </Button>
            <span className="text-xs text-zinc-500"></span>
          </div>
        </form>
      </div>
    </div>
  )
}
