/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ This line enables manual dark mode toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Ensures all components are scanned for classes
  ],
  theme: {
    extend: {}, // You can extend the default Tailwind theme here
  },
  plugins: [], // Add Tailwind plugins if needed
};
