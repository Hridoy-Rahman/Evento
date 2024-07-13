/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-gradient': 'linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)',
      },
    },
  },
  plugins: [],
}
