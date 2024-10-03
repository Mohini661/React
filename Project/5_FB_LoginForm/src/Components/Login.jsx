const Login = () => {
  return (
    <div className="login bg-white w-1/4 h-[40%] rounded-lg shadow-md">
      <form
        action="login"
        className="flex flex-col justify-center items-center p-5 "
      >
        <p className="mb-4 text-lg">Login into Facebook</p>
        <input
          type="text"
          placeholder="Email address or phone number"
          className="w-full p-2 mb-3 outline-none border text-lg rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full outline-none p-2 mb-3 border text-lg rounded-md"
        />
        <button className="w-full bg-blue-500 p-2 mb-3 font-bold text-white text-lg rounded-md">
          Log in
        </button>
        <p className="text-blue-500 mb-3">
          Forgotton account ? <span>Sign Up for Facebook</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
