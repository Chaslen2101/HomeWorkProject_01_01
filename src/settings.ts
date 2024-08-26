import bodyParser from "body-parser"
import express from "express"
import {VideosRouter} from "./Routers/videosRouter";
import {httpStatus} from "./DB/db";
import {DBClear} from "./Routers/ClearDataBaseRouter";
import {Request, Response} from "express";
export const app = express()


app.use(bodyParser.json())
app.use('/hometask_01/api/testing/all-data', DBClear)
app.use('/hometask_01/api/videos', VideosRouter)
app.get('/', (req: Request, res: Response) => {

    res
        .status(httpStatus.NO_CONTENT_204)
        .json("verison_01_01")

})


