async const fetchAnything = (url) => {
    const response = await fetch(url)
    const data = response.json()
    return data
}

export default fetchAnything