/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // themeColor: "#1f7cf5",
        themeColor: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      keyframes: {
        move1: {
          "0%": { left: "340px", bottom: "186px" },
          "50%": { left: "270px", bottom: "130px" },
          "100%": { left: "186px", bottom: "186px" },
        },
        move2: {
          "0%": { left: "186px", bottom: "186px" },
          "50%": { left: "270px", bottom: "186px" },
          "100%": { left: "340px", bottom: "186px" },
        },
        move3: {
          "0%": { right: "0px", top: "0px" },
          "50%": { right: "15px", top: "30px" },
          "75%": { right: "-15px", top: "30px" },
          "100%": { right: "0px", top: "0px" },
        },
        move4: {
          "0%": { right: "50%", top: "30px" },
          "100%": { right: "40%", top: "-30px" },
        },
        move5: {
          "0%": { right: "0px", bottom: "-5px" },
          "50%": { right: "-15px", bottom: "30px" },
          "100%": { right: "0px", bottom: "-5px" },
        },
        move6: {
          "0%": { left: "0px", top: "5px" },
          "50%": { left: "-25px", top: "20px" },
          "100%": { left: "25px", top: "20px" },
        },

        move7: {
          "0%": { left: "-15px", bottom: "-35px" },
          "100%": { left: "10px", bottom: "-35px" },
        },
      },
      animation: {
        move1: "move1 4s ease-in-out infinite alternate",
        move2: "move2 4s ease-in-out infinite alternate",
        move3: "move3 ease-in-out 4s infinite alternate",
        move4: "move4 ease-in-out 3s infinite alternate-reverse",
        move5: "move5 ease-in-out 4s infinite alternate",
        move6: "move6 ease-in-out 8s infinite alternate",
        move7: "move7 ease-in-out 4s infinite alternate",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
