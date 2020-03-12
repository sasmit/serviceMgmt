import React, { Component } from 'react';
import Header from '../common/header';
import Card from '../common/card';
import { getIssue } from "../services/fakeIssueList";
import userTracking from '../images/trackingPage.svg';

class UserTracking extends Component {
    state = {
        issues: getIssue()
    }
    render() {
        return (
            <div>
                <Header text="Track your issues here" image={userTracking} />
            </div>
        );
    }
}

export default UserTracking;