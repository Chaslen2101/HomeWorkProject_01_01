import {OutputErrorType2} from "../Types/videosTypes";
import {db, Resolutions} from "../DB/db";



export const videoValidation = (someVideo: any) => {

    let someErrors = true
    const keysOfNewVideo = Object.keys(someVideo)

    console.log("Проверка видео на наличие")
    if (someVideo === null) {
        const error: OutputErrorType2 =
            {

                message: "Any<String>",
                field: "Empty request"

            }

        db.Errors.errorsMessages.push(error)
        someErrors = false
    }
    console.log('Проверка видео на тип "Обьект"')
    if (typeof someVideo !== "object") {
        const error: OutputErrorType2 =
            {

                message: "Any<String>",
                field: "Data is not object"

            }

        db.Errors.errorsMessages.push(error)
        someErrors = false
    }
    if (keysOfNewVideo.find(key => key === "title")) {
        console.log("Testing title = string")
        if (typeof someVideo.title !== "string" || someVideo.title.length > 40) {
            const error: OutputErrorType2 =
                {

                    message: "Any<String>",
                    field: "title"

                }

            db.Errors.errorsMessages.push(error)
            someErrors = false
        }
    }
    if (keysOfNewVideo.find(key => key === "author")) {
        console.log("testing author = string")
        if (typeof someVideo.author !== "string" || someVideo.author.length > 20) {
            const error: OutputErrorType2 =
                {

                    message: "Any<String>",
                    field: "author"

                }

            db.Errors.errorsMessages.push(error)
            someErrors = false
        }
    }
    if (keysOfNewVideo.find(key => key === "availableResolutions")) {
        console.log('Testing availableRes = Array')
        if (!Array.isArray(someVideo.availableResolutions)) {
            const error: OutputErrorType2 =
                {

                    message: "Any<String>",
                    field: "availableResolutions"

                }

            db.Errors.errorsMessages.push(error)
            someErrors = false
        }

        console.log("Testing availableRes = true Resolutions")
        if (!someVideo.availableResolutions.every((resolution: string) => Resolutions.includes(resolution))) {
            const error: OutputErrorType2 = {

                message: "Any<String>",
                field: "availableResolutions"

            }

            db.Errors.errorsMessages.push(error)
            someErrors = false
        }
    }
    if (keysOfNewVideo.find(key => key === "canBeDownloaded")) {
        console.log("Testing canBeDownloaded to be Boolean")
        if (typeof someVideo.canBeDownloaded !== "boolean") {
            const error: OutputErrorType2 = {

                message: "Any<String>",
                field: "canBeDownloaded"

            }

            db.Errors.errorsMessages.push(error)
            someErrors = false
        }
    }
    if (keysOfNewVideo.find(key => key === "minAgeRestriction")) {
        console.log ("Testing minAgeRestriction to be null or number")
        if (typeof someVideo.minAgeRestriction !== null && typeof someVideo.minAgeRestriction !== "number" && someVideo.minAgeRestriction < 1 && someVideo.minAgeRestriction > 18) {

            const error: OutputErrorType2 = {

                message: "Any<String>",
                field: "minAgeRestriction"

            }

            db.Errors.errorsMessages.push(error)
            someErrors = false
            console.log("Error of minAge exist")
        }
    }
    return someErrors;
}
