import { Request, Response, Express } from "express";
import { EmailService } from "../services/email.service";
import { Service } from "../models/service.mode";
import { Stylist } from "../models/stylist.model";

export class AppointmentController {
    private emailService = new EmailService();

    constructor(app: Express) {
        app.post("/appointment/book", this.bookAppointment.bind(this));
    }
    
    public async bookAppointment(req: Request, res: Response) {
        const service = await Service.findOne({ id: req.body.serviceId }).lean();
        const stylist = await Stylist.findOne({ id: req.body.stylistId }).lean();

        const to = req.body.to as string;
        const subject = "Appointment Booking Successfull.";
        const message = `
            Your appointment with ${stylist?.name} which includes ${service?.name} booked successfully. \n
            Total Price: $${service?.price}.
        `;

        await this.emailService.sendMail(subject, message, to);
        res.send("Email Sent Successfully.");
    }
}