import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
	const { progress } = useProgress();

	return (
		<Html>
			<span className='canvas-loader'></span>
			<p
				style={{
					fontSize: 24,
					color: '#f1f1f1',
					fontWeight: 800,
					transform: 'translateX(-50%)'
				}}
			>
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
};

export default Loader;
