
             //Create profile variable
const Name = "sylvester";
const age = 12;
const nationality = "Nigerian";
//Concatenate profile variable into whole
const intro = "my name is " + Name + ",I am " + age + ", and I am a " + nationality ;
console.log(intro);

             //Creating Favorite Quote
const favoriteQuote = "The Boy is The Father of the Man";
//to upper case
const convertUp = favoriteQuote.toUpperCase();
console.log(convertUp);
//to lower case
const convertLow = favoriteQuote.toLowerCase();
console.log(convertLow);

             //Reversing a Word
let word = ["randomword"];
//word.sort();
let reverseWord = word.reverse();
console.log(reverseWord);

             //Store Price of item and compute
let designPrice = 200;
let backendPrice = 250;
let fullstackPrice = 400;
let totalPrice = designPrice + backendPrice + fullstackPrice ;

var sentence = "the cost of design training is" + designPrice +", backend," + backendPrice +"and fullstack"+ fullstackPrice +", making the total cost of web development"+totalPrice;
console.log(sentence);

             //Finding Average of Five TestScores
let testScore1 = 20;
let testScore2 = 25;
let testScore3 = 40;
let testScore4 = 42;
let noOfTestScore = 4;
let total = testScore1+testScore2+testScore3+testScore4
var averageTestScore= total/4;
console.log(averageTestScore);

             //Favorite Food
let foodArray = ["rice", "spagheti", "plantain", "bread", "mashedbeans"];
//displaying the first and last item
let firstAndLast = foodArray.splice(1,3);
console.log(foodArray);

    //adding items to the beginning of food array
foodArray.unshift("fries");

    //adding items to the end of food array
foodArray.push("porridge");
    //displaying new array with added items
console.log(foodArray);

             //Creating three Arrays with ten students each
let jssOne = ["rofeeq", "Ademola", "Adewale", "Ahmed", "Akinbowale","Arya", "Ayomide", "Benetsy", "Ayomide", "Benjamin"];
let jssTwo = ["Godstime", "Ezenwa", "Flavour", "Elias", "Dein","Diamond", "Chusky", "Charles", "Opeyemi", "Best"];
let jssThree = ["Ikechukwu", "Joshua", "Michael", "Nicholas", "Olumide","Oyinola", "Peter", "Alfred", "Sadiq", "Tenny"];
