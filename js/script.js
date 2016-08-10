//Sum Two Numbers

var output = 0;
var num1 = 0;
var num2 = 0;
var array = [];
// var sum = 0;

function addFunction() {
  num1 = document.getElementById("val").value;
  num2 = document.getElementById("val2").value;
  var result = parseInt(num1) + parseInt(num2);
  // var input = getElementById('val');
  // var input2 = getElementById('val2');
  document.getElementById("val").value = '';
  document.getElementById("val2").value = '';
  document.getElementById("output").innerHTML = result;
  console.log(output.value);
  console.log(result);
  // input.value = '';
  // input2.value = '';
}


//Sum Values of Array


function addTo() {
  array.push(document.getElementById("userinput").value);
  console.log(array);
}

function sumArray(arr) {
  // array = document.getElementById
  var sum = 0;
  arr = document.getElementById("userinput");
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  console.log(sum);
}

// sumArray([1,2,3,4]);


//Fahrenheit to Celsius



function makeCelsius() {
  num1 = document.getElementById("fahrenheit").value;
  var result = (parseInt(num1) * 1.8) + 32;
  // var input = getElementById('val');
  // var input2 = getElementById('val2');
  document.getElementById("val").value = '';
  document.getElementById("celsius").innerHTML = result;
  console.log(celsius.value);
  console.log(result);
  // input.value = '';
  // input2.value = '';
}


//Number of Vowels in a String

function vowel_count(str1) {
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  for(var i = 0; i <str1.length ; i++) {
    if (vowel_list.indexOf(str1[i]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
console.log(vowel_count("The quick brown foooox"));


//Rolls Dice

function rollDie() {
    document.getElementById("myBtn").addEventListener("click", rollDie);
    document.getElementById("die").innerHTML = Math.floor(Math.random() * 6) + 1;
}

