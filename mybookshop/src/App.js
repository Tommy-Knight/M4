import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "../../mybookshop/src/components/WarningSign"
import MyBadge from "../../mybookshop/src/components/MyBadge"
import FilterBookList from "../../mybookshop/src/components/FilterBookList"

const App = () => (
    <>
        <FilterBookList />
        <WarningSign text="ERROR OH NO" />
        <MyBadge variant="warning" text="Something cool" />
    </>
)

export default App
