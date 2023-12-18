import React, { useState } from 'react';
import { Howl } from 'howler';

const Sprite = ({sound}) => {
    const [currentSound, setCurrentSound] = useState(null);

    let soundFile;
    if (sound.file.length > 1) {
        soundFile = sound.file[Math.floor(Math.random() * sound.file.length)];
    } else {
        soundFile = sound.file[0];
    }

    var soundSprite = new Howl({
        src: [soundFile],
    });

    const handleClick = () => {
        if (currentSound) {
            currentSound.stop();
        }
        soundSprite.play();
        setCurrentSound(soundSprite);
    }

    return (
        <div className="sprite">
            <button onClick={handleClick}>
                <img className='sound-icon' src={sound.icon} alt={sound.name} />
                <span className='sound-description'>{sound.name}</span>
            </button>
        </div>
    );
};

export default Sprite;