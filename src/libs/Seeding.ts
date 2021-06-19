// import SlotsRepository from '../repositories/business/slots/repository';
import { SlotsService } from '../services';

const seed = async () => {
  const slotsService = new SlotsService();
  return await slotsService.addSlots();

  // slotsRepository.count().then((count) => {
  //   console.log('111111111111111', count);
  //   if (count === 0) {
  //     slotsRepository.createAll({ name: 'User1' });
  //   }
  // });
};

export default seed;
