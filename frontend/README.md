# Memeder 🎭

Swipe right for laughs, left for meh! Memeder is a Tinder-like application for memes where you can discover, rate, and enjoy the best memes on the internet.

## Tech Stack

- Frontend: React, React Router, Vite, Tailwind CSS
- Backend: Node.js, Express, MongoDB (Mongoose), JWT

## Getting started (quick)

Prerequisites:
- Node.js (v14+)
- npm or yarn

1. Clone the repository

```bash
git clone https://github.com/MLSAKIIT/memeder.git
cd memeder
```

2. Install and run backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your config, then:
npm run dev
```

3. Install and run frontend

```bash
cd frontend
npm install
npm run dev
```

Open the frontend at the URL Vite reports (usually http://localhost:5173).

## Project Structure

High level:

```
memeder/
├── frontend/    # React application (this README)
├── backend/     # Express API
└── README.md    # Root project README
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git switch -C feature/your-feature`
3. Make your changes, commit, and push
4. Open a Pull Request

Commit message prefixes (recommended): Add:, Fix:, Update:, Docs:

## Deployment

- Frontend: Vercel, Netlify, or similar
- Backend: Railway, Heroku, or similar

## Notes

- This frontend includes dev scripts (vite) and linting. Ensure you run `npm install` before starting.
- For production, ensure environment variables (e.g., `MONGODB_URI`, `JWT_SECRET`) are set on the server.

Happy Swiping! 🎭✨
Runs the app in development mode at [http://localhost:5173](http://localhost:5173)

### `npm run build`
Builds the app for production to the `dist` folder

### `npm run preview`
Preview the production build locally

### `npm run lint`
Runs ESLint to check code quality

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the settings
5. Click "Deploy"
