import React, { useState, useEffect } from 'react';
import ArrowDown from './Icons/ArrowDown';
import ArrowUp from './Icons/ArrowUp'; 

function FAQ({ content }){
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
      if (openIndex === index) {
          setOpenIndex(null);
      } else {
          setOpenIndex(index);
      }
  };

  return (
      <div className="faq-section text-white px-16 py-10">
          <h1 className="font-bold text-5xl mb-6" id='Faq'>FAQ</h1>
          <div className="faq-container mt-10">
              {content.data && content.data.map((faq, index) => (
                  <div className="faq-item mb-4" key={index}>
                      <button
                          className={`faq-question bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 py-4 px-6 rounded-lg font-bold text-2xl cursor-pointer flex justify-between items-center w-full transition-all duration-300`}
                          onClick={() => handleToggle(index)}
                      >
                          {faq.question}
                          <span className="icon">
                              {openIndex === index ? '-' : '+'}
                          </span>
                      </button>
                      {openIndex === index && (
                          <div className="faq-answer text-lg font-thin bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 py-4 px-6 rounded-lg mt-2">
                              {faq.answer}
                          </div>
                      )}
                  </div>
              ))}
          </div>
      </div>
  );
};

export default FAQ;