const app = require('./App')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const port = process.env.RUNNING_PORT || 8080

app.listen(port, () => {
    console.log("Server is Runnin on port 8080")
})
