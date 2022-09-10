import app from './config/server'
import * as dotenv from 'dotenv'

dotenv.config()

app.listen(8080, () => {
    console.log("running on 8080")
})