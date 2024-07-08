/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const NumButtons = document.querySelectorAll('.button.number');
const OprButtons = document.querySelectorAll('.button.operator');
const equalsBtn = document.querySelector('.button.equals');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
  NumButtons.forEach((element) => {
  element.addEventListener('click', updateDisplay);
  });

  OprButtons.forEach((element) => {
  element.addEventListener('click', updateDisplay);
  });
  
  equalsBtn.addEventListener('click', updateDisplay);


/*-------------------------------- Functions --------------------------------*/
function updateDisplay(evt) {
     const target = evt.target.innerText;

     if (target === '='){
       try{
       const computation = eval(display.textContent);
       display.textContent = computation;
      } catch (error){
        display.textContent = "Error, No Calc";
      }
    } else if (target === 'C'){
      display.textContent = '';
    } else {
      display.textContent += target;
    }
}


// The if statment is correct ,put it don't works without try catch
// if (target === '='){
//   const computation = eval(display.textContent);
//   display.textContent = computation;


// Simplification .. put it didn't become correct 
// function compute(evt){
//     const target = evt.target.innerText;
//     const computation = 0;
//     if (target === '='){
//        computation = eval(display.textContent);
//        display.textContent = computation
//     } else if (target === 'C'){
//       display.textContent = ''
//     } 
// }