import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Card from '../common/card';
import Header from '../common/header';
import ComplaintForm from './complaintForm';
import UserTracking from './userTracking';
import ownerHomeImg from '../images/ownerHomePage.svg'

const routes = [
    {
        path: "/ownerhome",
        exact: true,
        sidebar: () => <h1> </h1>,
        main: () => <ComplaintForm />
    },
    {
        path: "/track",
        sidebar: () => <h1></h1>,
        main: () => <UserTracking />
    }
];

export default function sidebar() {
    return (
        <Router>
            <Header text="Owner Dashboard" image={ownerHomeImg}/>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "40%",
                        background: "#f0f0f0"
                    }}
                >
                    <div>
                            <Card
                                cardTitle="Welcome,"
                                cardMessage="Do you have a Consumer Grievance? Please Raise your complaint by clicking create button."
                                button="CREATE"
                                link="/complaint"
                            />
                            <Card
                                cardTitle="Hello,"
                                cardMessage="Want to know the status of your complained? click track button."
                                button="TRACK"
                                link="/usertracking"
                            />
                    </div>

                    <Switch>
                        {routes.map((route, index) => (
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a sidebar or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    )
}