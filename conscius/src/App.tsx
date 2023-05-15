import './App.css'
import Header from './components/header/Header';
import { TreeStory } from './components/treeStory/TreeStory'

function App() {

  const containerStyles = {
    width: "99vw",
    height: "89vh"

  };

  return (
    <>
      <Header />
      <div style={containerStyles}>
        <TreeStory />
      </div>
    </>
  )
}

export default App
