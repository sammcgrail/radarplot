export default async function fetchData(endpoint, data, setter) {
  if (!endpoint || !setter) return;
  try {
    if (!data) {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const json = await response.json();
      console.log(`Data was successfully fetched from ${endpoint}`);
      setter(json);
    }
  } catch (error) {
    console.error(`Unable to fetch due to ${error}`);
  }
}
