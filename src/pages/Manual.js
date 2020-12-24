import React, { Component }from 'react';
import './manual.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ReactComponent as PracticeStructures} from '../svg/PracticeStructures.svg';
import { ReactComponent as CollectiveStructure} from '../svg/CollectiveStructure.svg';
import { ReactComponent as CooperativeStructure} from '../svg/CooperativeStructure.svg';
import { ReactComponent as NonProfitStructure} from '../svg/NonProfitStructure.svg';
// import { ReactComponent as OfficeStructure} from '../svg/OfficeStructure.svg';
import { ReactComponent as NetworkStructure} from '../svg/NetworkStructure.svg';
import { ReactComponent as PlatformStructure} from '../svg/PlatformStructure.svg';
import { 
    IconBolt,
    IconSwitch,
    IconSpeakerphone,
    IconExchange,
    IconGitFork,
    IconAward,
    IconShoppingCart,
    IconBuilding,
    IconUserPlus,
    IconBuildingArch,
    IconBrandOpenSource ,
    IconHeart,
    IconLeaf,
    IconTrophy,
    IconSchool,
    IconArrowsMinimize,
    IconArrowsMaximize,
    IconArrowsUp,
    IconArrowsDown,
    IconRotateRectangle,
    IconChecks,
    IconArrowUpCircle,
    IconBuildingCommunity,
    IconTools,
    IconCoin,
    IconThumbUp,
    IconTournament,
    IconArrowsSplit,
    IconPencil
} from '@tabler/icons';

import ManualPage from "./ManualPage";

const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyi2cyYWlGXpGrSW'}).base('appjjHhDdEnnFBuSq');


class Manual extends Component {
	constructor(props) {
		super(props);
        this.state = {
            isLoadingStructures: true,
            isLoadingMotivations: true,
            isLoadingMethods: true,
            isLoadingTools: true,
            isLoadingFundingModels: true,
            isLoadingDecisionMaking: true,
            structures: [],
            motivations: [],
            methods: [],
            tools: [],
            fundingModels: [],
            decisionMaking: []
        }
    }

    componentDidMount() {
        this.setState({isLoading: false})

        // load practice STRUCTURES ----------------------

        base('Structures')
		.select({
			view: "Database",
			maxRecords: 100,
		})
		.eachPage((records, fetchNextPage) => {
			this.setState({
				structures: records,
				isLoadingStructures: false,
				key: records.id
			});
			fetchNextPage();
			console.log(records);
        });
        
        // load practice MOTIVATIONS ----------------------

        base('Motivations')
        .select({
            view: "Database",
            maxRecords: 100,
        })
        .eachPage((records, fetchNextPage) => {
            this.setState({
                motivations: records,
                isLoadingMotivations: false,
                key: records.id
            });
            fetchNextPage();
            console.log(records);
        });

         // load practice METHODS ----------------------

        base('Methods')
        .select({
            view: "Database",
            maxRecords: 100,
        })
        .eachPage((records, fetchNextPage) => {
            this.setState({
                methods: records,
                isLoadingMethods: false,
                key: records.id
            });
            fetchNextPage();
            console.log(records);
        });

        // load practice FUNDING MODELS ----------------------

        base('Funding Models')
        .select({
            view: "Database",
            maxRecords: 100,
        })
        .eachPage((records, fetchNextPage) => {
            this.setState({
                fundingModels: records,
                isLoadingFundingModels: false,
                key: records.id
            });
            fetchNextPage();
            console.log(records);
        });
   
        // load practice DECISION-MAKING ----------------------

        base('Decision-Making')
        .select({
            view: "Database",
            maxRecords: 100,
        })
        .eachPage((records, fetchNextPage) => {
            this.setState({
                decisionMaking: records,
                isLoadingDecisionMaking: false,
                key: records.id
            });
            fetchNextPage();
            console.log(records);
        });

        // load practice DECISION-MAKING ----------------------

        base('Tools')
        .select({
            view: "Database",
            maxRecords: 100,
        })
        .eachPage((records, fetchNextPage) => {
            this.setState({
                tools: records,
                isLoadingTools: false,
                key: records.id
            });
            fetchNextPage();
            console.log(records);
        });

    }


