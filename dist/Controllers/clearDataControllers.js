"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAlldata = exports.clearErrorData = void 0;
const db_1 = require("../DB/db");
const clearErrorData = () => {
    db_1.db.Errors = [];
};
exports.clearErrorData = clearErrorData;
const clearAlldata = () => {
    db_1.db.Errors = [];
    db_1.db.CurrentExistingVideos = [];
};
exports.clearAlldata = clearAlldata;
