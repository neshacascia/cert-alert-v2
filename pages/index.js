import { useState } from 'react';

export default function Home() {
  const [formOpened, setFormOpened] = useState(false);

  console.log(formOpened);
  return (
    <main>
      <button onClick={() => setFormOpened(true)}>Add Guard</button>
    </main>
  );
}
