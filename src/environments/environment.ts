import { local } from '../../auth_config.json';

export const environment = {
    name: "default",
    auth: {
        ...local
    },
    apiBaseURL: 'https://localhost:7247'
};
