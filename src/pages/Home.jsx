import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import plantsData from "../data/plants.json";

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [featuredPlant, setFeaturedPlant] = useState(null);

  useEffect(() => {
    setPlants(plantsData);
    // Randomly select a plant for "Plant of the Week"
    const randomPlant =
      plantsData[Math.floor(Math.random() * plantsData.length)];
    setFeaturedPlant(randomPlant);
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero bg-base-200 py-12">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-4xl font-bold">Bring Nature Home</h1>
                <p className="py-6">
                  Discover the best indoor plants for your space.
                </p>
                <Link to="/plants" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-4xl font-bold">Care for Your Plants</h1>
                <p className="py-6">
                  Learn expert tips to keep your plants thriving.
                </p>
                <Link to="/plants" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-4xl font-bold">Green Living</h1>
                <p className="py-6">
                  Transform your home with lush greenery.
                </p>
                <Link to="/plants" className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Plant of the Week */}
      {featuredPlant && (
        <section className="py-12 bg-base-200">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Plant of the Week
            </h2>
            <div className="card bg-base-100 shadow-xl mx-auto max-w-lg">
              <figure>
                <img
                  src={featuredPlant.image}
                  alt={featuredPlant.plantName}
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{featuredPlant.plantName}</h3>
                <p>{featuredPlant.description}</p>
                <p>
                  <strong>Price:</strong> ${featuredPlant.price}
                </p>
                <p>
                  <strong>Rating:</strong> {featuredPlant.rating} ⭐
                </p>
                <Link
                  to={`/plant/${featuredPlant.plantId}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Top Rated Plants */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Top Rated Indoor Plants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <div key={plant.plantId} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={plant.image}
                    alt={plant.plantName}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{plant.plantName}</h3>
                  <p>Price: ${plant.price}</p>
                  <p>Rating: {plant.rating} ⭐</p>
                  <Link
                    to={`/plant/${plant.plantId}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Care Tips */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Plant Care Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Watering</h3>
                <p>
                  Water your plants when the top inch of soil feels dry. Avoid
                  overwatering.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Sunlight</h3>
                <p>Place plants in bright, indirect light for optimal growth.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Fertilizing</h3>
                <p>
                  Use a balanced fertilizer every 4–6 weeks during the growing
                  season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Green Experts */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Meet Our Green Experts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Expert 1"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">John Doe</h3>
                <p>Indoor Plant Specialist</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Expert 2"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Jane Smith</h3>
                <p>Plant Care Consultant</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  alt="Expert 3"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Emily Brown</h3>
                <p>Botanical Designer</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef"
                  alt="Expert 4"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Michael Lee</h3>
                <p>Plant Health Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
