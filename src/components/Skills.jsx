import nodejs from "../assets/images/nodejs.png"
import nextjs from "../assets/images/nextjs.png"

const Skills = () => {

  return (
    <section
      id="skills"
      className="bg-neutral-900 relative p-20">
      <h2 data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        className="text-4xl text-sky-600 font-semibold pb-3 ms-3">
        Skills
      </h2>
      <h2
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        className="subtitle text-4xl text-gray-400 pb-20 ms-3">
        MY TOP SKILLS
      </h2>
      <div data-aos="fade-up" className="grid sm:grid-cols-2 lg:grid-cols-3 relative gap-10">
        <div className="bg-neutral-800 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50" />
          <div className="my-auto ms-3">
            <h2 className="text-2xl text-sky-50 font-medium">React</h2>
          </div>
        </div>
        <div className="bg-neutral-800 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl">
          <img src={nextjs} alt="renextjsact" width="80px" />
          <div className="my-auto ms-3">
            <h2 className="text-2xl text-sky-50 font-medium">Next.js</h2>
          </div>
        </div>
        <div className="bg-neutral-800 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl">
          <img src={nodejs} alt="nodejs" width="50" />
          <div className="my-auto ms-3">
            <h2 className="text-2xl text-sky-50 font-medium">Node Js</h2>
          </div>
        </div>
        <div className="bg-neutral-800 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50" height="50" />
          <div className="my-auto ms-3">
            <h2 className="text-2xl text-sky-50 font-medium">MongoDb</h2>
          </div>
        </div>
        <div className="bg-neutral-800 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50" />
          <div className="my-auto ms-3">
            <h2 className="text-2xl text-sky-50 font-medium">JavaScript</h2>
          </div>
        </div>
        <div className="bg-neutral-800 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl" >
          <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="50" height="50" />
          <div className="my-auto ms-3">
            <h2 className="text-2xl text-sky-50 font-medium">Angular</h2>
          </div>
        </div>
        <div className="bg-neutral-800 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl" >
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="50" height="50" />
          <div className="my-auto ms-3">
            <h2 className="text-2xl text-sky-50 font-medium">TypeScript</h2>
          </div>
        </div>
        <div className="bg-neutral-800 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl" >
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50" />
          <div className="my-auto ms-3 flex">
            <h2 className="text-2xl text-sky-50 font-medium my-auto">CSS3</h2>
             <p className="text-sm font-small my-auto ms-5">✓ Bootstrap <br />
            ✓ Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills