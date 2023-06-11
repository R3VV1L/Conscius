import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { Button } from '../../components/UIkit/Button/Button.tsx';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/TreeStory');
    };

    return (
        <div>
            <Header />
            <div className="ButtonOnApp">
                <Button title="Start" size="large" onClick={handleClick} />
            </div>
        </div>
    );
};

export default Home;
