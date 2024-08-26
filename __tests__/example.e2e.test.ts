import {agent} from "supertest";
import {app} from "../src/settings";


describe('/hometask_01/api/videos', () => {

    it('should return all existed videos', async () => {
        await agent(app)
            .get('/videos')
            .expect(200)
    });

    it('should return all videos + new video and 201', async () => {
        await agent(app)
            .post('/videos')
            .send({
                title: '1234',
                author: "fewww",
                availableResolutions: ["P144", "P240", "P360", "P480"]
            })
            .expect(201)
    });

    it('shouldnt return new video', async () => {
        await agent(app)
            .post('/videos')
            .send({
                "title": '1234',
                "author": 12,
                "availableResolutions": ["P144", "P240", "P360", "P480"]
            })
            .expect(400)
    });

    it('shouldnt return new video', async () => {
        await agent(app)
            .post('/videos')
            .send({
                "title": '1234',
                "author": "554444",
                "availableResolutions": ["P166", "P240", "P360", "P480"]
            })
            .expect(400)
    });

    it('should return all existed videos', async () => {
        await agent(app)
            .get('/videos')
            .expect(200)
    });

    it('shouldnt update video casue of incorrect ID', async () => {
        await agent(app)
            .put("/videos/5")
            .send({
                title: "Cheers",
                author: "Updated Video",
                availableResolutions: ['P1080', 'P1440', 'P2160'],
                canBeDownloaded: false
            })
            .expect(404)
    })
})

describe("/all-data",() => {

    it('should clear all data and sendback empty array', async () => {

            await agent(app)
                .delete("/testing/all-data")
                .expect(204)
    });
})
