import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "../util/auth";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/UI/PageContent";

import ErrorBlock from "../components/UI/ErrorBlock";

function HomePage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });

  let content;

  if (isLoading) {
    content = (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div>
        <ErrorBlock
          title="Failed to load message."
          message={error.info?.message || "Error when fetching data."}
        />
      </div>
    );
  }

  if (data) {
    content = (
      <>
        {data.username && (
          <div>
            <h1>Welcome to Clue Chasers, {data.username}!</h1>
          </div>
        )}
        {!data.username && (
          <div>
            <p>
              Login or register to start contributing your logs; or check out
              the resources above.
            </p>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <PageContent>{content}</PageContent>
    </>
  );
}

export default HomePage;
