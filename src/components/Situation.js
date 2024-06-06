import React, { useState, useEffect } from 'react';
import words from '../data/words'; // Assurez-vous que le chemin est correct

const getRandomWords = (num) => {
    const shuffled = words.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num).map(word => word.en);
};

const Situation = () => {
    const [text, setText] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [randomWords, setRandomWords] = useState([]);

    const generateNewWords = () => {
        setRandomWords(getRandomWords(5));
    };

    useEffect(() => {
        generateNewWords();
    }, []);

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-2xl font-bold mb-4'>Putting it into practice</h2>
            <p className='mb-4'>
                Rédigez un paragraphe avec ces mots
            </p>
            <ul className='list-disc mb-4'>
                {randomWords.map((word, index) => (
                    <li key={index} className='ml-4'>{word}</li>
                ))}
            </ul>
            <textarea
                className='border-2 border-gray-300 p-2 rounded w-full max-w-md focus:outline-none focus:border-blue-500'
                onChange={(e) => setText(e.target.value)}
                rows="10"
                cols="50"
            />
            <button
                className='mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700'
                onClick={handleSubmit}
            >
                Submit
            </button>
            {submitted && <p className='mt-4 text-lg'>Your response: {text}</p>}
            <button
                className='mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700'
                onClick={generateNewWords}
            >
                Relancer
            </button>
        </div>
    );
};

export default Situation;
