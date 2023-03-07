import Link from "next/link";

interface IWorkerType{
    id:number,
    name:string
}

const Workers =({data}:any=[])=>{
    const worker = data.map((person:IWorkerType) => {
        return (
            <div key={person.id}>
                <Link href={`/${person.id}`}>
                <p>{person.name}</p>
                </Link>
            </div>
        )
    })

    return(
        <div>
            {worker}
        </div>
    )
}

export default Workers
