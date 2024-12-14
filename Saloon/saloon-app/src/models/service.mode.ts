import { Model, model, Schema } from "mongoose";

export enum ServiceCategory {
    HAIRCUT = "haircut",
    STYLING = 'styling',
    COLOR = 'color',
    TREATMENT = 'treatment',
    MASSAGE = 'massage',
    SPA = 'spa'
};

export interface IService {
    id: string;
    name: string;
    duration: number;
    price: number;
    description: string;
    category: ServiceCategory;
    image?: string;
}

const serviceSchema = new Schema({
    id: { type: String },
    name: { type: String },
    duration: { type: Number },
    price: { type: Number },
    description: { type: String },
    category: { type: String, enum: ServiceCategory },
    image: { type: String }
});

export const Service: Model<IService> = model<IService>("Service", serviceSchema);