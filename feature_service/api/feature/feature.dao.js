const reviews = [
  {
    id: "fghtrjtyhtwr34",
    clientID: "mock-client-1",
    serviceID: "32rqty57o9809",
    quality: 5,
    message: "Very good service. Well arive again."
  },
  {
    id: "q3wrv3r3vq3v",
    clientID: "mock-client-2",
    serviceID: "dfqg2efdq3fq3f",
    quality: 3,
    message: "Should be better, keep growing, but now not very likely."
  },
  {
    id: "tqwrqcrq3gf",
    clientID: "mock-client-3",
    serviceID: "dfqg2efdq3fq3f",
    quality: 1,
    message: "Idk what do i say... garbage!"
  },
  {
    id: "q3rgv2efq3gr",
    clientID: "mock-client-2",
    serviceID: "f3wgfeq3fq3gq3ef",
    quality: 4,
    message: "Good enough! Will reserve again!"
  },
  
];



export function createNewReview(review) {
  reviews.push(review);

  return review;
}


export function findReviewByID(id) {
    return reviews.find(s => s.id === id)
}

export function findReviewClientService(clientID, serviceID) {
    return reviews.find(review => review.clientID === clientID && review.serviceID === serviceID);
}


export function getAllReviews(filters) {
  let result = reviews;

  if (filters) {
    //console.log(serviceId)
    result = result.filter(s => s.serviceID === filters.serviceId);
    
  }
  

  return result;
}


export function updateExistReview(id, updatedReview) {
  const index = reviews.findIndex(s => s.id === id);

  if (index === -1) return null;

  reviews[index] = updatedReview;
  return reviews[index];
}

export function deleteExistReview(id) {
  const index = reviews.findIndex(s => s.id === id);

  if (index === -1) return null;

  const deleted = reviews[index];

  reviews.splice(index, 1);
  return reviews[index];
}