import { Request, Response } from 'express';
import data, { getCountryData, CoutriesCode } from '@services/data'

import { Dashboard } from 'types/types'
import Cases, { CountriesTotalCases, InternationalCase } from '@models/Cases/Cases';

const DashboardData = (req: Request, res: Response) => {

    res.json(InternationalCase());

}

export { DashboardData };
