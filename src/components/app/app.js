import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'Andrey P.', salary: 800},
    {name: 'Stepan B.', salary: 3000},
    {name: 'Alex E.', salary: 5000},
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      
      <EmployersList data={data}/>
      <EmployersAddForm/>
    </div>
  );
}

export default App;
