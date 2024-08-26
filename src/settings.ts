import bodyParser from "body-parser"
import express from "express"
import {VideosRouter} from "./Routers/videosRouter";
import {DBClear} from "./Routers/ClearDataBaseRouter";
import {mainPageRouter} from "./Routers/mainPage";
export const app = express()

app.use(bodyParser.json())
app.use('/', mainPageRouter)
app.use('/testing/all-data', DBClear)
app.use('/videos', VideosRouter)



