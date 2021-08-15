---
title: How Next.js server side rendering works
date: 2021-03-17T05:00:00Z
description: Step-by-step explanation about the things that happen under the hood when we call React.createElement()
image: https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80
caption: Photo by [Lenny Kuhne](https://unsplash.com/photos/jHZ70nRk7Ns)
highligted: true
---

Callstack :

yarn dev => jalanin command

next-dev.ts => running development server

start-server.ts => membuat http server dengan handler dari next app

next.ts
=> validate options dan jalanin NextServer
=> NextServer bakal melakukan memoisasi pembuatan server

next-server.ts
=> generate possible routes
=> pada masing2 route, dicari componentnya, apabila ada maka render component, apabila tidak render 404
