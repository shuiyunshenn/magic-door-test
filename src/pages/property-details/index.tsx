import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { GlobalLayout, PropertyInfo } from '../../components'
import { userPropertiesStore } from '../../stores'
import { PropertyFullInfo } from '../../types'

const PropertyDetails = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const selectedPropertyFullInfo = userPropertiesStore((state) => state.selectedPropertyFullInfo)
  const getSelectedPropertyFullInfo = userPropertiesStore((state) => state.getSelectedPropertyFullInfo)

  const handleGetSelectedPropertyFullInfo = useCallback(async () => {
    try {
      setLoading(true)
      await getSelectedPropertyFullInfo(id as string)
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    handleGetSelectedPropertyFullInfo()
  }, [])

  return (
    <GlobalLayout withBackButton current="property-details">
      {loading ? <div>Loading...</div> : <PropertyInfo data={selectedPropertyFullInfo as PropertyFullInfo} />}
    </GlobalLayout>
  )
}

export default PropertyDetails
