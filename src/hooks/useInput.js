import React, { useState } from 'react';

function useInput(defaultValue) {
	const [enteredValue, setEnteredValue] = useState(defaultValue);
	const [didEdit, setDidEdit] = useState(false);

	function handleInputChange(event) {
		setEnteredValue(event.target.value);
		setDidEdit(false);
	}

	function handleInputBlur() {
		setDidEdit(true);
	}

	return {
		value: enteredValue,
		handleInputChange,
		handleInputBlur,
	};
}

//export default useInput
