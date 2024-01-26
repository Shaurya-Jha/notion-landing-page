import Logo from "./_components/logo";
import { Menu } from "./_components/menu";

const Navbar = () => {
    return ( 
        <div className="flex items-center justify-center">
            <Logo />
            <Menu />
        </div>
     );
}
 
export default Navbar;