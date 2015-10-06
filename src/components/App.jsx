import React from 'react';
import BaseCardComponent from './BaseCardComponent';

export default class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div id="app-container">
				<BaseCardComponent
				title="@Jordan, @Mike, @Larry"
				width={innerWidth}
				height={innerHeight} />
			</div>
		);
	}
}