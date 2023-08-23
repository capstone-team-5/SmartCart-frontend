import { Link } from 'react-router-dom';

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