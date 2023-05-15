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

    console.log(data)

    return (
        <div       
        id="treeWrapper"
        style={{
          width: "100%",
          height: "100%",
        }}>
            {/* <Tree data={}/> */}
        </div>
    );
}
