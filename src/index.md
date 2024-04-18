---
layout: "index.njk"
styles: "index.css"
title: Konstantin Zhukov
---

{% block "about-block" %}

## About me

Hi there! I am a software engineer with 5+ years of experience in web development (backend and frontend), code deployment, team management, and project management. Proficient in a wide tech stack related to the web.

I'm always concerned about the quality, maintainability and performance of the code.

Fascinated by astronomy and space. Currently based in Tarragona, Spain.

{% endblock %}

{% block "skills-block" %}

## My Tool Set

-   JavaScript
-   TypeScript
-   Node.js
-   React.js
-   React Final Form
-   Vanilla Extract
-   Styled-Components
-   Eleventy (11ty)
-   Vite.js
-   WebGL (Babylon.js)
-   GraphQL
-   Docker
-   Kubernetes
-   AWS
-   Redis
-   CouchDB
-   Apache Lucene
-   NoSQL
-   SQL
-   BullMQ
-   Koa.js
-   Express.js
-   Hapi.js
-   Apollo Client
-   Apollo Server
-   Prometheus
-   Grafana

{% endblock %}

{% block "experience-block" %}

## Experience

Since June 2018 at **[Vito Technology, Inc.](https://vitotechnology.com)**

_The company creates high-quality digital products for education and entertainment, mostly devoted to astronomy and space._

### Achievements

-   Architected, developed, and maintained a **GraphQL API** (Apollo Server) with 40+ entities for public usage with CDN caching (CloudFront).
-   Developed a multilingual frontend web application [starwalk.space](https://starwalk.space) (**React.js and Apollo Client-based with server-side rendering**) devoted to astronomy that is used by millions of users all over the world.
-   Operated **A/B testing tools** (Google Optimize, GrowthBook.io) on web applications and conducted dozens of A/B tests aimed at improving web page conversions.
-   Applied the advanced implementation of **Google Analytics 4** to web applications with custom event parameters and page view tracking.
-   Researched and gradually implemented website **technical search engine optimization**, which facilitated the growth of traffic from Google search by hundreds of percent during 2 years.
-   Proposed and improved data delivery process for mobile applications with a changes-feed-based approach that **reduced download traffic up to 95%** and eliminated the need to rerelease apps for simple data updates.
-   Built a **multilingual content management system** for websites and mobile applications that includes multilingual image and video content administration as well as text content.
-   Designed and created a [moon calendar](https://starwalk.space/moon-calendar), a **frontend astronomical web tool with WebGL (Babylon.js)** based on the VSOP87 planet orbit model and the ELP82 moon orbit model.
-   Architected and developed a custom internal ad delivery service based on the **GraphQL API**, **Redis**, and **CouchDB**.
-   Implemented a trajectory data updating system for astronomical objects (satellites, asteroids, comets, dwarfs) as CRON jobs based on **BullMQ** using publicly available APIs: **NASA JPL**, **Space-Track.org**, **Celestrak.org**, **Minor Planet Center**, **Comet Observation Database (COBS.si)**.
-   Architected and launched a custom **Web Push notification service** (which includes a subscription API, a custom Service Worker, sending notifications by timezones, and delivery/opens analytics tracking).
-   Created a multilingual timezone aware **email delivery service** with the use of the **Amazon SES API**, **Redis**, **BullMQ**, and **CouchDB**.
-   Improved caching for the weather forecast service by a geo-spacial-based algorithm, which reduces the number of requests to the weather forecast data provider by up to 30%.
-   Set up and administrated a **CouchDB cluster with 2+ millions of documents** with replications, complicated map-reduce indexing, and full-text search indexing.
-   Managed **AWS** services: **CloudFront**, **S3**, **Lambda Edge**, **MediaConvert**, **Simple Email Service**, **Route 53**.
-   Administrated **Kubernetes cluster** with 12+ worker nodes and applied cluster monitoring stack based on Prometheus, AlertManager, and Grafana.
-   Managed the web development team, which includes project and task management, code reviews, and coaching.

{% endblock %}
