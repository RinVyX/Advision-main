import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Formcontact = ({ subPage }) => {
  const [data, setData] = useState({
    name: "test",
    email: "aggoune.lina.work@gmail.com",
    subject: "test",
    message: "test"
  });

  const sendEmail = async e => {
    
    e.preventDefault()
    const response = await fetch("../../../pages/api/send.jsx", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    console.log(JSON.stringify(data));

    if (response.status === 200) {
      setData({});
      toast.success(`Hey ${data.name}, your message was sent successfully!`);
    }
  }

  return (
    <Container
      className={`w-full  absolute ${
        subPage === "formcontact"
          ? "left-0 opacity-1"
          : "left-[-100%] opacity-0"
      } font-Kanit`}
    >
      <div className="w-full justify-center items-center flex flex-col mb-4">
        <div className="font-semibold my-4 text-4xl">Contact</div>
      </div>
      <form
        className=" justify-center items-center flex-col gap-4 flex"
        onSubmit={sendEmail}
      >
        {/* <div className="min-w-[300px]">
          <input
            type="name"
            id="name"
            value={data.name}
            className=" bg-gray-200 text-sm rounded-l block w-full p-2.5 lg:w-[400px]"
            placeholder="Name"
            onChange={e => setData({ ...data, name: e.target.value })}
            
          />
        </div>
        <div className="min-w-[300px]">
          <input
            type="email"
            id="email"
            value={data.email}
            className=" bg-gray-200 text-sm rounded-l block w-full p-2.5 lg:w-[400px]"
            placeholder="Email"
            onChange={e => setData({ ...data, email: e.target.value })}
            
          />
        </div>
        <div className="min-w-[300px]">
          <input
            type="text"
            id="subject"
            value={data.subject}
            className=" bg-gray-200 text-sm rounded-l block w-full p-2.5 lg:w-[400px]"
            placeholder="Subject"
            onChange={e => setData({ ...data, subject: e.target.value })}
            
          />
        </div>
        <div className="min-w-[300px] sm:col-span-2">
          <textarea
            id="message"
            rows="5"
            value={data.message}
            className=" bg-gray-200  text-sm rounded-l block w-full p-2.5 lg:w-[400px]"
            placeholder="Leave a comment..."
            onChange={e => setData({ ...data, message: e.target.value })}
          ></textarea>
        </div> */}
        <div className="flex justify-end items-center mt-2">
          <button
            type="submit"
            className="py-2 hover:bg-[#34568B] hover:text-white hover:animate-pulse px-2 text-sm justify-items-end font-medium text-center border-2 rounded-md border-black dark:border-white dark:text-white text-slate-800"
          >
            Send message
          </button>
        </div>
      </form>
    </Container>
  )
}

export default Formcontact
const Container = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`
