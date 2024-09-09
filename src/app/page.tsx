'use client'
import React, { useEffect } from "react";
import Footer from "./(Public_Components)/Footer";
import ScoreBlock from "./(Public_Components)/ScoreBlock";
import RockPaperScissors from "./(Public_Components)/RockPaperScissors";

export default function Home() {
  const [score, setScore] = React.useState(0);
  const [userChoice, setUserChoice] = React.useState({ name: "", color: "", image: "" });
  const choices = [
    {
      name: "Rock",
      color: "#d93a55",
      image: "/icon-rock.svg",
    },
    {
      name: "Paper",
      color: "#5470f2",
      image: "/icon-paper.svg",
    },
    {
      name: "Scissor",
      color: "#eba51e",
      image: "/icon-scissors.svg",
    },
  ]
  const [houseChoice, setHouseChoice] = React.useState<{ name: string; color: string; image: string; } | null>(null);
  const [result, setResult] = React.useState("");
useEffect(() => {
  const timeoutId = setTimeout(() => {
    const random = Math.floor(Math.random() * choices.length);
    setHouseChoice(choices[random]);
    console.log(houseChoice,"houseChoice");
  }, 2000);

  return () => clearTimeout(timeoutId); 
}, [userChoice.name,userChoice.color,userChoice.image]);
useEffect(() => {
  if(houseChoice ?.name == "" || houseChoice?.color == "" || houseChoice?.image == "" || houseChoice == "") return;
  if(userChoice.name === houseChoice?.name){
    console.log("draw");
    setResult("draw");
  }
  if(userChoice.name === "Rock" && houseChoice?.name === "Scissor"){
    console.log("win");
    setResult("win");
    setScore(score + 1);
  }
  if(userChoice.name === "Rock" && houseChoice?.name === "Paper"){
    console.log("lose");
    setResult("lose");
  }
  if(userChoice.name === "Paper" && houseChoice?.name === "Rock"){
    console.log("win");
    setResult("win");
    setScore(score + 1);
  }
  if(userChoice.name === "Paper" && houseChoice?.name === "Scissor"){
    console.log("lose");
    setResult("lose");
  }
  if(userChoice.name === "Scissor" && houseChoice?.name === "Paper"){
    console.log("win");
    setResult("win");
    setScore(score + 1);

  }
  if(userChoice.name === "Scissor" && houseChoice?.name === "Rock"){
    console.log("lose");
    setResult("lose");
  }

}, [houseChoice]);
console.log(houseChoice,"houseChoice");
  return (
    <div className="h-screen w-full bg-background-radial">
      <div className="h-full w-full flex justify-center ">
        <div className="size-full  my-5 flex flex-col items-center ">
        <ScoreBlock score={score} />
        {userChoice.color != "" && userChoice.name != "" && userChoice.image != "" ? (
          <>
<div className=" flex flex-row justify-between gap-24 mt-12">
  <div className="h-full flex flex-col items-center">
    <h1 className="text-white text-3xl font-semibold my-5 z-10">YOU PICKED</h1>
<div className={`bg-[${userChoice.color}] w-48 h-48   rounded-full flex items-center justify-center`}>
  <div style={ result == "win" ?{ 
        boxShadow: `  0 0 0px 25px ${userChoice.color},0 0 0px 70px #283150,0 0 0px 100px #2B3457,  0 0 0px 140px #30395B80` 
      } : undefined} className="shadow-inner  p-4 w-40 h-40 rounded-full border-t-[7px] border-[#b9bed3a9] bg-white flex items\ justify-center">
    <img src={userChoice.image} className='w-[70px] h-[70px] my-auto' alt='icon-rock.svg'/> 
  </div>
</div>
</div>
{result != ""&& (
  <div className=" h-full flex flex-col items-center justify-center ">
<h1 className="text-white text-4xl font-bold my-5">{result == "lose" ? 'YOU LOSE' : result =="win"  ?'YOU WIN' : "DRAW"}</h1>
<button onClick={() => {setHouseChoice({name:"",color:"",image:""}),setUserChoice({name:"",color:"",image:""}),setResult("")}} className={`py-4 px-12 bg-white tracking-widest rounded-lg ${result == "lose" ? "text-red-500":"text-black"}`}>
  PLAY AGAIN
</button>
</div>
)}

<div className="h-full flex flex-col items-center">
<h1 className="text-white text-3xl font-semibold my-5 z-10">THE HOUSE PICKED</h1>
{houseChoice?.color != "" && houseChoice?.image != "" && houseChoice?.name!="" && houseChoice != null ? (
  <>
  <div className={`bg-[${houseChoice?.color}] w-48 h-48   rounded-full flex items-center justify-center`}>
  <div style={ result == "lose" ?{ 
        boxShadow: `  0 0 0px 25px ${houseChoice.color},0 0 0px 70px #283150,0 0 0px 100px #2B3457,  0 0 0px 140px #30395B80` 
      } : undefined} className="shadow-inner  p-4 w-40 h-40 rounded-full border-t-[7px] border-[#b9bed3a9] bg-white flex items\ justify-center">
    <img src={houseChoice?.image} className='w-[70px] h-[70px] my-auto' alt='icon-rock.svg'/> 
  </div>
</div></>
):(
  <div className="w-48 h-48 bg-[#182341] rounded-full"></div>
)}

</div>
</div>

</>
        ):(
          <RockPaperScissors onClick={setUserChoice}  />

        )}
        </div>
      </div>
<Footer />
    </div>
  );
}
