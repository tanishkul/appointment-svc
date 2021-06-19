import { NextFunction, Request, Response } from 'express';

import successHandler from '../../middlewares/successHandler';
import { SlotsService } from '../../services';
import { SUCCESS_MSG } from '../../libs/constants';

class SlotsController {
  public static getInstance() {
    if (!SlotsController.instance) {
      SlotsController.instance = new SlotsController();
    }

    return SlotsController.instance;
  }
  private static instance: SlotsController;
  private slotsService: SlotsService;

  /* tslint:disable: no-null-keyword */
  private constructor() {
    this.slotsService = new SlotsService();
  }

  /**
   * Get User list.
   * @param {number} skip - Number of User to be skipped.
   * @param {number} limit - Limit number of User to be returned.
   * @returns {IUser[]}
   */
  public async list(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit, skip } = req.query as any;
      const result = await SlotsController.getInstance().slotsService.list(
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
   * Get User
   * @param {string} id - Id of User
   * @returns {IUser}
   */
  // public async get(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = req.params;
  //     const result = await SlotsController.getInstance().slotsService.get({
  //       originalId: id,
  //     });
  //     return res.send(successHandler(SUCCESS_MSG.FETCH, result));
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  /**
   * Create new User
   * @param {string} fieldsResponse - FieldsResponse of User
   * @param {string} id - Id of User Type
   * @param {string} stackId - Id of Stack
   * @returns {IUser}
   */
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('SlotsController - create', req.body);
      const { name, email, password, role = 'CUSTOMER' } = req.body;
      const result = await SlotsController.getInstance().slotsService.create({
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
   * Login existing User
   * @param {string} fieldsResponse - FieldsResponse of User
   * @param {string} id - Id of User Type
   * @param {string} stackId - Id of Stack
   * @returns {IUser}
   */
    //  public async login(req: Request, res: Response, next: NextFunction) {
    //   try {
    //     console.log('SlotsController - login', req.body);
    //     const query = JSON.parse(JSON.stringify(req.body));
    //     const result = await SlotsController.getInstance().slotsService.login(query);
    //     return res.send(successHandler(SUCCESS_MSG.CREATE, result));
    //   } catch (error) {
    //     next(error);
    //   }
    // }

  /**
   * Update the User
   * @param {string} id - Id of User
   * @param {string} fieldsResponse - FieldsResponse of User
   * @returns {IUser}
   */
  // public async update(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = req.params;
  //     const data = JSON.parse(JSON.stringify(req.body));
  //     const result = await SlotsController.getInstance().slotsService.update({
  //       ...data,
  //       id,
  //     });
  //     return res.send(successHandler(SUCCESS_MSG.UPDATE, result));
  //   } catch (error) {
  //     console.log('eeeeeeeeeeee', error);
  //     next(error);
  //   }
  // }

  /**
   * Delete the User
   * @param {string} id - Id of User
   * @returns {IUser}
   */
  // public async delete(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = req.params;
  //     const result = await SlotsController.getInstance().slotsService.delete({
  //       id,
  //     });
  //     return res.send(successHandler(SUCCESS_MSG.DELETE, result));
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

export default SlotsController.getInstance();
