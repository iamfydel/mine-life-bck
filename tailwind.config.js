/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'primary-color':'#F46057',
        'custom-black':'#282C4B',
        'primary-light':'#e8918836',
        'points-color':'#E89188',
        'custom-green':"#24B9A9",
        'custom-gray':'#F3F7F7',
      },
      spacing: {
        28: '7rem',
        300:'300px',
      },
      letterSpacing: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px'   
      },      
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '3rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
        '22':'22px',
        '32':'32px',
        '28':'28px',
        '26':'26px',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        normal:'0 0 15px rgba(0, 0, 0, 0.12)'
      },
      width:{
        '10':'10%',
        '12':'12%',
        '19':'19%',
        '29':'29.5%',
        '31':'31%',
        '32':'32%',
        '48':'48%',
        '500':'500px',
      },
      spacing: {
        '150':'150px',
        '260':'260px',
        '300':'300px',
      }
    },
  },
  plugins: [],
}
