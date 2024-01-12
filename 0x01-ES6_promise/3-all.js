import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([{ body }, { firstName, lastName }]) => {
      console.log(body, firstName, lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
