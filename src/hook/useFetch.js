import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types'

const useFetch = (url) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data: data
          })
        }
      })
      .catch((error) => {
        setState({
          data: null,
          loading: false,
          err: 'No se pudo cargar la informacion'
        })
      })
  }, [url])

  return state
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired
}


export default useFetch
