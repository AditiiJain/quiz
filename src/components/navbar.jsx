import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="p-3 bg-[#41729F]">
        <div className="w-9 h-9">
          <img src={Logo} alt="logo" className="w-full h-full" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
