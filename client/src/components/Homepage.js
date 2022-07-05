import NavBar from "../components/Navbar";
import bgimage from "../assets/friendsbg.jpg"
import '../styles/homepage.css'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="section bgimage">
        <img src={bgimage} alt="Home"></img>
      </div>
    </div>
  );
};

export default Home;
