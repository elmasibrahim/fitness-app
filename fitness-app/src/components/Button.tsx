interface Props {
  color: string;
  icon: string;
  onClick: () => void;
}

const Button = ({ color, icon, onClick }: Props) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      <i className={`bi bi-${icon}`}></i>
    </button>
  );
};

export default Button;
