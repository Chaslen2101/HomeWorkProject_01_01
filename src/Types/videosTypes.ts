export type VideoType = {
    "id": number,
    "title": string,
    "author": string,
    "canBeDownloaded": boolean,
    "minAgeRestriction": number,
    "createdAt": string,
    "publicationDate": string,
    "availableResolutions": string[]
    [key: string]: any
};
export type newVideoType = {
    "title": string,
    "author": string,
    "availableResolutions": string[]
};

export type OutputErrorType = {
    "message": string,
    "field": string
};

export type dbType = {
    CurrentExistingVideos: Array<VideoType>,
    Errors: Array<OutputErrorType>
}