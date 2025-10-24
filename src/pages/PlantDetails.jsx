import { useState, useEffect } from "react";
  import { useParams, useNavigate, useLocation } from "react-router-dom";
  import { useAuth } from "../context/AuthContext";
  import plantsData from "../data/plants.json";
  import { toast } from "react-toastify";

  const PlantDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [plant, setPlant] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "" });

    useEffect(() => {
      if (!user) {
        navigate("/login", { state: { from: location } });
      } else {
        const foundPlant = plantsData.find((p) => p.plantId === parseInt(id));
        setPlant(foundPlant);
      }
    }, [user, id, navigate, location]);

    const handleSubmit = (e) => {
      e.preventDefault();
      toast.success("Consultation booked successfully!");
      setFormData({ name: "", email: "" });
    };

    if (!plant) {
      return <div className="text-center py-12">Loading...</div>;
    }

    return (
      <div className="container mx-auto py-12">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={plant.image} alt={plant.plantName} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{plant.plantName}</h2>
            <p>{plant.description}</p>
            <p><strong>Category:</strong> {plant.category}</p>
            <p><strong>Price:</strong> ${plant.price}</p>
            <p><strong>Rating:</strong> {plant.rating} ⭐</p>
            <p><strong>Stock:</strong> {plant.availableStock}</p>
            <p><strong>Care Level:</strong> {plant.careLevel}</p>
            <p><strong>Provider:</strong> {plant.providerName}</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-8">
          <div className="card-body">
            <h2 className="card-title">Book Consultation</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default PlantDetails;