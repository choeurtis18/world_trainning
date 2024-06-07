import React, { useState, useEffect } from 'react';

const sentences = [
    { sentence: 'To achieve our ________, we need to increase our productivity.', answer: 'goals' },
    { sentence: 'The company announced a major ________ in renewable energy technology.', answer: 'breakthrough' },
    { sentence: 'Effective ________ is key to managing a team successfully.', answer: 'leadership' },
    { sentence: 'The ________ of the project was celebrated by everyone.', answer: 'achievement' },
    { sentence: 'We need to discuss the ________ for next week\'s meeting.', answer: 'agenda' },
    { sentence: 'The ________ is experiencing a significant increase in demand.', answer: 'air conditioning' },
    { sentence: 'There was a sudden ________ in stock prices.', answer: 'plunge' },
    { sentence: 'We need to ________ this issue as soon as possible.', answer: 'deal with' },
    { sentence: 'Our ________ is to become the market leader in this sector.', answer: 'goal' },
    { sentence: 'The new policy had an immediate ________ on employee satisfaction.', answer: 'impact' },
    { sentence: 'The ________ for the upcoming project were discussed in the meeting.', answer: 'milestones' },
    { sentence: 'A steady ________ in sales was observed over the last quarter.', answer: 'increase' },
    { sentence: 'She has shown great ________ in her new role as team leader.', answer: 'leadership' },
    { sentence: 'The ________ between the two companies was finalized last week.', answer: 'merger' },
    { sentence: 'We need to update our ________ to reflect the recent changes in the market.', answer: 'road map' },
    { sentence: 'He decided to ________ to a different city for a new job.', answer: 'relocate' },
    { sentence: 'The team achieved a significant ________ in the project.', answer: 'breakthrough' },
    { sentence: 'The ________ of the company is located in New York.', answer: 'headquarters' },
    { sentence: 'We need to prioritize our tasks to improve our ________.', answer: 'productivity' },
    { sentence: 'The ________ rate has increased due to the economic crisis.', answer: 'unemployment' },
    { sentence: 'The project was completed ahead of the ________.', answer: 'deadline' },
    { sentence: 'They implemented a new ________ to enhance efficiency.', answer: 'strategy' },
    { sentence: 'The ________ indicated a positive trend in market growth.', answer: 'forecast' },
    { sentence: 'We need to prepare a detailed ________ for the investors.', answer: 'report' },
    { sentence: 'The company’s ________ improved significantly after the restructuring.', answer: 'profit' },
    { sentence: 'The new ________ allows employees to work from home.', answer: 'remote working' },
    { sentence: 'The ________ had a noticeable impact on sales performance.', answer: 'campaign' },
    { sentence: 'The ________ of raw materials is critical for production.', answer: 'availability' },
    { sentence: 'A ________ in demand can lead to higher prices.', answer: 'surge' },
    { sentence: 'The team held a ________ to discuss the quarterly results.', answer: 'meeting' },
    { sentence: 'A ________ approach is essential for problem-solving.', answer: 'strategic' },
    { sentence: 'The ________ is crucial for understanding market trends.', answer: 'data analysis' },
    { sentence: 'The ________ of the company reflects its financial health.', answer: 'balance sheet' },
    { sentence: 'The ________ process was streamlined to reduce costs.', answer: 'manufacturing' },
    { sentence: 'Customer ________ is a top priority for our business.', answer: 'satisfaction' },
    { sentence: 'The ________ showed a positive trend in revenue.', answer: 'graph' },
    { sentence: 'They need to ________ the new policy to ensure compliance.', answer: 'implement' },
    { sentence: 'The ________ in technology has revolutionized the industry.', answer: 'advancement' },
    { sentence: 'The ________ for the next fiscal year looks promising.', answer: 'projection' },
    { sentence: 'The new ________ policy will be implemented next month.', answer: 'remote working' },
    { sentence: 'We need to ensure our ________ is updated regularly.', answer: 'database' },
    { sentence: 'The ________ between the two companies created a market leader.', answer: 'merger' },
    { sentence: 'He was ________ due to the company’s downsizing.', answer: 'laid off' },
    { sentence: 'The ________ showed a significant increase in sales.', answer: 'bar chart' },
    { sentence: 'She used ________ to convey her message effectively.', answer: 'body language' },
    { sentence: 'The ________ is responsible for the day-to-day management of the team.', answer: 'line manager' },
    { sentence: 'Our ________ strategy focuses on innovation and customer satisfaction.', answer: 'competitive' },
    { sentence: 'The ________ forecast predicts a downturn in the economy.', answer: 'economic' },
    { sentence: 'The ________ provided lunch for all employees.', answer: 'company' },
    { sentence: 'He reached the ________ of his career after years of hard work.', answer: 'peak' },
    { sentence: 'The ________ of employees is crucial for a productive workplace.', answer: 'well-being' },
    { sentence: 'We must ________ all options before making a decision.', answer: 'consider' },
    { sentence: 'The ________ has been extended to include more products.', answer: 'catalog' },
    { sentence: 'A clear ________ is essential for successful project management.', answer: 'timeline' },
    { sentence: 'The ________ results were better than expected.', answer: 'survey' },
    { sentence: 'She is ________ with several important projects at the moment.', answer: 'involved' },
    { sentence: 'The ________ event attracted many potential customers.', answer: 'trade fair' },
    { sentence: 'His ________ allowed him to solve complex problems quickly.', answer: 'skills' },
    { sentence: 'The ________ department handles all financial transactions.', answer: 'accounting' },
    { sentence: 'The company’s ________ has grown steadily over the past year.', answer: 'revenue' },
    { sentence: 'A ________ is necessary to support the new initiative.', answer: 'budget' },
    { sentence: 'The team needs to ________ the project goals with the client.', answer: 'align' },
    { sentence: 'We have implemented a new ________ to streamline our processes.', answer: 'system' },
    { sentence: 'The ________ for this quarter exceeded our expectations.', answer: 'profit' },
    { sentence: 'The ________ of this strategy is to increase market share.', answer: 'purpose' },
    { sentence: 'A ________ can help in understanding complex data.', answer: 'pictograph' },
    { sentence: 'The ________ of the product launch was well received by the market.', answer: 'timing' },
    { sentence: 'Our ________ is to be the leading provider of quality services.', answer: 'mission' },
    { sentence: 'The ________ was conducted to gather feedback from customers.', answer: 'survey' },
    { sentence: 'The ________ of the project exceeded our expectations.', answer: 'outcome' },
    { sentence: 'The ________ in market trends requires us to adapt our strategy.', answer: 'shift' },
    { sentence: 'Our new ________ will improve the user experience significantly.', answer: 'interface' },
    { sentence: 'The ________ for this position require advanced technical skills.', answer: 'qualifications' },
    { sentence: 'The ________ department is responsible for employee training.', answer: 'HR' },
    { sentence: 'We need to ________ our resources more effectively.', answer: 'allocate' },
    { sentence: 'The ________ is designed to optimize workflow.', answer: 'software' },
    { sentence: 'Our ________ reflects our commitment to sustainability.', answer: 'policy' },
    { sentence: 'The ________ analysis provided valuable insights.', answer: 'data' },
    { sentence: 'Our ________ depends on the success of this project.', answer: 'future' },
    { sentence: 'We need to ________ the impact of our new strategy.', answer: 'evaluate' }
];

