import {dbType} from "../Types/videosTypes";


export const httpStatus = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,
    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 404,
};


export const db: dbType = {
    CurrentExistingVideos: [],
    Errors: {
        errorsMessages: []
    }
}

export const Resolutions = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160']