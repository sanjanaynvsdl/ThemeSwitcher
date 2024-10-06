import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['@fortawesome/fontawesome-svg-core'],
//   },
//   build: {
//     commonjsOptions: {
//       exclude: ['@fortawesome/fontawesome-svg-core'],
//     },
//   },
//   resolve: {
//     alias: {
//       'babel-plugin-macros': 'babel-plugin-macros/dist/index.js',
//       '@babel/helper-module-imports': '@babel/helper-module-imports/lib/index.js',
//     },
//   },
// })
