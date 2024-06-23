import { local } from '../../auth_config.json';

export const environment = {
    name: "default",
    auth: {
        ...local
    },
    // apiBaseURL: 'https://localhost:7247'
    apiBaseURL: 'https://pfz3a4ncgb.execute-api.ap-south-1.amazonaws.com'
};
