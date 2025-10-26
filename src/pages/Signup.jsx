import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { signup, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;
    if (!hasUpperCase)
      return "Password must contain at least one uppercase letter.";
    if (!hasLowerCase)
      return "Password must contain at least one lowercase letter.";
    if (!isLongEnough)
      return "Password must be at least 6 characters long.";
    return "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }
    try {
      await signup(email, password, name, photoURL);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-green-100 to-green-200 p-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-green-200">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Plz create an Account
        </h2>

        {error && (
          <div className="alert alert-error text-sm sm:text-base mb-4 py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label-text text-gray-700 text-sm sm:text-base mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-200"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
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

          {/* Photo URL */}
          <div className="form-control">
            <label className="label-text text-gray-700 text-sm sm:text-base mb-1">
              Photo URL
            </label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-200"
              placeholder="Enter a photo link (optional)"
            />
          </div>

          {/* Password */}
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
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="btn btn-success w-full text-white font-semibold text-base sm:text-lg mt-4"
          >
            Register
          </button>
        </form>

        <div className="divider text-gray-500 my-6 text-sm sm:text-base">OR</div>

        {/* Google Signup */}
        <button
          className="btn btn-outline w-full flex items-center justify-center gap-2 hover:bg-green-50"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle className="text-green-600" /> Sign up with Google
        </button>

        {/* Redirect to login */}
        <p className="text-center mt-6 text-sm sm:text-base text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
