import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import 'github-markdown-css/github-markdown.css'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('/src/README.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(err => console.error('Error loading README:', err))
  }, [])

  return (
    <div className="app-container">
      <div className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default App
