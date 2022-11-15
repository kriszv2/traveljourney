import Navbar from "./Navbar/Navbar";
import TravelCards from "./TravelCards/TravelCards";
import data from "./data";

function App() {
  const travelCards = data.map((data) => {
    return <TravelCards key={data.id} data={data} />;
  });
  return (
    <>
      <Navbar />
      {travelCards}
    </>
  );
}

export default App;
