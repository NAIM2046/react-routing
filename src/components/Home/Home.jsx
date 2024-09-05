import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    const navigaton = useNavigation() ;
    return (
        <div>
            <Header></Header>
            <h3>this is a home page </h3>
            {
                navigaton.state === "loading" ?
                // eslint-disable-next-line react/jsx-no-undef
                <P>Loading ... </P> : <Outlet></Outlet> 
            }
            
        </div>
    );
};

export default Home;