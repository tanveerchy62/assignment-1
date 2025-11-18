
type Premetive = string | number | boolean;

function formatValue(value:Premetive):Premetive{
 if(typeof value === "string"){
    return value.toUpperCase();
 }else if(typeof value === "number"){
    return value*10;
 }
 else if(typeof value === "boolean"){
    return !value;
 }else{
    return value;
 }
}

type Arr = string | number | boolean | undefined | null;
type GetLenght = string | Arr[];

function getLength(value:GetLenght):number{
 if(typeof value === "string"){
    return value.length;
 }else if(Array.isArray(value)){
    return value.length;
 }
 else{
    return 0;
 }
}

class Person{
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    getDetails():string{
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

type Elements = {
  title: string;
  rating: number;
};

function filterByRating(value:Elements[]): Elements[]{
 return value.filter(elements => elements.rating >= 4);
}

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(value:User[]): User[]{
    return value.filter(user => user.isActive === true)
}

interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(value: Book){
    const availability = value.isAvailable ? "Yes" : "No";
    console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${availability}`);
}

type Arr1 = string | number;

function getUniqueValues(arr1: Arr1[], arr2: Arr1[]){
  const result = [];
  let index = 0;

  for (let i = 0; i < arr1.length; i++) {
      result[index] = arr1[i]
      index++;
  }

  for (let i = 0; i < arr2.length; i++) {
      result[index] = arr2[i]
      index++;
  }

  for(let i=0; i<result.length; i++){
    for(let j=i+1; j<result.length; j++){
        if(result[i] === result[j]){
            result[j] = result[result.length - 1];
            result.length--;
        }
    }
}
  return result;
}

interface Product{
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(elements: Product[]): number {

    const calcTotal = elements.map(element => {
      let total = element.price * element.quantity;
      if (element.discount) {
        total = total - (total * element.discount) / 100;
      }
      return total;
    })

  const sum = calcTotal.reduce((acc, curr) => acc + curr, 0);

  return sum;
}