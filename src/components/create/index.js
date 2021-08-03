import { useState } from 'react';

const Create = () => {
	const [memo, setMemo] = useState('');
	const [memoized, setMemoized] = useState([]);

	const onSubmit = (value) => {
		setMemoized((state) => {
			return [...state, value];
		});
		setMemo('');
	};

	return (
		<div>
			<input
				name='memo'
				value={memo}
				onChange={({ target }) => setMemo(target.value)}
				onKeyPress={({ key }) => {
					if (key === 'Enter') onSubmit(memo);
				}}
			/>
		</div>
	);
};

export default Create;
