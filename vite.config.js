import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        weatherMap: resolve(__dirname, 'src/interactive-weather-map.html'),
        windChillCalculator: resolve(
          __dirname,
          'src/wind-chill-calculator.html'
        ),
        aboutUs: resolve(__dirname, 'src/about.html'),
        privacyPolicy: resolve(__dirname, 'src/privacy-policy.html'),
        weatherCommunity: resolve(__dirname, 'src/weather-community.html'),
      },
    },
  },
});
