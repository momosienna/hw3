// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  let passengerFirstName = ride.passengerDetails.first 
  let phoneNumber = ride.passengerDetails.phoneNumber
  let pickup = ride.pickupLocation.address
  let dropoff = ride.dropoffLocation.address
  console.log(`Noober X Passenger: ${passengerFirstName} - ${phoneNumber}. Pickup at ${pickup}. Drop-off at ${dropoff}`)

  let serviceRequested 

  if (ride.purpleRequested = `true`) {serviceRequested = `Noober Purple`}
  else if (ride.numberOfPassegers >3) {console.log(`Noober XL:${passengerFirstName} - ${phoneNumber}. Pickup at ${pickup}. Drop-off at ${dropoff}`)}
  else (console.log(`Noober X Passenger: ${passengerFirstName} - ${phoneNumber}. Pickup at ${pickup}. Drop-off at ${dropoff}`))

  // 🔥 YOUR CODE ENDS HERE 🔥
})
