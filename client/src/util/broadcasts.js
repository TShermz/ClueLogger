export async function addBroadcast(data) {
    const response = await fetch(`http://localhost:8080/broadcast/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "mode": "no-cors"
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
    console.log(message);
  
    return message;
}