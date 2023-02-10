import { useState } from 'react';
import './App.css';

const faqs = [
  {
    id: 1,
    question: 'Can I use libraries on these projects?',
    answer: 'Yes! Our challenges provide professional designs but there are no rules on what tools to use. So feel free to use anything you like to build your projects.',
  },

  {
    id: 2,
    question: "How can I get help if I'm stuck?",
    answer: "The best (and quickest) way to get help on a challenge is in our Slack community. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated 'help' channel! If you haven't joined yet, you can get an invite to our Slack community here.",
  },
  {
    id: 3,
    question: 'Can I use these projects in my portfolio?',
    answer: 'Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!',
  },
  {
    id: 4,
    question: 'Is there an official solution?',
    answer: "We don't provide 'official' solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you're encouraged to review other people's code in the community. You can learn so much by seeing how other people have approached the same challenges and giving them feedback.",
  },
  {
    id: 5,
    question: 'Do I get a code review?',
    answer: "Frontend Mentor is a collaborative learning community where everyone can give feedback to each other. If you'd like to receive feedback from the community, please be sure to post a question when you submit your solution. The more specific you can be, the better. Being clear with your questions means you're much more likely to receive valuable feedback from others.",
  },
];

const FAQ = ({ payload }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <li className="faq__item">
      <div className={`faq__question${isCollapsed ? '' : ' faq__question--active'}`} onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
        <p>{payload.question}</p>
        <img className={isCollapsed ? '' : 'rotate180'} src="/images/icon-arrow-down.svg" alt="shevron icon" />
      </div>
      <div className={`faq__answer${isCollapsed ? '' : ' faq__answer--active'}`}>
        <p>{payload.answer}</p>
      </div>
    </li>
  );
};

const App = () => {
  return (
    <main className="faq">
      <div className="faq__image">
        <div className="faq__image--bg">
          <div className="faq__image--main">
            <div className="faq__image--box"></div>
          </div>
        </div>
      </div>
      <div className="faq__content">
        <h1 className="faq__heading">FAQ</h1>
        <ul className="faq__list">
          {faqs.map((faq) => (
            <FAQ payload={faq} key={faq.id} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default App;
