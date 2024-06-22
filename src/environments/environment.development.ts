import { development } from '../../auth_config.json';

export const environment = {
    name: "development",
    auth: {
        ...development
    },
    apiBaseURL: 'https://pfz3a4ncgb.execute-api.ap-south-1.amazonaws.com'
};
