import './TreeStory.css'
import { useEffect, useState } from 'react';

export const TreeStory = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data)

  return (
    <div>

    </div>
  );
}
