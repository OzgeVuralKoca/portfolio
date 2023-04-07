const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-neutral-900 relative p-20">
      <h2 data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="text-4xl text-sky-600 font-semibold pb-3 ms-3">
        Projects
      </h2>
      <h2
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="subtitle text-5xl text-gray-400 pb-20 ms-3">
        MY OWN WORK
      </h2>
      <h2 className="text-4xl text-orange-500 font-semibold mb-8 pb-2">
        Games With JavaScript
      </h2>
      <div data-aos="fade-down" className="grid md:grid-cols-2 relative gap-20">
        <div className="flex text-sky-50 font-semibold rounded-xl snakegame projectcard cursor-pointer">
          <a href="https://ozgevuralkoca.github.io/projects/snakegame.html">
          <div className="rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl hover:bg-neutral-500/40">
            <h2 className="text-2xl text-neutral-800 font-semibold">Snake Game</h2>
          </div>
          </a>
        </div>
        <div className="flex text-sky-50 font-semibold rounded-xl rollingballs projectcard cursor-pointer">
          <div className="my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl  hover:bg-neutral-500/40">
            <h2 className="text-2xl text-neutral-800 font-semibold">Rolling Balls</h2>
          </div>
        </div>
      </div>
      <h2 className="text-4xl text-orange-500 font-semibold mb-8 mt-16 pb-2">
        Apps With JavaScript
      </h2>
      <div data-aos="fade-down" className="grid md:grid-cols-2 relative gap-20">
        <div className="flex text-sky-50 font-semibold rounded-xl projectcard miniagenda cursor-pointer">
          <div className="my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl hover:bg-neutral-500/40">
            <h2 className="text-2xl text-neutral-800 font-semibold">Mini Agenda</h2>
          </div>
        </div>
        <div className="flex text-sky-50 font-semibold rounded-xl projectcard calculator cursor-pointer">
          <div className="my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl  hover:bg-neutral-500/40">
            <h2 className="text-2xl text-neutral-800 font-semibold">Calculator</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects