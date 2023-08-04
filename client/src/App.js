import React, { useState } from "react";
import Nav from "./Nav";
import axios from "axios";
function App() {
  const [sourceCity, setSourceCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [flights, setFlights] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!sourceCity || !destinationCity) {
      alert("Please Choose the City first !");
    }
    axios
      .post("https://avaitation.onrender.com/api/flights", {
        source: sourceCity,
        destination: destinationCity,
      })
      .then((response) => {
        setFlights(response.data[0]);
        console.log("Response:", response.data[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <label htmlFor="source" className="p-2">
                Source
              </label>
              <select
                name="source"
                id="source"
                value={sourceCity}
                onChange={(e) => setSourceCity(e.target.value)}
              >
                <option value="">Select source city</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Jaipur">Jaipur</option>
              </select>

              <label htmlFor="destination" className="p-2">
                Destination
              </label>
              <select
                name="destination"
                id="destination"
                value={destinationCity}
                onChange={(e) => setDestinationCity(e.target.value)}
              >
                <option value="">Select destination city</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Jaipur">Jaipur</option>
              </select>

              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Flight Name</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {flights.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
