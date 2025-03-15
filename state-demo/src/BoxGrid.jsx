import Box from "./Box";
function BoxGrid({ numberOfBoxes = 9 }) {
  return (
    <div className='BoxGrid'>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}

export default BoxGrid;
