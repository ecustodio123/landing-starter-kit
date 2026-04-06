function Button({ children, variant = "primary", type = "button", className = "", ...props }) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
  }[variant];

  return (
    <button type={type} className={`btn ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

export default Button;
