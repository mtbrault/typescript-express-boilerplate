import express from 'express'
import config from './config'

const { HOST, PORT, ENVIRONMENT } = config

const app = express()
    .disable('x-powered-by')
    .use(express.json())
    .get('/toto', (_, res) => {
        res.status(200).json({ message: 'Hello world!' })
    })

if (ENVIRONMENT !== 'test') {
    app.listen(PORT, HOST, () => {
        console.log(`Server is running on http://${HOST}:${PORT}`)
    })
}

export default app