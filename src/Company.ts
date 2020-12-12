import faker from 'faker'
import {Mappable} from './interfaces'
export class Company implements Mappable {
  name: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }
  color: string

  constructor() {
    this.name = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  getContent() {
    return `<div><h1>${this.name + this.catchPhrase}</h1></div>`
  }

  getColor() {
    return 'blue'
  }
}
