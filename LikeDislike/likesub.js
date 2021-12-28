
function increment(param1) {
    let h1 = param1.parentElement.children[4];
    let prevVal = h1.innerHTML;
  
    let newVal = parseInt(prevVal) + 1;
    h1.innerHTML = newVal;
  }
  
  function decrement(param1) {
    let h1 = param1.parentElement.children[6];
    let prevVal = h1.innerHTML;
  
    let newVal = parseInt(prevVal) - 1;
    h1.innerHTML = newVal;
  }
  function increment1(param1) {
    let h1 = param1.parentElement.children[8];
    let prevVal = h1.innerHTML;
  
    let newVal = parseInt(prevVal) + 1;
    h1.innerHTML = newVal;
  }
  function increment2(param1) {
    let h1 = param1.parentElement.children[10];
    let prevVal = h1.innerHTML;
  
    let newVal = parseInt(prevVal) + 1;
    h1.innerHTML = newVal;
  }