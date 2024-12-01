interface Props {
  children: string;
}

const Control = ({ children }: Props) => {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="colorSwitch"
      />
      <label className="form-check-label" htmlFor="colorSwitch">
        {children}
      </label>
    </div>
  );
};

export default Control;
