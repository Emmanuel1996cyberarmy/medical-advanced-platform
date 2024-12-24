import React from 'react';
import QuoteLayout from  "./components/QuoteLayout";
import QuoteDetails from './components/QuoteDetails';

const App = () => {
  return (
    <QuoteLayout>
      <QuoteDetails />
    </QuoteLayout>
  );
};

export default App;
