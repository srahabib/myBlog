import { useState } from 'react';
import { SubmitForm } from '../services';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      return; // If any of the fields is empty, exit the function
    }

    const FormObj = {
      name,
      email,
      message,
    };

    SubmitForm(FormObj)
      .then((result) => {
        setIsFormSubmitted(true); // Set isFormSubmitted to true when the form is submitted
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto pt-4 pb-4 ">
      <div className="lg:flex bg-slate-900 bg-opacity-70">
        <div className="xl:w-2/5 lg:w-2/5  py-10 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto ">
            <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
            <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
              Got a question about us? Are you interested in partnering with us? Have some
              suggestions or just want to say Hi? Just contact us. We are here to asset you.
            </p>
          </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
          <form id="contact" className="bg-white py-20 px-20 ">
            <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label
                    htmlFor="full_name"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                    id="full_name"
                    name="full_name"
                    type="text"
                    className="focus:outline-none focus:border focus:border-pink-400 font-normal w-64 h-10 flex items-center pl-3 text-sm  rounded border"
                    placeholder={'Enter Name'}
                  />
                </div>
              </div>
              <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    id="email"
                    name="email"
                    type="email"
                    className="focus:outline-none focus:border focus:border-pink-400 font-normal w-64 h-10 flex items-center pl-3 text-sm  rounded border"
                    placeholder={'Enter Email'}
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex flex-col">
                <label
                  className="text-sm font-semibold text-gray-800 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder={'Leave a Message'}
                  name="message"
                  className=" border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-pink-400"
                  rows={8}
                  id="message"
                  defaultValue={''}
                />
              </div>
              <button
                onClick={handleForm}
                type="submit"
                className="focus:outline-none bg-pink-400 transition duration-150 ease-in-out hover:bg-pink-500 rounded text-white px-8 py-3 text-sm leading-6"
              >
                Submit
              </button>
              {isFormSubmitted && (
                <p className="text-pink-400 mt-4 text-center">Thank you for contacting us!</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


