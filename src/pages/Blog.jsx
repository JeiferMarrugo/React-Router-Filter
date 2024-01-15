import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";

const Blog = () => {
  const [searchParams, setsearchParams] = useSearchParams();

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  const hundleChange = (e) => {
    let filter = e.target.value;

    if (filter) {
      setsearchParams({ filter });
    } else {
      setsearchParams({});
    }
  };

  return (
    <>
      <h1>Blog</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          name=""
          onChange={hundleChange}
          value={searchParams.get("filter") || ""}
        />
      </div>
      <ul className="list-group">
        {data
        .filter((item) => {
          let filter = searchParams.get("filter")
          if(!filter) return true;
          let name = item.title.toLowerCase();
          return name.startsWith(filter.toLowerCase())
        })
        .map((item) => (
          <Link
            to={`/blog/${item.id}`}
            key={item.id}
            className="list-group-item"
          >
            {item.id} - {item.title}
          </Link>
        ))}
      </ul>
    </>
  );
};
export default Blog;
