/*adding div tag to body tag*/
      let body = document.querySelector('body');
      body.style.backgroundColor = 'white';
      let div = document.createElement('div');
      div.textContent = "test";
      body.append(div);

/*
map function to return full name 
 */
let users = [
  {
    firstName: 'shiva', lastName: 'karthik'
  },
  {
    firstName: 'Sumit', lastName: 'Roy'
  }
];

let fullName = users.map(
  function(i){
    return `${i.firstName} ${i.lastName}`;
  }
);

/* fruit list in UL*/
let ul = document.createElement('ul');
const fruitArr = ['orange', 'grapes', 'kiwi'];
body.append(ul);
ul.style.backgroundColor = '#fcfcfc';

fruitArr.map(
  (i) => {
    let liElements = document.createElement('li');
    liElements.innerText = i;
    ul.append(liElements);
    liElements.setAttribute('class', 'newColor');
  }
  )
  let classColor = document.querySelectorAll('.newColor');

/* Adding logo using JS */

const logo = 'https://crocoder.dev/icon.png';
let imageTag = document.createElement('img');
imageTag.setAttribute('src', logo);
imageTag.style.maxWidth = 10 +'em';
body.append(imageTag);
imageTag.setAttribute('class', 'image');


/* Array square */

const input = [1,2,4,5,6,8];
let squareDiv = document.createElement('div');

let squareValue = input.map(
  (i) => {
   return Math.pow(i, 2);
   
  }
)
squareDiv.innerText = squareValue;
body.append(squareDiv);

/* Sum of all positive numbers*/

const inputNum = [ 1, -4, 12, 0, -3, 29, -150];
let sum;
let sumNum = inputNum.map(
  (i) => {
    if(i > 0){
      sum += i; 
    }
    else{
      console.log('No positive number');
    }
    return sum;
  }
)

console.log(sumNum);