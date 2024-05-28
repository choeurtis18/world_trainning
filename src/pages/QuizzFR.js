// src/QuizFr.js

import React, { useState, useEffect } from 'react';
import words from '../data/words';
import stringSimilarity from 'string-similarity';

const getRandomWords = (words, num) => {
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const calculateScore = (userAnswer, correctAnswer) => {
    const similarity = stringSimilarity.compareTwoStrings(userAnswer.trim().toLowerCase(), correctAnswer.toLowerCase());
    if (similarity === 1) {
        return 1; // Exact match
    } else if (similarity >= 0.7) {
        return 0.5; // Close match
    } else {
        return 0; // No match
    }
};

const getAnswerClass = (userAnswer, correctAnswer) => {
    const similarity = stringSimilarity.compareTwoStrings(userAnswer.trim().toLowerCase(), correctAnswer.toLowerCase());
    if (similarity === 1) {
        return 'text-green-500';
    } else if (similarity >= 0.8) {
        return 'text-orange-500';
    } else {
        return 'text-red-500';
    }
};

const QuizFr = () => {
    const [quizWords, setQuizWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [partialAnswers, setPartialAnswers] = useState([]);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(10);
    const [isQuizStarted, setIsQuizStarted] = useState(false);

    useEffect(() => {
        if (isQuizStarted) {
            setQuizWords(getRandomWords(words, questionNumber));
        }
    }, [isQuizStarted, questionNumber]);

    const handleSubmit = () => {
        const currentWord = quizWords[currentWordIndex];
        const currentScore = calculateScore(userAnswer, currentWord.en);
        setUserAnswers([...userAnswers, userAnswer]);
        setScore(score + currentScore);

        if (currentScore === 1) {
            setCorrectAnswers([...correctAnswers, currentWord]);
        } else if (currentScore === 0.5) {
            setPartialAnswers([...partialAnswers, currentWord]);
        } else {
            setIncorrectAnswers([...incorrectAnswers, currentWord]);
        }
        setUserAnswer('');
        if (currentWordIndex < quizWords.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleRestart = () => {
        setIsQuizStarted(false);
        setQuizWords([]);
        setCurrentWordIndex(0);
        setUserAnswer('');
        setScore(0);
        setCorrectAnswers([]);
        setPartialAnswers([]);
        setIncorrectAnswers([]);
        setUserAnswers([]);
        setIsQuizFinished(false);
    };

    const handleStartQuiz = () => {
        setIsQuizStarted(true);
    };

    return (
        <div className='flex justify-center'>
            <div className="mx-8 lg:mx-16 bg-white p-8 rounded shadow-md w-full max-w-md">
                {!isQuizStarted ? (
                    <>
                        <h1 className="text-2xl font-bold mb-4">Commencez le Quiz</h1>
                        <label className="block mb-4">
                            <span className="text-lg">Nombre de mots dans le quiz :</span>
                            <input
                                type="number"
                                value={questionNumber}
                                onChange={(e) => setQuestionNumber(parseInt(e.target.value))}
                                className="border p-2 w-full mt-2"
                                min="1"
                                max={words.length}
                            />
                            <span className="text-sm text-gray-500 mt-1">Max: {words.length} mots</span>
                        </label>
                        <button onClick={handleStartQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">Commencer</button>
                    </>
                ) : !isQuizFinished ? (
                    <>
                        <h1 className="text-2xl font-bold mb-4">Quiz en Anglais</h1>
                        <p className="text-lg mb-4">Quel est le mot anglais pour "{quizWords[currentWordIndex]?.fr}" ?</p>
                        <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            className="border p-2 w-full mb-4"
                            placeholder="Votre réponse"
                        />
                        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Soumettre</button>
                        <p className="mt-4">Il reste {quizWords.length - currentWordIndex - 1} mots à découvrir</p>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-bold mb-4">Résultats</h2>
                        <p className="text-lg mb-4">Score: {score} / {quizWords.length}</p>
                        <ul className="list-disc pl-5 mb-4">
                            {quizWords.map((word, index) => (
                                <li key={index} className={getAnswerClass(userAnswers[index], word.en)}>
                                    {word.fr} - {word.en} ({getAnswerClass(userAnswers[index], word.en) === 'text-green-500' ? 'Correct' : (getAnswerClass(userAnswers[index], word.en) === 'text-orange-500' ? 'Partiel' : 'Incorrect')})<br />
                                    <span className="text-gray-500">Votre réponse: {userAnswers[index]}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleRestart} className="bg-blue-500 text-white px-4 py-2 rounded">Recommencer</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default QuizFr;
