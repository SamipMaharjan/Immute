import { Connection, clusterApiUrl } from "@solana/web3.js";
import { MarginfiClient, getConfig } from '@mrgnlabs/marginfi-client-v2';
import { NodeWallet } from "@mrgnlabs/mrgn-common";

const CLUSTER_CONNECTION = clusterApiUrl("devnet")


const connection = new Connection(CLUSTER_CONNECTION, "confirmed");
console.log('CLUSTER CLUSTER_CONNECTION', CLUSTER_CONNECTION, connection)

const wallet = NodeWallet.local();
console.log('\n\n\nHELLO')
const config = getConfig("dev");
const client = await MarginfiClient.fetch(config, wallet, connection);
