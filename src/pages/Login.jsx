import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login, googleSignIn, resetPassword } = useAuth();
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
      await resetPassword(email);
      alert("Password reset link sent to your email!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-green-100 to-green-200 p-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-green-200">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Welcome Back!</h2>

        {error && (
          <div className="alert alert-error text-sm sm:text-base mb-4 py-2">{error}</div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <label className="label-text text-gray-700 text-sm sm:text-base mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-control">
            <label className="label-text text-gray-700 text-sm sm:text-base mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full text-sm sm:text-base pr-10 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-green-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <label className="label mt-1">
              <button
                type="button"
                onClick={handleResetPassword}
                className="label-text-alt text-green-600 text-sm sm:text-base hover:underline"
              >
                Forgot Password?
              </button>
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-success w-full text-white font-semibold text-base sm:text-lg mt-4"
          >
            Login
          </button>
        </form>

        <div className="divider text-gray-500 my-6 text-sm sm:text-base">OR</div>

        <button
          className="btn btn-outline w-full flex items-center justify-center gap-2 hover:bg-green-50"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle className="text-green-600" /> Sign in with Google
        </button>

        <p className="text-center mt-6 text-sm sm:text-base text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-600 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
