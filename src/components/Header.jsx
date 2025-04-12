import Logo from "../assets/ReactLogo.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const Description = reactDescriptions[genRandomInt(2)];
  return (
    <div className="flex flex-col items-center p-4">
      <img src={Logo} alt="reactLogo" className=" size-64 " />
      <h1 className="text-7xl font-bold bg-text-gradient bg-clip-text text-transparent text-center">
        React Essentials
      </h1>
      <p className="font-bold text-[#8964b0] mt-6 text-lg text-center">
        {Description} React concepts you will need for almost any app you are
        going to build
      </p>
    </div>
  );
}
export default Header;
