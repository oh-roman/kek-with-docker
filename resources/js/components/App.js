import React, {Component, Fragment} from "react";
import {Header, Footer} from "./Layouts"
import Tasks from "./Tasks"
import CustomCard from "./CustomCard";

export default class extends Component {
    render() {
        return <Fragment>
            <Header/>

            <Tasks/>
            <CustomCard/>

            <Footer/>
        </Fragment>
    }
}

