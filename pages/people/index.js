import Link from 'next/link'

export async function getStaticProps(context) {
    const res = await fetch(`https://swapi.dev/api/people/`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default function People({ data }) {
    return (
        <div>
            <h1 className="text-center text-xl font-semibold my-6">People</h1>
            <div className="flex flex-wrap justify-center">
                {data.results.map(people => {
                    const urlArr = people.url.split("/")
                    const id = urlArr[urlArr.length - 2];

                    return (
                        <div className="mx-2 mb-2 bg-gray-700 py-2 px-4 rounded-md text-white" key={id}>
                            <Link href={`/people/${id}`}>{people.name}</Link>
                        </div>
                    )
                })}
            </div>
            <a href="https://www.freeiconspng.com/img/39069" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/red-sports-car-ferrari-png-23.png" alt="red sports car, ferrari png" /></a>
        </div>
    )
}