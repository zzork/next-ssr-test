import Head from 'next/head'
import styles from '../styles/Home.module.css'

type User = {
  name: string,
  username: string,
  email: string
}

export default function Home({ users }: { users: User[] }) {
  console.log({ users })
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      {users.length &&
        <table>
          <>
            <thead><tr><th>Name</th><th>username</th><th>email</th></tr></thead>
            <tbody>
              {users.map(({ name, username, email }) => 
                <tr key={name}><td>{name}</td><td>{username}</td><td>{email}</td></tr>
              )}
            </tbody>
          </>
        </table>
      }
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await data.json();
  return { props: { users: json } };
}