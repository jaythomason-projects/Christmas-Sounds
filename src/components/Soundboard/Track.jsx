import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';

const Track = ({sound}) => {
    const [volume, setVolume] = useState(0);
    const [currentSound, setCurrentSound] = useState(null);

    var soundTrack = new Howl({
        src: [sound.file],
        loop: true,
        volume: volume,
    });

    useEffect(() => {
        if (currentSound && volume > 0) {
            currentSound.volume(volume);
        } else if (currentSound && volume === 0) {
            currentSound.stop();
            setCurrentSound(null);
        }
    }, [currentSound, volume]);

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);

        if (!currentSound) {
            soundTrack.play();
            setCurrentSound(soundTrack);
        }
    }

    return (
        <div className="track">
            <img className='sound-icon' src={sound.icon} alt={sound.name} />
            <div className='track-controls'>
                <span className='sound-description'>{sound.name}</span>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
        </div>
    );
};

export default Track;