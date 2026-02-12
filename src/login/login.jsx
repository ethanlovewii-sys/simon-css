import React from 'react';
import {register} from '../service';


export function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    register(email, password);
  }

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <h1>Welcome to Simon</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input className="form-control" type="text" placeholder="your@email.com" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🔒</span>
            <input className="form-control" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary">Login</button>
          <button type="submit" className="btn btn-secondary">Create</button>
        </form>
      </div>
    </main>
  );
}