# Hyrax Corporation

A fullstack chat application built with React and Node.js

## Features

- Chat using websockets (Socket.IO)
- Authentication for user profiles
- User Profiles with different levels of membership (user, moderator, admin), user statistics and customization (user biographies).
- Distinct chatrooms and pages for users to navigate.
- 3D renderings for theming and interaction.

## Tech Stack

**Client:** React, TailwindCSS, React-three-fiber, DaisyUI, Framer-Motion, Socket.IO-client

**Server:** Node, Express, Socket.IO, Mongoose

**Database:** MongoDB

**Testing:** Jest

## Feedback

If you have any feedback, please reach out to me at frankiefrancione@gmail.com

If you need anybody to chat with, just let me know!

## Lessons Learned

This was my first fullstack project in which I architected the entire application. My main takeaways are:

**Authentication:** The authentication design in this application works, but I feel as though certain decisions made can be better served by being segmented and modularized further. Having certain methods chained onto some aspects made testing much harder than it needed to be.

**Socket.IO:** Working with Socket.IO, while very educational with regards to websockets and TCP connections, was the hardest part of this project. Dealing with CORS errors slowed down development significantly.

**Design Libraries:** Originally I had planned to do the client side design entirely custom, as I enjoy designing UIs. However, utilizing DaisyUI sped up my development time while giving me designs that were very pleasing for users. I would definitely use DaisyUI again for other TailwindCSS projects.

**Non-relational Database Design:** Using MongoDB was very quick to get up and running, and the Mongoose library was very powerful on my server side. I liked the ease of use, but will most likely switch to PostgreSQL or MySQL for other projects, as I find them easier to manage.
