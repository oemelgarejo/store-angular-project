const username: string | undefined = 'omelgarejo';
const suma = (a: number, b: number) => {
  return a + b;
}

suma(1, 4);
class Person {
  //private age: number;
  // age: number;
  // lastName: string;

  // constructor(age: number, lastName: string){
  //   this.age = age;
  //   this.lastName = lastName;
  // }
  constructor(public age: number, public lastName: string){}
}

const oscar = new Person(23, 'Melgarejo');
oscar.age;
