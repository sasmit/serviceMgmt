import React from 'react';
import Card from '../common/card';

const ListGroup = ({issues}) => {
	return (
		<table className="table">
			<tbody>
				{
					issues.map(issue => (
						<tr key={issue._id}>
							<td>
								<Card
									cardTitle={issue.issue}
									cardMessage={issue.description}
									button="status"
									link="/usertracking"
								/>
							</td>
						</tr>
					))
				}
			</tbody>
		</table>
	);
}

export default ListGroup;