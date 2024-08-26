import { app } from './settings'
import {Request, Response} from "express";
const port = process.env.PORT || 3999

app.get("/", (req: Request, res: Response) => {
    res.send(`Hello user`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
