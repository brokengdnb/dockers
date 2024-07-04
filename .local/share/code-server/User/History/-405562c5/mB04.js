module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/'
      : '//@geenloop/docker-test.main/apps/code-server/proxy/3001/'
  }