import { Express, Request, Response } from "express";
import { Service } from "../models/service.mode"

export class ServiceController {

    constructor(app: Express) {
        app.get("/services/all", this.getServices.bind(this));
    }
    
    public async getServices(req: Request, res: Response) {
        const data = await Service.find({}).lean();
        res.send(data);
    }
}