import React, { Component } from 'react';
import Header from '../common/header';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { paginate } from '../utils/paginate';
import vendorHomePage from '../images/vendorHomePage.svg';

class VendorHomePage extends Component {
	state = {
		serverData:{},
		pageSize: 4,
		currentPage: 1
	};

	componentDidMount() {
		//fetch original data from service
		fetch("http://10.12.137.16:8000/issue/as/true/",
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
			<Header text="Vendor Dashboard" image={vendorHomePage} />
			<p>Showing {count} issues in the database</p>
			<ListGroup issues={issues}
				cardColor="card"
				button={["INFO", "RESOLVE"]}
				status="btn btn-success"
				link=""
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