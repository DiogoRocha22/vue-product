/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'orange': 'hsl(26, 100%, 55%)',
        'light-orange': 'hsl( 25, 100%, 94%)',
      },
      width: {
        "35%": "35%"
      },
      height: {
        "6": "6px"
      },
      fontFamily: {
        "principal": "Kumbh Sans"
      }
    },
  },
  plugins: [],
}

