module.exports = {
  title: 'Nfinished Recipes',
  description: "Cholesterall my favorite recipes in one place.",
  keywords: 'cooking, recipes, cheese, potatoes',
  head: [
    ['link', { rel: 'icon', href: `http://unfinished.business/favicon-152.png` }]
  ],
  ga: 'UA-68038797-5',
  themeConfig: {
    sidebar: [
      ['/BeefStew', 'Beef Stew'],
      ['/BraisedKnockwurst', 'Braised Knockwurst'],
      ['/BuffaloChickenDip', 'Buffalo Chicken Dip'],
      ['/BuffaloMacAndCheese', "Buffalo Mac 'n Cheese"],
      ['/CastIronPizza', 'Cast Iron Pizza'],
      ['/ChickenNuggets', 'Chicken Nuggets'],
      ['/CornedBeefHash', 'Corned Beef Hash'],
      ['/RoastPotatoes', 'Roast Potatoes']
    ]
  },
  markdown: {
    anchor: {
      permalink: false
    }
  }
}