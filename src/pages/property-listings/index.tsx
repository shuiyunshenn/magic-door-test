import React, { useCallback, useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { PropertyListingsContext } from '../../context'
import { userPropertiesStore } from '../../stores'
import { GlobalLayout, PropertyInfo } from '../../components'
import './index.scss'

const PropertyListings = () => {
  const navigate = useNavigate()
  const { setLastViewedPropertyId, lastViewedPropertyId } = useContext(PropertyListingsContext)
  const [loading, setLoading] = useState(false)
  const properties = userPropertiesStore((state) => state.properties)
  const getProperties = userPropertiesStore((state) => state.getProperties)

  const handleGetProperties = useCallback(async () => {
    try {
      setLoading(true)
      await getProperties()
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }, [])

  const handleCLickListItemClick = useCallback((id: number) => {
    setLastViewedPropertyId(id)
    navigate(`/property-details/${id}`)
  }, [])

  useEffect(() => {
    handleGetProperties()
  }, [])

  return (
    <GlobalLayout current="property-list">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {properties.map((item) => (
            <li key={item.id} className="list-item" onClick={() => handleCLickListItemClick(item.id)}>
              <PropertyInfo key={item.id} data={item} />
              {lastViewedPropertyId === item.id && (
                <label className="last-viewed-label">
                  <span style={{ color: 'red' }}>♥️</span>
                  <span> Last Viewed</span>
                </label>
              )}
            </li>
          ))}
        </ul>
      )}
    </GlobalLayout>
  )
}

export default PropertyListings
