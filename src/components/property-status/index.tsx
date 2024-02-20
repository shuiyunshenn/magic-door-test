import React, { useMemo } from 'react'

import { PropertyStatus as PropertyStatusEnum } from '../../types'

interface Props {
  status: PropertyStatusEnum
}

const { UNDER_MAINTENANCE, VACANT, OCCUPIED } = PropertyStatusEnum

const PropertyStatus = (props: Props) => {
  const { status } = props
  const [statusColor, statusLabel] = useMemo(() => {
    if (status === UNDER_MAINTENANCE) {
      return ['#efb041', status]
    }

    if (status === OCCUPIED) {
      return ['#ec5b56', status]
    }

    if (status === VACANT) {
      return ['#72c240', status]
    }

    return ['#666666', 'unknown']
  }, [status])

  return <span style={{ color: statusColor }}>{statusLabel}</span>
}

export default PropertyStatus
