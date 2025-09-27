export default function Friend({friend}){
    const {name, email} = friend;
    return(
        <div style={{border: '2px solid yellow', margin: '10px'}}>
            <h3>Name: {name} </h3>
            <p>Email: {email}</p>
        </div>
    )
}