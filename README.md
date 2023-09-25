# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Social media dashboard with theme switcher solution](#frontend-mentor---social-media-dashboard-with-theme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![](./src/assets/images/screenshot.png)

### Links

- Solution URL: [here](https://www.frontendmentor.io/solutions/social-media-dashboard-with-theme-switcher-react-tailwindcss-5LidgEUdpC)
- Live Site URL: [here](https://rhiino1.github.io/fm-social-media-dashboard/)

## My process

A new challenge is gone! Two years ago I found this [video](https://www.youtube.com/watch?v=iL4irerdGdU&t=758s) and at that time I was really impressive about all the stuff that frontend could be, so I started doing some challenges on Frontend Mentor, credits to Jessica from Coder Coder for having me here. A was looking for a new Grid challenge and found this again, so reach my aim, I decided to make it.

### Built with

- Semantic HTML5 markup
- Flexbox
- Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwindcss](https://tailwindcss.com/) - CSS library

### What I learned

Keeping my learning of tailwindcss, It offers everything I need to use Grid as the main layout. Mostly of the mobile layout is made with Flexbox, but the tricky and cool part using Grid was the Desktop layout.

I want to share part of my dark mode toggle button:

```html
<div
  className="
  dark:after:left-[3px] 
  hover:bg-gradient-to-r lg:from-[#378FE6] lg:to-[#3EDA82]
  after:left-[27px] after:transition-all after:ease-in-out after:duration-[400ms]"
></div>
```

With this code I made a cool gradient background (thanks tailwind) and also made all the circle animation when people click it. So cool ˄˄;

Moreover, I found pretty cool work with React components, It is kinda easy just to make one a replicate with an array and a map function.

```js
{
  smallCards.map((card, index) => {
    const { img, title, todayFollows, percentageFollows, isUp } = card;
    return (
      <SmallCard
        key={index}
        img={img}
        title={title}
        todayFollows={todayFollows}
        percentageFollows={percentageFollows}
        isUp={isUp}
      ></SmallCard>
    );
  });
}
```

### Continued development

Grid, grid and grid. Yes, I've been doing really good and feeling even better than before, sweet. React, there is always time to grind and knowledge with a huge library, so, keep on keeping on.

### Useful resources

- [Tailwindcss Documentation](https://tailwindcss.com/docs) - There is all the information and knowledge you need to start learning Tailwindcss. -[Create a gradient border with tailwindcss](https://www.dhairyashah.dev/posts/how-to-create-gradient-border-with-tailwind-css/) - Funny how we still need to have a div under another just to create a gradient border lol. -[Add dark mode toggle with react and tailwind](https://www.geeksforgeeks.org/how-to-add-dark-mode-in-reactjs-using-tailwind-css/) - Awesome explanation to create a toggle dark mode button. -[Peer base on sibling state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state) - I'm starting to like tailwind, changing css classes base in a component state is so easy and SO COOL!

## Author

- Github - [Cesar SC](https://github.com/Rhiino1)
- Frontend Mentor - [@Rhiino1](https://www.frontendmentor.io/profile/Rhiino1)
- Twitter - [@Rhiino_1](https://www.twitter.com/Rhiino_1)
