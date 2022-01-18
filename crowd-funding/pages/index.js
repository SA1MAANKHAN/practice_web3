import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import React, { useEffect } from 'react';
import { Card ,Button } from 'semantic-ui-react';

import Factory from '../ethereum/factory';
import Layout from '../components/Layout.component';




function Index({campaigns}) {  
    
    const renderCampaigns = () => {
    const items = campaigns.map((address)=>{
        return {
            header: address,
            description: <a href="">View Campaign</a>,
            fluid:true,
        }
    })

    return <Card.Group items={items}/>
}
    

    return (
        <Layout>
            <h2>Open Campaigns</h2>
           
            <Button floated='right' content="Create Campaign" icon="add circle" primary/>
             {renderCampaigns() }
        </Layout>
    )
}

Index.getInitialProps = async () => {
  const campaigns = await Factory.methods.getDeployedCampaigns().call();
  return {campaigns};
}

export default Index
