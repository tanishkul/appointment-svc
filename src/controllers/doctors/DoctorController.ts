import { NextFunction, Request, Response } from 'express';

import successHandler from '../../middlewares/successHandler';
import { DoctorService } from '../../services';
import { SUCCESS_MSG } from '../../libs/constants';

class DoctorController {
  public static getInstance() {
    if (!DoctorController.instance) {
      DoctorController.instance = new DoctorController();
    }

    return DoctorController.instance;
  }
  private static instance: DoctorController;
  private doctorService: DoctorService;

  /* tslint:disable: no-null-keyword */
  private constructor() {
    this.doctorService = new DoctorService();
  }

  /**
   * Get Doctor list.
   * @param {number} skip - Number of Doctor to be skipped.
   * @param {number} limit - Limit number of Doctor to be returned.
   * @returns {IDoctor[]}
   */
  public async list(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit, skip } = req.query as any;
      const result = await DoctorController.getInstance().doctorService.list(
        limit,
        skip,
      );
      if (!result.length) {
        return res.send(successHandler(SUCCESS_MSG.NO_RECORDS, result));
      }
      return res.send(successHandler(SUCCESS_MSG.FETCH, result));
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Doctor
   * @param {string} id - Id of Doctor
   * @returns {IDoctor}
   */
  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await DoctorController.getInstance().doctorService.get({
        originalId: id,
      });
      return res.send(successHandler(SUCCESS_MSG.FETCH, result));
    } catch (error) {
      next(error);
    }
  }

  /**
   * Create new Doctor
   * @param {string} fieldsResponse - FieldsResponse of Doctor
   * @param {string} id - Id of Doctor Type
   * @param {string} stackId - Id of Stack
   * @returns {IDoctor}
   */
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('DoctorController - create', req.body);
      const { name, email, password, role = 'CUSTOMER' } = req.body;
      const result = await DoctorController.getInstance().doctorService.create({
        email,
        name,
        password,
        role,
      });
      return res.send(successHandler(SUCCESS_MSG.CREATE, result));
    } catch (error) {
      next(error);
    }
  }

  /**
   * Login existing Doctor
   * @param {string} fieldsResponse - FieldsResponse of Doctor
   * @param {string} id - Id of Doctor Type
   * @param {string} stackId - Id of Stack
   * @returns {IDoctor}
   */
     public async login(req: Request, res: Response, next: NextFunction) {
      try {
        console.log('DoctorController - login', req.body);
        const query = JSON.parse(JSON.stringify(req.body));
        const result = await DoctorController.getInstance().doctorService.login(query);
        return res.send(successHandler(SUCCESS_MSG.CREATE, result));
      } catch (error) {
        next(error);
      }
    }

  /**
   * Update the Doctor
   * @param {string} id - Id of Doctor
   * @param {string} fieldsResponse - FieldsResponse of Doctor
   * @returns {IDoctor}
   */
  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = JSON.parse(JSON.stringify(req.body));
      const result = await DoctorController.getInstance().doctorService.update({
        ...data,
        id,
      });
      return res.send(successHandler(SUCCESS_MSG.UPDATE, result));
    } catch (error) {
      console.log('eeeeeeeeeeee', error);
      next(error);
    }
  }

  /**
   * Delete the Doctor
   * @param {string} id - Id of Doctor
   * @returns {IDoctor}
   */
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await DoctorController.getInstance().doctorService.delete({
        id,
      });
      return res.send(successHandler(SUCCESS_MSG.DELETE, result));
    } catch (error) {
      next(error);
    }
  }
}

export default DoctorController.getInstance();
