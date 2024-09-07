import { useState } from 'react';
import Input from './Input';
import {
	isEmail,
	isNotEmpty,
	hasMinLength,
	isEqualsToOtherValue,
} from '../util/validation';

export default function Login() {
	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	});
	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

	function handleInputChange(identifier, value) {
		setEnteredValues((prevValues) => ({
			...prevValues,
			[identifier]: value,
		}));

		setDidEdit((prevEdit) => ({
			...prevEdit,
			[identifier]: false,
		}));
	}

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

	function handleInputBlur(identifier) {
		setDidEdit((prevEdit) => ({
			...prevEdit,
			[identifier]: true,
		}));
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
					onChange={(event) => handleInputChange('email', event.target.value)}
					value={enteredValues.email}
					error={emailIsInvalid && 'Please enter a valid email'}
				/>
				<Input
					label='Password'
					type='password'
					name='password'
					onBlur={() => handleInputBlur('password')}
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
