import React from 'react'
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div>
      <Button className={''} onClick={function (): void {
        throw new Error('Function not implemented.');
      } } children={"Help Me"}></Button>
    </div>
  )
}

export default App;
