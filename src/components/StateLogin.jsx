import { useState } from 'react';
import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import { useInput } from '../hooks/useInput';

export default function Login() {
	const {
		value: emailValue,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
	} = useInput('');

	const emailIsInvalid =
		didEdit.email &&
		!isEmail(enteredValues.email) &&
		isNotEmpty(enteredValues.email);
	const passwordIsInvalid =
		didEdit.password && !hasMinLength(enteredValues.password, 6);

	function handleSubmit(event) {
		event.preventDefault();
		console.log(enteredValues);
		//Reset the input buttons programmatically
		// setEnteredValues({
		// 	email: '',
		// 	password: '',
		// });
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<Input
					label='Email'
					type='email'
					name='email'
					onBlur={() => handleInputBlur('email')}
					onChange={handleEmailChange}
					value={emailValue}
					error={emailIsInvalid && 'Please enter a valid email'}
				/>
				<Input
					label='Password'
					type='password'
					name='password'
					onBlur={handleEmailBlur}
					onChange={(event) =>
						handleInputChange('password', event.target.value)
					}
					value={enteredValues.password}
					error={passwordIsInvalid && 'Please enter a valid password'}
					// {error}
				/>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
