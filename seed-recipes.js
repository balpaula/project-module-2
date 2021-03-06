const mongoose = require('mongoose');
const Recipe = require('./models/recipe');

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://localhost/fridgeat');


const recipes = [
    {
        title: 'Cheesy ham & broccoli pasta',
        level: [1],
        time: 30,
        ingredients: ['cheese'],
        description: ['Bring a large pan of water to the boil and cook the pasta following pack instructions, adding the broccoli florets to the pan for the final 4 mins. Drain and set aside.', 'Meanwhile, make the sauce. Heat the oil in a large pan and cook the onion for 5 mins to soften, then stir in the garlic and cook for 1 min more. Stir in the ham and cream, then bring to the boil. Add the pasta and broccoli, then stir in the cheese, coating everything in the sauce.'],
        image: '/images/broccoli-pasta.png',
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Mushroom & spinach lasagne',
        level: [1, 2],
        time: 45,
        ingredients: ['garlic', 'mushroom', 'spinach', 'cheese', 'pasta'],
        description: ['Heat oven to 200C/180C fan/gas 6. Heat the oil in a large frying pan, add the garlic and cook for 1 min. Add the mushrooms and thyme, then cook for 3 mins until they start to soften. Throw in the spinach and stir until the heat of the pan wilts the leaves. Remove from the heat and stir in the soft cheese, 1 tbsp of the Parmesan and some seasoning.', 'Put a quarter of the spinach mix on the bottom of a medium-sized baking dish, lay 2 pasta sheets on top, then repeat until you have used all the pasta. Finish with the final quarter of the spinach mix, sprinkle over the rest of the Parmesan, then bake for 35 mins until golden and the pasta is tender'],
        image: '/images/mushroom-spinach-lasagna.jpg',
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Salmon pasta salad with lemon',
        level: [1],
        time: 30,
        ingredients: ['pasta', 'pepper', 'salmon', 'lemon', 'garlic', 'onion'],
        description: ['Cook the pasta following pack instructions. Meanwhile, heat the rapeseed oil in a frying pan, add the pepper, cover and leave for about 5 mins until it softens and starts to char a little. Stir, then push the pepper to one side and add the salmon. Cover and fry for 8-10 mins until just cooked.', 'Meanwhile, mix the lemon zest and juice in a large bowl with the garlic, onion, capers and olives.', 'Add the cooked pepper and salmon to the bowl. Drain the pasta and add it too, with black pepper and the olive oil. Toss everything together, flaking the salmon as you do so. If eating now, toss through the rocket; if packing a lunch, leave to cool, then put in a container with the rocket on top and mix through just before eating.'],
        image: '/images/salmon-pasta.jpg',
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Sardines on toast',
        level: [1],
        time: 10,
        ingredients: ['lemon', 'sardine', 'bread'],
        description: ['Heat the olive oil in a frying pan, then sizzle the garlic clove and red chilli. Add the lemon zest.', 'Add the sardines and heat through for a few mins until warm.', 'Toast the brown bread. Stir the parsley into the sardines, add a squeeze of lemon juice, then divide between the toast and serve.'],
        image: '/images/sardines-toast.jpg',
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Tuna pasta bake',
        level: [1],
        time: 50,
        ingredients: ['pasta', 'butter', 'flour', 'milk', 'cheese', 'tuna', 'sweetcorn'],
        description: ['Heat oven to 180C/fan 160C/gas 4. Boil the pasta for 2 mins less time than stated on the pack. To make the sauce, melt the butter in a saucepan and stir in the flour. Cook for 1 min, then gradually stir in the milk to make a thick white sauce. Remove from the heat and stir in all but a handful of cheese.', 'Drain the pasta, mix with the white sauce, tuna, sweetcorn and parsley, then season. Transfer to a baking dish and top with the rest of the grated cheese. Bake for 15-20 mins until the cheese on top is golden and starting to brown.'],
        image: '/images/tuna-pasta.jpg',
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Chicken and egg fried rice',
        level: [1],
        time: 30,
        ingredients: ['rice', 'chicken', 'onion', 'garlic', 'egg'],
        description: ['Cook the rice according to the pack instructions until al dente (10-15 minutes). Drain, rinse to cool, then tip onto kitchen paper and pat dry. Meanwhile, cut the skin and bone from the chicken (and discard), then slice the meat. Slice the onions, crush the garlic and lightly beat the eggs.', 'Heat the oil in a wok or big frying pan, then stir-fry the chicken over a high heat for 3-4 minutes until just browned. Add the onions and garlic, then reduce the heat to low-medium. Cook, stirring, for 5-6 minutes, then add the eggs. Leave for a few seconds to set a little, then stir with a spatula to break up the egg.', 'Add the rice and stir-fry over a high heat for 5 minutes or until the rice is piping hot, the chicken is cooked and everything is lightly browned. Stir in the soy sauce, vinegar and fish sauce, then check the seasoning. Divide among bowls and serve straightaway, topped with leaves picked from the coriander.'],
        image: '/images/rice-chicken.jpg',
        source: 'deliciousmagazine.com'
    },
    {
        title: 'Watermelon granita',
        level: [1],
        time: 60,
        ingredients: ['wmelon', 'lemon'],
        description: ['Add your cubed watermelon, sugar, and lime juice to your blender. Blend until smooth. Pour it all into a 9×13 metal pan and freeze for one hour. Using a fork, scrape to loosen the granita. Freeze for another hour and repeat. After it has been frozen for three hours, scrape it once more and then serve in a hollowed watermelon or in cups.'],
        image: '/images/watermelon-granita.jpg',
        source: 'momadvice.com'
    },
    {
        title: 'Stuffed peppers',
        level: [1],
        time: 20,
        ingredients: ['pepper', 'cheese'],
        description: ['Preheat the oven to 400 degrees F. Line a large baking sheet with parchment paper and set aside.','Cut all the peppers in half lengthwise and remove any seeds. Lay them cut-side-up on the baking sheet. Spoon the seasoned goat cheese into the center of each pepper half.','Lightly drizzle the peppers with honey, and sprinkle with salt if desired. You can also garnish them with fresh herbs if you like, but it is not necessary. Bake for 10 minutes, then serve warm.'],
        image: '/images/pepper-cheese.jpg',
        source: 'aspicyperspective.com'
    },
    {
        title: 'Chicken & mushroom spud pies',
        level: [1, 2],
        time: 30,
        ingredients: ['potato', 'mushroom', 'milk', 'chicken'],
        description: ['Microwave the potatoes for 10 mins on High, turning after 5 mins, and heat oven to 220C/fan 200C/gas 7. Meanwhile, heat the oil in a frying pan, then fry the mushrooms over a high heat until golden. Stir in the cornflour, gradually add 100ml milk, then simmer to a smooth sauce. Season to taste, then stir in the chicken and parsley.', 'Scoop most of the potato from the skins, then mash with the remaining milk and some seasoning. Spoon the chicken filling into the shells, top with the mash, then bake for 10 minutes until golden and the skins have crisped a little. Serve with green veg or a salad.'],
        image: '/images/chicken-pie.jpg',
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Broccoli baked potatoes',
        level: [1],
        time: 40,
        ingredients: ['potato', 'broccoli', 'egg', 'cheese'],
        description: ['Heat oven to 200C/180C fan/gas 6. Microwave the potatoes on High for 12-15 mins until tender. Meanwhile, steam or boil the broccoli for 3 mins, then drain well. When the potatoes have cooled a little, cut them in half lengthways and scoop the insides into a bowl.', 'Put the potato shells on a baking sheet. Mash the flesh with a fork, then stir in the mustard, egg, most of the cheese and the broccoli. Season if needed, then pile back into the shells. Sprinkle with the reserved cheese and bake for 15 mins until the tops are crisp and golden. Serve with salad and Tomato relish (see recipe, below).'],
        image: '/images/potato-broccoli.jpg',
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Sausage Bolognese',
        level: [1],
        time: 20,
        ingredients: ['sausage', 'mushroom', 'tomato sauce', 'pasta', 'cheese'],
        description: ['Heat a large, wide frying pan, then crumble in the sausage meat and fennel seeds (there is no need to add any oil). Fry for a few mins until golden and the fat is released, stirring well to break up the meat. Add the mushrooms and fry for a few mins until beginning to soften. Stir in the wine now, if using, bubble for 1 min, then add the tomato sauce and heat through until bubbling.', 'Meanwhile, boil the penne. When ready, drain and tip into the sauce. Mix well until completely coated, then divide between four plates, finishing with a little Parmesan.'],
        image: '/images/bolognese2.jpg',
        source: 'bbcgoodfood.com'
    },
    {
        title: 'Scrambled omelette toast topper',
        level: [1],
        time: 10,
        ingredients: ['egg', 'cheese', 'onion', 'tomato', 'bread'],
        description: ['Beat together eggs, crème fraîche, cheese and chives with a little seasoning. Heat oil in a pan, then soften spring onion for a few mins. Add tomatoes and warm through, then pour in egg mixture. Cook over a low heat, stirring, until eggs are just set. Pile over toast.'],
        image: '/images/egg-toast.jpg',
        source: 'bbcgoodfood.com'
    }
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

    