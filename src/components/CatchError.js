import React from 'react';

class CatchError extends React.Component {
	state = {
		hasError: false,
		error: null,
	};

	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error: error.message,
		};
	}

	render() {
		if (this.state.hasError) {
			return <h1>{this.state.error}</h1>;
		}

		return this.props.children;
	}
}

export default CatchError;
