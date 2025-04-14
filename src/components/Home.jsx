

import React from 'react';
import './Home.css'; // Muista luoda myös tämä tiedosto

const Home = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <div className="hero-text">
          <h1>EläinTrendi – Tyylikkäät vaatteet lemmikeille</h1>
          <p>
            Tervetuloa EläinTrendiin, missä muoti kohtaa karvakaverit!
            Meiltä löydät laadukkaita, mukavia ja söpöjä vaatteita kissoille ja koirille.
          </p>
        </div>
        <img
          src="src/assets/images/homepage.jpg"
          alt="Lemmikki vaatteissa"
          className="hero-image"
        />
      </header>

      <section className="about">
        <h2>Miksi valita meidät?</h2>
        <ul>
          <li>✔️ Laadukkaat ja kestävät materiaalit</li>
          <li>✔️ Trendikkäät mallit pienille ja suurille</li>
          <li>✔️ Suomalainen asiakaspalvelu</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
