import {db} from "../DB/db";

export const clearErrorData = () => {
    db.Errors.errorsMessages = []
}

export const clearAlldata = () => {
    db.Errors.errorsMessages = []
    db.CurrentExistingVideos = []
}