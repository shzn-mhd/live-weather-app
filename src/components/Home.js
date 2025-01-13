import React from "react";
import "./Home.css";
import c1 from './assets/c1.jpg';
import c2 from './assets/c2.jpg';
import c3 from './assets/c3.jpg';
import c4 from './assets/c4.jpg';
import c5 from './assets/c5.jpg';
const Home = () => {
  return (
    <div className="home">
      {/* <section className="hero">
        <h1>Welcome to Farmer's Weather Companion</h1>
        <p><h2>Your trusted partner in farming success. Plan your activities with accurate weather forecasts and agricultural insights.</h2></p>
      </section>
      <br></br> */}
      
      <section className="hero">
        <h2>Introduction</h2>
        <p>
        <p>Cabbage (Brassica oleracea) is a widely cultivated leafy vegetable belonging to the Brassicaceae family, known for its versatility and nutritional benefits. It is a cool-season crop that can be grown in various climates, making it a staple in many agricultural regions around the world. Cabbage is rich in essential vitamins like Vitamin C, K, and folate, along with dietary fiber and antioxidants, making it an important vegetable for maintaining a healthy diet. </p>
        <p>Cabbage is grown for its dense, leafy heads, which can vary in color from green to red to purple, and is used in various culinary dishes, from salads and soups to fermented products like sauerkraut. It is also an important crop for farmers due to its relatively easy cultivation and high yield potential. However, like many crops, cabbage is susceptible to pests, diseases, and environmental factors, which makes proper care and management essential for optimal growth and quality.</p>
        <p>In this guide, we will explore the essential aspects of cabbage farming, including soil preparation, planting methods, irrigation techniques, pest control, and harvesting strategies, to ensure a successful and sustainable crop production.</p>
        </p>
      </section>


      <section className="farmers-section">
        <h2>Problem Statement</h2>
        <p>
        Cabbage farmers in the Badulla district of Uva Province are facing significant challenges due to erratic rainfall. The unpredictable weather, including long dry periods followed by heavy
        rainfall, is affecting crop yields and quality. Farmers struggle to plan their planting, irrigation, and harvesting schedules, leading to financial losses. The lack of reliable, real-time weather information makes it difficult for farmers to make informed decisions. There is a clear need for a 
        web-based platform that provides accurate weather forecasts and practical advice to help farmers 
        in Badulla manage their crops more effectively and improve productivity despite changing weather patterns
        </p>
        {/* <img
          src={c2}
          alt="Farmers working in the field"
        /> */}
      </section>

      {/* <section className="articles-section">
        <h2>Further details about this approach</h2>
        <div className="articles">
          <article>
            <h3>Cabbage: A Nutrient-Packed Leafy Vegetable for Global Cultivation</h3>
            <p>
            Cabbage (Brassica oleracea) is a widely cultivated leafy vegetable belonging to the Brassicaceae family, known for its versatility and nutritional benefits. It is a cool-season crop that can be grown in various climates, making it a staple in many agricultural regions around the world. Cabbage is rich in essential vitamins like Vitamin C, K, and folate, along with dietary fiber and antioxidants, making it an important vegetable for maintaining a healthy diet.</p>
            <a href="https://example.com/farming-techniques" target="_blank" rel="noopener noreferrer">Read More</a>
          </article>
          <article>
            <h3>Cabbage Cultivation: Culinary Uses, Farming Importance, and Growth Challengess</h3>
            <p>
            Cabbage is grown for its dense, leafy heads, which can vary in color from green to red to purple, and is used in various culinary dishes, from salads and soups to fermented products like sauerkraut. It is also an important crop for farmers due to its relatively easy cultivation and high yield potential. However, like many crops, cabbage is susceptible to pests, diseases, and environmental factors, which makes proper care and management essential for optimal growth and quality.            </p>
            <a href="https://example.com/weather-resilient-crops" target="_blank" rel="noopener noreferrer">Read More</a>
          </article>
          <article>
            <h3>Comprehensive Guide to Successful and Sustainable Cabbage Farming</h3>
            <p>
            In this guide, we will explore the essential aspects of cabbage farming, including soil preparation, planting methods, irrigation techniques, pest control, and harvesting strategies, to ensure a successful and sustainable crop production.
            </p>
            <a href="https://example.com/soil-health" target="_blank" rel="noopener noreferrer">Read More</a>
          </article>
        </div>
      </section> */}

      <div className="weather-det">
      <h2>Objectives</h2>
      <ul>
        <li><strong>To analyze the impact of erratic rainfall on cabbage production in the Badulla district of Sri Lanka, identifying key challenges faced by farmers in terms of crop yield, quality, and profitability due to unpredictable weather patterns. To develop a web-based platform that provides real-time, accurate, and localized weather 
          forecasts to cabbage farmers in Badulla district, enabling them to make informed decisions regarding sowing, irrigation, and harvesting.</strong></li>
        
      </ul>
      </div>
        <br></br>
      <div className="weather-det">
          <p> <h2>Environmental Conditions </h2></p>
          <p> <strong> Temperature Range:</strong> Cabbage prefers temperatures between *15°C and 20°C (59°F to 68°F) </p>
          <p> <h2> Soil</h2></p>
          <p> <strong>Soil Type:</strong> Loamy soils are preferred </p>
          <p> <strong>Soil pH: </strong>Cabbage thrives in slightly acidic to neutral soils with a pH range of 6.0 to 6.8.</p>
          <p><strong>Water Requirements:</strong>Cabbage needs about<strong> 1-1.5 inches of water per week</strong>depending on the weather conditions.</p>
      </div>

      <section className="gallery-section">
        <h2>Agriculture Photo Gallery</h2>
        <div className="gallery">
          <img
            src={c1}
            alt="Cabbage"
          />
          <img
            src={c3}
            alt="cabbage 2"
          /> 
          <img
            src={c4}
            alt="cabbage 3"
          />
          <img
            src={c5}
            alt="cabbage 5"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
