import { useState, useEffect, useMemo } from 'react';
import { MemoryRouter } from 'react-router-dom';

const Counter = () => {
   const [clicks, setClicks] = useState(0);
   const [step, setStep] = useState(1);

   const showValue = () => {
      setTimeout(() => {
         alert(clicks)
      }, 3000);
   }

   const d = useMemo(() => {
      console.log('calculating');
      return 2 + step + ' - my data';
   }, [step])

   useEffect(() => {
      console.log('render: ', clicks, step);
      document.title = `Component rendered. Clicked ${clicks} times`;
      setStep((prevValue) => prevValue + 1)
   }, [clicks, setStep])

   useEffect(() => {
      console.log('Step:', step);
   }, [step])

   return (
      <div>
         <div>Clicked: {clicks}</div>
         <h2>{d}</h2>
         <button onClick={() => setClicks(clicks + step)}>Click</button>
         <br />
         <br />
         <button onClick={showValue}>Show Value</button>
         <br />
         <br />
         <input name='step' value={step} onChange={(e) => setStep(+e.target.value)} />
      </div>
   )
};

export default Counter;