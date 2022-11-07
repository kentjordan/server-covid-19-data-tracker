
import { Router } from 'express';

import {
    DashboardData,
} from '@controllers/dashboard.controller'

const dashboard = Router();

dashboard.get('/', DashboardData);

export default dashboard;
