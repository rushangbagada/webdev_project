import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//get a list of fivee jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'a joke',
            content: 'a joke'

        },
        {
            id: 2,
            title: 'a joke',
            content: 'another  joke'

        }

      
    ];
    res.json(jokes);  
})

const port = process.env.PORT || 5173;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});