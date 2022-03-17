import { groq } from 'next-sanity'

export const infoQuery = groq`*[_type == "info"][0]{
    logo,
    name,
    address,
    citystate,
    phone,
    email
  }`;

export const photoQuery = groq`*[_type == "photoarchive"]{
  date,
  image
}`;