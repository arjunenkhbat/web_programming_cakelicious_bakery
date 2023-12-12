const apiUrl = "https://api.jsonbin.io/v3/b/65783aec1f5677401f0cbdf5";

export async function fetchData() {
    try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-Master-Key' : '$2a$10$sbncQNd3ucci6CQgL8SjCehrdb2oXslqMHuwpbCdUGog3NOUwhwVG'
          }
        });
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}