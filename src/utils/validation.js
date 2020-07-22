export default function validation(setIsAuthenticate, credentials, errors, setErrors) {
  if (credentials.username.length !== 0 && credentials.password.length !== 0) {
    if (errors.username.length === 0 && errors.password.length === 0 && errors.error.length === 0) {
      document.cookie = 'loggedin=true';
      return setIsAuthenticate(true);
    }
  }
  setErrors({ ...errors, error: 'Please provide both your username and password!' });
}
