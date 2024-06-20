import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is a CRM?',
      answer: 'A CRM (Customer Relationship Management) system helps businesses manage customer interactions and data.',
    },
    {
      question: 'How does your CRM improve sales?',
      answer: 'Our CRM improves sales by providing tools for tracking opportunities, managing customer interactions, and analyzing sales data.',
    },
    // Add more FAQs 
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              {faq.question}
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
