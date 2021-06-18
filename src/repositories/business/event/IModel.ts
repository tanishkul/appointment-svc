import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IEventModel extends IVersionableDocument {
  id: string;
  doctorId: string;
  userId: string;
  events: any;
}
