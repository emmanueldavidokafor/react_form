import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import { useInput } from '../hooks/useInput';

export default function Login() {
	const {
		value: emailValue,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: emailHasError,
	} = useInput('', (value) => isEmail(value) && isNotEmpty(value));

	const {
		value: passwordValue,
		handleInputChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
		hasError: passwordHasError,
	} = useInput('', (value) => hasMinLength(value, 6));

	// const emailIsInvalid =
	// 	didEdit.email &&
	// 	!isEmail(enteredValues.email) &&
	// 	isNotEmpty(enteredValues.email);
	// const passwordIsInvalid =
	// 	didEdit.password && !hasMinLength(enteredValues.password, 6);

	function handleSubmit(event) {
		event.preventDefault();

		if (emailHasError || passwordHasError) {
			return;
		}
		console.log(emailValue, passwordValue);
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
					onBlur={handleEmailBlur}
					onChange={handleEmailChange}
					value={emailValue}
					error={emailHasError && 'Please enter a valid email'}
				/>
				<Input
					label='Password'
					type='password'
					name='password'
					onBlur={handlePasswordBlur}
					onChange={handlePasswordChange}
					value={passwordValue}
					error={passwordHasError && 'Please enter a valid password'}
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
