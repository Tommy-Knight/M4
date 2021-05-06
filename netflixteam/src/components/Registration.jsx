import React, { Component } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"

export default class Registration extends Component {
	state = {
		firstName: "",
		firstNameValid: false,
		lastName: "",
		lastNameValid: false,
		planetValue: "",
		planetValid: false,

		allValid: false,
	}

	formValid = () => {
		if (this.state.firstNameValid && this.state.planetValid)
			this.setState({ allValid: true })
		 else 
			this.setState({ allValid: false })
		}

	render() {
		return (
			<Form style={{ marginLeft: "200px", marginRight: "200px" }}>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>First Name</Form.Label>
						<Form.Control
							className="forminput"
							placeholder="First name"
							value={this.state.firstName}
							onChange={(e) => {
								this.setState({ firstName: e.target.value })
								if (e.target.value.length < 2)
									this.setState({
										firstNameValid: false,
									})
								else
									this.setState({
										firstNameValid: true,
									})
								this.formValid()
							}}
							required
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							className="forminput"
							placeholder="Last name"
							// value={this.state.firstName}
							onChange={(e) => {
								this.setState({ firstName: e.target.value })
								if (e.target.value.length < 2)
									this.setState({
										firstNameValid: false,
									})
								else
									this.setState({
										firstNameValid: true,
									})
								this.formValid()
							}}
							required
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Date of Birth</Form.Label>
						<Form.Control type="date" required />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control
							className="forminput"
							type="email"
							placeholder="Enter email"
							// value={this.state.firstName}
							onChange={(e) => {
								this.setState({ firstName: e.target.value })
								if (e.target.value.length < 2)
									this.setState({
										firstNameValid: false,
									})
								else
									this.setState({
										firstNameValid: true,
									})
								this.formValid()
							}}
							required
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							className="forminput"
							type="password"
							placeholder="Password"
							// value={this.state.firstName}
							onChange={(e) => {
								this.setState({ firstName: e.target.value })
								if (e.target.value.length < 2)
									this.setState({
										firstNameValid: false,
									})
								else
									this.setState({
										firstNameValid: true,
									})
								this.formValid()
							}}
							required
						/>
					</Form.Group>
				</Form.Row>
				<Form.Group controlId="formGridAddress1">
					<Form.Label>Address</Form.Label>
					<Form.Control
						className="forminput"
						// value={this.state.firstName}
						onChange={(e) => {
							this.setState({ firstName: e.target.value })
							if (e.target.value.length < 2)
								this.setState({
									firstNameValid: false,
								})
							else
								this.setState({
									firstNameValid: true,
								})
							this.formValid()
						}}
						required
					/>
				</Form.Group>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>City</Form.Label>
						<Form.Control
							className="forminput"
							// value={this.state.firstName}
							onChange={(e) => {
								this.setState({ firstName: e.target.value })
								if (e.target.value.length < 2)
									this.setState({
										firstNameValid: false,
									})
								else
									this.setState({
										firstNameValid: true,
									})
								this.formValid()
							}}
							required
						/>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label>Post Code</Form.Label>
						<Form.Control
							className="forminput"
							// value={this.state.firstName}
							onChange={(e) => {
								this.setState({ firstName: e.target.value })
								if (e.target.value.length < 2)
									this.setState({
										firstNameValid: false,
									})
								else
									this.setState({
										firstNameValid: true,
									})
								this.formValid()
							}}
							required
						/>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Planet</Form.Label>
						<Form.Control
							className="forminput"
							as="select"
							defaultValue="Choose..."
							value={this.state.planetValue}
							onChange={(e) => {
								console.log(e.target.value)
								this.setState({ planetValue: e.target.value })
								if (e.target.value === "Earth")
									this.setState({
										planetValid: true,
									})
								else
									this.setState({
										planetValid: false,
									})
								this.formValid()
							}}
							required
						>
							<option>Select ...</option>
							<option>Earth</option>
							<option>Not Earth</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Group controlId="formGridAddress1">
					<Form.Label>Credit Card</Form.Label>
					<Form.Control
						className="forminput"
						placeholder="XXXX-XXXX-XXXX-XXXX"
						// value={this.state.firstName}
						onChange={(e) => {
							this.setState({ firstName: e.target.value })
							if (e.target.value.length < 2)
								this.setState({
									firstNameValid: false,
								})
							else
								this.setState({
									firstNameValid: true,
								})
							this.formValid()
						}}
						required
					/>
				</Form.Group>
				<Button
					variant={!this.state.allValid ? "danger" : "success"}
					type="submit"
				>
					Submit
				</Button>
			</Form>
		)
	}
}
