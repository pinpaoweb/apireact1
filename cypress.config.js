const { defineConfig } = require("cypress");
require('dotenv').config();

if (!process.env.VITE_API_URL) {
  throw new Error("Falta la variable de entorno VITE_API_URL");
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los event listeners de Node aquí
    },
    env: {
      apiUrl: `${process.env.VITE_API_URL}/api/auth/login`
    },
  },
});
