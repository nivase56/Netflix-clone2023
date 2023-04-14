import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX-ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargerow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargerow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargerow />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargerow
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargerow
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargerow
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargerow
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargerow
      />
    </div>
  );
}

export default App;
