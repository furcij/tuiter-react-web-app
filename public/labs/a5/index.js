alert('Hello world!');
console.log('Hello World!');

console.log('Variables and Constants');
// eslint-disable-next-line no-undef
global1 = 10;
// eslint-disable-next-line no-undef
console.log(global1);
var functionScoped = 2;
console.log(functionScoped);
let blockScoped = 5;
console.log(blockScoped);
// eslint-disable-next-line no-undef
const constant1 = global1
    + functionScoped
    - blockScoped;
console.log(constant1);

console.log('Variable types');
let numberVariable = 123;
console.log(numberVariable);
let floatingPointNumber = 234.345;
console.log(floatingPointNumber);
let stringVariable = 'Hello World!';
console.log(stringVariable);
let booleanVariable = true;
console.log(booleanVariable);
let isNumber = typeof numberVariable;
console.log(isNumber);
let isString = typeof stringVariable;
console.log(isString);
let isBoolean = typeof booleanVariable;
console.log(isBoolean);

console.log('Boolean Variables');
let true1 = true;
console.log(true1);
let false1 = false;
console.log(false1);
let false2 = true1 && false1;
console.log(false2);
let true2 = true1 || false1;
console.log(true2);
let true3 = !false2;
console.log(true3);
let true4 = numberVariable === 123;
console.log(true4);
let true5 = floatingPointNumber !== 321.432;
console.log(true5);
let false3 = numberVariable < 100;
console.log(false3);
// eslint-disable-next-line no-unused-vars, eqeqeq
let sortaTrue = '1' == 1
// eslint-disable-next-line no-unused-vars
let notTrue = '1' === 1

console.log('If else');
if (true1) {
    console.log(true);
}

if (!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log('Ternary conditional operator');
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

console.log('Legacy ES5 function');
function add(a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log('New ES6 arrow functions');
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

console.log('Implied return');
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

console.log('Parenthesis and parameters')
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

console.log('Arrays');
let numberArray1 = [1, 2, 3, 4, 5];
console.log(numberArray1)
let stringArray1 = ['string1', 'string2'];
console.log(stringArray1)
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(variableArray1);

console.log('Array index and length');
const length1 = numberArray1.length;
console.log(length1);
const index1 = numberArray1.indexOf(3);
console.log(index1);

console.log('Add and remove data to arrays');
// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

console.log('For loops');
for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

console.log('Map function');
const squares = numberArray1.map(square);
console.log(squares);
const cubes = numberArray1.map(a => a * a * a);
console.log(cubes);

console.log('Find function');
const four = numberArray1.find(a => a === 4);
console.log(four);
const string3 = stringArray1.find(a => a === 'string3');
console.log(string3);

console.log('Filter function');
const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
console.log(numbersGreaterThan2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);
console.log(oddNumbers);


console.log('Template strings');
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2);

/* eslint-env jquery */
const init = () => {
    console.log('Hello world from jQuery');
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('Binding to DOM');
    console.log(bindById);
    console.log(bindByClass);
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');
    console.log('Get and set attributes');
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);
    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');
    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');
    const hideMe = $("#hide-me");
    hideMe.hide();
    const showMe = $("#show-me");
    showMe.show();
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);
    const removeLi = $("#remove-this");
    const emptyUl = $("#empty-this");
    removeLi.remove();
    emptyUl.empty();
    const changeThisText =
        $("#change-this-text");
    const changeThisHtml =
        $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html(`
   <li>Line item A</li>
   <li>Line item B</li>
   <li>Line item C</li>
`);
    const child2 = $("#child-2");
    const parent1 =
        child2.parents("#parent");
    parent1
        .css('background-color', 'red')
        .css('color', 'white');

    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue');

    const handleClick =
        () => console.log('Handle click');
    const clickable = $('.clickable');
    clickable.click(handleClick);

    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target)
            .css('background-color', 'blue')
            .css('color', 'white');
    }
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {
        hideShowHeader.hide();
    }
    const showHandler = () => {
        hideShowHeader.show();
    }
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);


}
$(init);