function ReviewObject(review) {
   const reviewObject = {
      product: review?.product || '',
      rating: review?.rating || '',
      summary: review?.summary || '',
      review: review?.review || '',
      tags: review?.tags || [],
   }
   return reviewObject
}

export default ReviewObject
