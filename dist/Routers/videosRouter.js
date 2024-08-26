"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosRouter = void 0;
const express_1 = require("express");
const db_1 = require("../DB/db");
const findVideoById_1 = require("../Controllers/findVideoById");
const UpdateVideoController_1 = require("../Controllers/UpdateVideoController");
const DeleteVideoController_1 = require("../Controllers/DeleteVideoController");
const createVideoController_1 = require("../Controllers/createVideoController");
const clearDataControllers_1 = require("../Controllers/clearDataControllers");
exports.VideosRouter = (0, express_1.Router)({});
exports.VideosRouter.get('/', (req, res) => {
    res
        .status(db_1.httpStatus.OK_200)
        .json(db_1.db.CurrentExistingVideos);
});
exports.VideosRouter.post("/", (req, res) => {
    const newCreatedVideo = (0, createVideoController_1.createVideo)(req.body);
    if (!newCreatedVideo) {
        res
            .status(400)
            .json(db_1.db.Errors);
        (0, clearDataControllers_1.clearErrorData)();
    }
    else {
        res
            .status(201)
            .json(newCreatedVideo);
    }
});
exports.VideosRouter.get("/:id", (req, res) => {
    const videoID = Number(req.params.id);
    const yourVideo = (0, findVideoById_1.findVideoById)(videoID);
    if (yourVideo) {
        res
            .status(db_1.httpStatus.OK_200)
            .json(yourVideo);
    }
    else {
        res
            .status(db_1.httpStatus.BAD_REQUEST_400)
            .send();
    }
});
exports.VideosRouter.put("/:id", (req, res) => {
    const videoID = Number(req.params.id);
    const UpdatedVideo = (0, UpdateVideoController_1.UpdateVideo)(req.body, videoID);
    if (UpdatedVideo === "Incorrect Data") {
        res
            .status(db_1.httpStatus.BAD_REQUEST_400)
            .json(db_1.db.Errors);
        (0, clearDataControllers_1.clearErrorData)();
    }
    else if (UpdatedVideo === "Incorrect ID") {
        res
            .status(db_1.httpStatus.NOT_FOUND_404)
            .send();
    }
    else {
        res
            .status(db_1.httpStatus.OK_200)
            .json(UpdatedVideo);
    }
});
exports.VideosRouter.delete("/:id", (req, res) => {
    const idOfVideo = Number(req.params.id);
    const isVideoDeleted = (0, DeleteVideoController_1.DeleteVideoController)(idOfVideo);
    if (isVideoDeleted) {
        res
            .status(204)
            .send();
    }
    else {
        res
            .status(404)
            .send();
    }
});
