import { useState, useEffect } from "react"

const Home = () => {
    const [fullUrl, setFullUrl] = useState(null)
    const [shortUrl, setShortUrl] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setIsLoading(true)
        try {
            const response = await fetch('/shorturl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url: fullUrl })
            })
            const json = await response.json()
            if (!response.ok) {
                throw new Error(json.error)
            }
            setShortUrl(json.shortUrl)
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }
    return (
        <div className="home">
            <form onSubmit={handleSubmit}>
                <h2>URL Shortener</h2>
                <div>
                    <label>Enter your URL:</label>
                    <input type="text" value={fullUrl} onChange={(e) => setFullUrl(e.target.value)} />
                    <button disabled={isLoading}>{isLoading ? 'Generating...' : 'Submit'}</button>
                </div>
                {shortUrl && (
                    <div>
                        <h4>Shortened URL:</h4>
                        <a href={`http://localhost:4000/shorturl/${shortUrl}`} target="_blank">{`http://localhost:4000/shorturl/${shortUrl}`}</a>
                    </div>
                )}
                {error && <p>{error}</p>}
            </form>
        </div >
    )
}
export default Home