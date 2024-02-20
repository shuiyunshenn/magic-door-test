import React from 'react'

import { Address as IAddress } from '../../types'

interface Props {
  address: IAddress
}

const Address = (props: Props) => {
  const { zipCode, street, state, city } = props.address

  return (
    <span>
      {street}, {city}, {state} {zipCode}
    </span>
  )
}

export default Address
