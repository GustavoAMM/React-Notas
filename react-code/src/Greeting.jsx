export function Greeting({ tittle, name = "user" }) {
  console.log(name);
  return (
    <h1>
      {tittle}, dice {name}
    </h1>
  );
}

export function User({ name, amount, married, address, greet }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>💵: {amount}</h2>
      <h2>Estado: {married ? "casado" : "Soltero"}</h2>
      <h2>Addres:</h2>
      <ul>
        <li>city: {address.city}</li>
        <li>street: {address.street}</li>
      </ul>
    </div>
  );
}
