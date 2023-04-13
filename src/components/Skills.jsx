import nodejs from "../assets/images/nodejs.png"
import { useState } from "react";
import { motion } from "framer-motion";
import useMenuAnimation from "../common/MenuAnimation";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <section
      id="skills"
      className="bg-neutral-900 relative p-20">
      <h2 data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="text-4xl text-sky-600 font-semibold pb-3 ms-3">
        Skills
      </h2>
      <h2
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="subtitle text-5xl text-gray-400 pb-20 ms-3">
        MY TOP SKILLS
      </h2>
      <div data-aos="fade-down" className="grid sm:grid-cols-2 lg:grid-cols-3 relative gap-10">
        <div className="bg-neutral-800 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50" />
          <div className="my-auto ms-3">
            <h2 className="text-2xl text-sky-50 font-medium">React Js</h2>
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
        <div ref={scope}>
          <motion.button
            className="bg-neutral-800 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl w-full"
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50" />
            <div className="my-auto ms-4">
              <h2 className="text-2xl text-sky-50 font-medium">CSS</h2>
            </div>
            <div className="arrow ms-3 mt-4" style={{ transformOrigin: "50% 55%" }}>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </div>
          </motion.button>
          <ul
            className="bg-neutral-800 text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl w-full"
            style={{
              pointerEvents: isOpen ? "auto" : "none",
              clipPath: "inset(10% 50% 90% 50% round 10px)"
            }}
          >
            <li>✓ Bootstrap</li>
            <li>✓ Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills