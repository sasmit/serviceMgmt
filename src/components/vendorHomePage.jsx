import React, { Component } from 'react';
// import  * as axios from "axios";
import Header from '../common/header';
import Card from '../common/card';
import vendorHomePage from '../images/vendorHomePage.svg';
import { getIssue } from "../services/fakeIssueList";

class VendorHomePage extends Component {
    state = {
        issues: getIssue() 
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
    }
    //ComponentDidMount();

    render() { 
        return (<div>
			<Header text="Vendor Dashboard" image={vendorHomePage} />
            <p>{this.state.issues.length} Issues are in DB</p>
            {this.state.issues.map(data => (
                <div className="row rowStyle">
				<div className="col">
					<Card 
						cardTitle={data.issue}
						cardMessage={data.description}
						button="status"
						link="/complaint"
					/>
				</div>
			</div>
            ))}
			
		</div>);
    }
}
 
export default VendorHomePage;