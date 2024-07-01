import express from "express"
import cors from "cors"
const app = express();

// Parser
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: 'Hello World!'
  })
})

export default app

