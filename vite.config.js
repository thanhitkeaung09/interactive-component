const { resolve } = require('path')

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                thank: resolve(__dirname, 'thank.html')
            }
        }
    }
}