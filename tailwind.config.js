/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode: 'class',
    theme: {
    extend: {
      backgroundImage: (theme) => ({
        'code': "url('./assets/bg-desktop-light.jpg')",
        'light-code':"url('./assets/bg-desktop-dark.jpg')" ,
       })
    },
  },
  plugins: [],
}

