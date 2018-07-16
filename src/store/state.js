let defaultCity = "深圳"
try {
  if (localStoreage.city) {
    defaultCity = localStoreage.city
  }
} catch (e) {}

export default {
    city: defaultCity
}