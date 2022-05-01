const url = ' https://hacker-news.firebaseio.com/v0/'

const getStoriesIds = async () => {
  const response = await fetch(`${url}/topstories.json`).then((data) => data.json())
  return response
}

const getStoryDetails = async (array) => {
  let data = []
  await Promise.all(array.map(async (id) => {
    const details = await fetch(`${url}/item/${id}.json`).then((data) => data.json());
    data.push(details)
  }))
  return data
}

export { getStoriesIds, getStoryDetails };