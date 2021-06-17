import UserRepository from '../repositories/user/UserRepository';
import DoctorRepository from '../repositories/doctor/DoctorRepository';

const seed = async () => {
  console.log('............');

  const userRepository = new UserRepository();

  userRepository.count().then((count) => {
    if (count === 0) {
      userRepository.create({ name: 'User1', email: 'user1@gmail.com' });
    }
  });
  const doctorRepository = new DoctorRepository();

  doctorRepository.count().then((count) => {
    if (count === 0) {
      doctorRepository.create({ name: 'Doctor1', email: 'doctor1@gmail.com' });
    }
  });
};

export default seed;
