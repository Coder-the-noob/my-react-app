import { use } from "react";
import Friend from './Friend';

export default function User({fetchUser}){
    const users = use(fetchUser);

    return(
        <div style={{border: '2px solid yellow', borderRadius: '10px', margin: '10px', padding: '10px'}}>
            <h1>User: {users.length} </h1>
            {
                users.map(friend => <Friend friend ={friend}></Friend>)
            }
        </div>
    )
}