import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface ISlotsModel extends IVersionableDocument {
  id: string;
  bookingId: string;
  time: Date;
  booked: boolean;
}
