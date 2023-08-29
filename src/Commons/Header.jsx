
import SearchComponent from "../MVPComponents/SearchComponent";


const Header = ({addToCart}) => {
    return (
        <div>
            <h2>This is the header</h2>
            <SearchComponent addToCart={addToCart} />
        </div>
    )
};

export default Header;
