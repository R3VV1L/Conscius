import './App.css'
import Header from './components/header/header';
import { TreeStory } from './components/treeStory/TreeStory'

function App() {

  const containerStyles = {
    width: "99vw",
    height: "100vh"

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
