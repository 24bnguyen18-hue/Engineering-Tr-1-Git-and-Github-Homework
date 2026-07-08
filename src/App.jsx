import './App.css'

function App() {
  return (
    <div className="container">
    <h1 className="title">Yosemite National Park</h1>
  
     <img
        className="scenery-img-styled"
        src="/scenery.jpeg" //the image files is inside the public folder, so we can use the path directly
        alt="Half Dome"
      />
      
      <p className="description">
        A picture of Yosemite National Park's Half Dome, halfway through the 4 Mile Trail.
      </p>
    </div>
  )
}

export default App