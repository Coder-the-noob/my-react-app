export default function FOOD({food, isHungry}){
    return (
        <div style={{border: "2px solid red", color: "skyblue", margin: "10px", padding: "10px"}}>
            <ul>
                <li>food Item: {food}, Hungry: {isHungry ? "2 Plates" : "1 Plate"}</li>
                
            </ul>
            
        </div>
    )
}