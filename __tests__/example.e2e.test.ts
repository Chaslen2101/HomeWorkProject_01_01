import {agent} from "supertest";
import {app} from "../src/settings";


describe('/hometask_01/api/videos', () => {

    it('should return all existed videos', async () => {
        await agent(app)
            .get('/hometask_01/api/videos')
            .expect(200)
    });

    it('should return all videos + new video and 201', async () => {
        await agent(app)
            .post('/hometask_01/api/videos')
            .send({
                title: '1234',
                author: "fewww",
                availableResolutions: ["P144", "P240", "P360", "P480"]
            })
            .expect(201)
    });

    it('shouldnt return new video', async () => {
        await agent(app)
            .post('/hometask_01/api/videos')
            .send({
                "title": '1234',
                "author": 12,
                "availableResolutions": ["P144", "P240", "P360", "P480"]
            })
            .expect(400)
    });

    it('shouldnt return new video', async () => {
        await agent(app)
            .post('/hometask_01/api/videos')
            .send({
                "title": '1234',
                "author": "554444",
                "availableResolutions": ["P166", "P240", "P360", "P480"]
            })
            .expect(400, [{
                "message": "Error_400. Invalid data",
                "field": "invalid availableResolutions"
            }])
    });

    it('should return all existed videos', async () => {
        await agent(app)
            .get('/hometask_01/api/videos')
            .expect(200)
    });

    it('should return video by id', async () => {
        await agent(app)
            .get("/hometask_01/api/videos/0")
            .expect(200)
    });

    it('should Update video and return new video and 204', async () => {
        await agent(app)
            .put("/hometask_01/api/videos/0")
            .send({
                title: "NewVideo",
                author: "Updated Video",
                availableResolutions: ['P1080', 'P1440', 'P2160'],
                canBeDownloaded: false
            })
            .expect(200, {
                id: 0,
                title: "NewVideo",
                author: "Updated Video",
                canBeDownloaded: false,
                minAgeRestriction: 18,
                createdAt: '2024-08-25T17:18:23.201Z',
                publicationDate: '2024-08-25T17:18:23.201Z',
                availableResolutions: ['P1080', 'P1440', 'P2160']
            })

    });
    it('shouldnt update video casue of incorrect data', async () => {
        await agent(app)
            .put("/hometask_01/api/videos/0")
            .send({
                frankiwo: 12,
                author: "Updated Video",
                availableResolutions: ['P1080', 'P1440', 'P2160'],
                canBeDownloaded: false
            })
            .expect(400)
    })
    it('shouldnt update video casue of incorrect ID', async () => {
        await agent(app)
            .put("/hometask_01/api/videos/5")
            .send({
                title: "Cheers",
                author: "Updated Video",
                availableResolutions: ['P1080', 'P1440', 'P2160'],
                canBeDownloaded: false
            })
            .expect(404)
    })
    it('should delete video by id', async () => {
        await agent(app)
            .delete("/hometask_01/api/videos/0")
            .expect(204)
    });
})

describe("/all-data",() => {

    it('should clear all data and sendback empty array', async () => {
        const res =
            await agent(app)
                .delete("/hometask_01/api/testing/all-data")
                .expect(204)
        console.log(res.body)
    });
})
