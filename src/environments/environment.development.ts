import { domain, clientId } from '../../auth_config.json';

export const environment = {
    auth: {
        domain,
        clientId,
        authorizationParams: {
            redirect_uri: 'http://localhost:4200/',
        }
    }
};
