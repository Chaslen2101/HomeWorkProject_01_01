import {db} from "../DB/db";

export const clearErrorData = () => {
    db.Errors = []
}

export const clearAlldata = () => {
    db.Errors = []
    db.CurrentExistingVideos = []
}