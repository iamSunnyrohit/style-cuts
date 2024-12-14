import { model, Model, Schema } from "mongoose";
import { ServiceCategory } from "./service.mode";

export interface IStylist {
    id: string;
    name: string;
    specialties: string[];
    imageUrl: string;
    bio: string;
    availability: string[];
    rating: number;
    reviews: number;
    services: ServiceCategory[];
  }

const stylistSchema = new Schema({
    id: { type: String },
    name: { type: String },
    specialties: [{ type: String }],
    imageUrl: { type: String },
    bio: { type: String },
    availability: [{ type: String }],
    rating: { type: Number },
    reviews: { type: Number },
    services: [{ type: String, enum: ServiceCategory }]
});

export const Stylist: Model<IStylist> = model<IStylist>("Stylist", stylistSchema);