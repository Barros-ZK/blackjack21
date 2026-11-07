import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const outputJson = require("./swagger-output.json");
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import http from 'http';
const server = http.createServer(app);
import { Server } from 'socket.io';
import socketInit from './sockets/jogoSocket.js';
const io = new Server(server);
socketInit(io);

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: "http://localhost:3000", credentials: true}))
app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));
app.use(express.static(__dirname + '/public'));



server.listen('5000', function() {
    console.log('backend em execução');
})