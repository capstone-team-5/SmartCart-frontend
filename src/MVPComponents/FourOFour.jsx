import { Link } from 'react-router-dom';

//This function is the error page, will take user back to the home page

const FourOFourComponent = () => {
    return (
        <div>
            <h1>
                <h1> 404 This page does not exist. Please visit our <Link to='/'>home page</Link></h1>
            </h1>
        </div>
    )
};

export default FourOFourComponent;