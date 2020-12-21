import React from 'react';


const Scroll = (props) => {
	/* children prop holds the child components this component wraps */
	return (
		<div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
			{props.children}
		</div>
		);
};

export default Scroll;