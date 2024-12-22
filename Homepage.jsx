import first from "./assets/first.mp4";
import Pi7_NASC_LOGO from "./img/Pi7_NASC LOGO.png";
const HomePage = () => {
  return (
    <div className="banner">
      <video autoPlay loop muted playsInline>
        <source src={first} type="video/mp4" />
      </video>
      <div className="navbar">
        <img className="logo" src={Pi7_NASC_LOGO} alt="Logo" />
        <h2 style={{ color: "#fff" }}>
          NANDHA ARTS AND SCIENCE COLLEGE (AUTONOMOUS)
        </h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">BookingForm</a>
          </li>
          <li>
            <a href="#">CancelingForm</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Auditorium Booking</h1>
        <div>
          <button className="button" role="button">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
