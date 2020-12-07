import React, { Component }from 'react';
import './manual.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collective from "./mnl-collective";


class Manual extends Component {
	constructor(props) {
		super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({isLoading: false})
    }


    render() {

        if (this.state.isLoading) {
        return (

        <h1 className="Loading">Loading....</h1>
        )
    }
        else {
        return (
            <div className="Manual">
                  <Tabs forceRenderTabPanel defaultIndex={0}>
                    <TabList>
                        <Tab>Structure</Tab>
                        <Tab>Motivations</Tab>
                        <Tab>Methods</Tab>
                        <Tab>Funding Models</Tab>
                        <Tab>Decision Making</Tab>
                        <Tab>Tools</Tab>
                    </TabList>

                    <TabPanel>
                        <Tabs forceRenderTabPanel defaultIndex={0}>
                            <TabList>
                                <Tab>Collective</Tab>
                                <Tab>Cooperative</Tab>
                                <Tab>Network</Tab>
                                <Tab>Platform</Tab>
                                <Tab>Non-Profit</Tab>
                                <Tab>Baugruppen</Tab>
                            </TabList>
                            <TabPanel>
                                <Collective/>
                            </TabPanel>
                            <TabPanel>
                                <h2>In Progress</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>In Progress</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>In Progress</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>In Progress</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>In Progress</h2>
                            </TabPanel>
                        </Tabs>
                     </TabPanel>

                     <TabPanel>
                     <h2>In Progress</h2>
                     </TabPanel>
                     <TabPanel>
                     <h2>In Progress</h2>
                     </TabPanel>
                     <TabPanel>
                     <h2>In Progress</h2>
                     </TabPanel>
                     <TabPanel>
                     <h2>In Progress</h2>
                     </TabPanel>
                     <TabPanel>
                     <h2>In Progress</h2>
                     </TabPanel>
                    </Tabs>
            </div>
            );
    }
    }
}

export default Manual