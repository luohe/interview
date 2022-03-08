import { observable } from './01-subject'

console.log(1111)
const data: any = observable({ age: 10, name: 'Zchary' })
data.age;
data.name;
data.age = 11;
data.age;