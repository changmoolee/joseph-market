/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ], // 어느 컴포넌트 혹은 페이지에서 tailwind를 사용할 것인지 알려줘야함.
  theme: {
    extend: {},
  },
  plugins: [],
};
