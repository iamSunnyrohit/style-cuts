import { Express, Request, Response } from "express";
import { Stylist } from "../models/stylist.model";

export class StylistController {

    constructor(app: Express) {
        app.get("/stylists/all", this.getStylists.bind(this));
    }
    
    public async getStylists(req: Request, res: Response) {
        const data = await Stylist.find({}).lean();
        res.send(data);
    }
}