import { default as express } from 'express';
import { default as helmet } from 'helmet';

const PORT = 3000;

const server = express();

server.use(helmet({
	contentSecurityPolicy: false,
}));

server.use('/', express.static('public'));
server.use('*', express.static('public'));

server.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
