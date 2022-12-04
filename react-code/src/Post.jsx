import { CiDark } from "react-icons/ci";

export const Posts = () => {
  return (
    <button onClick={()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>Response.json())
        .then(data=>console.log(data))
        .catch(error =>console.log(error))
    }}><CiDark></CiDark>Traer datos</button>
  );
};
