export function TaskCard() {

  const divStyle = { background: "#000099", color: "#fff" };
  const h1Style = { fontWeight: "bolder" };
  const pStyle = { fontFamily: "cursive" };
  
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>Mi primer tarea</h1>
      <p style={pStyle}>Tarea realizada</p>
    </div>
  );
}
