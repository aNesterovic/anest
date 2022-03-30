import { useState, useEffect } from 'react';
import BlogsList from './BlogsList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario');

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((resp) => resp.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogsList blogs={blogs} title="All block list" />}
    </div>
  );
};

export default Home;
