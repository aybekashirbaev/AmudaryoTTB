import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div id="home">
        <div class="home-title" data-aos="fade-up">
          <h1>Amudaryo TTB</h1>
          <p>
            XALQIMIZ SALOMATLIGI HAMMA NARSADAN USTUN VA QADRLI.
            SH.MIRZIYOYEV
          </p>
          <Link to="/news">Yangiliklar</Link>
        </div>
      </div>

    </div>
  );
};

export default Home;