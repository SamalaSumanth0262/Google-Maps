export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  getContent(): string
  color: string
  getColor(): string
}
