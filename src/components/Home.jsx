import profilphoto from "../assets/images/background.png"
import SocialMedia from "../common/SocialMedia"
import cv from "../assets/files/OzgeVuralKocaResume.pdf"
import { useEffect, useState } from "react"

const Home = () => {
  const [photoWidth, setPhotoWidth] = useState('450px');
  const [photoHeight, setPhotoHeight] = useState('450px');
  const matches = window.matchMedia('(max-width: 450px)').matches;

  useEffect(() => {
    const mediaQuery1 = window.matchMedia('(max-width: 850px)');
    const mediaQuery2 = window.matchMedia('(max-width: 767px)');

    const handleMediaQueryChange = () => {
      if (mediaQuery2.matches) {
        setPhotoWidth('250px');
        setPhotoHeight('250px');
      } else if (mediaQuery1.matches) {
        setPhotoWidth('300px');
        setPhotoHeight('300px');
      } else {
        setPhotoWidth('450px');
        setPhotoHeight('450px');
      }
    };

    handleMediaQueryChange();
    mediaQuery1.addEventListener('change', handleMediaQueryChange);
    mediaQuery2.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery1.removeEventListener('change', handleMediaQueryChange);
      mediaQuery2.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const photoStyle = {
    width: photoWidth,
    height: photoHeight,
    objectFit: 'cover'
  };

  return (
    <>
      <section id="home" className="grid md:grid-cols-2 bg-neutral-900 relative" style={{ height: "100vh" }}>
        <div className={`m-auto flex flex-row ${matches ? 'mobile' : 'desktop'}`}>
          <div
            data-aos="flip-left" data-aos-delay="1200"
            className={`flex flex-col m-auto flex-wrap justify-center me-10 ms-5  ${matches ? 'hidden' : ''}`} style={{ height: "100%" }}>
            <SocialMedia />
          </div>
          <div>
            <div
              data-aos="fade-down" data-aos-delay="1200"
              className={`text-sky-200 text font-medium content1 ${matches ? 'text-lg' : 'text-3xl'}`}>
              Hello, I'm
            </div>
            <div data-aos="fade-down" data-aos-delay="1000" className={`text-sky-700 font-extrabold ${matches ? 'text-2xl my-3' : 'text-4xl my-5'}`}>
              Özge Vural Koca
            </div>
            <div
              data-aos="fade-down" data-aos-delay="800"
              className={`text-orange-500 font-semibold mb-8 animation content3 ${matches ? 'text-lg' : 'text-3xl'}`}>
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
            style={photoStyle}
            src={profilphoto}
            alt="profil" />
        </div>
      </section>
    </>
  )
}

export default Home