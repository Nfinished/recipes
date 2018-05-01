module.exports = {
  title: 'Nfinished Recipes',
  description: "Cholesterall my favorite recipes in one place.",
  head: [
    ['link', { rel: 'icon', href: `http://unfinished.business/favicon-152.png` }]
  ],
  ga: 'UA-68038797-5',
  themeConfig: {
    nav: [
      { text: 'Back To Business', link: 'http://unfinished.business' }
    ],
    sidebarDepth: 0,
    sidebar: [
      ['/BeefStew', 'Beef Stew'],
      ['/BraisedKnockwurst', 'Braised Knockwurst'],
      ['/BuffaloChickenDip', 'Buffalo Chicken Dip'],
      ['/BuffaloMacAndCheese', "Buffalo Mac 'n Cheese"],
      ['/CastIronPizza', 'Cast Iron Pizza'],
      ['/ChickenNuggets', 'Chicken Nuggets'],
      ['/CornedBeefHash', 'Corned Beef Hash'],
      ['/GarlicButterSteak', 'Garlic Butter Steak'],
      ['CornBalls', 'Mozzarella Cornballs'],
      ['/OrangeChicken', 'Orange Chicken'],
      ['/RoastPotatoes', 'Roast Potatoes'],
      ['/ShrimpSpinachPasta', 'Spicy Shrimp & Spinach Pasta']
    ]
  },
  markdown: {
    anchor: {
      permalink: false
    }
  }
}