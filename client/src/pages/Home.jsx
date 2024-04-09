import {useQuery} from '@tanstack/react-query';

function HomePage() {
  const { data } = useQuery({ queryKey: ["user"] });

  return (
    <>
      {data && <p>Logged in!</p>}
      {!data && <p>Please register above to contribute your log!</p>}
      <p>Browse all our amazing events!</p>
    </>
  );
}

export default HomePage;
