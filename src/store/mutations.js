export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStoreage.city = city
    } catch (e) {}
  }
}