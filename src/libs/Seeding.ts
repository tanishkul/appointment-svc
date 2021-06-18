import DoctorRepository from '../repositories/business/doctor/repository';
import UserRepository from '../repositories/business/user/repository';

const seed = async () => {
  console.log('............');

  const userRepository = new UserRepository();

  userRepository.count().then((count) => {
    console.log('111111111111111', count);
    if (count === 0) {
      userRepository.create({ name: 'User1' });
    }
  });
  const doctorRepository = new DoctorRepository();

  doctorRepository.count().then((count) => {
    console.log('222222222222222', count);
    if (count === 0) {
      doctorRepository.create({ name: 'Doctor1' });
    }
  });
};

export default seed;
