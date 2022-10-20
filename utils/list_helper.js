

const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    const arrayOFLikes = blogs.map(blog => blog.likes)
    const totalLikes =  arrayOFLikes.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    return totalLikes
}
  
  module.exports = {
    dummy,
    totalLikes
  }