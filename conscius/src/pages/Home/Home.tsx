import { Header } from '../../components/header/Header';
import { Button } from '../../components/UIkit/Button/Button';

const Home = () => {
    const handleClick = () => {
        console.log('click');
    };

    return (
        <div>
            <Header />
            <div className='ButtonOnApp'>
                <Button title='Start' size='large' onClick={handleClick} />
            </div>
        </div>
    );
};

export default Home;
