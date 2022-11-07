
import { Request, Response, NextFunction } from 'express';

declare type middleware = (req: Request, res: Response, next: NextFunction) => void;
