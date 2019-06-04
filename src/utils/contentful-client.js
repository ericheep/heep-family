import { createClient } from 'contentful';

console.log(process.env.VUE_APP_HEEP_FAMILY_SPACE_ID, process.env.VUE_APP_CONTENTFUL_DELIVERY_TOKEN)

export default createClient({
    space: process.env.VUE_APP_HEEP_FAMILY_SPACE_ID,
    accessToken: process.env.VUE_APP_CONTENTFUL_DELIVERY_TOKEN,
})
