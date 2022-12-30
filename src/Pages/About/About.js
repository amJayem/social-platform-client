import axios from "axios";
import React, { useEffect, useState } from "react";
import AboutModal from "./AboutModal";

const About = () => {
  const [aboutUpdate, setAboutUpdate] = useState(false);
  const [aboutInfo, setAboutInfo] = useState();

  // getting user info
  useEffect(() => {
    axios
      .get(`http://localhost:5000/about`)
      .then((data) => {
        // console.log(data);
        setAboutInfo(data.data);
      })
      .catch((e) => console.error("about update error", e));
  }, [aboutUpdate]);

console.log(aboutUpdate);

  return (
    <div>
      <h1 className="text-4xl font-bold">About</h1>
      <div className="card-actions justify-end">
        <label htmlFor="about-modal" className="btn">
          open modal
        </label>
      </div>
      <div className="grid grid-cols-1 gap-4 w-56 mx-auto">
        <label htmlFor="" className="txt">Name</label>
        <input
          type="text"
          className="input input-info"
          value={aboutInfo?.name}
          readOnly
        />
        <input
          type="text"
          className="input input-info"
          value={aboutInfo?.email}
          readOnly
        />
        <input
          type="text"
          className="input input-info"
          value={aboutInfo?.university}
          readOnly
        />
        <input
          type="text"
          className="input input-info"
          value={aboutInfo?.address}
          readOnly
        />
      </div>
      <div className="my-5 ">
        <div id="#contact">
          <button className="btn btn-info text-white">
            <a
              href="javascript:void(
        window.open(
          'https://form.jotform.com/223433907377461',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    "
            >
              Contact me
            </a>
          </button>
        </div>
      </div>
      <AboutModal aboutUpdate={aboutUpdate} setAboutUpdate={setAboutUpdate} />
    </div>
  );
};

export default About;
