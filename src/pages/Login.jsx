import { useState } from "react";
  import { Link, useNavigate, useLocation } from "react-router-dom";
  import { useAuth } from "../context/AuthContext";
  import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const { login, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await login(email, password);
        navigate(from, { replace: true });
      } catch (error) {
        setError(error.message);
      }
    };

    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
        navigate(from, { replace: true });
      } catch (error) {
        setError(error.message);
      }
    };

    const handleResetPassword = async () => {
      if (!email) {
        setError("Please enter your email to reset password.");
        return;
      }
      try {
        await useAuth().resetPassword(email);
      } catch (error) {
        setError(error.message);
      }
    };

    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center">Login</h2>
            {error && <div className="alert alert-error">{error}</div>}
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered w-full"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <label className="label">
                  <button
                    type="button"
                    className="label-text-alt link link-hover"
                    onClick={handleResetPassword}
                  >
                    Forgot Password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <button className="btn btn-outline btn-accent" onClick={handleGoogleSignIn}>
              <FaGoogle className="mr-2" /> Sign in with Google
            </button>
            <p className="text-center mt-4">
              Don't have an account? <Link to="/signup" className="link link-primary">Register</Link>
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default Login;