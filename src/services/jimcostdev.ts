import {type APIJimcostDevResponse} from '../types/api';
export const getCertification = async () => {

    const res = await fetch('https://jimcostdev-api-jimcostdev.koyeb.app/certification/jimcostdev');
    const data = await res.json();
    data as APIJimcostDevResponse;
    return data;
};
