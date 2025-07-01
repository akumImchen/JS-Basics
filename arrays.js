// example of an array
let fruits=["apple","mango","orange"];
// how to use the arrays ,accessing through index
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// changing an item in an array
fruits[1]="watermelon";
console.log(fruits);

//adding items in an array
fruits.push("peach"); //adds the item to the end 
console.log(fruits);

// remove items 
fruits.pop();//removes last item
console.log(fruits);


// array length 
console.log(fruits.length);

// adding items to the beginning of the array
fruits.unshift("pineapple");
console.log(fruits);
