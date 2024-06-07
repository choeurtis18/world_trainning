import React, { useState, useEffect } from 'react';
import stringSimilarity from 'string-similarity';

const sentences = [
    { en: 'Le patron a félicité l\'équipe pour leur réalisation.', fr: 'The boss congratulated the team for their achievement.' },
    { en: 'Nous avons besoin de climatisation dans cette pièce.', fr: 'We need air conditioning in this room.' },
    { en: 'Elle a eu une percée dans sa carrière grâce à son innovation.', fr: 'She had a breakthrough in her career thanks to her innovation.' },
    { en: 'L\'ordre du jour de la réunion sera envoyé par email.', fr: 'The meeting agenda will be sent by email.' },
    { en: 'Le concurrent principal de notre entreprise est très compétitif.', fr: 'The main competitor of our company is very competitive.' },
    { en: 'Nous devons examiner les objectifs pour la semaine prochaine.', fr: 'We need to review the goals for next week.' },
    { en: 'La société a annoncé une augmentation de 20% de ses bénéfices.', fr: 'The company announced a 20% increase in its profits.' },
    { en: 'Une approche stratégique est nécessaire pour résoudre ce problème.', fr: 'A strategic approach is necessary to solve this problem.' },
    { en: 'L\'impact du changement climatique est préoccupant.', fr: 'The impact of climate change is concerning.' },
    { en: 'Ils ont mis en place un nouveau système pour améliorer l\'efficacité.', fr: 'They implemented a new system to improve efficiency.' },
    { en: 'Le nouveau règlement permet aux employés de travailler à distance.', fr: 'The new policy allows employees to work remotely.' },
    { en: 'Le taux de croissance de l\'entreprise a été impressionnant.', fr: 'The company\'s growth rate has been impressive.' },
    { en: 'Le siège social de l\'entreprise se trouve à Paris.', fr: 'The company\'s headquarters is located in Paris.' },
    { en: 'Nous devons augmenter notre productivité pour atteindre nos objectifs.', fr: 'We need to increase our productivity to achieve our goals.' },
    { en: 'La feuille de route a été mise à jour pour refléter les nouveaux objectifs.', fr: 'The roadmap has been updated to reflect the new goals.' },
    { en: 'Ils ont décidé de relocaliser l\'entreprise dans une autre ville.', fr: 'They decided to relocate the company to another city.' },
    { en: 'La réalisation a été célébrée par toute l\'équipe.', fr: 'The achievement was celebrated by the entire team.' },
    { en: 'La fusion entre les deux entreprises a été finalisée la semaine dernière.', fr: 'The merger between the two companies was finalized last week.' },
    { en: 'La prévision a montré une tendance positive dans la croissance du marché.', fr: 'The forecast showed a positive trend in market growth.' },
    { en: 'Un pictogramme peut aider à comprendre des données complexes.', fr: 'A pictograph can help in understanding complex data.' },
    { en: 'La disponibilité des matières premières est essentielle pour la production.', fr: 'The availability of raw materials is critical for production.' },    { en: 'Nous devons mettre en œuvre des stratégies innovantes.', fr: 'We need to implement innovative strategies.' },
    { en: 'La réunion se tiendra dans la salle de conférence.', fr: 'The meeting will be held in the conference room.' },
    { en: 'Elle a pris un prêt pour acheter une maison.', fr: 'She took a loan to buy a house.' },
    { en: 'Ils ont observé une baisse des ventes ce trimestre.', fr: 'They observed a decline in sales this quarter.' },
    { en: 'Le manager de ligne supervise les opérations quotidiennes.', fr: 'The line manager supervises daily operations.' },
    { en: 'Le climat de l\'entreprise est très compétitif.', fr: 'The company\'s climate is very competitive.' },
    { en: 'Nous devons surveiller les progrès du projet.', fr: 'We need to monitor the project\'s progress.' },
    { en: 'La base de données doit être mise à jour régulièrement.', fr: 'The database needs to be updated regularly.' },
    { en: 'La fusion des deux entreprises a été un succès.', fr: 'The merger of the two companies was a success.' },
    { en: 'Le commerce équitable est important pour l\'économie locale.', fr: 'Fair trade is important for the local economy.' },
    { en: 'Il a décidé de prendre sa retraite l\'année prochaine.', fr: 'He decided to retire next year.' },
    { en: 'La productivité de l\'équipe a augmenté de 10%.', fr: 'The team\'s productivity increased by 10%.' },
    { en: 'La gestion de l\'entreprise est entre de bonnes mains.', fr: 'The management of the company is in good hands.' },
    { en: 'Ils ont lancé une nouvelle campagne publicitaire.', fr: 'They launched a new advertising campaign.' },
    { en: 'Le taux de croissance démographique est en hausse.', fr: 'The demographic growth rate is rising.' },
    { en: 'Nous devons établir une feuille de route claire pour le projet.', fr: 'We need to establish a clear roadmap for the project.' },
    { en: 'Les compétences des employés sont cruciales pour le succès.', fr: 'The employees\' skills are crucial for success.' },
    { en: 'Ils ont dû licencier plusieurs employés en raison de la crise économique.', fr: 'They had to lay off several employees due to the economic crisis.' },
    { en: 'La courbe du graphique montre une tendance à la hausse.', fr: 'The line graph shows an upward trend.' },
    { en: 'La fusion a créé un nouveau leader du marché.', fr: 'The merger created a new market leader.' },
    { en: 'La satisfaction des clients est notre priorité absolue.', fr: 'Customer satisfaction is our top priority.' },
    { en: 'Ils ont obtenu un prêt pour financer leur expansion.', fr: 'They obtained a loan to finance their expansion.' },
    { en: 'Le graphique en barres montre les ventes par région.', fr: 'The bar chart shows sales by region.' },
    { en: 'Ils ont travaillé en multitâche pour respecter les délais.', fr: 'They multitasked to meet the deadlines.' },
    { en: 'L\'équipe est débordée par la charge de travail actuelle.', fr: 'The team is overwhelmed by the current workload.' },
    { en: 'Les enjeux de ce projet sont très élevés.', fr: 'The stakes for this project are very high.' },
    { en: 'La formation des nouveaux employés commence lundi.', fr: 'Training for new employees starts on Monday.' },
    { en: 'Ils ont besoin d\'une base de données plus fiable.', fr: 'They need a more reliable database.' },
    { en: 'Nous devons aligner nos objectifs sur la stratégie de l\'entreprise.', fr: 'We need to align our goals with the company\'s strategy.' },
    { en: 'Le salon professionnel a attiré de nombreux clients potentiels.', fr: 'The trade fair attracted many potential customers.' },
    { en: 'L\'entreprise a mis en œuvre une nouvelle politique de télétravail.', fr: 'The company implemented a new remote working policy.' },
    { en: 'Ils ont observé une amélioration significative de la productivité.', fr: 'They observed a significant improvement in productivity.' },
    { en: 'Le patron a insisté sur l\'importance du travail d\'équipe.', fr: 'The boss emphasized the importance of teamwork.' },
    { en: 'Le nouvel outil a simplifié le processus de production.', fr: 'The new tool simplified the production process.' },
    { en: 'La transparence dans les opérations est essentielle.', fr: 'Transparency in operations is essential.' },
    { en: 'Ils ont remarqué une diminution des ventes.', fr: 'They noticed a decrease in sales.' },
    { en: 'La stratégie de marketing a été ajustée pour attirer plus de clients.', fr: 'The marketing strategy was adjusted to attract more customers.' },
    { en: 'Le département des ressources humaines s\'occupe des formations.', fr: 'The HR department handles trainings.' },
    { en: 'Les matériaux bruts sont nécessaires pour la production.', fr: 'Raw materials are necessary for production.' },
    { en: 'La feuille de route du projet a été approuvée par l\'équipe.', fr: 'The project roadmap was approved by the team.' },
];

