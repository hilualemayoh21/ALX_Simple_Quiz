
  function checkAnswer(){
    const correctAnswer ='4';
    const ischecked= document.querySelector('input[name="quiz"]:checked');
   const userAnswer= ischecked.value ;

   if(userAnswer === correctAnswer){
    document.getElementById('feedback').textContent ="Correct! Well done.";
   }
    else{
        document.getElementById('feedback').textContent="That's incorrect. Try again!";
    }
  }

   const submit = document.getElementById("submit-answer");
  submit.addEventListener('click', checkAnswer);