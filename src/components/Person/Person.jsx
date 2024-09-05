import './Person.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Person = ({user}) => {
    const {id, name , username , email} = user ;
    const navigate = useNavigate();
    const handleDetails =()=>{
        navigate(`/user/${id}`) ;
    }
    return (
        <div className="person">
              <h2> ID: {id}</h2>
            <h3>UserName : {username}</h3>
           
            <button onClick={handleDetails}>show Detail</button>
        </div>
    );
};

export default Person;