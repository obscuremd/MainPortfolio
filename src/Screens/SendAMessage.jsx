import { useState } from "react"
import Styles from "../Shared/Styles"
import spinner from "../assets/spinner2.svg"



const SendAMessage = () => {

  const [submit, setSubmit] = useState(false)

  const handleSubmit =(e)=>{

    e.preventDefault()

    setSubmit(true);
    // Simulate form submission
    setTimeout(() => {
      alert('Form submitted');
      setSubmit(false);
    }, 2000); // Simulating a 2-second delay for submission

  }

  return (
    <div className="flex justify-center items-center h-screen w-full md:p-40 p-5">
      <div className="border-[1px] md:p-10 p-5 rounded-3xl w-full">
        <p style={{fontSize:Styles.text.pc.large}}>Send a message</p>
        <p className="opacity-50 md:text-base text-sm">Send feedback or work inquiries.</p>

        {/* form */}
        <form action="" className="flex flex-col gap-6 mt-5 w-full">

          <div className="flex w-full gap-2">
            <div className="w-full">
              <p className="opacity-75 capitalize">name</p>
              <input type="text" id="name" placeholder="name" className="bg-[#9D9FB5] p-2 rounded-xl border-[1px] w-full"/>
            </div>
            
            <div className="w-full">
              <p className="opacity-75 capitalize">email</p>
              <input type="text" id="email" placeholder="email" className="bg-[#9D9FB5] p-2 rounded-xl border-[1px] w-full"/>
            </div>
          </div>

          <div className="w-full">
              <p className="opacity-75 capitalize">title</p>
              <input type="text" id="name" placeholder="name" className="bg-[#9D9FB5] p-2 rounded-xl border-[1px] w-full"/>
            </div>
          
          <div>
            <p className="opacity-75 capitalize">message</p>
            <input type="text" id="email" placeholder="email" className="bg-[#9D9FB5] p-5 rounded-xl border-[1px] w-full h-[30vh]"/>
          </div>

          <button 
            onClick={handleSubmit}
            className="p-3 border-[1px] rounded-xl flex justify-center items-center" 
            style={{background: 'linear-gradient(90deg, #010739 -11.47%, #9D9FB5 251.9%)',}}>
            {submit ? <img src={spinner} alt="Loading..." className="md:w-10 w-5" style={{background: 'transparent'}}/> : 'Submit'}
          </button>
        
        </form>
      </div>
    </div>
  )
}

export default SendAMessage
