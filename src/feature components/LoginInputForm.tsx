interface LoginInputFormProps {
  inputs: string[];
  styles?: string;
  emailColor?: string;
  passwordColor?: string;
  onInputChange: (index: number, value: string) => void;
  onBlur?: () => void;
}

const LoginInputForm = ({
  inputs,
  styles,
  emailColor,
  passwordColor,
  onInputChange,
  onBlur,
}: LoginInputFormProps) => {
  return (
    <div className="d-flex flex-column gap-2">
      {inputs.map((input, index) => (
        <input
          type={input === "Password" ? "password" : "text"}
          className={styles}
          key={index}
          placeholder={input}
          style={{
            borderColor: input === "Email" ? emailColor : passwordColor,
          }}
          onChange={(e) => onInputChange(index, e.target.value)}
          onBlur={onBlur}
        />
      ))}
    </div>
  );
};

export default LoginInputForm;
