import {Mappable} from './interfaces'
export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }
  // DRY
  //BAD CODE
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   })
  // }

  // addCompanyMarket(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   })
  // }

  //What if i have 100 classes do you import all of them here

  //interface solves this
  addMarker(instance: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: instance.location.lat,
        lng: instance.location.lng,
      },
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: instance.getContent(),
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}
