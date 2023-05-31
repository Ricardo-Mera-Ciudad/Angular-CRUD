import { Injectable } from '@angular/core';
import { User } from '../contacts/interfaces/user.inerface';

@Injectable({
  providedIn: 'root',
})
export class AddUsersService {
  public users: User[] = [
    {
      //id: uuid(),
      name: 'paco',
      password: '1234',
      email: 'paco@prácticas.com',
      subscription: true,
      country: 'spain',
      city: 'albacete',
    },
    {
      //id: uuid(),
      name: 'antonio',
      password: '1234',
      email: 'antonio@prácticas.com',
      subscription: true,
      country: 'spain',
      city: 'madrid',
    },
    {
      //id: uuid(),
      name: 'rosalía',
      password: '1234',
      email: 'rosalía@prácticas.com',
      subscription: true,
      country: 'spain',
      city: 'gijón',
    },
    {
      //id: uuid(),
      name: 'amancia',
      password: '1234',
      email: 'amancia@prácticas.com',
      subscription: true,
      country: 'spain',
      city: 'huelva',
    },
  ];

  addNewUser(user: User): void {
    const newUser: User = { ...user };
    this.users.push(newUser);
  }
}
// onNewCharacter(character: Character): void {
//   const newCharacter: Character = {id: uuid(), ...character};
//   this.characters.push(newCharacter);
// }
