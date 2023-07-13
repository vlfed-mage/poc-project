import './styles.scss';
import image from './image.png';
import user from './user.svg';

export const App = () => {
    return (
        <>
            <img src={image} alt='' />
            <img src={user} alt='' />
            <h1>React Typescript boilerplate</h1>
        </>
    );
};
