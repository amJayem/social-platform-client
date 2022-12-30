import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const AboutModal = ({aboutUpdate,setAboutUpdate}) => {
  const [aboutInfo, setAboutInfo] = useState();
  const id = '63ae777b11aed881a5bf221f';

  useEffect(() => {
      axios.get(`https://social-people-server.vercel.app/about`)
        .then((data) => {
          // console.log(data);
          setAboutInfo(data.data);
        })
        .catch((e) => console.error("about update error",e));
    
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const university = form.university.value;
    const address = form.address.value;

    const about = {
      name,
      email,
      university,
      address,
    };

    axios.patch(`https://social-people-server.vercel.app/update-about/${id}`,about)
        // .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAboutUpdate(!aboutUpdate);
          toast.success('update success');
        })
        .catch((e) => console.error("about update error",e));
    console.log(about);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="checkbox" id="about-modal" className="modal-toggle" />
      <label htmlFor="about-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="about-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit About</h3>
          <div className="grid grid-cols-1 gap-3 my-3">
            <input
              type="text"
              defaultValue={aboutInfo?.name}
              name="name"
              placeholder="your name"
              className="input input-bordered input-info "
            />
            <input
              type="email"
              defaultValue={aboutInfo?.email}
              name="email"
              placeholder="your email"
              className="input input-bordered input-info "
            />
            <input
              type="text"
              defaultValue={aboutInfo?.university}
              name="university"
              placeholder="your university"
              className="input input-bordered input-info "
            />
            <input
              type="text"
              defaultValue={aboutInfo?.address}
              name="address"
              placeholder="your address"
              className="input input-bordered input-info "
            />
          </div>
          <div className="modal-action">
            <button type="submit" htmlFor="about-modal" className="btn">
              save
            </button>
          </div>
        </label>
      </label>
    </form>
  );
};

export default AboutModal;
