import React, { Component } from 'react';
import Header from '../common/header';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { paginate } from '../utils/paginate';
import { SERVER_ADDRESS, API } from '../utils/constant';
import vendorHomePage from '../images/vendorHomePage.svg';

class VendorHomePage extends Component {
	state = {
		serverData:{},
		pageSize: 4,
		currentPage: 1,
		buttonStatus: "btn btn-danger",
		buttonDisable: false
	};

	componentDidMount() {
		//fetch original data from service
		fetch(SERVER_ADDRESS.LOCAL_URL + API.get_issue_by_status,
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

	onStatusChange = () => {
		console.log("onStatusChange");
		//add query for changing status------> use below setState on success 
		this.setState({buttonStatus : "btn btn-danger disable", buttonDisable: true});
		//on failure show alert
	};

	render() {
		const { length: count } = this.state.serverData;
		const { currentPage, pageSize, serverData: allIssues, buttonStatus, buttonDisable } = this.state;
		if (count === 0) return <p>There is no issues in the database</p>;
		const issues = paginate(allIssues, currentPage, pageSize);

		return (<div>
			<Header text="Vendor Dashboard" image={vendorHomePage} />
			<p>Showing {count} issues in the database</p>
			<ListGroup issues={issues}
				cardColor="card"
				button={["INFO", "RESOLVE"]}
				status={buttonStatus}
				link=""
				onClick={this.onStatusChange}
				isDisabled={buttonDisable}
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

export default VendorHomePage;