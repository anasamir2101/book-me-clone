import React from 'react';

const Information = () => {
  return (
    <>
      <div className='border-t'>
        <div className='ml-[260px] my-5'>
          <h1 className='text-xl pb-2 font-bold'>
            How to book Tickets through Bookme
          </h1>
          <ol className='pl-4 leading-7 text-gray-500'>
            <li>
              1.Enter the departure and destination locations in the “From” and
              “To” tab respectively.
            </li>
            <li>
              2.Select the “Date of Your Bus Trip” and hit the “Search” button.
            </li>
            <li>
              3.Select a bus service of your choice from the list of buses that
              are displayed then click bookme com
            </li>
            <li>
              4.Select a seat number and mention your gender in the seat plan.
            </li>
            <li>
              5.Put in the “Passenger Information” and “Contact Information”
            </li>
            <li>6.You have to mention whether you are vaccinated or not.</li>
            <li>7.You will receive the OTP on your phone number, put it in.</li>
            <li>
              8.After filling all the information, select the payment method i.e
              easy paisa, debit card, and jazz cash etc.
            </li>
            <li>
              9.Hit the checkout button to confirm your online bus booking.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Information;
