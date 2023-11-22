

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="images">
          <div className="slid-number" />
          <img src="/Photo/photo1.jpg" alt="" />
          <img src="/Photo/photo2.jpg" alt="" />
          <img src="/Photo/photo3.jpg" alt="" />
          <img src="/Photo/photo4.jpg" alt="" />
          <img src="/Photo/photo5.jpg" alt="" />
          <img src="/Photo/photo6.jpg" alt="" />
          <img src="/Photo/photo7.jpg" alt="" />
        </div>
        <div className="text">
          <span className="previous">Previous</span>
          <span className="bullets">
          </span>
          <span className="next">Next</span>
        </div>
      </div>
    </div>

  );
}

export default App;
