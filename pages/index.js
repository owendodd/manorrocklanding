import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { sanityClient, urlFor } from '../lib/sanity';
import { infoQuery, photoQuery } from '../lib/queries';
import Grid from '../components/grid';
import MailchimpSubscribe from '../components/mailchimp';

export default function Home({ info, photos }) {

  return (
    <div>
        <div key="header" className='w-full text-lime-100 text-center fixed top-0 z-50 mix-blend-difference bg-transparent'>
            <Grid className="py-6">
                <div className='flex col-span-3 justify-center items-center'>
                    <h1 className='uppercase tracking-wide'>
                        {info.name}
                    </h1>
                </div>
                <div className='flex flex-wrap justify-center col-span-3 lg:col-span-3'>
                    <p className='mx-4'>{info.address}, {info.citystate}</p>
                    <div className='flex flex-wrap justify-center'>
                        <p className='mx-4'>{info.phone}</p>
                        <Link href={'mailto:'+(info.email)} className='mx-4'><a>{info.email}</a></Link>
                    </div>
                </div>
            </Grid>   
        </div>
        <div>
            <Grid className="auto-rows-screen">
                {photos.map(photos => (
                    <div key={photos._id} className="col-span-3 flex items-center justify-center">
                        <div className='block w-full'>
                            <Image className="" src={urlFor(photos.image).url()} alt={photos.date} layout="responsive" objectFit='contain' width="100%" height="100%" sizes="50vw"/>
                        </div>     
                    </div>
                ))}
            </Grid>
        </div>
            
        <div className='w-full text-center fixed bottom-0 z-50 py-4 text-white mix-blend-difference bg-transparent'>
            <Grid className='py-6'>
                <div className='col-span-3 flex flex-col flex-wrap justify-center md:flex-row lg:col-start-4 mx-auto'>
                    <MailchimpSubscribe url="https://farm.us14.list-manage.com/subscribe/post?u=7e088f904636dce2f3e0bc560&amp;id=a0f911aac3"/>
                </div>
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