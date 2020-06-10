import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Corrects scroll pos when route changes don't reset scroll height to top
export const useScrollToTop = () => {
  const history = useHistory()
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => {
      /* istanbul ignore next */
      unlisten()
    }
  }, [history])
}
