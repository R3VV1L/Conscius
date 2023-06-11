import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Tree from 'react-d3-tree';

export const Arhe = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const myTreeData = [
        {
            name: 'Parent Node',
            children: [
                {
                    name: 'Child Node',
                },
                {
                    name: 'Child Node',
                },
            ],
        },
    ];
    console.log(data);
    // console.log(
    //     data
    //         .flat(2)
    //         .map((e) => e.genre)
    //         .toString()
    // );

    return (
        <div>
            <div id="treeWrapper" style={{ width: '100%', height: '90vh' }}>
                <Tree
                    data={myTreeData}
                    orientation="horizontal"
                    translate={{ x: 650, y: 350 }}
                    separation={{ siblings: 2, nonSiblings: 2 }}
                    nodeSize={{ x: 200, y: 100 }}
                    pathFunc="diagonal"
                    transitionDuration={0}
                    nodeSvgShape={{
                        shape: 'circle',
                        shapeProps: {
                            r: 10,
                            fill: 'red',
                        },
                    }}
                />
            </div>
        </div>
    );
};
