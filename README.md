# Brandfinity

Marketing and brand solutions website.

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development

Requirements: Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
# Install dependencies
npm i

# Start the development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## SSL / HTTPS

**Production**  
Use your host’s SSL/HTTPS (e.g. Vercel, Netlify). Enable “Enforce HTTPS” in your domain settings if you use a custom domain.

**Local development with HTTPS**

- **Mac/Linux:** `VITE_HTTPS=true npm run dev`
- **Windows (PowerShell):** `$env:VITE_HTTPS="true"; npm run dev`
- **Windows (CMD):** `set VITE_HTTPS=true && npm run dev`

Then open `https://localhost:8080`. Accept the self-signed certificate warning in the browser if prompted.

## Deploy

Build the app with `npm run build` and deploy the `dist` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).
