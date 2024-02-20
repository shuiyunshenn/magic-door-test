import { create } from 'zustand'

import PropertiesListingsMock from '../../mock/property-listings.json'
import PropertyDetailsListMock from '../../mock/property-details.json'
import { PropertyOverviewInfo, PropertyFullInfo } from '../../types'

interface State {
  properties: PropertyOverviewInfo[]
  selectedPropertyFullInfo?: PropertyFullInfo
}

type Actions = {
  getProperties: () => Promise<void>
  getSelectedPropertyFullInfo: (id: string) => Promise<void>
}

const getProperties = async () => {
  return new Promise<PropertyOverviewInfo[]>((resolve) => {
    const timer = window.setTimeout(() => {
      window.clearTimeout(timer)
      resolve(PropertiesListingsMock as unknown as PropertyOverviewInfo[])
    }, 1000)
  })
}

const getSelectedPropertyFullInfo = async (selectedPropertyId: string) => {
  return new Promise<PropertyFullInfo | undefined>((resolve) => {
    const timer = window.setTimeout(() => {
      const data = (PropertyDetailsListMock as PropertyFullInfo[]).find(
        (mock) => mock.id === Number(selectedPropertyId)
      )

      window.clearTimeout(timer)
      resolve(data)
    }, 1000)
  })
}

export const userPropertiesStore = create<State & Actions>()((set) => ({
  properties: [],
  selectedPropertyFullInfo: undefined,
  getProperties: async () => {
    const newData = await getProperties()
    set(() => ({ properties: newData }))
  },
  getSelectedPropertyFullInfo: async (id: string) => {
    const fullInfo = await getSelectedPropertyFullInfo(id)
    set(() => ({ selectedPropertyFullInfo: fullInfo }))
  },
}))
