//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here

import SnackFooter from './SnackFooter.jsx';
import SnackHeader from './SnackHeader.jsx';
import SnackList from './SnackList.jsx';

export default function StudentWork() {
  return (
    <div>
      <p>
        <SnackHeader />
      </p>
      <p>
        <SnackList />
      </p>
      <p>
        <SnackFooter />
      </p>
    </div>
  );
}
