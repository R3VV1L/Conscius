import './App.css'
import { Button } from './components/UIkit/Button/Button';
import Header from './components/header/Header';

function App() {

  const handleClick = () => {
    console.log('click')
  }

  return (
    <div>
      <Header />
      <div className='ButtonOnApp'>
        <Button title='Start' onClick={handleClick} />
      </div>
    </div>
  )
}

export default App
