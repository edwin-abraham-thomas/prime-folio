import { local } from '../../auth_config.json';

export const environment = {
    name: "default",
    auth: {
        ...local
    },
    apiBaseURL: 'https://pfz3a4ncgb.execute-api.ap-south-1.amazonaws.com'
};
