import React, { useCallback } from 'react'

import { toPrice } from '../../utils'
import Address from '../property-address'
import Status from '../property-status'
import { PropertyFullInfo, PropertyOverviewInfo } from '../../types'

import './index.scss'

interface Props {
  data: PropertyOverviewInfo | PropertyFullInfo
}

const PropertyInfo = (props: Props) => {
  const { propertyManager, propertyName, address, numberOfUnits, monthlyRent, status } = props.data

  const handlePropertyDetailsRender = useCallback(() => {
    const { propertyDetails } = props.data as PropertyFullInfo

    if (!propertyDetails) {
      return null
    }

    const { yearBuilt, unitTypes, amenities, petPolicy, description } = propertyDetails

    return (
      <>
        <div className="row">
          <div className="col">
            <label className="label">Year of construction</label>
            <span>{yearBuilt}</span>
          </div>
          <div className="col">
            <label className="label">Unit types</label>
            <span>{unitTypes.join(' | ')}</span>
          </div>
          <div className="col">
            <label className="label">Amenities</label>
            <span>{amenities.join(' | ')}</span>
          </div>
          <div className="col">
            <label className="label">Pet policy</label>
            <span>{petPolicy}</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="label">Description</label>
            <span style={{ whiteSpace: 'initial' }}>{description}</span>
          </div>
        </div>
      </>
    )
  }, [props.data])

  return (
    <div>
      <p className="name">{propertyName}</p>
      <div className="row">
        <div className="col">
          <label className="label">Address</label>
          <Address address={address} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label className="label">Number of units</label>
          <span>{numberOfUnits}</span>
        </div>
        <div className="col">
          <label className="label">Monthly rent</label>
          <span>{toPrice(monthlyRent)}</span>
        </div>
        <div className="col">
          <label className="label">Status</label>
          <Status status={status} />
        </div>
      </div>
      {handlePropertyDetailsRender()}
      <div className="row">
        <div className="col">
          <label className="label">Property manager</label>
          <span>
            {propertyManager.name} · {propertyManager.contact}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PropertyInfo
