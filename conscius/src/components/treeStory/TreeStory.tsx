// @ts-nocheck
import { Tree } from 'react-d3-tree';
import './TreeStory.css'

export const TreeStory = () => {
    
    // test data
    const games = {
        name: 'Minecraft',
        children: [
            {
                name: 'PUBG',
                children: [
                    {
                        name: 'Fortnite'
                    }
                ]
            },
        ]
    }

    console.log(games);

    return (
        <div       
        id="treeWrapper"
        style={{
          width: "100%",
          height: "100%",
        }}>
            <Tree data={games}/>
        </div>
    );
}
