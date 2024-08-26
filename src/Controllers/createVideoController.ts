import {db} from "../DB/db";
import {videoValidation} from "./videoValidationController";
import {newVideoType, VideoType} from "../Types/videosTypes";


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

        // function getRandomBoolean() {
        //     return Math.random() < 0.5;
        // }

        // const ageGeneration: number = Math.floor(Math.random() * 19)
        const createdAt = new Date().toISOString()
        const publicationDate = new Date(createdAt)
        publicationDate.setDate(publicationDate.getDate()+1)
        const publicationDateString = publicationDate.toISOString()


        const newVideo:VideoType = {
            "id": generateUniqId(),
            "title": someVideo.title,
            "author": someVideo.author,
            "canBeDownloaded": false,
            "minAgeRestriction": null,
            "createdAt": createdAt,
            "publicationDate": publicationDateString,
            "availableResolutions": someVideo.availableResolutions
        }
        db.CurrentExistingVideos.push(newVideo)
        return newVideo
    }else return undefined
}