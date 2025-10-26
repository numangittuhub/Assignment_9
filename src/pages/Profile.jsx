import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: location } });
    }
  }, [user, navigate, location]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await updateUserProfile(displayName, photoURL);
      toast.success("Profile updated successfully!");
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-green-700 text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-green-100 to-green-200 p-4">
      <div className="w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transition-transform hover:scale-[1.01]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-6">
          My Profile
        </h2>

        {error && (
          <div className="alert alert-error text-sm sm:text-base mb-4">{error}</div>
        )}

        <div className="flex flex-col items-center mb-6">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User"
              className="w-24 h-24 rounded-full border-4 border-green-300 shadow-md object-cover"
            />
          ) : (
            <FaUserCircle className="w-24 h-24 text-gray-400" />
          )}
          <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">
            {user.displayName || "User"}
          </h3>
          <p className="text-sm sm:text-base text-gray-500">{user.email}</p>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="label-text text-gray-700 text-sm sm:text-base">
              Full Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="input input-bordered w-full mt-1 text-sm sm:text-base"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="label-text text-gray-700 text-sm sm:text-base">
              Photo URL
            </label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full mt-1 text-sm sm:text-base"
              placeholder="Enter photo URL"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-full mt-4 sm:mt-6 text-white text-base sm:text-lg"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
