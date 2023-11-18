import BgVideo from "../../assets/video/bg.mp4";

import "./home.css";

const Home = () => {
  return (
    <div className="landingpage">
      <video src={BgVideo} autoPlay muted loop className="video-bg" />
      <div className="bg-overlay"></div>
      <div className="home-text">
        <h1 className="text-[6em]">Tuproq</h1>
        <div className="">
          <p>Yer resurslari, foydalanish holati va mahsuldorligini oshirish</p>
          <p>Mineral resurslar va ulardan foydalanishni optimallashtirish</p>
        </div>
      </div>
      <div className="home-btn">Boshlash</div>
    </div>
  );
};

export default Home;
