import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Farmer's Weather Companion</h1>
        <p>Your trusted partner in farming success. Plan your activities with accurate weather forecasts and agricultural insights.</p>
      </section>

      <section className="farmers-section">
        <h2>About Farmers</h2>
        <p>
          Farmers are the backbone of our society, ensuring food security and sustainable living. This platform is dedicated to supporting their efforts by
          providing tools and resources to enhance productivity and adapt to changing weather conditions.
        </p>
        <img
          src="https://static.vecteezy.com/system/resources/previews/031/608/503/large_2x/farmer-working-on-a-vegetable-field-in-the-morning-concept-of-agriculture-ai-generated-photo.jpg" 
          alt="Farmers working in the field"
        />
      </section>

      <section className="articles-section">
        <h2>Agriculture Articles</h2>
        <div className="articles">
          <article>
            <h3>Modern Farming Techniques</h3>
            <p>
              Explore innovative methods like precision agriculture, drip irrigation, and crop rotation to maximize yield and minimize resource usage.
            </p>
            <a href="https://example.com/farming-techniques" target="_blank" rel="noopener noreferrer">Read More</a>
          </article>
          <article>
            <h3>Weather-Resilient Crops</h3>
            <p>
              Learn about crops that can withstand extreme weather conditions and improve your farming outcomes despite climate change.
            </p>
            <a href="https://example.com/weather-resilient-crops" target="_blank" rel="noopener noreferrer">Read More</a>
          </article>
          <article>
            <h3>Soil Health and Fertility</h3>
            <p>
              Understand the importance of maintaining soil health for long-term productivity. Tips on soil testing, organic farming, and fertilizers.
            </p>
            <a href="https://example.com/soil-health" target="_blank" rel="noopener noreferrer">Read More</a>
          </article>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Agriculture Photo Gallery</h2>
        <div className="gallery">
          <img
            src="https://media.istockphoto.com/id/965148388/photo/green-ripening-soybean-field-agricultural-landscape.jpg?s=612x612&w=0&k=20&c=cEVP3uj34-5obt-Jf_WI3O9qfP6tVrFaQIv1rBvvpzc="
            alt="Farm fields"
          />
          <img
            src="https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=0&k=20&c=uJDy7MECNZeHDKfUrLNeQuT7A1IqQe89lmLREhjIJYU="
            alt="Tractors in action"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5811566d20099e23814644fd/21af2929-817e-45ea-a92b-3aaa12a978d7/Dammanns+Garden+Company+-+When+to+Harvest+Garden+Crops-vegetable+harvest.jpg"
            alt="Harvested crops"
          />
          <img
            src="https://images.stockcake.com/public/0/8/7/08719683-8790-4169-9bd0-aa7fe917acf2_large/farmers-planting-crops-stockcake.jpg"
            alt="Farmers planting crops"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
