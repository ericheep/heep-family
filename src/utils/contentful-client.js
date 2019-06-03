import { createClient } from 'contentful';

export default createClient({
    space: process.env.VUE_APP_HEEP_FAMILY_SPACE_ID,
    accessToken: process.env.VUE_APP_CONTENTFUL_DELIVERY_TOKEN,
})
