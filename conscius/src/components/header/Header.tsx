import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <Link to={'/'} className='link'>
                [ Conscius ]
            </Link>
        </header>
    );
};
