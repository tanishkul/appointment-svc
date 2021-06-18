import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IDoctorModel extends IVersionableDocument {
  id: string;
  name: string;
}
