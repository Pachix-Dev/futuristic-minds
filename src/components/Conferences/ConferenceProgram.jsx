
import Day from './Day';

const ConferenceProgram = () => {
  const daysData = [
    {
      day: 'Day 1',
      conferences: ['Conference A', 'Conference B', 'Conference C'],
    },
    {
      day: 'Day 2',
      conferences: ['Conference D', 'Conference E', 'Conference F'],
    },
    // Add more days and conferences as needed
  ];

  return (
    <div className="conference-program">
      {daysData.map((dayData, index) => (
        <Day key={index} day={dayData.day} conferences={dayData.conferences} />
      ))}
    </div>
  );
};

export default ConferenceProgram;
