let gameseq = [];
let userseq = [];

let color = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let highscore=0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
document.addEventListener("keypress", function () {
  // game ne once var start karva mate

  if (started == false) {
    started = true;
    levelup();
  }
});

function gameflash(btn) {
  // random color ne flash karva mate for few seconds

  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 600);
}
function userflash(btn) {
  // random color ne flash karva mate for few seconds
  
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250) ;
}

function levelup() {
  userseq=[];
  level++;
 
  h2.innerText = `Level ${level}`;
  h3.innerText=` `;

  // random color genrate karva mate

  let index = Math.floor(Math.random() * 4);
  let randcolor = color[index];
  let colorbtn = document.querySelector(`.${randcolor}`);
  gameflash(colorbtn);
  gameseq.push(randcolor);
  console.log(gameseq)
  console.log(userseq)
  
  
}

//check
function checkseq(idx){
  
  if(gameseq[idx]===userseq[idx])
  {
    if(gameseq.length==userseq.length)
    {
      setTimeout(levelup(),2000)
      
    }
  }
  else{
    highScore();
    h2.innerText=`game over ! press any key to start game`;
    h3.innerText=`your score :${level}`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function ()
    {
      document.querySelector("body").style.backgroundColor="white";
    },3000);
    
    reset();
  }
  
}



// kyu button press thyu che te find karva mate

function btnpress() {
  let btn=this;
  userflash(btn);
  usercolor=btn.getAttribute("id");
  userseq.push(usercolor);
  
  checkseq(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset()
{
  started=false;
  gameseq=[];
  userseq=[];
  level=0;

}

function highScore(){
 if(level>highscore) 
 {
  highscore=level;
  h4.innerText=`High score${level}`;
 }
}