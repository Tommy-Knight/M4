import React, { Component } from "react"
import Form from "react-bootstrap/Form"

export default class CommentsBox extends Component {
	state = {
		name: "",
		comment: "",
	}

	render() {
		return (
			<div id="CommentsBox">
				<Form>
					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control
							value={this.state.user}
							type="text"
							placeholder="Who are you?"
							onChange={(e) => this.setState({ name: e.target.value })}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Comment</Form.Label>
						<Form.Control
							value={this.state.text}
							type="text"
							placeholder="Review this book!"
							onChange={(e) => this.setState({ comment: e.target.value })}
						/>
					</Form.Group>
				</Form>
			</div>
		)
	}
}
