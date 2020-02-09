import React from 'react';
import NewProjectContainer from '../container/NewProjectContainer';
import { Route, Link, Redirect } from 'react-router-dom';

const AdminContainer = ({loggedIn}) => {
  return (
    <div>
      <p>tere admin</p>
      <Link to="/admin/new">create a new project</Link>
      <div>
        <Route path='/admin/new' render={() => <NewProjectContainer />} />
      </div>
    </div>
  );
};

export default AdminContainer;
