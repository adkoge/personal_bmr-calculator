$(document).ready(function(){
    $(".bmrInfo").hide();
})

  var heightFeet = +document.getElementById('heightFeetInput').value;
  var heightInches = +document.getElementById('heightInchesInput').value;
  var age = +document.getElementById('ageInput').value;
  var weightlbs = +document.getElementById('weightlbsInput').value;

  var exercise_values = new Array();
    exercise_values["1-3"]=1.2;
    exercise_values["4-6"]=1.35;
    exercise_values["6+"]=1.5;

  var getHoursOfExerciseValue = function(){
    var selectedHours = document.querySelector('input[name="selectedexercise"]:checked').value;
    console.log(parseFloat(selectedHours));
    return parseFloat(selectedHours);
}

  var showDescription = function(){
    $(".bmrInfo").toggle("slow");
  }

  var totalInches = function() {
    var feetInInches = heightFeet * 12;
    var sumOfInches = feetInInches + heightInches;
    return sumOfInches;
  }

  var calculateBMR = function() {
    weightlbs = +document.getElementById('weightlbsInput').value;

    console.log("weight " + typeof weightlbs + " " + weightlbs);
    console.log("total inches " + typeof totalInches() + " " + totalInches());
    console.log("age " + typeof age + " " + age);
    var womenBMR = (655 + (4.35 * weightlbs) + (4.7 * totalInches()) + (4.7 * age));
    return womenBMR;
  }

  var bmrWithExercise = function() {
    var bmr = calculateBMR();

    result = bmr * getHoursOfExerciseValue();

    return result;
  }

  var getGender = function(){
    for(var i = 0; i < gender.length; i++) {
      if(gender[i].checked == true) {
        var selectedGender = gender[i].value;
        }
      };
      return selectedGender;
  }

  var displayBMR = function() {
    var total = calculateBMR();

    var divobj = document.getElementById('displayBMR');
    divobj.style.display='block';
    divobj.innerHTML = "Your baseline BMR is " + total + "<br />" + "Your BMR factoring in exercise is " +
    bmrWithExercise();
  }

  var loseWeightCalc = function() {
    var result = bmrWithExercise() - 500;
    return "lose weight is" + result.value;
  }

  var gainWeightCalc = function() {
    var result = bmrWithExercise() + 500;
    return "gain lean muscle tissue is " + result.value;
  }
