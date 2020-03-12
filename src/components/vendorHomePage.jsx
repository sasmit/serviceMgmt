import React, { Component } from 'react';
import Header from '../common/header';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { paginate } from '../utils/paginate';
import vendorHomePage from '../images/vendorHomePage.svg';
import { getIssue } from "../services/fakeIssueList";

class VendorHomePage extends Component {
	state = {
		issues: getIssue(),
		pageSize: 4,
		currentPage: 1
	};

	componentDidMount(){
		//fetch original data from service
		console.log("component did mount succesful");
		fetch("http://10.12.131.32:3006", {
			mode: 'no-cors'
		})
			.then(response => {
				console.log('SUCCESS');
				return response;
			} )
			.then(data => console.log(data))
			.catch(error => console.log('ERROR in GET'));
	};
	
	handlePageChange = page => {
		this.setState({currentPage: page});
	};

	render() {
		const { length: count } = this.state.issues;
		const { currentPage, pageSize, issues: allIssues } = this.state;
		if (count === 0) return <p>There is no issues in the database</p>;
		const issues = paginate(allIssues, currentPage, pageSize );

	if (count === 0) return <p>There is no movies in the database</p>;
		return (<div>
			<Header text="Vendor Dashboard" image={vendorHomePage} />
			<p>Showing {count} issues in the database</p>
				<ListGroup
					issues={issues}
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