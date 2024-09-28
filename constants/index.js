import dotenv from 'dotenv';
dotenv.config()

const port = Number(process.env.PORT || 3000);
const hostname = process.env.HOSTNAME || '0.0.0.0';
const dev = process.env.NODE_ENV !== 'production';

const protocol = dev ? 'http' : 'https';

const constants = {
    port, hostname, dev, protocol
}

export default constants; 