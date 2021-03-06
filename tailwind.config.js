/* eslint-disable global-require */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '280px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '960px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
/* eslint-enable global-require */
