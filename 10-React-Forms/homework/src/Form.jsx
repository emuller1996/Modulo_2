import React from 'react';


export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }

  return errors;
};


export default function Form() {
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});


  // Form.jsx

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
  return (
    <div>
      <form>
        <div>
          <label>Username:</label>
          <input className={errors.username && 'danger'} type="text" name="username" onChange={(e) => handleInputChange(e)} value={input.username} />
          {errors.username && (
            <p className="danger">{errors.username}</p>
          )}
          <br />
          <label>Password:</label>
          <input className={errors.password && 'danger'} type="password" name="password" id="password" onChange={(e) => handleInputChange(e)} value={input.password} />
          {errors.password && (
            <p className="danger">{errors.password}</p>
          )}
        </div>
      </form>
    </div>
  )
}
