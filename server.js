const { https } = require('firebase-functions')
const { default: next } = require('next')

const dev = process.env.NODE_ENV !== 'production';

const app = next({
    dev: dev,
    conf: {
        distDir: ".next",
    },
})
const handle = app.getRequestHandler()

exports.nextjsFunc = https.onRequest((req, res) => {
    return app.prepare().then(() => handle(req, res))
})