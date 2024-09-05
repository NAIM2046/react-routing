import { useLoaderData } from "react-router-dom";
import Person from "../Person/Person";
import './User.css'

const User = () => {
    const users =  useLoaderData() ;
    console.log(users)
    return (
        <div >
            <h4>User page this </h4>
              
            <p>User NUmber {users.length}</p>
            <div className="user">
            {
                users.map(user => <Person key={user.id} user={user}></Person>)
            }
            </div>
           
        </div>
    );
};

export default User;