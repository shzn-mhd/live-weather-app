import React from "react";

const FAQ = () => {
  return (
    <div className="faq">
      <h2>FAQ</h2>
      <ul>
        <li><strong>How is the weather data sourced?</strong> We use OpenWeather API for reliable forecasts.</li>
        <li><strong>Is this app free?</strong> Yes, it is completely free for farmers.</li>
        <li><strong>Can I use it for locations other than Badulla?</strong> Future updates will include location-based weather.</li>
      </ul>
    </div>
  );
};

export default FAQ;
