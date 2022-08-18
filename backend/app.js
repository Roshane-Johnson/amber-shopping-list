require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const ip = require('ip')
const PORT = process.env.PORT || 8080
const NAME = process.env.NAME || 'shopping-list'

/* Middlewares */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors([process.env.FRONTEND_URL, process.env.PRODUCTION ? undefined : '*', '*']))

/* Routers */
const indexRouter = require('./routes/index.routes')
const itemRouter = require('./routes/item.routes')
const categoryRouter = require('./routes/category.routes')
const { DevLog } = require('./lib/helpers')

app.use('/', indexRouter)
app.use('/item', itemRouter)
app.use('/category', categoryRouter)

/* Start Express App */
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(
				`\r==========================================================\n
				\r\t[*] Endpoints for \x1b[34m${NAME}\x1b[0m are available [*]\n
				\r\t[*] Local: \x1b[4m\x1b[32mhttp://localhost:${PORT}\x1b[0m\r
				\r\t[*] Your Network: \x1b[4m\x1b[32m${`http://${ip.address()}`}:${PORT}\x1b[0m\r
				\r\t[*] MongoDB URI: ${process.env.MONGODB_URI}\r
				\r\n==========================================================`
			)
		})
	})
	.catch((err) => {
		console.log('[!] Failed to connect MongoDB')
		DevLog(err)
	})
