import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"

const address = "0xa5C78383ad4C7fd16e9B407bB8F19E45609623Bb"
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), address )

export default instance;