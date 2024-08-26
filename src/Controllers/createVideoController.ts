import {db} from "../DB/db";
import {videoValidation} from "./videoValidationController";
import {newVideoType, VideoType} from "../Types/videosTypes";
import {findVideoById} from "./findVideoById";

const generateUniqId = () => {
    let NewIDofVideo;
    let existingID = db.CurrentExistingVideos.map(obj => obj.id)

    do {
        NewIDofVideo = Math.floor(Math.random()*10000)
    }while(existingID.includes(NewIDofVideo))
    return NewIDofVideo
}
export const createVideo = (someVideo:newVideoType) => {

    const isVideoValid = videoValidation(someVideo)


    if (isVideoValid) {

        function getRandomBoolean() {
            return Math.random() < 0.5;
        }

        const ageGeneration: number = Math.floor(Math.random() * 19)

        const newVideo:VideoType = {
            "id": generateUniqId(),
            "title": someVideo.title,
            "author": someVideo.author,
            "canBeDownloaded": getRandomBoolean(),
            "minAgeRestriction": ageGeneration,
            "createdAt": new Date().toISOString(),
            "publicationDate": new Date().toISOString(),
            "availableResolutions": someVideo.availableResolutions
        }
        db.CurrentExistingVideos.push(newVideo)
        return newVideo
    }else return false
}