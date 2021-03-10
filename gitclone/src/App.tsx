import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BodyContent from './components/body/BodyContent';
import 'antd/dist/antd.css'


export const Context = React.createContext<{ searchKey: string | null }>({ searchKey: null })

function App() {
  const [searchInput, setSearchValue] = useState<{ searchKey: string | null }>({ searchKey: null })
  const handleSearch = (key: string) => {
    setSearchValue({ searchKey: key })
  }

  useEffect(() => {
    return () => setSearchValue({ searchKey: null })
  }, [])

  return (
    <Apps>
      <Context.Provider value={searchInput}>
        <Router>
          <Header onSearch={handleSearch} />
          <Switch>
            <Route path='/:id' exact>
              <BodyContent />
            </Route>
            <Route path='/'>
              Git Home
            </Route>
          </Switch>
        </Router>
      </Context.Provider>
    </Apps>
  );
}

export default App;

const Apps = styled.div`
  margin: *;
`;