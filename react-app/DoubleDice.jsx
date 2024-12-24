export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  return (
    <div>
      {num1 == num2 ? <h3>You Win!! :D!</h3> : <h2>You Lose!</h2>}
      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>
    </div>
  );
}
