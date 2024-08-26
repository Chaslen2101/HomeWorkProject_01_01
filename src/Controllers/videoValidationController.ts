import {newVideoType, OutputErrorType} from "../Types/videosTypes";
import {db, Resolutions} from "../DB/db";

export const videoValidation= (someVideo: any) => {
    if (someVideo === null) {
        const error: OutputErrorType = {
            "message": "Error_404. Invalid data",
            "field": "Empty request"
        }
        db.Errors.push(error)
        return false
    }else if (typeof someVideo !== "object") {
        const error: OutputErrorType = {
            "message": "Error_404. Invalid data",
            "field": "Data is not object"
        }
        db.Errors.push(error)
        return false
    }else if (typeof someVideo.title !== "string") {
        const error: OutputErrorType = {
            "message": "Error_400. Invalid data",
            "field": "title should be string"
    }
        db.Errors.push(error)
        return false
    }else if (typeof someVideo.author !== "string") {
        const error: OutputErrorType = {
            "message": "Error_400. Invalid data",
            "field": "author should be string"
        }
        db.Errors.push(error)
        return false
    }else if (!Array.isArray(someVideo.availableResolutions)) {
        const error: OutputErrorType = {
            "message": "Error_400. Invalid data",
            "field": "availableResolutions is not Array"
        }
        db.Errors.push(error)
        return false
    }else if (!someVideo.availableResolutions.every((resolution: string) => Resolutions.includes(resolution))) {
        const error: OutputErrorType = {
            "message": "Error_400. Invalid data",
            "field": "invalid availableResolutions"
        }
        db.Errors.push(error)
        return false
    }else {
        return true
    }
}
