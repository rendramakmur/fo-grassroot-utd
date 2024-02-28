const BASE_URL = process.env.NEXT_PUBLIC_DEV_BASE_URL;

export default async function fetchData(path, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${path}`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}