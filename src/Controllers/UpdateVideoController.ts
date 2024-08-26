import {VideoType} from "../Types/videosTypes";
import {findVideoById} from "./findVideoById";
import {db} from "../DB/db";
import {videoValidation} from "./videoValidationController";

export const UpdateVideo = (newVideo: VideoType, idOfCurrentVideo: number) => {

    const CurrentVideo = findVideoById(idOfCurrentVideo)
    if (CurrentVideo) {
        const keysOfCurrentVideo = Object.keys(CurrentVideo)
        const keysOfNewVideo = Object.keys(newVideo)

            let hasError = false
            for (const str of keysOfNewVideo) {
                const NeededKey: string | undefined = keysOfCurrentVideo.find(keys => keys === str);

                if (NeededKey) {
                    CurrentVideo[NeededKey] = newVideo[NeededKey];
                } else {
                    db.Errors.errorsMessages.push({
                        message: "Error_404. Invalid data",
                        field: `Incorrect key: ${str}`
                    })
                    hasError = true
                }
            }
            if (hasError) {return ("Incorrect Data")}
            if (!videoValidation(CurrentVideo)) {return ("Incorrect Data")}
            return  CurrentVideo
    } else return ("Incorrect ID")
}