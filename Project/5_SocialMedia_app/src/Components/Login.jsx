import React from "react";

const Login = () => {
  return (
    <div className="d-flex justify-content-center">
      <form className="w-50 p-5 ">
        <h1 class="h3 mb-4 fw-normal text-center">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            className="form-control mb-4"
            id="floatingInput"
            placeholder="name@example.com"
            fdprocessedid="sd1oe5"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            className="form-control mb-4"
            id="floatingPassword"
            placeholder="Password"
            fdprocessedid="avf9gt"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="form-check text-start my-3">
          <input
            class="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button
          class="btn btn-primary w-100 py-2"
          type="submit"
          fdprocessedid="ckiqmf"
        >
          Sign in
        </button>
        <p class="mt-5 mb-3 text-body-secondary text-center">© 2017–2024</p>
      </form>
    </div>
  );
};

export default Login;
