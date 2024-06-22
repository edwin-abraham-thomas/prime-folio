import { development } from '../../auth_config.json';

export const environment = {
    name: "development",
    auth: {
        ...development
    },
    apiBaseURL: 'https://localhost:7247'
};
