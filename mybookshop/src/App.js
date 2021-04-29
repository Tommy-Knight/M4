import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "../../M4D3/src/components/WarningSign"
import MyBadge from "../../M4D3/src/components/MyBadge"
import FilterBookList from "../../M4D3/src/components/FilterBookList"

const App = () => (
    <>
        <FilterBookList />
        <WarningSign text="ERROR OH NO" />
        <MyBadge variant="warning" text="Something cool" />
    </>
)

export default App
