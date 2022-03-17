import React from "react";

// a basic form
const SimpleForm = ({ status, message, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });

  return (
    <div className="flex flex-wrap justify-center">
      <h2 className='mx-2'>Email newsletter</h2>
      <div className="flex">
        <input
          className="bg-transparent mx-2 w-full focus:outline-none"
          ref={node => (input = node)}
          type="email"
          placeholder="Your email"
        />
        <button className="mx-2" onClick={submit}>Submit</button>
      </div>
      {status === "sending" && <div className="absolute mx-auto bottom-3">Sending...</div>}
      {status === "error" && <div className="absolute mx-auto bottom-3">Something went wrong. Try again later. </div>}
      {status === "success" && <div className="absolute mx-auto bottom-3">Thanks, you&apos;re signed up.</div>}
    </div>
  );
};

export default SimpleForm;