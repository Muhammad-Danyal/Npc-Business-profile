/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins']
      }
    } ,
    colors: {
      'blackbg': '#272727',
      'yellow' : '#FF9900' ,
      'orange' : '#EF401F' ,
      'black' : '#000' ,
      'white' : '#fff' ,
    },
  },
  plugins: [],
}

