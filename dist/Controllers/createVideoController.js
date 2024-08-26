"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideo = void 0;
const db_1 = require("../DB/db");
const videoValidationController_1 = require("./videoValidationController");
const generateUniqId = () => {
    let NewIDofVideo;
    let existingID = db_1.db.CurrentExistingVideos.map(obj => obj.id);
    do {
        NewIDofVideo = Math.floor(Math.random() * 10000);
    } while (existingID.includes(NewIDofVideo));
    return NewIDofVideo;
};
const createVideo = (someVideo) => {
    const isVideoValid = (0, videoValidationController_1.videoValidation)(someVideo);
    if (isVideoValid) {
        function getRandomBoolean() {
            return Math.random() < 0.5;
        }
        const ageGeneration = Math.floor(Math.random() * 19);
        const newVideo = {
            "id": generateUniqId(),
            "title": someVideo.title,
            "author": someVideo.author,
            "canBeDownloaded": getRandomBoolean(),
            "minAgeRestriction": ageGeneration,
            "createdAt": new Date().toISOString(),
            "publicationDate": new Date().toISOString(),
            "availableResolutions": someVideo.availableResolutions
        };
        db_1.db.CurrentExistingVideos.push(newVideo);
        return newVideo;
    }
    else
        return false;
};
exports.createVideo = createVideo;
