import React from 'react';
import ReactDOM from 'react-dom';
import { CustomButton } from 'metachak';

/**
 * Example function that returns a greeting for the given name.
 *
 * @param name - The name to greet.
 * @returns The greeting.
 */
export default function greeter(name: string): string {
  return `Hello, ${name}!`;
}

const App = () => (
  <div>
    <h1>Test CustomButton</h1>
    <CustomButton onClick={() => alert("Button clicked!")}>
      Click Me
    </CustomButton>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
