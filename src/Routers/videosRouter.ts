import {Router} from "express";
import {Request, Response} from "express";
import {newVideoType, VideoType} from "../Types/videosTypes";
import {db, httpStatus} from "../DB/db";
import {findVideoById} from "../Controllers/findVideoById";
import {UpdateVideo} from "../Controllers/UpdateVideoController";
import {DeleteVideoController} from "../Controllers/DeleteVideoController";
import {createVideo} from "../Controllers/createVideoController";
import {clearErrorData} from "../Controllers/clearDataControllers";


export const VideosRouter = Router({})

VideosRouter.get('/', (req: Request, res: Response<VideoType[]>) => {
    res
        .status(httpStatus.OK_200)
        .json(db.CurrentExistingVideos);
})

VideosRouter.post("/", (req: Request<{}, {}, newVideoType>, res: Response) => {
    const newCreatedVideo = createVideo(req.body)
    if (!newCreatedVideo) {
        res
            .status(httpStatus.BAD_REQUEST_400)
            .json(db.Errors)
        clearErrorData()
    }else {
        res
            .status(httpStatus.CREATED_201)
            .json(newCreatedVideo)
    }
})

VideosRouter.get("/:id", (req: Request, res: Response) => {

    const videoID = Number(req.params.id)
    const yourVideo = findVideoById(videoID)


    if (yourVideo)
    {
        res
            .status(httpStatus.OK_200)
            .json(yourVideo)
    }else {
        res
            .status(httpStatus.NOT_FOUND_404)
            .send()
    }
})

VideosRouter.put("/:id", (req: Request, res: Response) => {
    const videoID = Number(req.params.id)
    const UpdatedVideo = UpdateVideo(req.body, videoID)

    if (UpdatedVideo === "Incorrect Data") {
        res
            .status(httpStatus.BAD_REQUEST_400)
            .json(db.Errors)
        clearErrorData()
    }else if (UpdatedVideo === "Incorrect ID") {
        res
            .status(httpStatus.NOT_FOUND_404)
            .send()
    }else {
        res
            .status(httpStatus.NO_CONTENT_204)
            .send()
    }
})

VideosRouter.delete("/:id", (req: Request, res: Response) => {

    const idOfVideo = Number(req.params.id)
    const isVideoDeleted = DeleteVideoController(idOfVideo)

    if (isVideoDeleted) {
        res
            .status(204)
            .send()
    }else {
        res
            .status(404)
            .send()
    }
})
