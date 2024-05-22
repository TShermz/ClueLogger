export async function getBroadcasts({selectedLogName}) {
  const response = await fetch(`http://localhost:8080/broadcasts/${selectedLogName}`, {
    method: "GET",
    headers: {
      "mode": "no-cors"
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw json({
      message: "Could not retrieve log.",
      status: 500,
    });
  }
  
  const broadcasts = await response.json();

  return broadcasts;
}

export async function addBroadcast(data) {
  const response = await fetch(`http://localhost:8080/broadcast/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      mode: "no-cors",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!response.ok) {
    throw json({
      message: "Could not add broadcast.",
      status: 500,
    });
  }

  const message = await response.json();
  return message;
}

export async function getDetailedBroadcasts({selectedLogName, username}) {
  const response = await fetch(`http://localhost:8080/detailedbroadcasts/${selectedLogName}/${username}`, {
    method: "GET",
    headers: {
      "mode": "no-cors"
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw json({
      message: "Could not retrieve detailed broadcasts.",
      status: 500,
    });
  }
  
  const detailedBroadcasts = await response.json();

  return detailedBroadcasts;
}
