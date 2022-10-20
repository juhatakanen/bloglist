const dummy = blogs => {
    return 1
}

const totalLikes = blogs => {
    const arrayOFLikes = blogs.map(blog => blog.likes)
    const totalLikes =  arrayOFLikes.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    return totalLikes
}

const favouriteBlog = blogs => {
    const arrayOFLikes = blogs.map(blog => blog.likes)
    const biggestLikeValue = Math.max(...arrayOFLikes)
    const blogsWithBiggestLikeValue = blogs.filter(blog => blog.likes === biggestLikeValue)
    return {
        "author": blogsWithBiggestLikeValue[0].author,
        "likes": blogsWithBiggestLikeValue[0].likes,
        "title": blogsWithBiggestLikeValue[0].title
    } 
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
}