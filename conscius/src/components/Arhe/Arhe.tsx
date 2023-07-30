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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const genre = data.flat(2).map((item) => item.genre);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const game = data.flat(2).map((item) => item.game);
    //добавить филтрацию по жанру
    const myTreeData = [
        {
            name: 'Game 0',
            children: [
                {
                    name: 'Game 1',
                    children: [
                        {
                            name: 'Game 1.1 . . .',
                        },
                    ],
                },
                {
                    name: 'Game 2',
                },
            ],
        },
    ];

    console.log(genre, '/', game);

    return (
        <div>
            {genre.toString()}
            <div id="treeWrapper" style={{ width: '100%', height: '90vh' }}>
                <Tree
                    data={myTreeData}
                    orientation="vertical"
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
