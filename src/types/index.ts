export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
}

export interface PropertyManager {
  name: string
  contact: string
}

export enum PropertyStatus {
  UNDER_MAINTENANCE = 'Under Maintenance',
  OCCUPIED = 'Occupied',
  VACANT = 'Vacant',
}

export interface PropertyOverviewInfo {
  id: number
  propertyName: string
  address: Address
  numberOfUnits: number
  propertyManager: PropertyManager
  monthlyRent: number
  status: PropertyStatus
}

export interface PropertyFullInfo extends PropertyOverviewInfo {
  propertyDetails: {
    yearBuilt: number
    unitTypes: string[]
    amenities: string[]
    petPolicy: string
    description: string
  }
}
