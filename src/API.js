
export const addDonation = (donation) => {
  const method = {
    method: 'POST',
    body: JSON.stringify(donation),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/donations/', method)
    .then(res => res.json())
}

export const getDonations = () => {
  return fetch('http://localhost:3001/api/v1/donations')
    .then(res => res.json())
    .then(data => this.donationLoaded(data))
    .catch(error => this.setState({isError: error}))
}

export const getData = () => {
  return fetch('http://localhost:3001/api/v1/rescue-animals')
    .then(res => res.json())
    .then(data => this.animalLoaded(data))
    .catch(error => this.setState({isError: error}))
}