module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mainImage':"url('../../../public/images/Cyber.jpg')"
      }
    },
    screens: {
      xsm:'480px',
      sm:'840px',
      md:'898px',
      lg: '1178px',
      xl:'1440px',
      },
      fontFamily:{
        Poppins:['Poppins'],
        Open:['Open Sans']
      }
  },
  plugins: [],
}