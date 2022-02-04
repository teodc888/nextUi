import './App.css';
import { Text, Spacer, Button, Link,Checkbox  } from '@nextui-org/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text>NextUI example with create-react-app</Text>
        <Link
          color
          href="https://nextui.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show NextUI React
        </Link>
        <Spacer />
        <Button>Action</Button>
        <Checkbox checked={true} size="xl">
            xlarge
        </Checkbox>
      </header>
    </div>
  );
}

export default App;
