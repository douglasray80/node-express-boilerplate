import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({ optionSuccessStatus: 200 }))

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + 'index.html')
})

app.listen(process.env.PORT || 4000, () => {
	console.log('Server is running at http:localhost:4000')
})
