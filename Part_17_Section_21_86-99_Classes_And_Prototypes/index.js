//Classes allow to create prototypes for objects
//Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//Classes are themselves special functions.
import { NumbersArray, myArray } from "./index2.js";
class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }
  //   constructor(){
  //     this.text = "No text has been provided";
  //     this.votesQty = 0;
  //   }
  upvote() {
    this.votesQty += 1;
  }
  upvote(amount) {
    this.votesQty += amount;
  }

  static mergeComments(first, second) {
    return `${first} ${second}`;
  }
}
const com = new Comment("This is a comment");
console.log(com);
com.upvote();
console.log(com);
const com2 = new Comment("This is another comment");
console.log(com2);
const com3 = new Comment();
console.log(com3);
//com3 -> Comment -> Object - a chain of prototypes
console.log(com.__proto__); // Comment.prototype
console.log(com instanceof Comment, com instanceof Object); // true true
console.log(Comment.prototype.constructor === Comment);
console.log(com);
com.votesQty = 0;
com.upvote(5);
console.log(com);
com.upvote(3);
console.log(com);
/********************************************/
const firstComment = new Comment("First comment");
console.log(
  firstComment.hasOwnProperty("text"),
  firstComment.hasOwnProperty("votesQty"),
  firstComment.hasOwnProperty("upvote"),
  firstComment.hasOwnProperty("hasOwnProperty")
);
// console.log(com.mergeComments("Hello", "World")); won't work, cause mergeComments is static, which means it belongs to the class, not instances
const result = Comment.mergeComments("First comment.", "Second comment.");
console.log(result);

const newObjectArray = new NumbersArray(1, 2, 3, 5, 7);
console.log(newObjectArray, newObjectArray.sum());
