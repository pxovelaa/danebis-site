import sanityClient from '@sanity/client';
import imagerUrlBuilder from '@sanity/image-url';

export const client = sanityClient ({
    projectId: 's6vayl12',
    dataset: 'production',
    apiVersion: '2023-03-29',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imagerUrlBuilder(client);

export const urlFor = (source) => builder.image(source);