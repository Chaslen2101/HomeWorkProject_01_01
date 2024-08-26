import {OutputErrorType2} from "../Types/videosTypes";
import {db, Resolutions} from "../DB/db";
let someErrors = true

export const videoValidation = (someVideo: any) => {
    if (someVideo === null) {
        const error: OutputErrorType2 =
            {

            message: "Any<String>",
            field: "Empty request"

        }

        db.Errors.errorsMessages.push(error)
        someErrors = false
    }
    if (typeof someVideo !== "object") {
        const error: OutputErrorType2 =
            {

            message: "Any<String>",
            field: "Data is not object"

        }

        db.Errors.errorsMessages.push(error)
        someErrors = false
    }
    if (typeof someVideo.title !== "string" || someVideo.title.length > 40) {
        const error: OutputErrorType2 =
            {

            message: "Any<String>",
            field: "title"

        }

        db.Errors.errorsMessages.push(error)
        someErrors = false
    }
    if (typeof someVideo.author !== "string" || someVideo.author.length > 20) {
        const error: OutputErrorType2 =
            {

            message: "Any<String>",
            field: "author"

        }

        db.Errors.errorsMessages.push(error)
        someErrors = false
    }
    if (!Array.isArray(someVideo.availableResolutions)) {
        const error: OutputErrorType2 =
            {

            message: "Any<String>",
            field: "availableResolutions"

        }

        db.Errors.errorsMessages.push(error)
        someErrors = false
    }
    if (!someVideo.availableResolutions.every((resolution: string) => Resolutions.includes(resolution))) {
        const error: OutputErrorType2 = {

            message: "Any<String>",
            field: "availableResolutions"

        }

        db.Errors.errorsMessages.push(error)
        someErrors = false
    }
    return someErrors;
}
