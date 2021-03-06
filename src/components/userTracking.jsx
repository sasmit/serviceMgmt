import React, { Component } from 'react';
import Header from '../common/header';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { paginate } from '../utils/paginate';
import { SERVER_ADDRESS, API } from '../utils/constant';
import userTracking from '../images/trackingPage.svg';

class UserTracking extends Component {
	state = {
		serverData: {},
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

	handleInfo = () => {
		console.log(this.state.serverData);
	};

	render() {
		const { length: count } = this.state.serverData;
		const { currentPage, pageSize, serverData: allIssues } = this.state;
		if (count === 0) return <p>There is no issues in the database</p>;
		const issues = paginate(allIssues, currentPage, pageSize);
		return (
			<div>
				<Header text="Track your issues here" image={userTracking} />
				<p>Showing {count} issues in the database</p>
				<ListGroup 
					issues={issues}
					cardColor="card"
					button={["CHECK STATUS"]}
					fetchInfo={this.handleInfo}
					status="d-none"
					link={`/info?trackId=${this.state.serverData[0].data["trackId"]}`}
				/>
				<Pagination
					itemCount={count}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={this.handlePageChange}
				/>
			</div>
		);
	}
}

export default UserTracking;