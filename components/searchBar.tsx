import Link from "next/link"
import { useState } from "react"

const SearchBar = (): JSX.Element => {
  const [result, setResult] = useState([])
  
  const autoComplete = (text: string) => {
    const data = ['reza', 'firdaus', 'wooow', 'reza firdaus']
    let resData:any = []
    text.trim() !== '' && data.map((e) => e.includes(text) && resData.push(e))
    setResult(resData)
  }

  return (
    <>
      <div className="d-flex pt-2 mb-3">
          <Link href='/' className="top-50 px-2" style={{'fontSize': '30px'}}>&larr;</Link>
          <input
            className="w-100 form-control me-2 bg-dark text-light"
            id="autoComplete"
            type="search"
            onChange={e=> autoComplete(e.target.value)}
            autoFocus
          />
      </div>
          {result.map((e: string) => (
            <Link href={`/search/result?query=${e}`}>
              <div className="card">
                <div className="card-body bg-dark text-light">{e}</div>
              </div>
            </Link>
          ))}
    </>
  )
}

export default SearchBar