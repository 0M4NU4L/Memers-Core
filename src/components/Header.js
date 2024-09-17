import dankmemer from '../assets/dankmemer.jpeg';

export default function Header() {
    return (
        <header className='header'>
            <img src={dankmemer} alt="dank memer" className='header--image'/>
            <h2 className='header--title'>Memer's Core</h2>
        </header>
    );
}