const getRandomSentences = (num) => {
    const shuffled = sentences.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const FillInTheBlanks = () => {
    const [userAnswers, setUserAnswers] = useState(Array(5).fill(''));
    const [score, setScore] = useState(null);
    const [randomSentences, setRandomSentences] = useState(getRandomSentences(5));
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
            const isCorrect = answer.toLowerCase().trim() === randomSentences[index].answer.toLowerCase().trim();
            if (isCorrect) {
                correctAnswers++;
            }
            return { isCorrect, correctAnswer: randomSentences[index].answer };
        });
        setScore(correctAnswers);
        setResults(newResults);
    };

    return (
        <div className='flex flex-col items-center m-4'>
            <h2 className='text-2xl font-bold mb-4'>Fill in the Blanks</h2>
            {randomSentences.map((item, index) => (
                <div key={index} className='mb-4 w-full max-w-md'>
                    <p className='text-lg'>
                        {item.sentence.split('________')[0]}
                        <input
                            type="text"
                            className={`border-b-2 ${
                                results[index]?.isCorrect ? 'border-green-500 text-green-600' : 'border-gray-400'
                            } focus:outline-none focus:border-blue-500`}
                            onChange={(e) => handleChange(index, e.target.value)}
                            value={userAnswers[index]}
                            disabled={score !== null}
                        />
                        {item.sentence.split('________')[1]}
                    </p>
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

export default FillInTheBlanks;
