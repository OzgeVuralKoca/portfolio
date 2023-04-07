import aboutPhoto from "../assets/images/about.jpg"

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-neutral-900 relative px-20">
        <h2
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="text-4xl text-sky-600 font-semibold pb-3 ms-3 pt-20">
          About Me
        </h2>
        <h2
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
          className="subtitle text-5xl text-gray-400 pb-20 ms-3">
          WHO AM I
        </h2>
        <div className="grid lg:grid-cols-2 relative gap-20 pb-20">
          <img
            data-aos="fade-up-right"
            src={aboutPhoto}
            className="rounded-xl mx-auto"
            alt=""
            width="400px" />
          <div data-aos="fade-down-left" className="m-auto">
            <h2 className="text-2xl text-sky-300 text font-medium">I'm <span className="text-orange-400">Özge Vural Koca</span></h2>
            <br />
            <p className="text-sky-50 text-md">
              I am a Frontend Developer with engineering background. I have completed many
              trainings and made numerous sample applications about with Fronted Developing. I
              improved myself in a short time, thanks to my ability to think analytically, solve
              problems, and my curiousness.
              <br /> <br />
              I finish a course for Frontend Developer program at Istanbul Education Academy. I
              completed many projects with Angular, ReactJs , Nodejs and MongoDb. You can
              access all my work on my GitHub account.
              I enjoy doing my job and I am looking forward to experiencing new things.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About