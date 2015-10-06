import React from 'react';
import messageData from '../data/messages';

export default class BaseCardComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: this.props.date,
			user: this.props.user,
			content: this.props.content
		};
	}

	render() {
		return (
			 <div className="message-container">
			 	<div className="message-headers">
				 	<span className="message-user">@{this.state.user.toUpperCase()}</span>
				 	<span className="message-date">{this.state.date}</span>
			 	</div>
			 	<span className="message-content">{this.state.content}</span>
			 </div>
		);
	}
}