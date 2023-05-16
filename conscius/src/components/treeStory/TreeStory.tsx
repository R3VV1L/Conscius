// @ts-nocheck
import { Tree } from 'react-d3-tree';
import './TreeStory.css'
import { useEffect, useState } from 'react';

export const TreeStory = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8000')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    const titleGame = data[3].map((filter) => filter.map((e) => e.game))
    console.log(titleGame)

    return (
        <div       
        id="treeWrapper"
        style={{
          width: "100%",
          height: "100%",
        }}>
            <Tree data={titleGame}/>
        </div>
    );
}
