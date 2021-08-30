function makeEmail() {
  var emailInputValue = document.getElementById("email").value;
  var nameInput = document.getElementById("name");
  var domainInput = document.getElementById("domain");

  var atIndex = emailInputValue.indexOf("@");

  if (emailInputValue.indexOf("@") == -1) {
    alert("Invalid Email !!!");
  } else {
    var namePart = emailInputValue.slice(0, atIndex);
    console.log(namePart);
    var domainPart = emailInputValue.slice (atIndex + 1);
    nameInput.value = namePart;
    domainInput.value = domainPart;
  }
}

/////object
var student = {
  studentName:"ali",
  age:18,
  level:2,
  graduated:false,
  address:{street:5,state:"elharam", country:"egypt"},
  study:function(x){
    console.log(x);
  }
};
student.study("mani");
student.level = 1;
console.log(student.age);
console.log(student);
console.log(student.level);