    render() {

        if (this.state.isLoadingStructures || this.state.isLoadingMotivations || this.state.isLoadingMethods || this.state.isLoadingFundingModels || this.state.isLoadingDecisionMaking || this.state.isLoadingTools ) {
        return (
            <h1 className="Loading">Loading....</h1>
        )
    }

        return (
            <div className="Manual">
                <Tabs className="Top-Level-Tabs" forceRenderTabPanel defaultIndex={0}>
                    <TabList>
                        <Tab><IconTournament size={18}/>Structure</Tab>
                        <Tab><IconThumbUp size={18}/>Motivations</Tab>
                        <Tab><IconPencil size={18}/>Methods</Tab>
                        <Tab><IconCoin size={18}/>Funding Models</Tab>
                        <Tab><IconArrowsSplit size={18}/>Decision Making</Tab>
                        <Tab><IconTools size={18}/>Tools</Tab>
                    </TabList>

                    <TabPanel>
                        <Tabs className="Structures" forceRenderTabPanel defaultIndex={0}>
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab>Collective</Tab>
                                <Tab>Cooperative</Tab>
                                <Tab>Network</Tab>
                                <Tab>Platform</Tab>
                                <Tab>Non-Profit</Tab>
                            </TabList>
                            <TabPanel>
                            {this.state.structures.filter(item =>
                                item.fields.Term === 'Overview').map((item, key) =>
                                <ManualPage
                                    key= {item.id}
                                    term= {item.fields.Term}
                                    definition= {item.fields.Definition}
                                    diagram={<PracticeStructures className="practice-structures"/>}
                                    />
                                    )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.structures.filter(item =>
                                item.fields.Term === 'Collective').map((item, key) =>
                                <ManualPage
                                    key= {item.id}
                                    term= {item.fields.Term}
                                    definition= {item.fields.Definition}
                                    diagram={<CollectiveStructure/>}
                                    variantA={item.fields["Variant A"]}
                                    variantB={item.fields["Variant B"]}
                                    variantC={item.fields["Variant C"]}
                                    variantD={item.fields["Variant D"]}
                                    variantADefinition={item.fields["Variant A Definition"]}
                                    variantBDefinition={item.fields["Variant B Definition"]}
                                    variantCDefinition={Math.round(item.fields["Variant C Definition"])}
                                    variantDDefinition={item.fields["Variant D Definition"].map(practice => <li>{practice}</li>)}
                                    />
                                    )}
                                    
                            </TabPanel>
                            <TabPanel>
                                {this.state.structures.filter(item =>
                                    item.fields.Term === 'Cooperative').map((item, key) =>
                                    <ManualPage
                                        key= {item.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        diagram={<CooperativeStructure/>}
                                        variantA={item.fields["Variant A"]}
                                        variantB={item.fields["Variant B"]}
                                        variantC={item.fields["Variant C"]}
                                        variantD={item.fields["Variant D"]}
                                        variantADefinition={item.fields["Variant A Definition"]}
                                        variantBDefinition={item.fields["Variant B Definition"]}
                                        variantCDefinition={Math.round(item.fields["Variant C Definition"])}
                                        variantDDefinition={item.fields["Variant D Definition"].map(practice => <li>{practice}</li>)}
                                        />
                                        )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.structures.filter(item =>
                                        item.fields.Term === 'Network').map((item, key) =>
                                        <ManualPage
                                            key= {item.id}
                                            term= {item.fields.Term}
                                            definition= {item.fields.Definition}
                                            diagram={<NetworkStructure/>}
                                            variantA={item.fields["Variant A"]}
                                            variantB={item.fields["Variant B"]}
                                            variantC={item.fields["Variant C"]}
                                            variantD={item.fields["Variant D"]}
                                            variantADefinition={item.fields["Variant A Definition"]}
                                            variantBDefinition={item.fields["Variant B Definition"]}
                                            variantCDefinition={Math.round(item.fields["Variant C Definition"])}
                                            variantDDefinition={item.fields["Variant D Definition"].map(practice => <li>{practice}</li>)}
                                            />
                                            )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.structures.filter(item =>
                                            item.fields.Term === 'Platform').map((item, key) =>
                                            <ManualPage
                                                key= {item.id}
                                                term= {item.fields.Term}
                                                definition= {item.fields.Definition}
                                                diagram={<PlatformStructure/>}
                                                variantA={item.fields["Variant A"]}
                                                variantB={item.fields["Variant B"]}
                                                variantC={item.fields["Variant C"]}
                                                variantD={item.fields["Variant D"]}
                                                variantADefinition={item.fields["Variant A Definition"]}
                                                variantBDefinition={item.fields["Variant B Definition"]}
                                                variantCDefinition={Math.round(item.fields["Variant C Definition"])}
                                                variantDDefinition={item.fields["Variant D Definition"].map(practice => <li>{practice}</li>)}
                                                />
                                                )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.structures.filter(item =>
                                                item.fields.Term === 'Non-Profit').map((item, key) =>
                                                <ManualPage
                                                    key= {item.id}
                                                    term= {item.fields.Term}
                                                    definition= {item.fields.Definition}
                                                    diagram={<NonProfitStructure/>}
                                                    variantA={item.fields["Variant A"]}
                                                    variantB={item.fields["Variant B"]}
                                                    variantC={item.fields["Variant C"]}
                                                    variantD={item.fields["Variant D"]}
                                                    variantADefinition={item.fields["Variant A Definition"]}
                                                    variantBDefinition={item.fields["Variant B Definition"]}
                                                    variantCDefinition={Math.round(item.fields["Variant C Definition"])}
                                                    variantDDefinition={item.fields["Variant D Definition"].map(practice => <li>{practice}</li>)}
                                                    />
                                                    )}
                            </TabPanel>
                            <TabPanel>
                            </TabPanel>
                        </Tabs>
                     </TabPanel>
                     
                     <TabPanel>
                        <Tabs className="Motivations" forceRenderTabPanel defaultIndex={0}>
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab><IconBuildingCommunity size={18}/>Political</Tab>
                                <Tab><IconHeart size={18}/>Social</Tab>
                                <Tab><IconLeaf size={18}/>Ecological</Tab>
                                <Tab><IconTrophy size={18}/>Professional</Tab>
                                <Tab><IconSchool size={18}/>Pedagogical</Tab>
                            </TabList>
                            <TabPanel>
                                {this.state.motivations.filter(item =>
                                item.fields.Term === 'Overview').map((item, key) =>
                                <ManualPage
                                    key= {key.id}
                                    term= {item.fields.Term}
                                    definition= {item.fields.Definition}
                                    />
                                    )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.motivations.filter(item =>
                                item.fields.Term === 'Political').map((item, key) =>
                                <ManualPage
                                    key= {key.id}
                                    term= {item.fields.Term}
                                    definition= {item.fields.Definition}
                                    variantD= {item.fields["Variant A"]}
                                    variantDDefinition= {item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                    />
                                    )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.motivations.filter(item =>
                                    item.fields.Term === 'Social').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        variantD= {item.fields["Variant A"]}
                                        variantDDefinition= {item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                        />
                                        )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.motivations.filter(item =>
                                        item.fields.Term === 'Ecological').map((item, key) =>
                                        <ManualPage
                                            key= {key.id}
                                            term= {item.fields.Term}
                                            definition= {item.fields.Definition}
                                            variantD= {item.fields["Variant A"]}
                                            variantDDefinition= {item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                            />
                                            )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.motivations.filter(item =>
                                            item.fields.Term === 'Professional').map((item, key) =>
                                            <ManualPage
                                                key= {key.id}
                                                term= {item.fields.Term}
                                                definition= {item.fields.Definition}
                                                variantD= {item.fields["Variant A"]}
                                                variantDDefinition= {item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                                />
                                                )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.motivations.filter(item =>
                                                item.fields.Term === 'Pedagogical').map((item, key) =>
                                                <ManualPage
                                                    key= {key.id}
                                                    term= {item.fields.Term}
                                                    definition= {item.fields.Definition}
                                                    variantD= {item.fields["Variant A"]}
                                                    variantDDefinition= {item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                                    />
                                                    )}
                            </TabPanel>
                        </Tabs>
                     </TabPanel>

                     <TabPanel>
                        <Tabs className="Methods" forceRenderTabPanel defaultIndex={0}>
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab><IconSpeakerphone size={18}/> Dissemination</Tab>
                                <Tab><IconBolt size={18}/>Empowerment</Tab>
                                <Tab><IconExchange size={18}/>Appropriation</Tab>
                                <Tab><IconSwitch size={18}/>Subversion</Tab>
                                <Tab><IconGitFork size={18}/>Networking</Tab>
                            </TabList>
                            <TabPanel>
                                {this.state.methods.filter(item =>
                                item.fields.Term === 'Overview').map((item, key) =>
                                <ManualPage
                                    key= {key.id}
                                    term= {item.fields.Term}
                                    definition= {item.fields.Definition}
                                    />
                                    )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.methods.filter(item =>
                                item.fields.Term === 'Dissemination').map((item, key) =>
                                <ManualPage
                                    key= {key.id}
                                    term= {item.fields.Term}
                                    definition= {item.fields.Definition}
                                    variantD= {item.fields["Variant A"]}
                                    variantDDefinition= {item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                    />
                                    )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.methods.filter(item =>
                                    item.fields.Term === 'Empowerment').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        variantD= {item.fields["Variant A"]}
                                        variantDDefinition= {item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                        />
                                        )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.methods.filter(item =>
                                    item.fields.Term === 'Appropriation').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        variantD= {item.fields["Variant A"]}
                                        variantDDefinition= {item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                        />
                                        )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.methods.filter(item =>
                                    item.fields.Term === 'Subversion').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        variantD= {item.fields["Variant A"]}
                                        variantDDefinition= {item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                        />
                                        )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.methods.filter(item =>
                                    item.fields.Term === 'Networking').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        variantD= {item.fields["Variant A"]}
                                        variantDDefinition= {item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                        />
                                        )}
                            </TabPanel>
                        </Tabs>
                     </TabPanel>

                     <TabPanel>
                        <Tabs className="Funding-Models" forceRenderTabPanel defaultIndex={0}>
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab><IconAward size={18}/>Application-Based</Tab>
                                <Tab><IconUserPlus size={18}/>Economies of Scale</Tab>
                                <Tab><IconBuildingArch size={18}/>Partnerships</Tab>
                                <Tab><IconShoppingCart size={18}/>Value Creation</Tab>
                            </TabList>
                            <TabPanel>
                                {this.state.fundingModels.filter(item =>
                                item.fields.Term === 'Overview').map((item, key) =>
                                <ManualPage
                                    key= {key.id}
                                    term= {item.fields.Term}
                                    definition= {item.fields.Definition}
                                
                                    />
                                    )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.fundingModels.filter(item =>
                                item.fields.Group === 'Application-Based').map((item, key) =>
                                <ManualPage
                                    key= {key.id}
                                    term= {item.fields.Term}
                                    definition= {item.fields.Definition}
                                    variantD= {item.fields["Variant A"]}
                                    variantDDefinition={item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                
                                    />
                                    )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.fundingModels.filter(item =>
                                    item.fields.Group === 'Economies of Scale').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        variantD= {item.fields["Variant A"]}
                                    variantDDefinition={item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                        />
                                        )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.fundingModels.filter(item =>
                                        item.fields.Group === 'Partnerships').map((item, key) =>
                                        <ManualPage
                                            key= {key.id}
                                            term= {item.fields.Term}
                                            definition= {item.fields.Definition}
                                            variantD= {item.fields["Variant A"]}
                                            variantDDefinition={item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                            />
                                            )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.fundingModels.filter(item =>
                                            item.fields.Group === 'Value Creation').map((item, key) =>
                                            <ManualPage
                                                key= {key.id}
                                                term= {item.fields.Term}
                                                definition= {item.fields.Definition}
                                                variantD= {item.fields["Variant A"]}
                                                variantDDefinition={item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                                />
                                                )}
                            </TabPanel>
                        </Tabs>
                     </TabPanel>

                     <TabPanel>
                        <Tabs className="Decision-Making" forceRenderTabPanel defaultIndex={0}>
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab><IconArrowsMinimize size={18}/>Consensus</Tab>
                                <Tab><IconArrowsMaximize size={18}/>Dis-sensus</Tab>
                                <Tab><IconArrowsUp size={18}/>Majority</Tab>
                                <Tab><IconArrowsDown size={18}/>Minority</Tab>
                                <Tab><IconRotateRectangle size={18}/>Consultative</Tab>
                                <Tab><IconArrowUpCircle size={18}/>Autocratic</Tab>
                                <Tab><IconChecks size={18}/>Unanimity</Tab>
                            </TabList>
                            <TabPanel>
                                {this.state.decisionMaking.filter(item =>
                                item.fields.Term === 'Overview').map((item, key) =>
                                <ManualPage
                                    key= {key.id}
                                    term= {item.fields.Term}
                                    definition= {item.fields.Definition}
                                    />
                                    )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.decisionMaking.filter(item =>
                                item.fields.Term === 'Consensus').map((item, key) =>
                                <ManualPage
                                    key= {key.id}
                                    term= {item.fields.Term}
                                    definition= {item.fields.Definition}
                                    />
                                    )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.decisionMaking.filter(item =>
                                    item.fields.Term === 'Dis-sensus').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        />
                                        )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.decisionMaking.filter(item =>
                                        item.fields.Term === 'Majority').map((item, key) =>
                                        <ManualPage
                                            key= {key.id}
                                            term= {item.fields.Term}
                                            definition= {item.fields.Definition}
                                            />
                                            )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.decisionMaking.filter(item =>
                                            item.fields.Term === 'Minority').map((item, key) =>
                                            <ManualPage
                                                key= {key.id}
                                                term= {item.fields.Term}
                                                definition= {item.fields.Definition}
                                                />
                                                )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.decisionMaking.filter(item =>
                                                item.fields.Term === 'Consultative').map((item, key) =>
                                                <ManualPage
                                                    key= {key.id}
                                                    term= {item.fields.Term}
                                                    definition= {item.fields.Definition}
                                                    />
                                                    )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.decisionMaking.filter(item =>
                                                item.fields.Term === 'Autocratic').map((item, key) =>
                                                <ManualPage
                                                    key= {key.id}
                                                    term= {item.fields.Term}
                                                    definition= {item.fields.Definition}
                                                    />
                                                    )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.decisionMaking.filter(item =>
                                                item.fields.Term === 'Unanimity').map((item, key) =>
                                                <ManualPage
                                                    key= {key.id}
                                                    term= {item.fields.Term}
                                                    definition= {item.fields.Definition}
                                                    />
                                                    )}
                            </TabPanel>
                        </Tabs>
                     </TabPanel>

                     <TabPanel>
                        <Tabs className="Tools" forceRenderTabPanel defaultIndex={0}>
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab><IconSpeakerphone size={18}/>Tools of Dissemination</Tab>
                                <Tab><IconBolt size={18}/>Tools of Empowerment</Tab>
                                <Tab><IconExchange size={18}/>Tools of Appropriation</Tab>
                                <Tab><IconSwitch size={18}/>Tools of Subversion</Tab>
                                <Tab><IconGitFork size={18}/>Tools of Networking</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="manual-container">
                                    {this.state.tools.filter(item =>
                                    item.fields.Method === 'Overview').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        />
                                        )}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="manual-container">
                                    {this.state.tools.filter(item =>
                                    item.fields.Method === 'Dissemination').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        variantA={item.fields["Variant A"]}
                                        variantADefinition={item.fields["Variant A Definition"].map(item => <li>{item}</li>)}
                                        variantC={item.fields["Variant B"]}
                                        variantCDefinition={item.fields["Variant B Definition"].map(item => <li>{item}</li>)}
                                        variantD={item.fields["Variant C"]}
                                        variantDDefinition={item.fields["Variant C Definition"].map(item => <li><a href={item}>{item}</a></li>)}
                                        />
                                        )}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                {this.state.tools.filter(item =>
                                    item.fields.Method === 'Empowerment').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        variantC={item.fields["Variant B"]}
                                        variantCDefinition={item.fields["Variant B Definition"].map(item => <li>{item}</li>)}
                                        variantD={item.fields["Variant C"]}
                                        variantDDefinition={item.fields["Variant C Definition"].map(item => <li><a href={item}>{item}</a></li>)}
                                        />
                                        )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.tools.filter(item =>
                                    item.fields.Method === 'Appropriation' && item.fields.Term !== "Overview").map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        variantC={item.fields["Variant B"]}
                                        variantCDefinition={item.fields["Variant B Definition"].map(item => <li>{item}</li>)}
                                        variantD={item.fields["Variant C"]}
                                        variantDDefinition={item.fields["Variant C Definition"].map(item => <li><a href={item}>{item}</a></li>)}
                                        />
                                        )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.tools.filter(item =>
                                    item.fields.Method === 'Subversion').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        variantC={item.fields["Variant B"]}
                                        variantCDefinition={item.fields["Variant B Definition"].map(item => <li>{item}</li>)}
                                        variantD={item.fields["Variant C"]}
                                        variantDDefinition={item.fields["Variant C Definition"].map(item => <li><a href={item}>{item}</a></li>)}
                                        />
                                        )}
                            </TabPanel>
                            <TabPanel>
                                {this.state.tools.filter(item =>
                                    item.fields.Method === 'Networking').map((item, key) =>
                                    <ManualPage
                                        key= {key.id}
                                        term= {item.fields.Term}
                                        definition= {item.fields.Definition}
                                        variantC={item.fields["Variant B"]}
                                        variantCDefinition={item.fields["Variant B Definition"].map(item => <li>{item}</li>)}
                                        variantD={item.fields["Variant C"]}
                                        variantDDefinition={item.fields["Variant C Definition"].map(item => <li><a href={item}>{item}</a></li>)}
                                        />
                                        )}
                            </TabPanel>
                        </Tabs>
                     </TabPanel>

                </Tabs>
            </div>
            );
    }
}

export default Manual