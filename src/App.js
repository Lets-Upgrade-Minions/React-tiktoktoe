import React, {useState} from "react";
import Icon from "./Icon/Icon"
// importing Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  let tiktokArray = new Array(9).fill("")
  let [winMessage, setWinMessage] = useState("")
  let [isCross, setIsCross] = useState(true)
  
  // game reload logic 
  const reloadGame = () => {
    tiktokArray.fill("")
    setWinMessage("")
    setIsCross(true)
  }

  // win Logic 
  const checkWinner = () => {
      // winner and draw logic
  }

  // mark your array 
  const markTiktokArray = (index) => {
        if(winMessage){
            return toast.error('The Game is already over', {
              position: "bottom-center",
              });
        }
        else if(tiktokArray[index] !== ""){
            return toast.error('Already Marked', {
              position: "bottom-center",
              });
        }
        else{
          tiktokArray[index] =  isCross ? "cross" : "circle"
          setIsCross(!isCross)
        }
        checkWinner()
  }


// ui
  return (
    <div>
      <Icon />
    </div>
  );
}
export default App;
