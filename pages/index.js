import { useState } from 'react';
import FormModal from './components/FormModal';

export default function Home() {
  const [formOpened, setFormOpened] = useState(false);

  console.log(formOpened);
  return (
    <main>
      <button onClick={() => setFormOpened(true)}>Add Guard</button>

      {formOpened && <FormModal />}
    </main>
  );
}
