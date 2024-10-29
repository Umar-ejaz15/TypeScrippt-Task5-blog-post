"use strict";
// Create Interfaces for a Blog Post:
// Create an array of post objects with different authors.
const blogs = [
    {
        title: "Blog Post 1",
        content: "This is the content of Blog Post 1.",
        date: new Date(),
        author: {
            name: "John Doe",
            email: "john@example.com",
            bio: "A passionate writer.",
        },
    },
    {
        title: "Blog Post 2",
        content: "This is the content of Blog Post 2.",
        date: new Date(),
        author: {
            name: "Jane Smith",
            email: "jane@example.com",
            bio: "A tech enthusiast.",
        },
    },
    {
        title: "Blog Post 3",
        content: "This is the content of Blog Post 3.",
        date: new Date(),
        author: {
            name: "Alice Johnson",
            email: "alice@example.com",
            bio: "A creative mind.",
        },
    },
];
// Iterate through the array and display the blog posts with their authors.
for (const post of blogs) {
    console.log("Title:", post.title);
    console.log("Content:", post.content);
    console.log("Date:", post.date);
    console.log("Author:", post.author.name);
}
