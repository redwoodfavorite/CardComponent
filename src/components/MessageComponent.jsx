import React from 'react';
import messageData from '../data/messages';

export default class BaseCardComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: this.props.user,
			content: this.props.content
		};
	}

	render() {
		return (
			 <div className="child-view">
			 	{this.state.content}
			 </div>
		);
	}
}