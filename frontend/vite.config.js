export default {
  server: {
    proxy: {
      '/login': 'http://localhost:3000'
    }
  }
}
