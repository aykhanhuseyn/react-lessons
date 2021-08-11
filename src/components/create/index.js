import axios from '../../api/axios';
import { useState, useEffect } from 'react';
import { apiRoutes } from '../../api/apiRoutes';

const Create = () => {
	const [inputValue, setInputValue] = useState('');
	const [formData, setFormData] = useState(['foo', 'bar', 'baz']);
	const [apiData, setApiData] = useState([]);

	const onSubmit = (data) => {
		setFormData((prevState) => {
			const newState = [...prevState, data];
			return newState;
		});
		setInputValue('');
	};

	useEffect(() => {
		async function getAPIData() {
			try {
				const response = await axios.get(apiRoutes.users);
				console.log('data', response.data);
				setApiData(response.data);
			} catch (error) {
				console.log(error, error.response);
			}
		}

		getAPIData();
	}, []);

	return (
		<div>
			<input
				name='memo'
				value={inputValue}
				onChange={({ target }) => {
					setInputValue(target.value);
				}}
				onKeyPress={({ key }) => {
					if (key === 'Enter') onSubmit(inputValue);
				}}
			/>

			<div>
				{formData.length ? (
					formData.map((v, i) => {
						return <p key={i}>{v}</p>;
					})
				) : (
					<h1 key='empty2'>Form Data is Empty</h1>
				)}
			</div>

			<div>
				{apiData.length ? (
					apiData.map((v, i) => {
						return <p key={i}>{`ID: ${v.id}, Name: ${v.name}`}</p>;
					})
				) : (
					<h1 key='empty'>API Data is Empty</h1>
				)}
			</div>
		</div>
	);
};

export default Create;
