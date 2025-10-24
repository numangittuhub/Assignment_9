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
      return <div className="text-center py-12">Loading...</div>;
    }

    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center">My Profile</h2>
            {error && <div className="alert alert-error">{error}</div>}
            <div className="flex justify-center my-4">
              {user.photoURL ? (
                <img src={user.photoURL} alt="User" className="w-24 h-24 rounded-full" />
              ) : (
                <FaUserCircle className="w-24 h-24 text-gray-400" />
              )}
            </div>
            <div className="text-center mb-6">
              <p><strong>Name:</strong> {user.displayName || "Not set"}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
            <form onSubmit={handleUpdateProfile}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="input input-bordered"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="input input-bordered"
                  placeholder="Enter photo URL"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default Profile;