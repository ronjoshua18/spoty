/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        blue:'#1d75de',
        dark:'#000000',
        light:'#ffffff',
        green:'#056952',
        sec_light:'#C5F0C9',
        gray:'#919496',
      }
    },
    // container:{
    //   center:true,
    //   padding:'15px',
      
    // }
  },
  plugins: [],
}
