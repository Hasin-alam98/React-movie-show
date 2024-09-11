const fetchJsonData = async (location, filename) => {
  try {
    // Ensure location ends with a slash
    const formattedLocation = location.endsWith("/")
      ? location
      : `${location}/`;

    // Fetch data
    const response = await fetch(`${formattedLocation}${filename}`);

    // Log the response status and URL for debugging
    console.log(`Fetching from URL: ${formattedLocation}${filename}`);
    console.log(`Response status: ${response.status}`);

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Check the content type of the response
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error(`Expected JSON, but received: ${contentType}`);
    }

    // Parse and return JSON data
    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error and return null
    console.error("Error fetching JSON:", error);
    return null;
  }
};

export default fetchJsonData;
