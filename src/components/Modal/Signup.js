import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useForm, Controller } from 'react-hook-form';
import { auth, firestore } from '../../firebase';

Modal.setAppElement('#root');

const Signup = ({ isOpen, onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState('');
  const [button, setButton] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    const usernameExists = await checkUsernameExists(data.username);

    if (usernameExists) {
      setError('Username is already taken');
      return;
    }

    setError('');
    setButton(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      alert('Sign up successfull');

      navigate('/events');
    } catch (error) {
      setButton(false);

      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use. Please use a different email.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak. Please choose a stronger password.');
      } else {
        setError('An error occurred. Please try again later.');
        console.error(error);
      }
    }
  };

  const checkUsernameExists = async (username) => {
    const usernameRef = collection(firestore, 'users');
    const q = query(usernameRef, where('username', '==', username));

    const snapshot = await getDocs(q);
    return !snapshot.empty;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='w-[420px] h-[70vh] bg-white mx-auto p-4 my-32 rounded-md shadow-md shadow-black'
    >
      <div className='w-[300px] h-[450px] mx-auto '>
        <h1 className='text-3xl font-bold mb-4 text-center text-black'>
          Signup
        </h1>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className='mb-4 mt-4'>
            <label htmlFor='username' className='text-sm font-semibold'>
              Username:
            </label>
            <Controller
              name='username'
              control={control}
              rules={{
                required: 'Username is required',
                pattern: {
                  value: /^[A-Za-z\s'-]+$/,
                  message:
                    'Name should only contain letters, spaces, and hyphens',
                },
              }}
              render={({ field }) => (
                <>
                  <input
                    type='text'
                    id='username'
                    className='w-full px-3 py-2 border rounded-lg mt-2 focus:ring focus:ring-blue-500 outline-none'
                    placeholder='Enter your name'
                    {...field}
                  />
                  {errors.username && (
                    <p className='text-red-500'>{errors.username.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <div className='mb-4 mt-6'>
            <label className='text-sm font-semibold' htmlFor='email'>
              Email:
            </label>
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Invalid email address',
                },
              }}
              render={({ field }) => (
                <>
                  <input
                    type='email'
                    id='email'
                    className='w-full px-3 py-2 border rounded-lg mt-2 focus:ring focus:ring-blue-500 outline-none'
                    placeholder='Enter your email'
                    {...field}
                  />
                  {errors.email && (
                    <p className='text-red-500'>{errors.email.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <div className='mb-4'>
            <label className='text-sm font-semibold' htmlFor='password'>
              Password:
            </label>
            <Controller
              name='password'
              control={control}
              rules={{ required: 'Password is required' }}
              render={({ field }) => (
                <>
                  <input
                    type='password'
                    id='password'
                    className='w-full px-3 py-2 border rounded-lg mt-2 focus:ring focus:ring-blue-500 outline-none'
                    placeholder='Enter your password'
                    {...field}
                  />
                  {errors.password && (
                    <p className='text-red-500'>{errors.password.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <p className='font-bold text-black'>{error}</p>
          <button
            className='bg-blue-600 text-white py-2 px-4 mt-8 rounded-lg hover:bg-blue-500 text-center w-full cursor-pointer'
            type='submit'
            disabled={button}
          >
            Signup
          </button>
        </form>
        ;
      </div>
    </Modal>
  );
};

export default Signup;
