import {Router} from "express";
import {Request, Response} from "express";
import {db, httpStatus} from "../DB/db";
import {clearAlldata} from "../Controllers/clearDataControllers";

export const DBClear = Router({})

DBClear.delete("/",(req:Request,res:Response) => {

    clearAlldata()

    res
        .status(httpStatus.NO_CONTENT_204)
        .json(db.CurrentExistingVideos)
})
