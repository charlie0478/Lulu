import type { PageServerLoad } from './$types';
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dhoq46oyi', 
  api_key: '341344967375551', 
  api_secret: 'pU_sM1ylhYUcevjyXr2sVEOp4gE' 
});



export const load = (async () => {
    return {};
}) satisfies PageServerLoad;