import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

import words from '../data/words';

export default function Home() {
    return (
        <>
        <h1 className="text-3xl font-bold text-center my-6">
        Entrainement pour le test d'anglais 
        </h1>
        
        <div className='flex justify-center gap-4'>
            <Link to="/quizen" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Quizz EN</Link>
            <Link to="/quizfr" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Quizz FR</Link>
        </div>
        <div className="mx-8 lg:mx-16 overflow-x-auto shadow-md sm:rounded-lg my-8">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th className="px-6 py-3">En anglais</th>
                        <th className="px-6 py-3">En français</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map((word, index) => (
                        <tr key={index} className="bg-white border-b">
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{word.en}</th>
                            <td className="px-6 py-4">{word.fr}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}