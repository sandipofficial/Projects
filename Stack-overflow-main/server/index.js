import  express  from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'

const app = express()
app.use(express.json({limit: "30mb", extended:true}))
app.use(express.urlencoded({limit: "30mb", extended:true}))
app.use(cors())

app.get('/', (req, res) =>{
    res.send("This in Stack overflow website API")
})

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)


const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://sandipgardi935:Sandip123@cluster0.lcv74bx.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL , { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server is ruunning on port ${PORT}`)}))
    .catch((err) => console.log(err.message))

// i1LFWdz8jl4RFDwg