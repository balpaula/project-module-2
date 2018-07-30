const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fridgeat');

const Recipe = require('../models/recipe');

const recipes = [
    {
        title: 'Cheesy ham & broccoli pasta',
        level: 1,
        time: 30,
        ingredients: ['pasta', 'broccoli', 'onion', 'garlic', 'ham', 'cheese'],
        description: ['1. Bring a large pan of water to the boil and cook the pasta following pack instructions, adding the broccoli florets to the pan for the final 4 mins. Drain and set aside.', '2. Meanwhile, make the sauce. Heat the oil in a large pan and cook the onion for 5 mins to soften, then stir in the garlic and cook for 1 min more. Stir in the ham and cream, then bring to the boil. Add the pasta and broccoli, then stir in the cheese, coating everything in the sauce.'],
        image: String,
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Mushroom & spinach lasagne',
        level: 1,
        time: 45,
        ingredients: ['garlic', 'mushroom', 'spinach', 'cheese', 'pasta'],
        description: ['1. Heat oven to 200C/180C fan/gas 6. Heat the oil in a large frying pan, add the garlic and cook for 1 min. Add the mushrooms and thyme, then cook for 3 mins until they start to soften. Throw in the spinach and stir until the heat of the pan wilts the leaves. Remove from the heat and stir in the soft cheese, 1 tbsp of the Parmesan and some seasoning.', '2. Put a quarter of the spinach mix on the bottom of a medium-sized baking dish, lay 2 pasta sheets on top, then repeat until you have used all the pasta. Finish with the final quarter of the spinach mix, sprinkle over the rest of the Parmesan, then bake for 35 mins until golden and the pasta is tender'],
        image: String,
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Salmon pasta salad with lemon',
        level: 1,
        time: 30,
        ingredients: ['pasta', 'pepper', 'salmon', 'lemon', 'garlic', 'onion'],
        description: ['1. Cook the pasta following pack instructions. Meanwhile, heat the rapeseed oil in a frying pan, add the pepper, cover and leave for about 5 mins until it softens and starts to char a little. Stir, then push the pepper to one side and add the salmon. Cover and fry for 8-10 mins until just cooked.', '2. Meanwhile, mix the lemon zest and juice in a large bowl with the garlic, onion, capers and olives.', '3. Add the cooked pepper and salmon to the bowl. Drain the pasta and add it too, with black pepper and the olive oil. Toss everything together, flaking the salmon as you do so. If eating now, toss through the rocket; if packing a lunch, leave to cool, then put in a container with the rocket on top and mix through just before eating.'],
        image: String,
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Sardines on toast',
        level: 1,
        time: 10,
        ingredients: ['garlic', 'lemon', 'sardines', 'bread'],
        description: ['1. Heat the olive oil in a frying pan, then sizzle the garlic clove and red chilli. Add the lemon zest.', '2. Add the sardines and heat through for a few mins until warm.', '3. Toast the brown bread. Stir the parsley into the sardines, add a squeeze of lemon juice, then divide between the toast and serve.'],
        image: String,
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Chicken & mushroom spud pies',
        level: 1,
        time: 30,
        ingredients: ['potato', 'mushroom', 'milk', 'chicken'],
        description: ['1. Microwave the potatoes for 10 mins on High, turning after 5 mins, and heat oven to 220C/fan 200C/gas 7. Meanwhile, heat the oil in a frying pan, then fry the mushrooms over a high heat until golden. Stir in the cornflour, gradually add 100ml milk, then simmer to a smooth sauce. Season to taste, then stir in the chicken and parsley.', '2. Scoop most of the potato from the skins, then mash with the remaining milk and some seasoning. Spoon the chicken filling into the shells, top with the mash, then bake for 10 minutes until golden and the skins have crisped a little. Serve with green veg or a salad.'],
        image: String,
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Broccoli baked potatoes',
        level: 1,
        time: 40,
        ingredients: ['potato', 'broccoli', 'egg', 'cheese'],
        description: ['1. Heat oven to 200C/180C fan/gas 6. Microwave the potatoes on High for 12-15 mins until tender. Meanwhile, steam or boil the broccoli for 3 mins, then drain well. When the potatoes have cooled a little, cut them in half lengthways and scoop the insides into a bowl.', '2. Put the potato shells on a baking sheet. Mash the flesh with a fork, then stir in the mustard, egg, most of the cheese and the broccoli. Season if needed, then pile back into the shells. Sprinkle with the reserved cheese and bake for 15 mins until the tops are crisp and golden. Serve with salad and Tomato relish (see recipe, below).'],
        image: String,
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Sausage Bolognese',
        level: 1,
        time: 20,
        ingredients: ['sausage', 'mushroom', 'tomato sauce', 'pasta', 'cheese'],
        description: ['1. Heat a large, wide frying pan, then crumble in the sausage meat and fennel seeds (there is no need to add any oil). Fry for a few mins until golden and the fat is released, stirring well to break up the meat. Add the mushrooms and fry for a few mins until beginning to soften. Stir in the wine now, if using, bubble for 1 min, then add the tomato sauce and heat through until bubbling.', '2. Meanwhile, boil the penne. When ready, drain and tip into the sauce. Mix well until completely coated, then divide between four plates, finishing with a little Parmesan.'],
        image: String,
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Scrambled omelette toast topper',
        level: 1,
        time: 10,
        ingredients: ['egg', 'cheese', 'onion', 'tomato', 'bread'],
        description: ['1. Beat together eggs, crème fraîche, cheese and chives with a little seasoning. Heat oil in a pan, then soften spring onion for a few mins. Add tomatoes and warm through, then pour in egg mixture. Cook over a low heat, stirring, until eggs are just set. Pile over toast.'],
        image: String,
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Tuna pasta bake',
        level: 1,
        time: 50,
        ingredients: ['pasta', 'butter', 'flour', 'milk', 'cheese', 'tuna', 'sweetcorn'],
        description: ['1. Heat oven to 180C/fan 160C/gas 4. Boil the pasta for 2 mins less time than stated on the pack. To make the sauce, melt the butter in a saucepan and stir in the flour. Cook for 1 min, then gradually stir in the milk to make a thick white sauce. Remove from the heat and stir in all but a handful of cheese.', '2. Drain the pasta, mix with the white sauce, tuna, sweetcorn and parsley, then season. Transfer to a baking dish and top with the rest of the grated cheese. Bake for 15-20 mins until the cheese on top is golden and starting to brown.'],
        image: String,
        source: 'bbcgoodfood.com'
    },
]

Recipe.create(recipes)
    .then((data) => {
        console.log('ok');
        mongoose.connection.close();
    })
    .catch(error => {
        console.log(error);
        mongoose.connection.close();
    });

    