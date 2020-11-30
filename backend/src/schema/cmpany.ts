import { Document, Model, model, Schema } from 'mongoose';
import { ICompany } from '../interface/company';

export interface ICompanyModel extends ICompany, Document {

}

export interface CompanyModelInterface extends Model<ICompanyModel> {

}

export let CompanySchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    uniqueName: { type: String },
    description: {
        type: String,
        required: [true, 'Description is required.']
    },
    city: {
        type: String,
        required: [true, 'City is required.']
    },
    state: {
        type: String,
        required: [true, 'State is required.']
    },
    foundedAt: {
        type: Date,
        required: [true, 'Founded date is required.']
    },
    founder: [
        {
            name: String,
            title: String,
            uniqueName: String,
        }
    ],
    createdAt: {
        type: Date,
        default: new Date()
    },
    deleted: {
        type: Number,
        default: 0
    },
});

CompanySchema.pre('save', function (this: ICompanyModel, next) {
    next();
});


export const Company: CompanyModelInterface = model<ICompanyModel, CompanyModelInterface>('company', CompanySchema, 'company');
