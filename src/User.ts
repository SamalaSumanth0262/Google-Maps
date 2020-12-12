import faker from 'faker'
import {Mappable} from './interfaces'
// .d.ts d stands for defintion to be more specifi type definiton files
export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }
  color: string

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }
  getContent() {
    return `UserName: ${this.name}`
  }

  getColor() {
    return 'red'
  }
}
