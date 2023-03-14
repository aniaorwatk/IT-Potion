import Workers from "../../components/workers/workers";
import styles from "./page.module.css";

async function getWorkers() {
  let res = await import('./../../data/data.json');
  return res.workers
}


export default async function Home() {
  let data = await getWorkers()

  return (
    <main className={styles.main}>
      <p>Home Page</p>
      <Workers data={data} />
    </main>
  )
}
