import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { useEffect } from 'react';
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  // const token = useLoaderData();

  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }

  //   if(token === 'EXPIRED'){
  //     submit(null, {action:'/logout', method: 'POST'})
  //   }

  // }, [token, submit]);

  return (
    <>
      <MainNavigation/>
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
