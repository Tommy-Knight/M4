import "bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css"
import WarningSign from "../../mybookshop/src/components/WarningSign"
import MyBadge from "../../mybookshop/src/components/MyBadge"
import FilterBookList from "../../mybookshop/src/components/FilterBookList"
import { Row, Col } from "react-bootstrap"
import CommentsBox from "../../mybookshop/src/components/CommentsBox"

const App = () => (
	<>
		<WarningSign text="ERROR OH NO" />
		<Row>
			<Col className="col-8">
				<FilterBookList />
			</Col>
			<Col className="col-4">
				<CommentsBox />
			</Col>
		</Row>
		<MyBadge variant="warning" text="Something cool" />
	</>
)

export default App
