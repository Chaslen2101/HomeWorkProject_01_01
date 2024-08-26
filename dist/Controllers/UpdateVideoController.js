"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVideo = void 0;
const findVideoById_1 = require("./findVideoById");
const db_1 = require("../DB/db");
const videoValidationController_1 = require("./videoValidationController");
const UpdateVideo = (newVideo, idOfCurrentVideo) => {
    const CurrentVideo = (0, findVideoById_1.findVideoById)(idOfCurrentVideo);
    if (CurrentVideo) {
        const keysOfCurrentVideo = Object.keys(CurrentVideo);
        const keysOfNewVideo = Object.keys(newVideo);
        let hasError = false;
        for (const str of keysOfNewVideo) {
            const NeededKey = keysOfCurrentVideo.find(keys => keys === str);
            if (typeof NeededKey === "string") {
                CurrentVideo[NeededKey] = newVideo[NeededKey];
            }
            else {
                db_1.db.Errors.push({
                    message: "Error_404. Invalid data",
                    field: `Incorrect key: ${str}`
                });
                hasError = true;
            }
        }
        if (hasError) {
            return ("Incorrect Data");
        }
        if (!(0, videoValidationController_1.videoValidation)(CurrentVideo)) {
            return ("Incorrect Data");
        }
        return CurrentVideo;
    }
    else
        return ("Incorrect ID");
};
exports.UpdateVideo = UpdateVideo;
