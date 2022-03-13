import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { sanityClient, urlFor } from '../lib/sanity';
import { infoQuery, photoQuery } from '../lib/queries';
import Grid from '../components/grid';
import Newsletter from '../components/newsletter';

export default function Home({ info, photos }) {

  return (
    <div>
        <div className='w-full text-center fixed top-0 z-50'>
            <Grid>
                <div className='flex col-span-3 justify-center items-center'>
                    <h1 className='uppercase tracking-wider'>
                        {info.name}
                    </h1>
                </div>
                <div className='flex flex-wrap justify-center col-span-3 lg:col-span-3'>
                    <div className='mx-4'>{info.address}, {info.citystate}</div>
                    <div className='flex flex-wrap justify-center'>
                        <div className='mx-4'>{info.phone}</div>
                        <div className='mx-4'>{info.email}</div>
                    </div>
                </div>
            </Grid>   
        </div>
        <div className='min-h-screen flex items-center'>
            <Grid>
                {photos.map(photos => (
                    <div key={photos._id} className="col-span-3 h-auto">
                        <Image src={urlFor(photos.image).url()} alt={photos.date} layout="responsive" objectFit='contain' width="100%" height="100%"/> 
                    </div>
                ))}
            </Grid>
        </div>
            
        <div className='w-full text-center fixed bottom-0 z-50'>
            <Grid>
                <Newsletter />
            </Grid>
        </div>
    </div>
    );
}

export async function getStaticProps() {
  const info = await sanityClient.fetch(infoQuery);
  const photos = await sanityClient.fetch(photoQuery);
  return { props: { info, photos }};
}