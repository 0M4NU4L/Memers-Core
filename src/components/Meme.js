import React from 'react';

export default function Meme() {

    const [allMemes, setAllMemes] = React.useState({});

    const [meme, setMeme] = React.useState({
        topText: "Why so serious?",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    React.useEffect(() => {
        async function getMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes");
            const data = await response.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, [])


    const id = React.useId();
    
    function getMemeImage() {
        setMeme({
            ...meme,
            randomImage: allMemes[Math.floor(Math.random() * allMemes.length)].url
        });
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        });
    }

    return (
        <main>
            <div className='form'>

                <input 
                    type='text'
                    className="form--input"
                    name='topText' 
                    placeholder='Top Text'
                    id={id + '-topText'}
                    onChange={handleChange}
                    value={meme.topText}
                />

                <input 
                    type='text' 
                    className="form--input"
                    name='bottomText' 
                    placeholder='Bottom Text'
                    id={id + '-bottomText'}
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button
                    className="form--randombutton"
                    onClick={getMemeImage}
                >
                    Get a new meme image</button>                    
            </div>
            <div className="meme">
                <img 
                    src={meme.randomImage} 
                    alt="Meme" 
                    className='meme--image'
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
        
        
    )
}