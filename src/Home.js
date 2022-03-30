import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('Luigi');
  const [age, setAge] = useState(25);

  const handleClick = (e) => {
    setName('Mario');
    setAge(30);
  };

  return (
    <div className="home">
      <h1>Homepage</h1>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
