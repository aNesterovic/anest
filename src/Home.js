import { useState, useEffect } from 'react';
import BlogsList from './BlogsList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((resp) => resp.json())
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogsList blogs={blogs} title="All block list" />}
    </div>
  );
};

export default Home;
