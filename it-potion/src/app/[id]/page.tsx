async function getWorkers() {
    let res = await import('./../../../data/data.json');
    return res.workers
}

type IParamsType={
    [key: string]: any;
}

async function SingleWorker({params}:IParamsType) {

    const everybody = await getWorkers()

    const filterEverybody = everybody.filter(one => {
        return one.id === params.id
    })

    let oneWorker = filterEverybody.map(one => {
        return (
            <div>
                <p>{one.name}</p>
            </div>
        )
    })

    return (
        <div>
            <p>Single Worker</p>
            {oneWorker}
        </div>
    )
}

export default SingleWorker
