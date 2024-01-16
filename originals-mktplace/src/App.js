import './App.scss';

function App() {
  return (
    <main>
      <header className="header-container">
        <img src="https://logodownload.org/wp-content/uploads/2019/11/adidas-originals-logo.png" className="logo-pic" alt="" />
        <nav className="menu-options">
          <a href="#gazelle">GAZELLE</a>
          <a href="#spezial">SPEZIAL</a>
          <a href="#samba">SAMBA</a>
          <a href="#campus">CAMPUS</a>
          {/* <a href="best-sellers">BEST SELLERS</a> */}
          <input placeholder="Search" className="searchBar"/>
          <button type="button" className="searchButton">
            <img src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png" className="lupe"alt="" />
          </button>
        </nav>
        <button>
          <div className="btn-face-blue">
            Login
          </div>
          </button>
      </header>
      <div className="content-container">
        <div className="image-container">
          <img src="https://images.squarespace-cdn.com/content/v1/5cd2555994d71a16b3b6ffc1/c4013b7c-2f74-41f0-a11e-8b28a48b4be0/346898663_145124835115329_5428517613208174571_n.jpg" className="harold" alt="" />
          <div className="slogans">
            <h3 className="slogan-1">Back to the originals with <span className='satellite'>SATELLITE STROMPPERS</span></h3>
            <p>UP TO 60% OFF on the best of three stripes.</p> <br />
            <button className='buy-now-btn'>BUY NOW</button>
          </div>
        </div>
      </div>
        <div className="secondary-container">
          <div className="title-shoes">
              <h1>CHOOSE YOUR FAVOURITE</h1>
          </div>
          <div className="shoes">
            <a href="/gazelle" className="shoes-pic">
              <img src="https://izicop.com/cdn/shop/files/snakerstoreAdidas_Gazelle_Indoor_Scarlet_Cloud_White-H06261-0_2048x2048.png?v=1689931454" className="shoespic" alt="" />
              <p className="p-shoes">GAZELLE</p>
            </a>
            <a href="/spezial" className="shoes-pic">
              <img src="https://izicop.com/cdn/shop/files/snakerstoreAdidas_Handball_Spezial_Clear_Pink-IF6561-0_2048x2048.png?v=1690623088" className="shoespic" alt="" />
                <p className="p-shoes">SPEZIAL</p>
            </a>
            <a href="/samba" className="shoes-pic">
              <img src="https://izicop.com/cdn/shop/files/snakerstoreAdidas_Samba_OG_Night_Navy_Cream_White_Gum-ID2056-0_2048x2048.png?v=1694748817" className="shoespic" alt="" />
                <p className="p-shoes">SAMBA</p>
            </a>
            <a href="/campus00s" className="shoes-pic">
              <img src="https://izicop.com/cdn/shop/files/snakerstoreAdidas_Campus_00s_Dark_Green_Cloud_White-H03472-0_2048x2048.png?v=1683277370" className="shoespic" alt="" />
                <p className="p-shoes">CAMPUS 00s</p>
            </a>
          </div>
        </div>
      <div className="container-gazelle">
        <div className="gazelle-text">
          <h1 className="gazelle-h1">GAZELLE</h1>
          <p className="gazelle-p1">Adidas Gazelle is a line of shoes released by Adidas in 1966.<br /> The original use of the shoe was for
            training but then later redesigned to an indoor version for handball.</p> <br />
            <button className='gazelle-btn'>GET YOUR GAZELLE</button>
        </div>
        <div className="image-container-gazelle">
          <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1aa15035f97a4115b4d440e093c0efbc_9366/Tenis_Gazelle_Verde_IG0671_HM3_hover.jpg" className="gazelle" alt="" />
        </div>
      </div>
      <div className="spezial-container">
        <div className="image-container-samba">
          <img src="https://images.asos-media.com/products/adidas-originals-handball-spezial-gum-sole-trainers-in-night-cargo-and-yellow/204869349-1-multi?$n_750w$&wid=750&hei=750&fit=crop" className="spezial" alt="" />
        </div>
        <div className="spezial-text">
          <h1 className="spezial-h1">SPEZIAL</h1>
            <p className="spezial-p1">
            The Casuals movement in football in the 1980s led to the popularity<br /> of these shoes among players from Germany, Holland, and Scandinavia.
            </p> <br />
            <button className='spezial-btn'>GET YOUR SPEZIAL</button>
        </div>
      </div>
      <div className="samba-container">
        <div className="samba-text">
          <h1 className="samba-h1">SAMBA</h1>
            <p className="samba-p1">
            The Samba, a pioneering shoe designed for icy and snowy pitches,<br /> originated in 1950 with a German team wearing an outsole with three suction cups.
              </p> <br />
          <button className='samba-btn'>GET YOUR SAMBA</button>
        </div>
        <div className="image-container-samba">
          <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e95ba1da761d44f79923afaa009e6b91_9366/Tenis_Samba_Ouro_IG7601_HM3_hover.jpg" className="samba" alt="" />
        </div>
      </div>
      <div className="campus-container">
        <div className="image-container-campus">
          <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5665eb87e4d349f1b64976cb450d11de_9366/Tenis_Campus_00s_Branco_ID2070_010_hover_standard.jpg" className="campus" alt="" />
        </div>
        <div className="campus-text">
          <h1 className="campus-h1">CAMPUS 00s</h1>
          <p className="campus-p1">
          The 80's and 90's saw a boom within the world of Hip Hop.
          </p> <br />
          <button className='campus-btn'>GET YOUR CAMPUS 00s</button>
        </div>
      </div>
      <div className="best-seller">
        <h1>BEST SELLERS</h1>
      </div>
      <div className="galery-grid">
        <div className="content">
          <img src="https://izicop.com/cdn/shop/files/snakerstoreAdidas_Gazelle_Indoor_Blue_Dawn-IG4994-0_2048x2048.png?v=1691141632" className="grid-pic" alt="" />
            <h3>GAZELLE INDOOR</h3>
            <p>Originals</p>
            <h5 className="price">$119.99</h5>
            <button className="buy-1">BUY NOW</button>
        </div>
        <div className="content">
          <img src="https://izicop.com/cdn/shop/files/snakerstoreAdidas_Handball_Spezial_Scarle-FV1227-0_2048x2048.png?v=1692351949" className="grid-pic" alt="" />
            <h3>HANDBALL SPEZIAL</h3>
            <p>Originals</p>
            <h5 className="price">$99.99</h5>
            <button className="buy-2">BUY NOW</button>
        </div>
        <div className="content">
          <img src="https://izicop.com/cdn/shop/files/snakerstoreAdidas_Samba_OG_Core_White_Halo_Blue-ID2055-0_2048x2048.png?v=1694748798" className="grid-pic" alt="" />
            <h3>SAMBA OG CORE WHITE</h3>
            <p>Originals</p>
            <h5 className="price">$129.99</h5>
            <button className="buy-3">BUY NOW</button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
          <div className="footer-col">
            <h4>About Originals</h4>
              <ul>
                <p>Created in 1997, the Adidas Originals line is one of the biggest hits of current fashion.
                  This is because the collection of products is inspired by the period from the 40s to the 80s,
                  bringing a retro footprint that became the darling of men and women around the world.
                  </p>
              </ul>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
              <ul>
                <li><a href="#"></a>GAZZELE</li>
                <li><a href="#"></a>SPEZIAL</li>
                <li><a href="#"></a>SAMBA</li>
                <li><a href="#"></a>CAMPUS</li>
              </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
              <ul>
                <li><a href="#"></a>COSTUMER SERVICE</li>
                <li><a href="#"></a>SUPPORT</li>
                <li><a href="#"></a>ONLINE CHAT</li>
              </ul>
          </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
