<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Akshay S G - Portfolio

This is the source code for my personal portfolio website.

## Run Locally

**Prerequisites:**  Node.js (v18 or higher recommended)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
   *(Note: The existing code references `GEMINI_API_KEY`, but Vite requires `VITE_` prefix for client-side access unless configured otherwise. Please check `services` or `constants.ts` if it uses a different convention. Based on standard Vite + React usage, `VITE_` is expected.)*

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production

To build the application for production:

```bash
npm run build
```

This will create a `dist` directory with the compiled assets.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/`: Source code
  - `components/`: React components
  - `services/`: API services
  - `constants.ts`: Constant values
  - `types.ts`: TypeScript type definitions
- `public/`: Static assets
