"use client";
// ** React Imports
import { useState } from "react";

// ** Server Actions
import { sendMail } from "@/libs/mail";

const defaultFormData = {
  name: "",
  email: "",
  subject: "",
  body: "",
};

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, body } = formData;
    try {
      await sendMail({ name, email, subject, body });
      //if there is no error, clear form and show alert for 10 sec
      setFormData(defaultFormData);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(() => false);
      }, 10000);
    } catch (error) {
      alert(error);
      return;
    }
  };
  return (
    <form
      className=" w-full flex flex-col gap-2 md:gap-4 text-base md:text-lg"
      onSubmit={handleSubmit}
    >
      {/*name */}
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={onChange}
        className="my_input"
        maxLength={100}
        required
      />
      {/*email */}
      <input
        type="text"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={onChange}
        className="my_input"
        maxLength={100}
        required
      />
      {/*Subject */}
      {/* <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={onChange}
        className="my_input"
        maxLength={100}
        required
      /> */}
      {/*Message */}
      <textarea
        placeholder="Delete account reason"
        name="body"
        value={formData.body}
        onChange={onChange}
        className="resize-none h-52 outline-none focus:outline-blue-100 focus:outline-offset-1 border-2 border-gray-500 focus:border-blue-400  p-4 rounded-xl"
        maxLength={350}
        required
      ></textarea>
      <button
        type="submit"
        className=" my_button bg-rose-500 hover:bg-gega-red text-white "
      >
        DELETE ACCOUNT
      </button>
      <p
        className={`bg-green-300 text-lg sm:text-xl p-1 font-bold tracking-wider w-1/2 self-center rounded-full ${isVisible ? "visible" : "invisible"
          }`}
      >
        Email sended!
      </p>
    </form>
  );
};

export default Form;
