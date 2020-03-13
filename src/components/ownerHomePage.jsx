import React, { Component } from 'react';
import Header from '../common/header';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { paginate } from '../utils/paginate';
import { SERVER_ADDRESS, API } from '../utils/constant';
import OwnerHomeImg from '../images/ownerHomePage.svg';

class OwnerHomePage extends Component {
	state = {
		serverData:{},
		pageSize: 4,
		currentPage: 1
	};

	componentDidMount() {
		//fetch original data from service
		fetch(SERVER_ADDRESS.LOCAL_URL + API.get_all_issue,
			{
				method: 'get'
			}).then((response) => {
				response.json().then((body) => {
					this.setState({ serverData: body })
					console.log(body);
				});
			}, (error) => {
				if (error) {
					console.log(error);
				}
			});
	}

	handlePageChange = page => {
		this.setState({ currentPage: page });
	};

	render() {
		const { length: count } = this.state.serverData;
		const { currentPage, pageSize, serverData: allIssues } = this.state;
		if (count === 0) return <p>There is no issues in the database</p>;
		const issues = paginate(allIssues, currentPage, pageSize);
		return (<div>
			<Header text="Owner Dashboard" image={OwnerHomeImg} />
			<p>Showing {count} issues in the database</p>
			<ListGroup issues={issues}
				cardColor="card bg-light mb-3" //add conditional color change
				button={["INFO", "ASSIGN"]}
				status="btn btn-danger"
				link="/info"
			/>
			<Pagination
				itemCount={count}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChange={this.handlePageChange}
			/>
		</div>);
	}
}
export default OwnerHomePage;