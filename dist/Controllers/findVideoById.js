"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findVideoById = void 0;
const db_1 = require("../DB/db");
const findVideoById = (id) => {
    return db_1.db.CurrentExistingVideos.find((video) => video.id === id);
};
exports.findVideoById = findVideoById;
