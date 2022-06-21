module.exports = {
  mode: 'jit',
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      backgroundImage: {
        home: "url('../dist/images/home.svg')",
        about: "url('../dist/images/about.svg')",
        services: "url('../dist/images/services.svg')",

        // services
        highlights: "url('../dist/images/highlights.svg')",
        coding: "url('../dist/images/services/coding.svg')",
        design: "url('../dist/images/services/design.svg')",
        computer: "url('../dist/images/services/computer.svg')",
        drawing: "url('../dist/images/services/drawing.svg')",
        research: "url('../dist/images/services/research.svg')",
        engineering: "url('../dist/images/services/engineering.svg')",
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}