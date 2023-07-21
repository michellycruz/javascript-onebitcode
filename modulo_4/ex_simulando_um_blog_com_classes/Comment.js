class Comment {
    construtor(username, content){
        this.username = username
        this.content = content
        this.createdAt = new Date()
    }
}

module.exports = Comment