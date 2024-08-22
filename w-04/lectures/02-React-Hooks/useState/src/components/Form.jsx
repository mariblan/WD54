import { useState } from 'react';

function Form() {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({ email: '', password: '' });

  //   const handleChangeEmail = (event) => {
  //     setEmail(event.target.value);
  //   };
  //   const handleChangePassword = (event) => {
  //     setPassword(event.target.value);
  //   };

  const handleFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('email', formData.email);
    console.log('password', formData.password);
    localStorage.setItem('email', formData.email);
    localStorage.setItem('password', formData.password);
  };
  console.log('formData', formData);
  return (
    <form onSubmit={handleSubmit}>
      <legend>Log In</legend>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          onChange={handleFormData}
          type='email'
          id='email'
          name='email'
          value={formData.email}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          onChange={handleFormData}
          type='password'
          id='password'
          name='password'
          value={formData.password}
        />
      </div>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          onChange={handleFormData}
          type='text'
          id='name'
          name='name'
          value={formData.name}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;
