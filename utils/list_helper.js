const dummy = blogs => 1

const totalLikes = blogs => blogs.reduce((total, blog) => total + blog.likes, 0)

const favouriteBlog = blogs => {
    const favouriteBlogWholeObject = blogs.reduce((prev, current) => {
        return current.likes > prev.likes ? current : prev
    }, blogs[0]);

    return {
        "title": favouriteBlogWholeObject.title,
        "author": favouriteBlogWholeObject.author,
        "likes": favouriteBlogWholeObject.likes
    } 
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
}