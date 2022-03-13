import { useState } from "react";
import axios from "axios";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className="relative col-span-3 lg:col-start-4">
      <div className="flex w-full flex-wrap justify-start sm:justify-center items-start sm:h-12">
        <h2 className="basis-full text-center mx-2 sm:basis-auto">
          Email newsletter
        </h2>
        <input
          className="text-gray-700 mx-2 w-40 text-center sm:text-left basis-full sm:basis-auto bg-transparent max-w-60 focus:outline-none"
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`text-green-700 mx-2 basis-full sm:basis-auto hover:opacity-70 ${
            state === "LOADING" ? "button-gradient-loading" : ""
          } transition`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Subscribe
        </button>
        {state === "ERROR" && (
        <p className="w-full basis-full text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="w-full basis-full text-green-600">Success!</p>
      )}
      </div>
    </div>
  );
};