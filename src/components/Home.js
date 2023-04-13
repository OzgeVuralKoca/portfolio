import profilphoto from "../assets/images/background.png"
import SocialMedia from "../common/SocialMedia"
import cv from "../assets/files/OzgeVuralKocaResume.pdf"
import "./home.css"

const Home = () => {
  return (
    <>
      <section id="home" className="grid md:grid-cols-2 bg-neutral-900 relative" style={{ height: "100vh" }}>
        <div className="m-auto flex flex-row">
          <div
            data-aos="flip-left" data-aos-delay="1200"
            className="flex flex-col m-auto flex-wrap justify-center me-10 ms-5 socialmedia" style={{ height: "100%" }}>
            <SocialMedia />
          </div>
          <div className="">
            <div
              data-aos="fade-down" data-aos-delay="1200"
              className="text-3xl text-sky-200 text font-medium content1">
              Hello, I'm
            </div>
            <div data-aos="fade-down" data-aos-delay="1000" className="text-4xl text-sky-700 font-extrabold my-5 content2">
              Özge Vural Koca
            </div>
            <div
              data-aos="fade-down" data-aos-delay="800"
              className="text-3xl text-orange-500 font-semibold mb-8 animation content3">
              Front End Developer
            </div>
            <button
              data-aos="fade-down"
              data-aos-delay="600"
              className="bg-sky-600
              text-sky-50 
              font-semibold 
              hover:bg-sky-800 
              p-2 rounded-xl 
              shadow 
              shadow-sky-600/100">
              <a download="ozge-vural-koca-resume" href={cv}>Download CV</a>
            </button>
          </div>
          {/* LinkedIn */}
        </div>
        {/* Profil Image */}
        <div data-aos="fade-up" data-aos-delay="300" className="my-auto justify-center profile-image flex" style={{ height: "70%" }}>
          <img
            className="z-20 my-auto profilphoto mx-auto"
            src={profilphoto}
            alt="profil" />
        </div>
      </section>
    </>
  )
}

export default Home