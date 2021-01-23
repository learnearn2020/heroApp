import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // te permite mandar el usuario a otra pagina guardando la historia
    // history.push("/marvel");
    // te permite mandar el usuario a otra pagina sin guardando la historia
    history.replace("/marvel");
  };
  return (
    <div className="container  mt-5">
      <h1>Login</h1>
      <hr />
      <form>
        <div className="row">
          <div className="col-md-4 orm-group">
            <input placeholder="username" className="form-control" />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary mt-3"
              onClick={handleLogin}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
