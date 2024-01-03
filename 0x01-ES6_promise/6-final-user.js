import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled([
    promises
  ]).then((values) => values.map((value) => ({
    status: value.status,
    value: value.status === 'fulfilled' ? value.value : String(value.reason),
  })));
}
