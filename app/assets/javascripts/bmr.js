$(document).ready(function(){
    $(".bmrInfo").hide();
    $("#displayCalculations").hide();
})

  var heightFeet;
  var heightInches;
  var age;
  var weightlbs;

  var exercise_values = new Array();
    exercise_values["1-3"]=1.2;
    exercise_values["4-6"]=1.35;
    exercise_values["6+"]=1.5;

  var getHoursOfExerciseValue = function(){
    var selectedHours = document.querySelector('input[name="selectedexercise"]:checked').value;
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
    heightFeet = +document.getElementById('heightFeetInput').value;
    heightInches = +document.getElementById('heightInchesInput').value;
    age = +document.getElementById('ageInput').value;
    weightlbs = +document.getElementById('weightlbsInput').value;

    var maleBMR = parseFloat((66 + (6.23 * weightlbs) + (12.7 * totalInches()) - (6.8 * age))).toFixed(2);
    var femaleBMR = parseFloat((655 + (4.35 * weightlbs) + (4.7 * totalInches()) - (4.7 * age))).toFixed(2);

    if (getGender() == "male") {
      return maleBMR;
    }
    return femaleBMR;
  }

  var bmrWithExercise = function() {
    var bmr = calculateBMR();

    result = parseFloat((bmr * getHoursOfExerciseValue()).toFixed(2));

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
    $("#displayCalculations").show("slow");
    var total = calculateBMR();
    var totalWithExercise = bmrWithExercise();
    var loseWeight = (totalWithExercise - 500).toFixed(2);
    var gainWeight = (totalWithExercise + 500).toFixed(2);

    var printBaseline = document.getElementById('printBaselineBMR');
    printBaseline.innerHTML = total;

    var printExercise = document.getElementById('printExerciseBMR');
    printExercise.innerHTML = totalWithExercise;

    var printLose = document.getElementById('printLoseWeight');
    printLose.innerHTML = loseWeight;


    var printGain = document.getElementById('printGainWeight');
    printGain.innerHTML = gainWeight;
  }

  var hideBMR = function() {
    $("#heightFeetInput").val("");
    $("#heightInchesInput").val("");
    $("#ageInput").val("");
    $("#weightlbsInput").val("");
    $("#printBaselineBMR").html("");
    $("#printExerciseBMR").html("");
    $("#printLoseWeight").html("");
    $("#printGainWeight").html("");
    $("#heightFeetInput").focus();
  }
