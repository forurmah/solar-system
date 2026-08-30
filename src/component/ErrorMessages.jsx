function ErrorMessages({ message }) {
  if (!message) return null;

  return <div className="error-container" role="alert"><p className="error">{message}</p></div>;
}

export default ErrorMessages;
