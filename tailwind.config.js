module.exports = {
  mode: 'jit',
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      backgroundImage: {
        home: "url('images/home.svg')",
        about: "url('images/about.svg')",
        services: "url('images/services.svg')",

        // services
        highlights: "url('images/highlights.svg')",
        coding: "url('images/services/coding.svg')",
        design: "url('images/services/design.svg')",
        computer: "url('images/services/computer.svg')",
        drawing: "url('images/services/drawing.svg')",
        research: "url('images/services/research.svg')",
        engineering: "url('images/services/engineering.svg')",
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