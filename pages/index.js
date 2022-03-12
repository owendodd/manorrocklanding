import Head from 'next/head'
import Link from 'next/link'
import { sanityClient, urlFor } from '../lib/sanity';
import Grid from '../components/grid';
import { infoQuery } from '../lib/queries';

export default function Home({ info }) {

  return (
    <div className='flex flex-col h-full w-full text-center justify-self-center justify-center fixed p-8'>
        <Grid>
            <div className='flex col-span-3 justify-center items-center'>
                <h1 className='uppercase'>
                    {info.name}
                </h1>
            </div>
            <div className='col-span-1'>
                <p>{info.address}</p>
                <p>{info.citystate}</p>
            </div>
            <div className='col-span-1'>
                <p>{info.phone}</p>
                <p>{info.email}</p>
            </div>
            <div className='col-span-1'>
                <p>Email newsletter</p>
                <p>Signup</p>
            </div>
        </Grid>   
    </div>
    );
}

export async function getStaticProps() {
  const info = await sanityClient.fetch(infoQuery);
  return { props: { info }};
}
