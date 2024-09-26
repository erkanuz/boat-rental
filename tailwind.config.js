/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      header: [
        '56px', {
          fontWeight:'600',
        }
      ],
      sm_header: [
        '35px', {
          fontWeight:'600',
        }
      ],
      title: '36px',
      md_title: '32px',
      paragraph: '28px',
      md_paragraph: '24px',
      sm_paragraph: '20px',
      button: '22px',
      card_title: [
        '30px',
        {
          fontWeight: '500',
        }
      ],
      footer_title: [
        '21px',
        {
          fontWeight: '500',
        }
      ],
      cookie_description: '17px',
      sm_cookie_description: '13px',
    },
    extend: {
      colors: {
        base: {
          primary: 'rgb(var(--color-primary))',
          primaryDark: 'rgb(var(--color-primary-dark))',
          white: 'rgb(var(--color-white))',
          black: 'rgb(var(--color-black))',
          warning: 'rgb(var(--color-warning))',
          description: 'rgb(var(--color-description))',
          notSelect: 'rgb(var(--color-not-select))',
          social: 'rgb(var(--color-social))',
          footerBg: 'rgb(var(--color-footerBg))',
          freqHover: 'rgb(var(--color-freq-hover))',
          swiperHover: 'rgb(var(--color-swiper-hover))',
          selectHover: 'rgb(var(--color-select-hover))',
          declineMessage: 'rgb(var( --color-decline-message))',
        }
      },
    },
  },
  plugins: [],
}