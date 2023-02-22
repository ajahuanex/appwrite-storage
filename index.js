
import { Client, Storage, ID, InputFile} from "node-appwrite";
import * as dotenv from 'dotenv'
dotenv.config();

// Init SDK
const client = new Client();
const storage = new Storage(client);

client
    .setEndpoint(process.env.HOSTNAME_IP) // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.API_KEY) // Your secret API key
;

const promise = storage.createFile(process.env.BUCKET_ID, ID.unique(), InputFile.fromPath('assets/lista.pdf', 'file6.pdf'));

promise.then(function (response) {
    console.log(response);
    console.log('ID :',response['$id']);
}, function (error) {
    console.log(error);
});