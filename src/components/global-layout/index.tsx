import { ReactElement, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTitle } from '../../hooks'

import './index.scss'

interface Props {
  withBackButton?: boolean
  current: string
  children: ReactElement | string | ReactElement[]
}

const TITLE_MAP = {
  'property-list': 'All Properties',
  'property-details': 'Property Details',
}

const GlobalLayout = (props: Props) => {
  const navigate = useNavigate()
  const { current, withBackButton = false } = props
  const pageTitle = TITLE_MAP[current as keyof typeof TITLE_MAP]

  const handleGoBack = useCallback(() => {
    navigate(-1)
  }, [])

  useTitle(pageTitle)

  return (
    <div className="global-layout">
      <div className="header">
        {withBackButton && (
          <button onClick={handleGoBack} className="back-button">
            Go Back
          </button>
        )}
        <span className="title">{pageTitle}</span>
      </div>
      <div className="content">{props.children}</div>
    </div>
  )
}

export default GlobalLayout
