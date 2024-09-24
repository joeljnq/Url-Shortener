const API_ENDPOINT = import.meta.env.VITE_API_URL;
console.log(API_ENDPOINT);

export const sendURL = async (longURL: string): Promise<string | null> => {
  
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longURL }),
      })

      if (!response.ok) {
        throw new Error("Failed to shorten URL")
      }

    const data = await response.json()
    
    const {url} = data
    return url
    } catch (error) {
      console.error(error)
      return null
    }
  }
