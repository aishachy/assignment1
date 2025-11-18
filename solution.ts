function formatValue (input: string | number | boolean) : string | number | boolean {
    if ( typeof input === "string" ){
        return input.toUpperCase();
    } else if ( typeof input === "number" ){
        return input * 10;
    } else if ( typeof input === "boolean" ){
        return !input;
    }
    return input;
};


function getLength (input: string | any[]) : number {
    if ( typeof input === "string"){
        return input.length;
    } else {
        return input.length;
    }
};


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        console.log (`'Name: ${this.name}, Age: ${this.age}'`)
    }
};


type Item = {
       title: string;
       rating: number;
}
function filterByRating(items: Item[]): Item[] {

  const validItems = items
    .filter(item => item.rating >= 4 && item.rating <= 5)
    .map(item => ({
      title: item.title,
      rating: Number(item.rating.toFixed(1)),
    }));

  console.log("Valid Items:", validItems);  

  const invalidItemByRating = items.find(item => item.rating > 5);
  if (invalidItemByRating) {
    throw new Error(`Rating cannot be over 5.0 (found ${invalidItemByRating.rating})`);
  }
  return validItems;
}



type User = {
    id: number;
    name: string;
    email: string;
    isActive : boolean;
}

function filterActiveUsers (users: User[]) : User[] {
    return users.filter(user => user.isActive === true)
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails (myBook: Book){
    const availability = myBook.isAvailable ? 'Yes' : 'No'
    return (`Title: ${myBook.title}, Author: ${myBook.author}, Published: ${myBook.publishedYear}, Available: ${availability}`)
}


function getUniqueValues (array1 : (string | number)[], array2 : (string | number)[]) : (string | number)[] {
    const result : (string | number)[] = [];

    for (let i = 0; i < array1.length; i++){
        let duplicate = false;

    for ( let j = 0; j < result.length; j++){
        if (result[j] === array1[i]){
            duplicate = true;
            break;
     }
    }

    if (!duplicate) result[result.length] = array1[i];
    }

    for (let i = 0; i < array2.length; i++){
        let duplicate = false;

    for ( let j = 0; j < array2.length; j++){
        if ( result[j] === array2[i]){
            duplicate = true;
            break;
        }
    }

    if (!duplicate) result[result.length] = array2[i];
       }
       
       return result;
}


type Product = {
    name: string,
    price: number,
    quantity: number,
    discount?: number
}

function calculateTotalPrice (products : Product[]) : number {

     return products.reduce((total, product) => {

       const originalPrice = product.price * product.quantity;

       const discountAmount = product.discount ? originalPrice * (product.discount / 100) : 0;

       const priceAfterDiscount = originalPrice - discountAmount;

       return total + priceAfterDiscount;
     }, 0);
}
