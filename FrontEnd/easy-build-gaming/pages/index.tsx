import {Button} from "antd";
import {login} from "../services/auth/login";

const Home = () => {

    const click =  () => {
        login("email", "password").then((res) => {

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