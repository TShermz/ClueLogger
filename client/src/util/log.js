export async function getCommons({selectedLogName}) {
  const response = await fetch(`http://localhost:8080/commons/${selectedLogName}`, {
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
  
  const commons = await response.json();

  return commons;
}

export async function updateCommons (data) {
  const {updatedCommons, selectedLog} = data;
  const response = await fetch(`http://localhost:8080/commons/${selectedLog}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "mode": "no-cors"
    },
    body: JSON.stringify(updatedCommons),
    credentials: "include",
  });

  if (!response.ok) {
    throw json({
      message: "Could not retrieve log.",
      status: 500,
    });
  }

  const message = await response.json();

  return message;
}