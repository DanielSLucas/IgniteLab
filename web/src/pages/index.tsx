import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';

const Home: React.FC = () => {
  const { user } = useUser();
  
  console.log(user);

  return (
    <div>
      <h1>Hello world</h1>      

      <a href="/api/auth/login">Login</a>
    </div>
  );
}

export default Home;