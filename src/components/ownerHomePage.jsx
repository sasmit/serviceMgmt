import React, { Component } from 'react';
import Header from '../common/header';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { paginate } from '../utils/paginate';
import { getIssue } from "../services/fakeIssueList";
import OwnerHomeImg from '../images/ownerHomePage.svg';

class OwnerHomePage extends Component {
    state = {
		issues: getIssue(),
		pageSize: 4,
		currentPage: 1
	};
    handlePageChange = page => {
		this.setState({currentPage: page});
	};

    render() {
        const { length: count } = this.state.issues;
		const { currentPage, pageSize, issues: allIssues } = this.state;
		if (count === 0) return <p>There is no issues in the database</p>;
		const issues = paginate(allIssues, currentPage, pageSize );
       return (<div>
			<Header text="Owner Dashboard" image={OwnerHomeImg} />
			<p>Showing {count} issues in the database</p>
            <ListGroup issues={issues}
				cardColor="card text-white bg-primary mb-3" //add conditional color change
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