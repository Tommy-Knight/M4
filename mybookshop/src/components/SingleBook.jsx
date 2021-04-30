import React from "react"
import CardColumns from "react-bootstrap/CardColumns"
import Card from "react-bootstrap/Card"

class SingleBook extends React.Component {
    state = {
        selected: false
    }

    toggleBorder = () => {
        this.setState({ selected: !this.state.selected })
    }

    render() {
        return (
					<CardColumns>
						<Card
							className={this.state.selected ? "border border-danger" : ""}
							onClick={this.toggleBorder}
						>
							<Card.Img variant="top" src={this.props.book.img} />
							<Card.Body>
								<Card.Title>{this.props.book.title}</Card.Title>
							</Card.Body>
						</Card>
					</CardColumns>
				)
    }
}

export default SingleBook
