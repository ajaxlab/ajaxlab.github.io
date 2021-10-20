function getColors(len) {
  const colors = [];
  let i = len;
  while (i--) {
    colors.push(randomColor());
  }
  return colors;
}

function ColorList({ length }) {
  return (
    <ul>
      {getColors(length * length * 2).map((color, i) => {
        return (
          <li key={i} style={{ backgroundColor: color }}></li>
        )
      })}
    </ul>
  );
}
