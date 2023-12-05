import {Button} from "antd";
import {login} from "../services/auth/login";

const Home = () => {

    const click =  () => {
        login("amaury.paillart59820@gmail.com", "root").then((res) => {

        });
    }

    return (
        <>
            <Button onClick={click}>
                Login
            </Button>
        </>

    );
}

export default Home;