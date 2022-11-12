import "./style.css";

interface ICustomButton {
  text : string, 
  size : string, 
  icon : JSX.Element;
}

const CustomButton = ({ text, size, icon }: ICustomButton) => {
  let customSize =
    size === "small"
      ? { width: "150px", height: "50px" }
      : { width: "250px", height: "50px" };

  return (
    <div className="btnMore mt-5" style={{ width: customSize.width, height: customSize.height }}>
      <span><>{text} {icon}</></span>
    </div>
  );
};

export default CustomButton;
