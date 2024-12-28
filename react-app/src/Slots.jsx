import "./Slots.css";
export default function Slots({ val1, val2, val3 }) {
  return (
    <>
      <h1>
        {val1} {val2} {val3}
      </h1>
      {val1 == val2 && val1 == val3 ? (
        <>
          <h2 className='win'>You Win!</h2>
          <h3>Congrats!!!</h3>
        </>
      ) : (
        <h2 className='lose'>You Lose</h2>
      )}
    </>
  );
}
