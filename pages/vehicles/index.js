import Link from 'next/link'

export async function getStaticProps(context) {
    const res = await fetch(`https://swapi.dev/api/vehicles/`)
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
            <h1 className="text-center text-xl font-semibold my-6">Vehicles</h1>
            <a href="https://www.freeiconspng.com/img/39052" title="audi-red-sports-car" className='inline-flex'><img src="https://www.freeiconspng.com/uploads/red-sports-car-png-1.png" width="350" alt="red sports car png" /></a>
            <a href="https://www.freeiconspng.com/img/16854" title="mercedes-suv-car" className='inline-flex'><img src="https://www.freeiconspng.com/uploads/car-png-27.png" width="350" alt="Car Png Available In Different Size" /></a>
            <a href="https://www.freeiconspng.com/img/16841" title="mercedes-black-car" className='inline-flex'><img src="https://www.freeiconspng.com/uploads/car-png-14.png" width="350" alt="Photo Car PNG" /></a>
            <a href="https://www.freeiconspng.com/img/39063" title="black-audi-car" className='inline-flex'><img src="https://www.freeiconspng.com/uploads/black-audi-car-png-17.png" width="350" alt="black audi car png" /></a>
            <a href="https://www.freeiconspng.com/img/39078" title="new-ds-5-car" className='inline-flex'><img src="https://www.freeiconspng.com/uploads/cars-png-33.png" width="350" alt="cars png" /></a>
            <a href="https://www.freeiconspng.com/img/16853" title="bmw-car" className='inline-flex'><img src="https://www.freeiconspng.com/uploads/car-png-26.png" width="350" alt="Pic Car PNG" /></a>
            <a href="https://www.freeiconspng.com/img/39057" title="audi-jeep-q3" className='inline-flex'><img src="https://www.freeiconspng.com/uploads/audi-jeep-q3-car-png-7.png" width="350" alt="audi jeep q3 car png" /></a>
            <a href="https://www.freeiconspng.com/img/39058" title="mercedes-car" className='inline-flex'><img src="https://www.freeiconspng.com/uploads/mercedes-car-png-8.png" width="350" alt="mercedes car png" /></a>
            <a href="https://www.freeiconspng.com/img/39071" title="land-rover-range-rover-car" className='inline-flex'><img src="https://www.freeiconspng.com/uploads/land-rover-range-rover-car-png-25.png" width="350" alt="land rover, range rover car png" /></a>

            <div className="flex flex-wrap justify-center">
                {data.results.map(vehicle => {
                    const urlArr = vehicle.url.split("/")
                    const id = urlArr[urlArr.length - 2];

                    return (
                        <div className="mx-2 mb-2 bg-gray-700 py-2 px-4 rounded-md text-white" key={id}>
                            <Link href={`/vehicles/${id}`}>{vehicle.name}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}