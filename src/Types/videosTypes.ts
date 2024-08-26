export type VideoType = {
    "id": number,
    "title": string,
    "author": string,
    "canBeDownloaded": boolean,
    "minAgeRestriction": null,
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
export type OutputErrorType1 = {

    errorsMessages: Array<OutputErrorType2>
}

export type OutputErrorType2 = {
        message : string,
        field: string
};

export type dbType = {

    CurrentExistingVideos: Array<VideoType>,
    Errors: OutputErrorType1

}