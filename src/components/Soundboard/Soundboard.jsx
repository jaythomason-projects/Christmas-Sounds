import React from 'react';
import { sounds } from './sounds.js';
import Sprite from './Sprite.jsx';
import Track from './Track.jsx';

const Soundboard = () => {
    const sprites = sounds.filter(sound => sound.type === 'sprite');
    const tracks = sounds.filter(sound => sound.type === 'track');

    return (
        <div className='soundboard-container'>
            <div className='sprite-container'>
                {sprites.map((sound, index) => (
                    <Sprite key={index} sound={sound} />
                ))}
            </div>
            <div className='track-container'>
                {tracks.map((sound, index) => (
                    <Track key={index} sound={sound} />
                ))}
            </div>
        </div>
    );
};

export default Soundboard;