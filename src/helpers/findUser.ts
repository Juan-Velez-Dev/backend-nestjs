type Tparam = string;

const users = [
  {
    name: 'Juan',
    email: 'juan@gmail.com',
    password: 'juancito',
    active: true,
  },
  {
    name: 'Dani',
    email: 'dani@gmail.com',
    password: 'danicita',
    active: true,
  },
];

export default async function findUser(typeParam: Tparam, param: string) {
  if (typeParam === 'name') {
    let findUser = users.filter((user) => user.name === param);
    console.log(findUser);
    return findUser;
  }
}
