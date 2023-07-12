import { useState } from 'react';
import FormModal from './components/FormModal';

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
    <main>
      <button onClick={() => setFormOpened(true)}>Add Guard</button>

      {formOpened && (
        <FormModal
          setFormOpened={setFormOpened}
          addGuardHandler={addGuardHandler}
        />
      )}
    </main>
  );
}
