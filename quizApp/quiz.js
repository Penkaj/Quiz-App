let ques=[
  {
    'que':'What does CSS stand for? ',
    'a':'HTML',
    'b':'Cascading Style Sheet',
    'c':'JS',
    'd':'None',
    'correct':'b'
  },
  {
    'que':'What does HTML stand for? ',
    'a':'Hyper Text Markup Language',
    'b':'Cascading Style Sheet',
    'c':'JS',
    'd':'None',
    'correct':'a'
  },
  {
    'que':'What does JS stand for? ',
    'a':'Hyper Text Markup Language',
    'b':'Cascading Style Sheet',
    'c':'Java Script',
    'd':'None',
    'correct':'c'
  }
];


//load question

let index=0;
let total=ques.length;
let right=0,wrong=0;
let question = document.querySelector("#ques"); //headingquestion tag;

let optionInputs=document.querySelectorAll(".options");

let loadQuestion=()=>{
  if(index===total){
    return endquiz();
  }
  reset();
  let data=ques[index];
  question.innerText=`${index+1}) ${data.que}`;
  //load options
  //nextelementsiblings as label is sibling
  optionInputs[0].nextElementSibling.innerText=data.a;
  optionInputs[1].nextElementSibling.innerText=data.b;
  optionInputs[2].nextElementSibling.innerText=data.c;
  optionInputs[3].nextElementSibling.innerText=data.d;
}

//submit work
let submitQuiz=()=>{
  let data=ques[index];
  let ans=getAns();
  if(ans===data.correct){
    right++;
  } else{
    wrong++;
  }
  index=index+1;
  loadQuestion(); //the option selected will be same so we need reset function so while loading call reset function;

}

//user option selections;

let getAns = ()=>{
  let answer;
  optionInputs.forEach(
    (input)=>{
      if(input.checked){
        answer=input.value;//returns checked value
      }
    }
  )
  return answer;
}

let reset=()=>{
  optionInputs.forEach(
    (input)=>{
      if(input){
        input.checked= false;//returns checked value
      }
    }
  )
}



let endquiz=()=>{
  document.querySelector('#qbox').innerHTML=`
    <h3> Thankyou For playing the quiz </h3>
    <h2> ${right} / ${total} are Correct </h2>
    <button id="btn1" onclick="resetQuiz();"> Reset Quiz </button>
  `;
}



let resetQuiz = () => {
  index = 0;
  right = 0;
  wrong = 0;
  loadQuestion();
}

loadQuestion();


