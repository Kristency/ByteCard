import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { connect } from 'react-redux';

import { readQRCode } from '../actions';

class QrRead extends Component {
	handleScan = (data) => {
		if (data) {
			this.props.readQRCode(data);
		}
	};

	handleError = (err) => {
		console.error(err);
	};

	render() {
		return (
			<div>
				<QrReader delay={300} onError={this.handleError} onScan={this.handleScan} style={{ width: '100%' }} />
				<p>{this.state.result}</p>
			</div>
		);
	}
}

export default connect(null, { readQRCode })(QrRead);
