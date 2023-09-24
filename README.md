# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - News homepage solution](#frontend-mentor---news-homepage-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### Screenshot

![](./src/assets/images/screenshot.png)

### Links

- Solution URL: [here](https://www.frontendmentor.io/solutions/newshomepage-react-tailwindcss-2BtbjCrc4A)
- Live Site URL: [here](https://rhiino1.github.io/fm-news-homepage/)

## My process

As I said, I will continue do some challenges, I'm feeling really good and eager to keep practicing. This was was pretty cool because It has some grid stuff within. I had to be honest, most of my frontend life I've been a Flexbox boy, that's why I choose this challenge to be my second one, meaning my real challenge is to use more Grid than Flexbox, I think I manage really well mixing both.

### Built with

- Semantic HTML5 markup
- Flexbox
- Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwindcss](https://tailwindcss.com/) - CSS library

### What I learned

Keeping my learning of tailwindcss, It offers everything I need to use Grid as the main layout. Mostly of the mobile layout is made with Flexbox, but the tricky and cool part using Grid was the Desktop layout. In an early moment of development, I though just do a conditional rendering between Mobile and Desktop, then I realize I could use responsive class prefixes that Tailwind has, so I dont need to write everything twice, like this:

Good✅

```html
<article
  className="flex flex-col gap-5 item-center lg:grid lg:grid-cols-2 lg:gap-y-5"
></article>
```

Wrong❌

```js
{ if mobile ?
   <article
   className="flex flex-col gap-5 item-center"
   ></article>
   :
   <article
   className="grid grid-cols-2 gap-y-5"
   ></article>
}
```

Also used different ways to render HTML with React, in a classic HTML way, with a React component and even rendering an Array with map and React.

```js
news.map((item, index) => {
  return <article className="flex flex-col gap-4"></article>;
});
```

### Continued development

Grid, I know It's a wonderful tool, I'm trying to love the same way everyone does, that's the path I will take from now on. Moreover, React as my second framework. Actually I had to say this: I had learned and used Vue a lot before, so learning React coming from another lib It's not that hard, so I'm cool with that.

### Useful resources

- [Tailwindcss Documentation](https://tailwindcss.com/docs) - There is all the information and knowledge you need to start learning Tailwindcss.
-[Create a gradient border with tailwindcss](https://www.dhairyashah.dev/posts/how-to-create-gradient-border-with-tailwind-css/) - Funny how we still need to have a div under another just to create a gradient border lol.

## Author

- Github - [Cesar SC](https://github.com/Rhiino1)
- Frontend Mentor - [@Rhiino1](https://www.frontendmentor.io/profile/Rhiino1)
- Twitter - [@Rhiino_1](https://www.twitter.com/Rhiino_1)
