# Platinum Cineplex — Frontend

A premium, responsive cinema-ticketing frontend built with Next.js App Router, React, TypeScript, and CSS.

## Requirements
- Node.js 20.9+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Included in this phase
- Premium dark cinema visual identity
- Responsive navigation and mobile menu
- City selector with demo city choices
- Movie catalogue, search, and genre filters
- Movie showtime modal and date selector
- Demo confirmation toast (no booking is persisted)
- Experience section, newsletter UI, and footer
- Sample movie data in `lib/movies.ts`

## Important
This is frontend-only. City, showtime, booking, sign-in, and newsletter interactions are demo UI and are not connected to a backend. Images are remote Unsplash images used as atmospheric placeholder artwork; replace them with properly licensed movie posters before production.

## Next steps
1. Add a dedicated movie details route.
2. Build interactive seat selection.
3. Add frontend account and booking-history screens with mock data.
4. Connect API routes and a database in a later phase.
5. Add tests and deploy.

## Project structure
```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  MovieCard.tsx
lib/
  movies.ts
```
