import { createClient } from 'contentful';

export default createClient({
    space: process.env.HEEP_FAMILY_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
})
