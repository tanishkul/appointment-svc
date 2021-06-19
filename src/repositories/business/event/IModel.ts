import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IEventModel extends IVersionableDocument {
  end: any;
  start: any;
  id: string;
  startTime: Date;
  endTime: Date;
}
