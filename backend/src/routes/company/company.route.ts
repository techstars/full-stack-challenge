import { logger } from '@/services';
import { NextFunction, Request, Response, } from 'express';
import { BaseRoute } from '../route';
import * as mongoose from 'mongoose';
import { Types, Mongoose } from 'mongoose';

import { ICompany } from '../../interface/company'
import { Company } from '../../schema/cmpany'



/**
 * @api {get} /
 * @apiName DeliveryRequest
 * @apiGroup DeliveryRequest
 *
 * @apiSuccess {String} type Json Type.
 */
export class CompanyRoute extends BaseRoute {
    public static path = '/company';
    private static instance: CompanyRoute;

    /**
     * @class CompanyRoute
     * @constructor
     */
    private constructor() {
        super();
        this.CreateNewCompany = this.CreateNewCompany.bind(this);
        this.init();
    }

    static get router() {
        if (!CompanyRoute.instance) {
            CompanyRoute.instance = new CompanyRoute();
        }
        return CompanyRoute.instance.router;
    }

    private init() {
        // log
        logger.info('[CompanyRoute] Creating CompanyRoute route.');

        // add index page route
        this.router.get('/list', this.list);
        this.router.post('/create', this.CreateNewCompany);
        this.router.put('/update/:id', this.UpdateCompany);
        this.router.put('/add-founder/:id', this.AddFounder);
        this.router.delete('/delete/:id', this.DeleteCompany);
        this.router.get('/:id', this.Details);
    }

    private async list(req: Request, res: Response, next: NextFunction) {
        try {
            const query = [{ $match: { deleted: { $ne: 1 } } },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    location: { $concat: ['$city', ', ', '$state'] },
                    description: 1,
                    createdAt: 1
                }
            },
            { $sort: { createdAt: -1 } }]
            const resp = await Company.aggregate(query);
            res.json({ status: 200, data: resp })
        } catch (error) {
            next(error)
        }
    }
    private async Details(req: Request, res: Response, next: NextFunction) {
        try {
            const resp = await Company.aggregate([
                { $match: { _id: Types.ObjectId(req.params.id) } },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        foundedAt: { $dateToString: { format: "%Y-%m-%d", date: "$foundedAt" } },
                        founder: 1,
                        city: 1,
                        state: 1,
                        location: { $concat: ['$city', ',', '$state'] },
                        description: 1,
                        createdAt: 1
                    }
                }
            ]);
            res.json({ status: 200, data: resp[0] })
        } catch (error) {
            next(error)
        }
    }

    private async CreateNewCompany(req: Request, res: Response, next: NextFunction) {
        try {
            FormatRequestData(req.body);
            if (await CompanyExist({ uniqueName: req.body.uniqueName })) {
                res.status(400).json({ status: 400, error: 'Company already exist!.', })
            } else {
                let newCompany = new Company(req.body);
                await Create(res, newCompany)
            }
        } catch (error) {
            next(error)
        }
    }

    public async UpdateCompany(req: Request, res: Response, next: NextFunction) {
        try {
            unSetDataWhichIsNotRequired(req);
            FormatRequestData(req.body);
            if (await CompanyExist({ _id: { $ne: Types.ObjectId(req.params.id) }, uniqueName: req.body.uniqueName })) {
                res.status(400).json({ status: 400, error: 'Company already exist!.', })
            } else {
                await Update(req, res, req.body)
            }

        } catch (error) {
            next(error)
        }
    }
    public async AddFounder(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.body.name) {
                res.status(400).json({ status: 400, message: 'Name is required.' })
            } else {
                if (await FounderBelongsToOtherCompany(req.body)) {
                    res.status(400).json({ status: 400, message: 'This Founder already belongs to a company!.' })
                } else {
                    await AddFounders(req, res);
                }
            }


        } catch (error) {
            next(error)
        }
    }

    public async DeleteCompany(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('del req: ', req.params.id);

            const resp = await Company.updateOne({ _id: Types.ObjectId(req.params.id) }, { $set: { deleted: 1 } });
            console.log('del resp: ', resp);

            if (resp.nModified > 0) {
                res.json({
                    status: 200,
                    message: 'Succesfully deleted!.',
                })
            } else {
                res.json({
                    status: 500,
                    message: 'Delete not successfull!. Please check the id',
                })
            }
        } catch (error) {
            console.log('del error: ', error);
            next(error)
        }
    }
}

const Update = async (req: Request, res: Response, data: ICompany) => {
    const resp = await Company.updateOne({ _id: Types.ObjectId(req.params.id) }, { $set: req.body });
    if (resp.nModified > 0) {
        res.json({
            status: 200,
            message: 'Succesfully updated!.',
        })
    } else {
        res.json({
            status: 500,
            message: 'Update not successfull!. Please check the request data',
        })
    }
}

const Create = async (res: Response, data: ICompany | any) => {
    const resp = await data.save()
    res.json({ status: 200, message: 'Succesfully created!.', data: resp })
}

const CompanyExist = async (query: Object) => await Company.findOne(query);

function unSetDataWhichIsNotRequired(req) {
    delete req.body._id;
    delete req.body.createdAt;
    delete req.body.founder;
}

async function AddFounders(req: Request, res: Response) {
    req.body.uniqueName = req.body.name.toLowerCase().trim()
    const resp = await Company.updateOne({ _id: Types.ObjectId(req.params.id) }, { $push: { founder: req.body }, upsert: true });
    if (resp.nModified > 0) {
        res.json({ status: 200, message: 'Succesfully updated!.', });
    } else {
        res.status(500).json({ status: 500, message: 'Update not successfull!. Please check the request data', });
    }
}

function FormatRequestData(data: ICompany) {
    if (data && data.name) data.name = data.name.trim();
    if (data && data.city) data.city = data.city.trim();
    if (data && data.state) data.state = data.state.trim();
    if (data && data.description) data.description = data.description.trim();
    if (data && data.name) data.uniqueName = data.name.toLowerCase().trim()
}

const FounderBelongsToOtherCompany = async (doc: any) => await Company.findOne({ deleted: { $ne: 1 }, founder: { $elemMatch: { uniqueName: doc.name.toLowerCase().trim() } } });

