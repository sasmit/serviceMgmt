import React, { Component } from 'react';
import Header from '../common/header';
import { getIssue } from "../services/fakeIssueList";
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { paginate } from '../utils/paginate';
import userTracking from '../images/trackingPage.svg';

class UserTracking extends Component {
	state = {
		issues: getIssue(),
		pageSize: 4,
		currentPage: 1
	};

	handlePageChange = page => {
		this.setState({ currentPage: page });
	};
	render() {
		const { length: count } = this.state.issues;
		const { currentPage, pageSize, issues: allIssues } = this.state;
		if (count === 0) return <p>There is no issues in the database</p>;
		const issues = paginate(allIssues, currentPage, pageSize);
		return (
			<div>
				<Header text="Track your issues here" image={userTracking} />
				<p>Showing {count} issues in the database</p>
				<ListGroup issues={issues} />
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