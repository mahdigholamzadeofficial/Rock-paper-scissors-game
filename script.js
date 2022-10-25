let round=document.querySelector(".round-counter");
/////////////////////////////////////////////// pictures  ///////////////////////////////////////////////
const userPictures=document.querySelectorAll(".player-img"),
computerPictures=document.querySelectorAll(".computer-img");

/////////////////////////////////////////////// scores  ///////////////////////////////////////////////
const playerStars=document.querySelectorAll(".player-score i"),
computerStars=document.querySelectorAll(".computer-score i");

/////////////////////////////////////////////// sounds  ///////////////////////////////////////////////
const userWinningSound=document.querySelector(".user-winning-sound"),
computerWinningSound=document.querySelector(".computer-winning-sound"),
equalSound=document.querySelector(".equal-sound");

/////////////////////////////////////////////// counter  ///////////////////////////////////////////////
let userWinningCounter=0,
computerWinningCounter=0;
/////////////////////////////////////////////// ///////  ///////////////////////////////////////////////

for(let userWeapon=0 ;userWeapon<userPictures.length;userWeapon++){
  userPictures[userWeapon].addEventListener("click",()=>{
    hiddenUserPictures(userWeapon);
    let computerWeapon=Math.floor((Math.random()*10)/4);
    computerPictures[computerWeapon].classList.remove("hidden")
    result(userWeapon,computerWeapon)
  })
}
function hiddenUserPictures(userWeapon){
  for(let j=0 ;j<userPictures.length;j++){
    if(userWeapon!=j){
      userPictures[j].classList.add("hidden")
    }

  }
}

function result(userWeapon,computerWeapon){
  if(userWeapon!=computerWeapon){
    if(userWeapon==0){
      if(computerWeapon==1) computerWinning()
      else userWinning()
    }
    else if(userWeapon==1){
      if (computerWeapon==0) userWinning()
      else computerWinning()
    }
    
    else if(userWeapon==2){
      if(computerWeapon==0) computerWinning()
      else userWinning()
    }
  }
  else equalSound.play();setTimeout(roundClear,1500)
}


function userWinning(){
  round.innerHTML=Number(round.innerHTML)+1
  userWinningCounter++;
  userWinningSound.play();
  setTimeout(roundClear,1500);
  if(userWinningCounter==1) playerStars[0].classList.add("bxs-star");
  else if(userWinningCounter==2) playerStars[1].classList.add("bxs-star");
  else{
    playerStars[2].classList.add("bxs-star");
    document.querySelector(".user").classList.add("flex");
    setTimeout(gameClear,2000)
  };
}
function computerWinning(){
  round.innerHTML=Number(round.innerHTML)+1
  computerWinningCounter++;
  computerWinningSound.play();
  setTimeout(roundClear,1500);
  if(computerWinningCounter==1) computerStars[0].classList.add("bxs-star");
  else if(computerWinningCounter==2) computerStars[1].classList.add("bxs-star");
  else{
    computerStars[2].classList.add("bxs-star");
    document.querySelector(".computer").classList.add("flex");
    setTimeout(gameClear,2000)
  }
}

function roundClear(){
  for(let i=0;i<userPictures.length;i++){
    userPictures[i].classList.remove("hidden")
    computerPictures[i].classList.add("hidden")
  }
}
function gameClear(){
  window.location.reload();
}