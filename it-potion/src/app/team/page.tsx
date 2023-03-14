import { Suspense } from "react";
import Workers from "../../../components/workers/workers";

 async function getWorkers() {
    let res = await import('../../../data/data.json');
    return res.workers
}

async function OurTeam() {
    let data = await getWorkers()

    return (
        <div>
            <p>Our Team</p>
            <Suspense fallback={<div>Loading team...</div>}>
                <Workers data={data} />
            </Suspense>
        </div>
    )
}

export default OurTeam
