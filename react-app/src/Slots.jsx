export default function Slots({ val1, val2, val3 }) {
  return (
    <h3>
      <h1>
        {val1} {val2} {val3}
      </h1>
      {val1 == val2 && val1 == val3 ? <h2>You Win!</h2> : <h2>You Lose</h2>}
    </h3>
  );
}
