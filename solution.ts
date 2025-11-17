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

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

function getLength (input: string | any[]) : number {
    if ( typeof input === "string"){
        return input.length;
    } else {
        return input.length;
    }
};

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

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

// const person1 = new Person('John Doe', 30);
// person1.getDetails();

// const person2 = new Person('Alice', 25);
// person2.getDetails();

type Item = {
       title: string;
       rating: number;
}
function filterByRating (items: Item[]) : Item[] {
     return items.filter(item => item.rating >= 4.0)
};

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));

type User = {
    id: number;
    name: string;
    email: string;
    isActive : boolean;
}

function filterActiveUsers (users: User[]) : User[] {
    return users.filter(user => user.isActive === true)
}

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));

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

// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// console.log(printBookDetails(myBook));

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

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

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

// const products = [
//   { name: 'Pen', price: 10, quantity: 2 },
//   { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
//   { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));