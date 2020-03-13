import React from 'react';
import Card from '../common/card';

const ListGroup = ({issues, button, cardColor, status, link}) => {
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
									cardColor={cardColor}
									button1={button[0]}
									button2={button[1]}
									status={status}
									link={link}
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