const getRandomSentences = (num) => {
    const shuffled = sentences.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const calculateScore = (userAnswer, correctAnswer) => {
    const similarity = stringSimilarity.compareTwoStrings(userAnswer.trim().toLowerCase(), correctAnswer.toLowerCase());
    return similarity >= 0.7 ? 1 : 0;
};

const Translation = () => {
    const [userAnswers, setUserAnswers] = useState(Array(5).fill(''));
    const [score, setScore] = useState(null);
    const [randomSentences, setRandomSentences] = useState([]);
    const [results, setResults] = useState([]);

    const generateNewSentences = () => {
        setRandomSentences(getRandomSentences(5));
        setUserAnswers(Array(5).fill(''));
        setScore(null);
        setResults([]);
    };

    useEffect(() => {
        generateNewSentences();
    }, []);

    const handleChange = (index, value) => {
        const newAnswers = [...userAnswers];
        newAnswers[index] = value;
        setUserAnswers(newAnswers);
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        const newResults = userAnswers.map((answer, index) => {
            const isCorrect = calculateScore(answer, randomSentences[index].fr) === 1;
            if (isCorrect) {
                correctAnswers++;
            }
            return { isCorrect, correctAnswer: randomSentences[index].fr };
        });
        setScore(correctAnswers);
        setResults(newResults);
    };

    return (
        <div className='flex flex-col items-center m-4'>
            <h2 className='text-2xl font-bold mb-4'>Translation</h2>
            {randomSentences.map((item, index) => (
                <div key={index} className='mb-2 w-full max-w-md'>
                    <p className='mb-2'>{item.en}</p>
                    <input
                        type="text"
                        className={`border-b-2 ${results[index]?.isCorrect ? 'border-green-500 text-green-600' : 'border-gray-400'} w-full focus:outline-none focus:border-blue-500`}
                        onChange={(e) => handleChange(index, e.target.value)}
                        value={userAnswers[index]}
                        disabled={score !== null}
                    />
                    {score !== null && (
                        <p className={`${results[index]?.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {results[index]?.isCorrect ? 'Correct' : `Incorrect, the correct answer was: ${results[index].correctAnswer}`}
                        </p>
                    )}
                </div>
            ))}
            <button
                className='mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700'
                onClick={handleSubmit}
                disabled={score !== null}
            >
                Submit
            </button>
            {score !== null && <p className='mt-4 text-lg'>Your score: {score}/{randomSentences.length}</p>}
            <button
                className='mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700'
                onClick={generateNewSentences}
            >
                Relancer
            </button>
        </div>
    );
};

export default Translation;
