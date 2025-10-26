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
      const randomPlant = plantsData[Math.floor(Math.random() * plantsData.length)];
      setFeaturedPlant(randomPlant);
    }, []);

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="hero py-8 sm:py-12 bg-gradient-to-r from-green-50 via-green-100 to-green-50">
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    spaceBetween={20}
    centeredSlides={true}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    navigation={true}
    className="mySwiper rounded-xl shadow-lg"
  >
    {/* Slide 1 */}
    <SwiperSlide>
      <div className="hero-content text-center">
        <div className="max-w-xs sm:max-w-md md:max-w-lg px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Bring Nature Home
          </h1>
          <p className="py-2 sm:py-4 text-sm sm:text-base text-green-700 mb-6">
            Discover the best indoor plants for your space.
          </p>
          <Link to="/plants" className="btn btn-primary px-6 py-2 sm:py-3">
            Shop Now
          </Link>
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide>
      <div className="hero-content text-center">
        <div className="max-w-xs sm:max-w-md md:max-w-lg px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Care for Your Plants
          </h1>
          <p className="py-2 sm:py-4 text-sm sm:text-base text-green-700 mb-6">
            Learn expert tips to keep your plants thriving.
          </p>
          <Link to="/plants" className="btn btn-primary px-6 py-2 sm:py-3">
            Learn More
          </Link>
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 3 */}
    <SwiperSlide>
      <div className="hero-content text-center">
        <div className="max-w-xs sm:max-w-md md:max-w-lg px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Green Living
          </h1>
          <p className="py-2 sm:py-4 text-sm sm:text-base text-green-700 mb-6">
            Transform your home with lush greenery.
          </p>
          <Link to="/plants" className="btn btn-primary px-6 py-2 sm:py-3">
            Explore
          </Link>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</section>

        {/* Plant of the Week */}
        {featuredPlant && (
          <section className="py-8 sm:py-12 bg-gradient-to-r from-green-50 to-green-100">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-green-800">Plant of the Week</h2>
              <div className="card bg-base-100 shadow-xl mx-auto max-w-md sm:max-w-lg">
                <figure>
                  <img src={featuredPlant.image} alt={featuredPlant.plantName} className="h-48 sm:h-64 w-full object-cover rounded-t-xl" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-lg sm:text-xl">{featuredPlant.plantName}</h3>
                  <p className="text-sm sm:text-base">{featuredPlant.description}</p>
                  <p className="text-sm sm:text-base"><strong>Price:</strong> ${featuredPlant.price}</p>
                  <p className="text-sm sm:text-base"><strong>Rating:</strong> {featuredPlant.rating} ⭐</p>
                  <Link to={`/plant/${featuredPlant.plantId}`} className="btn btn-primary mt-4">View Details</Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Top Rated Plants */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-green-800">Top Rated Indoor Plants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {plants.map((plant) => (
                <div key={plant.plantId} className="card bg-base-100 shadow-xl">
                  <figure>
                    <img src={plant.image} alt={plant.plantName} className="h-40 sm:h-48 w-full object-cover rounded-t-xl" />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-base sm:text-lg">{plant.plantName}</h3>
                    <p className="text-sm sm:text-base">Price: ${plant.price}</p>
                    <p className="text-sm sm:text-base">Rating: {plant.rating} ⭐</p>
                    <Link to={`/plant/${plant.plantId}`} className="btn btn-primary mt-2">View Details</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plant Care Tips */}
        <section className="py-8 sm:py-12 bg-gradient-to-r from-green-50 to-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-green-800">Plant Care Tips</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-base sm:text-lg">Watering</h3>
                  <p className="text-sm sm:text-base">Water your plants when the top inch of soil feels dry. Avoid overwatering.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-base sm:text-lg">Sunlight</h3>
                  <p className="text-sm sm:text-base">Place plants in bright, indirect light for optimal growth.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-base sm:text-lg">Fertilizing</h3>
                  <p className="text-sm sm:text-base">Use a balanced fertilizer every 4-6 weeks during the growing season.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Green Experts */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-green-800">Meet Our Green Experts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Expert 1" className="h-40 sm:h-48 w-full object-cover rounded-t-xl" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-base sm:text-lg">John Doe</h3>
                  <p className="text-sm sm:text-base">Indoor Plant Specialist</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Expert 2" className="h-40 sm:h-48 w-full object-cover rounded-t-xl" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-base sm:text-lg">Jane Smith</h3>
                  <p className="text-sm sm:text-base">Plant Care Consultant</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" alt="Expert 3" className="h-40 sm:h-48 w-full object-cover rounded-t-xl" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-base sm:text-lg">Emily Brown</h3>
                  <p className="text-sm sm:text-base">Botanical Designer</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef" alt="Expert 4" className="h-40 sm:h-48 w-full object-cover rounded-t-xl" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-base sm:text-lg">Michael Lee</h3>
                  <p className="text-sm sm:text-base">Plant Health Expert</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eco Decor Ideas */}
        <section className="py-8 sm:py-12 bg-gradient-to-r from-green-50 to-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-green-800">Eco Decor Ideas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src="https://images.unsplash.com/photo-1525498128493-380d1990a112" alt="Idea 1" className="h-40 sm:h-48 w-full object-cover rounded-t-xl" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-base sm:text-lg">Living Room Greenery</h3>
                  <p className="text-sm sm:text-base">Add large potted plants like Monstera to create a cozy vibe.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src="https://images.unsplash.com/photo-1599460938858-7914b0067b7c" alt="Idea 2" className="h-40 sm:h-48 w-full object-cover rounded-t-xl" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-base sm:text-lg">Hanging Planters</h3>
                  <p className="text-sm sm:text-base">Use trailing plants like Pothos in hanging planters for a modern look.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Idea 3" className="h-40 sm:h-48 w-full object-cover rounded-t-xl" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-base sm:text-lg">Bookshelf Greenery</h3>
                  <p className="text-sm sm:text-base">Place small plants like ZZ Plant on bookshelves for a touch of nature.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default Home;
