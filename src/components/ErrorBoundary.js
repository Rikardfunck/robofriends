import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state ={
			hasError : false
		}
	}

	/* like a catch-block, if an error occurs, this runs */
	componentDidCatch() {
		this.setState({ hasError : true });
	}

	render () {
		if (this.state.hasError) {
			return <h1>Oooooops. That is not good</h1>;
		}

		/* returns the children of this component which i CardList, this is shown in App.js, as this component wraps CardList */
		return this.props.children;
	}
}

export default ErrorBoundary;