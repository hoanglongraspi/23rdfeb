const imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img: {
        data: Buffer,
        contentType: String
    }
}, {
    timestamps: true  // This adds createdAt and updatedAt fields automatically
}); 