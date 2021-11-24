import { createClient } from 'pexels';

const apiKey = process.env.REACT_APP_PEXEL_KEY_API
const client = createClient(apiKey);

export default client