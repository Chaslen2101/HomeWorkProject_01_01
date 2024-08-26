import {VideoType} from "../Types/videosTypes";
import {db} from "../DB/db";

export const findVideoById = (id: number) => {
    return db.CurrentExistingVideos.find((video: VideoType) => video.id === id )
};