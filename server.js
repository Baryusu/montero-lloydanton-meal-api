const express = require('express');
const app = express();
const PORT = 5500;

const meals = [
    { id: 1, name: "Chicken Adobo", category: "Lunch", price: 85 },
    { id: 2, name: "Pancit Canton", category: "Snack", price: 50 },
    { id: 3, name: "Beef Tapa", category: "Breakfast", price: 95 },
    { id: 4, name: "Burger Steak", category: "Lunch", price: 90 },
];

app.get("/api/meals", (req, res) => {
    res.json(meals);
});

app.get("/api/meals/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const meal = meals.find(meal => meal.id === id);
    if (!meal) {
        return res.status(404).json({ message: "Meal not found" });
    }
    res.json(meal);
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});