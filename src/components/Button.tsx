type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button className={`${className} button-ui`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
