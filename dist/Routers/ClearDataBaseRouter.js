"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBClear = void 0;
const express_1 = require("express");
const db_1 = require("../DB/db");
const clearDataControllers_1 = require("../Controllers/clearDataControllers");
exports.DBClear = (0, express_1.Router)({});
exports.DBClear.delete("/", (req, res) => {
    (0, clearDataControllers_1.clearAlldata)();
    res
        .status(db_1.httpStatus.NO_CONTENT_204)
        .json(db_1.db.CurrentExistingVideos);
});
