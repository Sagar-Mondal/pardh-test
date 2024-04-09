import { useEffect,useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.message);
      });
  }
  , []);
  return (
    <div>
      <h1 className="text-2xl bold">V-Attend</h1>
      <p>{data}</p>
    </div>
  )
}
