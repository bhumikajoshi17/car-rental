import app from '../Server.js';

import serverless from "serverless-http";

const handler = serverless(app);

export default handler;
