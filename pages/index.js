import { useState } from 'react';
import FormModal from './components/FormModal';
import Table from './components/Table';

export default function Home() {
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
        <Table />
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
