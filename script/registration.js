var form = document.getElementById('sheetdb-form');
let courses = document.getElementById('crs');
let submit = document.getElementById('subBtn');
let CouDiv = document.getElementById('crsdiv');
let crsLbl = document.createElement("label");
let inputP = document.createElement("p");
let inputText = document.createElement("input");


courses.addEventListener('change', function () {
  crsLbl.setAttribute("for","more");
  inputText.setAttribute("type", "text", "name", "Courses");
  inputText.setAttribute("name", "Courses");
  inputText.setAttribute("id", "more");
  inputText.required = true;
  inputP.innerHTML = "Enter courses <span style='color: red;'>*</span>";
  crsLbl.appendChild(inputP);
  crsLbl.appendChild(inputText);
  if (courses.value == 'multi') {
    CouDiv.appendChild(crsLbl);
  } else {
    CouDiv.removeChild(crsLbl);
  }
})

function validate(){
  var validation = true;
  let num = document.forms['regForm']['Mobile'].value;
  let digit = Number(num);
  if (!(num.length==10)){
    if((isNaN(digit))){
      alert("Not a number")
      validation = false;
    }else{
      alert(`enter ${num.length}/10 digit mobile number`)
    }
    validation = false;
  }

  return validation;

  ;
}