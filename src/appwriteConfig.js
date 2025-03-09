import { Client, Databases } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67b4cda9001e0345ffcc");

const databases = new Databases(client);

export { client, databases };
