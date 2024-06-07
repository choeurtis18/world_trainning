import React, { useState } from 'react';
import { Link } from "react-router-dom";

import FillInTheBlanks from '../components/FillInTheBlanks';
import Situation from '../components/Situation';
import Translation from '../components/Translation';

import words from '../data/words';

export default function Home() {
    const [exercise, setExercise] = useState('vocabulary');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const sortedWord = words.filter(word =>
        word.en.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.fr.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1 className="text-3xl font-bold text-center my-6">
                Entrainement pour le test d'anglais 
            </h1>
            
            <div className='flex justify-center gap-4 mb-4'>
                <Link to="/quizen" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">Quizz EN</Link>
                <Link to="/quizfr" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">Quizz FR</Link>
            </div>

            <div className='flex justify-center gap-4 mb-4'>
                <select className="border-2 border-gray-300 bg-white rounded-lg text-sm px-8 py-2.5 focus:outline-none" onChange={(e) => setExercise(e.target.value)} value={exercise}>
                    <option value="vocabulary">Voir le vocabulaire</option>
                    <option value="fillInTheBlanks">Completer les trous</option>
                    <option value="situation">Mise en situation</option>
                    <option value="translation">Traduction</option>
                </select>
            </div>
            
            {exercise === 'fillInTheBlanks' && <FillInTheBlanks />}
            {exercise === 'situation' && <Situation />}
            {exercise === 'translation' && <Translation />}
            {exercise === 'vocabulary' && (
                <div className='flex flex-col items-center m-4'>
                    <div className="w-full max-w-md mb-4">
                        <input
                            className="border-2 border-gray-300 bg-white h-10 w-full px-5 rounded-lg text-sm focus:outline-none"
                            type="search"
                            placeholder="Rechercher un mot"
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="w-full max-w-4xl overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3">En anglais</th>
                                    <th className="px-6 py-3">En français</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedWord.map((word, index) => (
                                    <tr key={index} className="bg-white border-b">
                                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{word.en}</th>
                                        <td className="px-6 py-4">{word.fr}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}
