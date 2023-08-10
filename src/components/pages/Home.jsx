import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div id="home">
        <div class="home-title" data-aos="fade-up">
          <h1>Amudaryo TTB</h1>
          <p>
            Ipsum dolor sit, amet consectetur adipisicing elit. Sapiente vitae
            placeat quo modi repellat corporis molestiae numquam necessitatibus
            sit accusantium cum assumenda cumque, natus ut autem deleniti, earum
            ullam. Explicabo.
          </p>
          <Link to="/news">Yangiliklar</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Home;