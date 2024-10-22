const {getNumberOfDeployedContractsByAddress,getContractDeploymentTransactions,getNumberofTransactionByAddress,getNumberOfInternalTransactions,getAllTransactionsByAddress,getParticularTransactionReceipt,calcuateAverageUsedGasFees,getLastestMinedBlock}=require('basified');

const Address="0xCd60F24071Dc0d145E366aF0128E0c2a4689cd46";
const Hash="0xf0082a71cdf6853039e888747be159ee9e90d704dfa9247ffd0b3ed92e17cfae";

async function ContractFunctions() {

    const Contractnumber=await getNumberOfDeployedContractsByAddress(Address);
    console.log(`Number of Contract Deployed Are ${Contractnumber}`);

    const ContractDeploymentTrans=await getContractDeploymentTransactions(Address);
    console.log(`Contract Deployment Transations : ${JSON.stringify(ContractDeploymentTrans)}`);

}

async function TransactionFunntions() {

    const TransactionNumber=await getNumberofTransactionByAddress(Address);
    console.log(`Number of Transaction on chain Are ${TransactionNumber}`);

    const InternalTransactionNumber=await getNumberOfInternalTransactions(Address);
    console.log(`Number of Transaction on chain Are ${InternalTransactionNumber}`);

    const AllTransactionObject=await getAllTransactionsByAddress(Address);
    console.log(`Transaction Are : ${JSON.stringify(AllTransactionObject)}`);

}

async function TranasctionParticluar() {

    const Particulartrans=await getParticularTransactionReceipt(Hash);
    console.log(`Particluar Transaction Receipt is : ${JSON.stringify(Particulartrans)}`)
    
}

async function GasFunctions(){
    const GasFunctions=await calcuateAverageUsedGasFees(Address)
    console.log(`Avg. Gas Used by Address in Transactions is ${GasFunctions} WEI`);
}

async function BlockFunction(){
    const blockMined=await getLastestMinedBlock();
    console.log(`Latest Mined Block is : ${blockMined}`);
}


// ContractFunctions()
// TransactionFunntions()
// TranasctionParticluar()
// GasFunctions()
// BlockFunction()