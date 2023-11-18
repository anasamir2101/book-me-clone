import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm, Controller } from 'react-hook-form';
import { auth } from './../../firebase';

Modal.setAppElement('#root');

const Login = ({ isOpen, onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState('');
  const [button, setButton] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setError('');
    setButton(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      emailRef.current.value = '';
      passwordRef.current.value = '';

      alert('Login Successfully');

      setButton(false);
      navigate('/tours');
    } catch (error) {
      setButton(false);

      if (
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/user-not-found'
      ) {
        setError('Invalid email or password. Please try again.');
        passwordRef.current.focus();
      } else if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use. Please use a different email.');
        emailRef.current.focus();
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak. Please choose a stronger password.');
        passwordRef.current.focus();
      } else {
        setError('An error occurred. Please try again later.');
        console.error(error);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='w-[420px] bg-white mx-auto p-4 my-32 rounded-md shadow-md shadow-black'
    >
      <div className='w-[300px] h-[400px] mx-auto '>
        <h1 className='text-3xl font-bold mb-4 text-center text-black'>
          Login
        </h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='mb-4 mt-10'>
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
                    className='w-full px-3 py-2 border rounded-lg mt-2 focus:ring focus:ring-blue-500 outline-white'
                    placeholder='Enter your email'
                    {...field}
                    ref={emailRef}
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
                    className='w-full px-3 py-2 border rounded-lg mt-2 focus:ring focus:ring-blue-500 outline outline-white'
                    placeholder='Enter your password'
                    {...field}
                    ref={passwordRef}
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
            type='submit'
            className='bg-blue-600 text-white py-2 px-4 mt-8 rounded-lg hover:bg-blue-500 text-center w-full'
          >
            Login
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
