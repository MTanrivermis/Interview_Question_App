import logo from "../helper/logo192.png";

const Header = () => {
  return (
    <div className=" container d-flex  p-5 align-items-center">
      <div>
        <img
          style={({ width: "100px" }, { height: "100px" })}
          src={logo}
          alt=""
        />
      </div>
      <h2 className="text-center text-white display-5 mx-4">
        REACT INTERVIEW QUESTION AND ANSWER
      </h2>
    </div>
  );
};

export default Header;
