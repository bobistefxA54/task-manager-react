interface FormInputProps {
  label: string;
  type: string;
  id: string;
}

const FormInput = ({ label, type, id }: FormInputProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id={id} />
    </div>
  );
};

export default FormInput;
