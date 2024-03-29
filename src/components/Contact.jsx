import SocialMedia from "../common/SocialMedia"
import cardimage from "../assets/images/cardimage.jpg"
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const match1 = window.matchMedia('(max-width: 850px)').matches;
  const match2 = window.matchMedia('(max-width: 678px)').matches;

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6fltanl',
        'template_3k5ki6a',
        form.current,
        'lM3Eamv8qCmoXPpyc'
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset()
          toast.success("Email send Successfully :)")
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text)
        });
  };

  return (
    <section
      id="contact"
      className="bg-neutral-900 relative p-20"
    >
      <Toaster />
      <h2 data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        className="text-4xl text-sky-600 font-semibold pb-3 ms-3">
        Contact Me
      </h2>
      <h2
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        className="subtitle text-4xl text-gray-400 pb-10 ms-3">
        GET IN TOUCH
      </h2>
      <br />
      <div className="flex mb-10 mx-auto justify-center">
        <div>
          <div className="flex bg-orange-600 p-5 rounded-xl font-semibold mx-auto" data-aos="zoom-in">
            <div className={`flex border-r px-4 contact-info ${match1 ? 'hidden' : ''}`}>
              <img src={cardimage} className="rounded-full" alt="" width="50px" height="50px" />
              <span className="text-lg my-auto ms-2">Özge Vural Koca</span>
            </div>
            <p className={`my-auto border-r px-4 contact-info-2 ${match2 ? 'hidden' : ''}`}>
              <i className="fa-solid fa-location-dot text-neutral-700 me-3"></i>
              Ümraniye / İSTANBUL
            </p>
            <p className="my-auto px-4">
              <i className="fa-solid fa-at text-neutral-700 me-2 mt-2"></i>
              ozgevuralkoca@gmail.com

            </p>
          </div>
        </div>
      </div>
      <div className="flex mx-auto justify-center" style={{ width: "100%" }}>
        <div className={`flex flex-col ${match2 ? 'hidden' : ''}`} data-aos="flip-right">
          <button className="bg-orange-600 text-orange-100 font-semibold hover:bg-orange-600 pt-2 pb-1 px-3 me-5 mb-5 rounded shadow shadow-orange-800/100">
            <a className="link first" rel="noreferrer" target="_blank" href="mailto:ozgevuralkoca@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </button>
          <SocialMedia />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-left"
          className="flex flex-col gap-2 bg-neutral-800 rounded-lg p-5"
          style={{ width: "100%", maxWidth: "600px" }}>
          <h2 className="font-semibold text-xl text-gray-300">CONTACT FORM</h2>
          {/* Input Name as same as email js templates values */}
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="p-2 rounded-xl bg-neutral-800 border border-neutral-600 font-bold text-neutral-900"
          />
          <input
            type="email"
            name="user_email"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            placeholder="Email Id"
            required
            className="p-2 rounded-xl bg-neutral-800 border border-neutral-600 font-bold text-neutral-900"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="p-2 rounded-xl bg-neutral-800 border border-neutral-600 font-bold text-neutral-900"
            required
          ></textarea>
          <button
            className="
              btn
              self-start
              px-5
              bg-gray-700
              text-gray-50 
              font-semibold 
              hover:bg-gray-800 
              py-2 rounded-xl 
              shadow-lg
              shadow-neutral-900/90"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact