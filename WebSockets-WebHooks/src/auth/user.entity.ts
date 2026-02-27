// export class User {
//   id: string;
//   email: string;
//   role: 'admin' | 'student';
//   password: string;
// }

export enum UserRole {
  ADMIN = 'admin',
  STUDENT = 'student',
}

export class User {
  id: string;
  email: string;
  role: UserRole;
}