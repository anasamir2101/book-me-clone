import React, { useState } from 'react';

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='w-[100%] ml-[245px] mx-auto p-4'>
      <div className='pb-8 font-semibold  text-3xl'>
        <h1>Frequently asked Questions</h1>
      </div>
      {data.map((item, index) => (
        <div key={index} className='mb-4'>
          <div
            className={`flex items-center justify-between cursor-pointer ${
              openIndex === index ? 'border-b-0' : 'border-b'
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <h2 className='text-sm font-semibold'>{item.question}</h2>
            <span
              className={`transform ${
                openIndex === index ? 'rotate-0' : 'rotate-0'
              } transition-transform duration-300  text-2xl`}
            >
              {openIndex === index ? '-' : '+'}
            </span>
          </div>

          {openIndex === index && (
            <div className='mt-2 text-sm text-gray-400'>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const accordionData = [
    {
      question: 'Why Bookme.pk?',
      answer: `We are Pakistans's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in lines and can purchase your tickets from the comfort of your phones by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
    },
    {
      question:
        'What information will I be able to see during my ticket purchase?',
      answer: `Using Bookme.pk to purchase your tickets , you will be able to view:
              The timings and schedules for the occasion or journey you are trying to book.
              Availability and seating plans so you know exactly what you are purchasing and that you are paying the best price for it.
              A set of options for you to lock your ticket and pay using your preferred digital payment method.`,
    },
    {
      question: 'How do I know if my purchase was successful?',
      answer: `Upon successful completion of your ticket purchase, you will be directed to an order confirmation page which will contain an order confirmation number. With a few minutes of your purchase you will receive confirmation Email that will contain summary of your order along with E-ticket.`,
    },
    {
      question: 'Can I choose my own seat?',
      answer: `Absolutely! The initial step for ticket booking will allow you to view the available seats. You will be able to select from these available options and book your seat immediately.`,
    },
    {
      question: 'How do I know if my purchase was successful?',
      answer: `Upon successful completion of your ticket purchase, you will be directed to an order confirmation page which will contain an order confirmation number. With a few minutes of your purchase you will receive confirmation Email that will contain summary of your order along with E-ticket.`,
    },
    {
      question: 'Why Bookme.pk?',
      answer: `We are Pakistans's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in lines and can purchase your tickets from the comfort of your phones by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
    },
    {
      question:
        'What information will I be able to see during my ticket purchase?',
      answer: `Using Bookme.pk to purchase your tickets , you will be able to view:
              The timings and schedules for the occasion or journey you are trying to book.
              Availability and seating plans so you know exactly what you are purchasing and that you are paying the best price for it.
              A set of options for you to lock your ticket and pay using your preferred digital payment method.`,
    },
    {
      question: 'How do I know if my purchase was successful?',
      answer: `Upon successful completion of your ticket purchase, you will be directed to an order confirmation page which will contain an order confirmation number. With a few minutes of your purchase you will receive confirmation Email that will contain summary of your order along with E-ticket.`,
    },
    {
      question:
        'What information will I be able to see during my ticket purchase?',
      answer: `Using Bookme.pk to purchase your tickets , you will be able to view:
              The timings and schedules for the occasion or journey you are trying to book.
              Availability and seating plans so you know exactly what you are purchasing and that you are paying the best price for it.
              A set of options for you to lock your ticket and pay using your preferred digital payment method.`,
    },
    {
      question: 'Why Bookme.pk?',
      answer: `We are Pakistans's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in lines and can purchase your tickets from the comfort of your phones by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
    },
    {
      question: 'How do I know if my purchase was successful?',
      answer: `Upon successful completion of your ticket purchase, you will be directed to an order confirmation page which will contain an order confirmation number. With a few minutes of your purchase you will receive confirmation Email that will contain summary of your order along with E-ticket.`,
    },
    {
      question: 'Why Bookme.pk?',
      answer: `We are Pakistans's no.1 E-ticketing platform. We let you pre-book the best deals on your tickets for Movies, Bus Travel, Flights, Train journey and Events. You no longer have to stand in lines and can purchase your tickets from the comfort of your phones by using a variety of digital payment methods. Get your ticket confirmations instantly via SMS and Email.`,
    },
    // Add more questions as needed
  ];

  return (
    <div className='flex items-center justify-center h-screen'>
      <Accordion data={accordionData} />
    </div>
  );
};

export default App;
