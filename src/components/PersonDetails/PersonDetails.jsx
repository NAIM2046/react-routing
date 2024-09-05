import { useLoaderData, useNavigate } from "react-router-dom";


const PersonDetails = () => {
    const person = useLoaderData() ;
    const navigate = useNavigate() ;
    const handleGoback=()=>{
        navigate(-1) ;
    }
    return (
        <div>
            <h2>person Details this is :</h2>
            <div>
                <h1> Name : {person.name}</h1>
                <h3>User name : {person.username}</h3>
                <h4>User gmail : {person.email}</h4>

            </div>
            <button onClick={handleGoback}>Go Back</button>
        </div>
    );
};

export default PersonDetails;