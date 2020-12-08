import React, { Component } from 'react';
import "./atlas.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Iframe from 'react-iframe';


class Atlas extends Component {


	render() {

  return (
    <div className="Atlas">
      <Tabs forceRenderTabPanel defaultIndex={0}>
                    <TabList>
                        <Tab>Timeline</Tab>
                        <Tab>Location</Tab>
                        <Tab>Pathways</Tab>
                        <Tab>Constellations</Tab>
                    </TabList>

                    <TabPanel>
                      <Iframe 
                          src='https://flo.uri.sh/visualisation/3947842/embed' 
                          title='Interactive or visual content'
                          frameBorder='0'
                          scrolling='no'
                          width="100%"
                          height="600px"
                        />
                    </TabPanel>
                     <TabPanel>
                      <Iframe
                        src='https://flo.uri.sh/visualisation/3948559/embed'
                        title='Interactive or visual content'
                        frameBorder='0'
                        scrolling='no'
                        width="100%"
                        height="1000px"
                      />
                     </TabPanel>
                     <TabPanel>
                      <Iframe 
                        src='https://flo.uri.sh/visualisation/3947461/embed'
                        title='Interactive or visual content'
                        frameBorder='0'
                        scrolling='no'
                        width="100%"
                        height="600px"
                        />
                     </TabPanel>
                     <TabPanel>
                     <Iframe 
                        src='https://flo.uri.sh/visualisation/3946746/embed' 
                        title='Interactive or visual content' 
                        frameBorder='0'
                        scrolling='no'
                        width="100%"
                        height="600px"
                      />
                     </TabPanel>
                    </Tabs>
    </div>
      );
}

}

export default Atlas