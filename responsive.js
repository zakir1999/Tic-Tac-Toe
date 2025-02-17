let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let cont=document.querySelector(".container");

let flag=true;
let count=0;
const pattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[3,4,5],[2,5,8],[2,4,6],[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("You are on box");
        if(flag){
            box.innerText="X";
            flag=false;
        }else{
            box.innerText="0";
            flag=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const resetGame =()=>{
    flag=true;
    enableboxes();
    msgcontainer.classList.remove('hide');
    // disabledboxes();

};
const enableboxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disabledboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showwinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();

}
function disableClass() {
    document.querySelector('.container').disabled = true;
}
const checkwinner =() =>{
    for(let pat of pattern){
        let pos1=boxes[pat[0]].innerText;
        let pos2=boxes[pat[1]].innerText;
        let pos3=boxes[pat[2]].innerText; 
        if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("Winner");
            showwinner(pos1);
            disableClass();
            return true;
          }
        }
   }

}
resetbtn.addEventListener('click',resetGame);
newGameBtn.addEventListener('click',resetGame);