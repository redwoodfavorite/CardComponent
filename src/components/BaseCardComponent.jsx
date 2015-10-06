import React from 'react';
import messageData from '../data/messages';
import MessageComponent from './MessageComponent';

export default class BaseCardComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.title,
			data: messageData
		};
	}

	render() {
		let i, l,
			childViews = [],
			data = this.state.data;

		for (i = 0, l = data.length; i < l; i++) {
			childViews.push(
				<MessageComponent
					content={data[i].content}
					user={data[i].user} />
			);
		}

		return (
			<div
			style={{
				width: this.props.width,
				height: this.props.height
			}}
			className="card">
				<div className="card-header">
					<h1> {this.props.title} </h1>
				</div>
				<div className="card-body">
					{childViews}
				</div>
				<div className="card-footer"></div>
			</div>
		);
	}
}