"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const videosRouter_1 = require("./Routers/videosRouter");
const ClearDataBaseRouter_1 = require("./Routers/ClearDataBaseRouter");
const mainPage_1 = require("./Routers/mainPage");
exports.app = (0, express_1.default)();
exports.app.use(body_parser_1.default.json());
exports.app.use('/hometask_01/api/testing/all-data', ClearDataBaseRouter_1.DBClear);
exports.app.use('/hometask_01/api/videos', videosRouter_1.VideosRouter);
exports.app.use('/', mainPage_1.mainPageRouter);
