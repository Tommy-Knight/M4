import React from "react"

const API = "http://www.omdbapi.com/"
const APIKEY = "c71a553d"

class Search extends React.Component {
	state = {
		query: this.props.query,
		status: 0,
		// 0 = not started
		// 1 = started, spinner visible
		// 2 = data recieved
		// 3 = data processed and ready
		// 4 = spinner invisible and return data
		// 5 = error while processing data
	}

	fetchFromAPI = async () => {
		this.setState({ status: 0 })

		if (this.state.query === "") return null
		let result = ""

		try {
			this.setState({ status: 1 })
			result = await fetch(API + `?apikey=${APIKEY}&s=` + this.state.query)
			if (!result.status.ok)
				throw new Error("Error, API returned false on status.ok")
			this.setState({ status: 2 })
			result = await result.json()
			this.setState({ status: 3 })
		} catch (error) {
			this.setState({ status: 5 })
			console.error(error)
			return null
		} finally {
			this.setState({ status: 4 })
			console.log(result)
			return result
		}
	}
}

export default Search
