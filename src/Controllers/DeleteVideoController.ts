import {findVideoById} from "./findVideoById";
import {db} from "../DB/db";

export const DeleteVideoController = (id: number) => {
    const neededVideo = findVideoById(id)
    if(neededVideo) {
        const IndexOfVideo = db.CurrentExistingVideos.indexOf(neededVideo)
        db.CurrentExistingVideos.splice(IndexOfVideo,1)
        return true
    }else return false
}