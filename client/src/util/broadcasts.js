export async function getBroadcasts({signal, selectedLogName}) {
  const response = await fetch(`http://localhost:8080/broadcasts/${selectedLogName}`, {
    method: "GET",
    headers: {
      "mode": "no-cors"
    },
    credentials: "include",
    signal: signal
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

export async function editBroadcast(data) {
  const response = await fetch(`http://localhost:8080/broadcast/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // "mode": "no-cors"
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!response.ok) {
    throw json({
      message: "Could not retrieve detailed broadcast by that ID.",
      status: 500,
    });
  }
  const detailedBroadcast = await response.json();

  return detailedBroadcast;
}

export async function getDetailedBroadcast({id}) {
  const response = await fetch(`http://localhost:8080/detailedbroadcast/${id}`, {
    method: "GET",
    headers: {
      "mode": "no-cors"
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw json({
      message: "Could not retrieve detailed broadcast by that ID.",
      status: 500,
    });
  }
  const detailedBroadcast = await response.json();

  return detailedBroadcast;
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
