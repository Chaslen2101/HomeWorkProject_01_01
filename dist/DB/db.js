"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolutions = exports.db = exports.httpStatus = void 0;
exports.httpStatus = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,
    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 404,
};
exports.db = {
    CurrentExistingVideos: [{
            id: 0,
            title: '1234',
            author: 'fww',
            canBeDownloaded: true,
            minAgeRestriction: 18,
            createdAt: '2024-08-25T17:18:23.201Z',
            publicationDate: '2024-08-25T17:18:23.201Z',
            availableResolutions: ['P144', 'P240', 'P360', 'P480']
        }],
    Errors: []
};
// export const CurrentExistingVideos: VideoType[] = []
// export const Errors: OutputErrorType[] = []
exports.Resolutions = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'];
