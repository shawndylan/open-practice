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
                                <Tab className="Tab-B">Collective</Tab>
                                <Tab className="Tab-B">Cooperative</Tab>
                                <Tab className="Tab-B">Network</Tab>
                                <Tab className="Tab-B">Platform</Tab>
                                <Tab className="Tab-B">Non-Profit</Tab>
                                <Tab className="Tab-B">Baugruppen</Tab>
                            </TabList>
                            <TabPanel>
                                <Collective/>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                        </Tabs>
                     </TabPanel>

                     <TabPanel>
                     <h2>Any content 2</h2>
                     </TabPanel>
                     <TabPanel>
                     <h2>Any content 3</h2>
                     </TabPanel>
                     <TabPanel>
                     <h2>Any content 4</h2>
                     </TabPanel>
                     <TabPanel>
                     <h2>Any content 5</h2>
                     </TabPanel>
                     <TabPanel>
                     <h2>Any content 6</h2>
                     </TabPanel>
                    </Tabs>
            </div>
            );
    }
    }
}

export default Manual