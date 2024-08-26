"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoValidation = void 0;
const db_1 = require("../DB/db");
const videoValidation = (someVideo) => {
    if (someVideo === null) {
        const error = {
            "message": "Error_404. Invalid data",
            "field": "Empty request"
        };
        db_1.db.Errors.push(error);
        return false;
    }
    else if (typeof someVideo !== "object") {
        const error = {
            "message": "Error_404. Invalid data",
            "field": "Data is not object"
        };
        db_1.db.Errors.push(error);
        return false;
    }
    else if (typeof someVideo.title !== "string") {
        const error = {
            "message": "Error_400. Invalid data",
            "field": "title should be string"
        };
        db_1.db.Errors.push(error);
        return false;
    }
    else if (typeof someVideo.author !== "string") {
        const error = {
            "message": "Error_400. Invalid data",
            "field": "author should be string"
        };
        db_1.db.Errors.push(error);
        return false;
    }
    else if (!Array.isArray(someVideo.availableResolutions)) {
        const error = {
            "message": "Error_400. Invalid data",
            "field": "availableResolutions is not Array"
        };
        db_1.db.Errors.push(error);
        return false;
    }
    else if (!someVideo.availableResolutions.every((resolution) => db_1.Resolutions.includes(resolution))) {
        const error = {
            "message": "Error_400. Invalid data",
            "field": "invalid availableResolutions"
        };
        db_1.db.Errors.push(error);
        return false;
    }
    else {
        return true;
    }
};
exports.videoValidation = videoValidation;
