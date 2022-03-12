import sanityClient from '../lib/sanity';

const query = `*[_type == "info"][0]{
    name,
    address,
    citystate,
    phone,
    email,
  }`;

export default function Metadata({ info }) {

    return (
        <div>
            <div>
                <h1>
                    {info.name}
                </h1>
            </div>
            <div>
                <div>
                    <h1>{info.address}</h1>
                    <h1>{info.citystate}</h1>
                </div>
                <div>
                    <h1>{info.phone}</h1>
                    <h1>{info.email}</h1>
                </div>
                <div>
                    <h1>Email newsletter</h1>
                    <h1>Signup</h1>
                </div>
            </div>
        </div>

    )
};

export async function getStaticProps() {
    const info = await sanityClient.fetch(query);
    return { props: { info } };
}