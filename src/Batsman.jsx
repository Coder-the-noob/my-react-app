import { useState } from "react";

export default function BatsMan() {
    const [runs, setRuns] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleDouble = () => {
        const updateRuns = runs + 2;
        setRuns(updateRuns);
    }
    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns);
    }
    const handleSix = () => {
        const updateRuns = runs + 6;
        setRuns(updateRuns);
    }
    

  return (
    <div style={{border: "2px solid skyblue", margin: "10px", padding: "10px"}}>
      <h3>Player Name: Matha Mota Player</h3>
      <h1>Score: {runs} </h1>
      {
        runs >= 50 && <p>Congratulations!🎉🎉 Half Century Done.</p>
      }
      <button  onClick={handleSingle}>Singles</button>
      <button onClick={handleDouble}>Doubles</button>
      <button onClick={handleFour}>Fours</button>
      <button onClick={handleSix}>Six's</button>
    </div>
  );
}
