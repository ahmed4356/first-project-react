

function App() {
  return (
    <div className="App">

      <div className="container">
        {/* Start header  */}
        <header>
          <div className="logo">
            <a href="#">
              <img src="./png-apple-logo-9716.png" alt="Logo" />
            </a>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </header>
        {/* End header */}
        {/* Start Info Bar */}
        <div className="info">
          <div className="box">
            <h2>iPhone 15 Pro </h2>
            <p>iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy
              that spacecraft use for missions to Mars.</p>
            <a href="#">Buy Now</a>
          </div>
          <div className="image">
            <img src="/public/photo/download-removebg-preview (0).png" alt="Image" />
          </div>
        </div>
        {/* End Info Bar */}
        {/* Start Footer */}
        <div className="fotoer">
          <img className="active" src="/public/photo/image-0.png" alt="image One" data-color="#343434" />
          <img src="/public/photo/image-1.png" alt="image Two" data-color="#dfded9" />
          <img src="/public/photo/image-2.png" alt="image Three" data-color="#464b5a" />
          <img src="/public/photo/image-3.png" alt="image Four" data-color="#a49f99" />
        </div>
        {/* End Footer */}
      </div>
    </div>

  );
}

export default App;
