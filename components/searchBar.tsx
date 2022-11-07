import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import data from "../dummy/search.json"

type searchType = {
  key: string,
  url: string
}

const SearchBar = (): JSX.Element => {
  const [result, setResult] = useState<searchType[]>([])
  const router = useRouter()
  
  const autoComplete = (text: string) => {
    let resData:searchType[] = []
    text.trim() !== '' && data.data.map((e: searchType) => e.key.toLowerCase().includes(text.toLowerCase()) && resData.push(e))
    setResult(resData)
  }

  return (
    <>
      <div className="d-flex pt-2 mb-3">
          <a href='#' onClick={() => router.back()} className="top-50 px-2" style={{'fontSize': '30px'}}>&larr;</a>
          <input
            className="w-100 form-control me-2 bg-dark text-light"
            id="autoComplete"
            type="search"
            onChange={e=> autoComplete(e.target.value)}
            autoFocus
          />
      </div>
          {result.length > 0 && result.map((e: searchType, i) => (
            // <Link href={{pathname: e.url, query: {q: e.key, fullsearch: 'true'}}} key={i}>
            <Link href={e.url} key={i}>
              <div className="card">
                <div className="card-body bg-dark text-light">{e.key}</div>
              </div>
            </Link>
          ))}
    </>
  )
}

export default SearchBar