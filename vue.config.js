export const devServer = {
    proxy: {
        '/api': {
            target: 'http://localhost:3300',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
};