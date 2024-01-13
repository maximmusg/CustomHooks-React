import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {
  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };

  const { formState, userName, email, password, onInputChange } =
    useForm(initialForm);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your UserName"
          value={userName}
          onChange={onInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={onInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="Password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
