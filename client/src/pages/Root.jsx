import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import Header from '../components/Header';
import { useEffect } from 'react';
// import { getTokenDuration } from '../util/auth';

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if(token === 'EXPIRED'){
      submit(null, {action:'/logout', method: 'POST'})
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, {action:'/logout', method: 'POST'})
    }, tokenDuration);

  }, [token, submit]);

  return (
    <>
      <Header/>
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
