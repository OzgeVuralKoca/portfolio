const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-neutral-900 relative px-20 pb-20 pt-0">
      <h2 data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        className="text-4xl text-sky-600 font-semibold pb-3 ms-3">
        Projects
      </h2>
      <h2
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        className="subtitle text-4xl text-gray-400 pb-20 ms-3">
        MY OWN WORK
      </h2>
      <h2 className="text-3xl text-gray-400 font-semibold mb-8 pb-2">
        Games With JavaScript
      </h2>
      <div data-aos="fade-up" className="grid md:grid-cols-2 lg:grid-cols-3 relative gap-10">
        <a target="_blank" rel="noreferrer" href="https://ozgevuralkoca.github.io/snake">
          <div className="flex text-sky-50 h-48 sm:h-72 md:h-52 xl:h-60 2xl:h-72 font-semibold rounded-xl snakegame projectcard cursor-pointer">
            <div className="rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl hover:bg-neutral-500/40">
              <h2 className="text-xl text-neutral-800 font-semibold">Snake Game</h2>
            </div>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://ozgevuralkoca.github.io/rollball">
          <div className="flex text-sky-50 h-48 sm:h-72 md:h-52 xl:h-60 2xl:h-72 font-semibold rounded-xl rollingballs projectcard cursor-pointer">
            <div className="my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl  hover:bg-neutral-500/40">
              <h2 className="text-xl text-neutral-800 font-semibold">Rolling Balls</h2>
            </div>
          </div>
        </a>
      </div>
      <h2 className="text-3xl text-gray-400 font-semibold mb-8 mt-16 pb-2">
        Apps With JavaScript
      </h2>
      <div data-aos="fade-up" className="grid md:grid-cols-2 lg:grid-cols-3 relative gap-10">
        <a target="_blank" rel="noreferrer" href="https://ozgevuralkoca.github.io/miniagenda">
          <div className="flex text-sky-50 h-48 sm:h-72 md:h-52 xl:h-60 2xl:h-72 font-semibold rounded-xl projectcard miniagenda cursor-pointer">
            <div className="my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl hover:bg-neutral-500/40">
              <h2 className="text-xl text-neutral-800 font-semibold">
                Mini Agenda
              </h2>
            </div>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://ozgevuralkoca.github.io/calculator">
          <div className="flex text-sky-50 h-48 sm:h-72 md:h-52 xl:h-60 2xl:h-72 font-semibold rounded-xl projectcard calculator cursor-pointer">
            <div className="my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl  hover:bg-neutral-500/40">
              <h2 className="text-xl text-neutral-800 font-semibold">Calculator</h2>
            </div>
          </div>
        </a>
      </div>
      <h2 className="text-3xl text-gray-400 font-semibold mb-8 mt-16 pb-2">
        Website Projects
      </h2>
      <div data-aos="fade-up" className="grid md:grid-cols-2 lg:grid-cols-3 relative gap-10">
        <a target="_blank" rel="noreferrer" href="https://ozgevuralkoca.github.io/movie">
          <div className="flex text-sky-50 h-48 sm:h-72 md:h-52 xl:h-60 2xl:h-72 font-semibold rounded-xl projectcard movie cursor-pointer">
            <div className="my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl hover:bg-neutral-500/40">
              <h2 className="text-xl text-neutral-800 font-semibold">
                Movie Website
              </h2>
            </div>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://ozgevuralkoca.github.io/real-estate-react/">
          <div className="flex text-sky-50 h-48 sm:h-72 md:h-52 xl:h-60 2xl:h-72 font-semibold rounded-xl projectcard real-estate cursor-pointer">
            <div className="my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl hover:bg-neutral-500/40">
              <h2 className="text-xl text-neutral-800 font-semibold">
                Real Estate Website
              </h2>
            </div>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://technology-store-frontend.netlify.app/">
          <div className="flex text-sky-50 h-48 sm:h-72 md:h-52 xl:h-60 2xl:h-72 font-semibold rounded-xl projectcard tech-store cursor-pointer">
            <div className="my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl hover:bg-neutral-500/40">
              <h2 className="text-xl text-neutral-800 font-semibold">
                Technology Store
              </h2>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Projects