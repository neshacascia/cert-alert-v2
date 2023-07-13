import { MongoClient } from 'mongodb';
import { useState } from 'react';
import FormModal from './components/FormModal';
import Table from './components/Table';

export default function Home(props) {
  const [formOpened, setFormOpened] = useState(false);

  async function addGuardHandler(enteredGuardData) {
    const res = await fetch('api/new-guard', {
      method: 'POST',
      body: JSON.stringify(enteredGuardData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <button onClick={() => setFormOpened(true)}>Add Guard</button>

      <div className="w-[80%] h-[90%]">
        <Table guardData={props.guards} />
      </div>

      {formOpened && (
        <FormModal
          setFormOpened={setFormOpened}
          addGuardHandler={addGuardHandler}
        />
      )}
    </main>
  );
}

export async function getServerSideProps() {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_API_TOKEN);

  const db = client.db();
  const guardsCollections = db.collection('guards');

  const guards = await guardsCollections.find().toArray();

  client.close();

  return {
    props: {
      guards: guards.map(guard => ({
        id: guard._id.toString(),
        firstName: guard.firstName,
        lastName: guard.lastName,
        licenceNo: guard.licenceNo,
        licenceExpiry: guard.licenceExpiry,
      })),
    },
  };
}
