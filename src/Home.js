import { useState, useEffect } from 'react';
import BlogsList from './BlogsList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((resp) => {
          console.log(resp);
          if (!resp.ok) {
            throw Error('could not fretch the data for that resource');
          }
          return resp.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogsList blogs={blogs} title="All block list" />}
    </div>
  );
};

export default Home;
