<<<<<<< HEAD
import SearchComponent from "../MVPComponents/SearchComponent";


const Header = ({addToCart}) => {
    return (
        <div>
            <h2>This is the header</h2>
            <SearchComponent addToCart={addToCart} />
        </div>
    )
=======
const Header = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold underline">This is the header</h2>
    </div>
  );
>>>>>>> main
};

export default Header;
