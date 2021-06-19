import { IQueryBaseList } from '../../../entities';

export default interface IQueryList extends IQueryBaseList {
  sort?: string;
  id?: string;
  userId?: string;
  doctorId?: string;
}
