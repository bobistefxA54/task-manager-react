interface ButtonProps {
  name: string;
  color?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  onMouseEnter?: () => void;
}

const Button = ({
  name,
  color = "primary",
  disabled = false,
  type = "button",
  onClick,
  onMouseEnter,
}: ButtonProps) => {
  return (
    <button
      className={"btn " + color}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      disabled={disabled}
      type={type}
    >
      {name}
    </button>
  );
};

export default Button;
