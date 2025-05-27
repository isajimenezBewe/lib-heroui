// Si usas Vite
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    // otros addons...
  ],
  framework: {
    name: "@storybook/react-vite", // o el framework que uses
    options: {},
  },
  features: {
    postcss: false, // Desactiva el PostCSS por defecto de Storybook
  },
  viteFinal: async (config) => {
    config.css = {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    };

    return config;
  },
};
