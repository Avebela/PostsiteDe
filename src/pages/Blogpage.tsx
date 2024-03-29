import { useState, useEffect } from "react";
//import { Link, useLocation } from "react-router-dom";
import { Link, useSearchParams } from "react-router-dom";
import { BlogFilter } from "../components/App/BlogFilter";

const Blogpage = () => {
  const [type, setType] = useState([]);
  // console.log(useLocation());
  const [searchParams, setSearchParams] = useSearchParams();

  const typeQuery = searchParams.get("type") || "";
  const latest = searchParams.has("latest");

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch("http://localhost:5000/api/cards")
      .then((res) => res.json())
      .then((data) => setType(data));
  }, []);

  return (
    <div>
      <h1>Our news</h1>
      {/* //   <Link to="/type/new">Add new type</Link> */}
      {/* <BlogFilter
        typeQuery={typeQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />

      <Link
        to="/type/new"
        style={{ margin: "1rem 0", display: "inline-block" }}
      >
        Add new type
      </Link>
      {
        // {type.map((type) => (
        type
          .filter(
            (type) => type.name.includes(typeQuery) && type.id >= startsFrom
          )
          .map((type) => (
            <Link key={type.id} to={`/type/${type.id}`}>
              <li>{type.name}</li>
            </Link>
          ))
      } */}
    </div>
  );
};
export { Blogpage };
