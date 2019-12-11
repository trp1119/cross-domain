module.exports = {
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  devServer: {
    proxy: {
      '/queryInfo': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true
      },
    }
  }
}