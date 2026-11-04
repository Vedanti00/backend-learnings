import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Server is running");
})

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why did the scarecrow win an award?",
            joke: "Because he was outstanding in his field!"
        },
        {
            id: 2,
            title: "Why don't scientists trust atoms?",
            joke: "Because they make up everything!"
        },
        {
            id: 3,
            title: "What do you call a fake noodle?",
            joke: "An impasta!"
        }
    ];
    res.send(jokes);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

