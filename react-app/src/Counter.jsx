export default function Counter({ num }) {
  const incrementNum = () => {
    num += 1;
    console.log(num);
  };

  //   let num = 0;
  return (
    <div>
      <p>The count is: {num}</p>
      <button onClick={incrementNum}>Increment</button>
    </div>
  );
}
