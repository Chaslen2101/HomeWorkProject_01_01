"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVideoController = void 0;
const findVideoById_1 = require("./findVideoById");
const db_1 = require("../DB/db");
const DeleteVideoController = (id) => {
    const neededVideo = (0, findVideoById_1.findVideoById)(id);
    if (neededVideo) {
        const IndexOfVideo = db_1.db.CurrentExistingVideos.indexOf(neededVideo);
        db_1.db.CurrentExistingVideos.splice(IndexOfVideo, 1);
        return true;
    }
    else
        return false;
};
exports.DeleteVideoController = DeleteVideoController;
