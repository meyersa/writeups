--- 
title: 'Second post' 
date: '2024-02-20'
id: 'second-post'
exerpt: 'Creating a spot to post writeups, such as making this website, using NextJS and other technologies'
author: 'August Meyers'
authorImg: 'https://raw.githubusercontent.com/meyersa/assets/f7bb5f0924c0bc3406233f3e58f800b7b2e208de/icons/portrait.jpg'
image: '/images/nextjs.png'
--- 

## Intro 

Technical writing is something that is very common in Computer Science and Information Technology. Without it no one would really know what is happening, except the person who wrote it. For a while the things I hosted did not need any technical writing, because I was the one making it. Until it started to get to the point where I couldn't even remember what I had done. Then I knew it was time to make a blog of sorts. 

Instead of just spinning up another wordpress instance which I inevitably run into issues with styling, I decided it would be easier to make something more complicated. Introducing NextJS with remark to have the easy writing of Wordpress (kind of) in the style of markdown, but with the granularity of NextJS. 

## Process 

The first step was to research what technology to use. At this point I was in a sort of web phase, after working on a senior project [Institution Penguin](https://github.com/meyersa/institution-penguin). Our senior design project revolved heavily around a React router project called NextJS. It was pretty easy to use and it could do everything I wanted. 

With something like Wordpress the process of making a page is simply loading the site in your browser, logging in, and posting the page. However I felt like that was a little too easy, but at the same time making a whole page everytime I wanted to post also seemed too complicated. That's where Markdown came in. Using remark with NextJS I could make Markdown posts which would automatically get rendered into HTML pages. 