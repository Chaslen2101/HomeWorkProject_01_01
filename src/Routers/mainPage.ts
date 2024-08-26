import {Request, Response, Router} from "express";
import {httpStatus} from "../DB/db";

export const mainPageRouter = Router({})

mainPageRouter.get('/', (req: Request, res: Response) => {
    res
        .status(httpStatus.OK_200)
        .json("verison_01_01")
})