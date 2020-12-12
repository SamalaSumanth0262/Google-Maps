import {User} from './User'
import {Company} from './Company'
import {CustomMap} from './CustomMap'

const user = new User()
const company = new Company()
const customMap = new CustomMap('map')

// BAD CODE
// customMap.addUserMarker(user)
// customMap.addCompanyMarket(company)

// BETTER CODE
customMap.addMarker(user)
customMap.addMarker(company)

// ?: optional argument
