import { useState } from "react";

export default function Subscribe() {

    const [email, setEmail] = useState('')
    const [state, setState] = useState('idle')
    const [errorMsg, setErrorMsg] = useState(null)
  
    const subscribe = async (e) => {
      e.preventDefault()
      setState('Loading')
  
      try {
        const response = await axios.post('/api/subscribe', { email })
        console.log(response);
        setState('Success');
        setEmail('');
      } catch (e) {
        console.log(e.response.data.error);
        setErrorMsg(e.response.data.error);
        setState('Error');
      }
    }
  
    return (
      <div>
        <h4 className="text-lime-100 basis-full text-center mx-2 sm:basis-auto">Subscribe to the newsletter</h4>
        <form onSubmit={subscribe}>
          <div>
            <div className="form-input">
              <input
                required
                className="text-lime-100 mx-2 w-40 text-left basis-auto bg-transparent max-w-60 focus:outline-none"
                id="email-input"
                name="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sub-form-btn">
              <button
                disabled={state === 'Loading'}
                type="submit"
                className="form-btn"
                onClick={subscribe}
              >
                Subscribe
              </button>
            </div>
          </div>
          {state === 'Error' && (
            <p className="w-full basis-full text-red-600">{errorMsg}</p>
          )}
          {state === 'Success' && (
            <p className="w-full basis-full text-green-600">You subscribed</p>
          )}
        </form>
      </div>
    )
  };