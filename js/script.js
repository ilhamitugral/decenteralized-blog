let contract;
const rpcAddress = 'https://ava-testnet.public.blastapi.io/ext/bc/C/rpc';
const contractAddress = '0x41085B5dee5aA91DFC80eEc871649dEe5Da47901';
const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_content",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }
        ],
        "name": "addBlog",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getPostData",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPostsCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

window.onload = () => {
    const provider = new ethers.providers.JsonRpcProvider(rpcAddress);
    contract = new ethers.Contract(contractAddress, abi, provider);

    checkSign();
    getBlogs();
}

const checkSign = async () => {
    if(window.ethereum === undefined) {
        console.log('Metamask\'i kurunuz...');
    }else {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
    }
} 

const getBlogs = async () => {
    const count = await contract.getPostsCount();
    
    for(let i = 0; i < parseInt(count); i++) {
        const data = await contract.getPostData(i);

        if(data[3] == true) {
            document.getElementsByClassName('blog-content')[0].innerHTML += `
            <div class="blog">
                <h2 class="title">${data[1]}</h2>
                <span class="sender">${data[0]}</span>
                <p class="content">${data[2]}</p>
            </div>`;
        }
    }
}

const addBlog = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const privacy = document.getElementById('privacy').selectedIndex == 0 ? false : true;
    
    contract.addBlog(title, content, privacy);

    document.getElementsByClassName('blog-content')[0].innerText = '';
    getBlogs();
}