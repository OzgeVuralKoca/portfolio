import aboutPhoto from "../assets/images/about.jpg"

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-neutral-900 relative px-20">
        <h2
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="text-4xl text-sky-600 font-semibold pb-3 ms-3 pt-20">
          About Me
        </h2>
        <h2
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="subtitle text-4xl text-gray-400 pb-20 ms-3">
          WHO AM I
        </h2>
        <div className="grid lg:grid-cols-2 relative gap-10 pb-20 justify-items-center">
          <img
            data-aos="fade-up-right"
            src={aboutPhoto}
            className="rounded-xl"
            alt=""
            width="400px" />
          <div data-aos="fade-down-left" className="m-auto">
            <h2 className="text-2xl text-sky-300 text font-medium">I'm <span className="text-orange-400">Özge Vural Koca</span></h2>
            <br />
            <p className="text-sky-50 text-md">
              I'm Frontend Developer with engineering background. I had differentwork experiences as an energy systems engineer. Last year, I ranmy own 3rd generation coffee shop. I have completed manytrainings about with Frontend Development. I have progressed very quickly in a short time, thanks to my ability to think analytically, solve problems, and my curious nature. I made and makingnumerous sample applications in the frontend field. You can accessall my work on my portfolio and github account. I enjoy doing this job and I am looking forward to experiencing new things.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About