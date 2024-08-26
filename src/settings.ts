import bodyParser from "body-parser"
import express from "express"
import {VideosRouter} from "./Routers/videosRouter";
import {DBClear} from "./Routers/ClearDataBaseRouter";
import {mainPageRouter} from "./Routers/mainPage";
export const app = express()

app.use(bodyParser.json())
app.use('/hometask_01/api/testing/all-data', DBClear)
app.use('/hometask_01/api/videos', VideosRouter)
app.use('/', mainPageRouter)


