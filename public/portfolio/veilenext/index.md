---
title: VeileNext
tagline: Modernize the biggest flower auction in the world
date: 2021-12-30T17:15:53.628Z
displayPosition: 4
featuredImage: rfh_showreel.png
textColor: text-black
drawColor: "#FF7200"
headerColor: "#0BCA89"
backgroundColor: "#FFFFFF"
password:
  enabled: false
  passwords:
    - valid: 2030-01-01T17:09:36.902Z
      name: veilenext
      password: PM*L&&A&LNEU11L6ZAHMvpb9UOt7WV0y
content:
  - type: imagesBlock
    size: small
    carrousel: false
    images:
      - titlePosition: center
        alt: Flower auction Aalsmeer 1940 - 1969
        image: aalsmeer_1940.jpg
  - type: textBlock
    title: Problem
    body: >-
      For over 100 years, Royal Flora Holland (RFH) has been a leading player in
      global flower trading and hosts the world's largest flower auction.


      As a cooperative of growers, RFH has centralized the supply of flowers and plants by combining multiple auction locations. While RFH has automated many auction processes and [transitioned to the public cloud](https://www.conclusion.nl/application-innovation/cases/de-applicatie-transformatie-naar-de-aws-public-cloud-voor-royal-floraholland/), the underlying .NET Windows-based applications [remain unchanged](https://aws.amazon.com/products/storage/lift-and-shift/).
  - type: imagesBlock
    size: small
    carrousel: false
    images:
      - titlePosition: left
        title: Flowers being sold "beneath the clock"
        alt: Flowers being physically moved beneath the clock on rail tracks build at
          the auction location
        image: beneath_the_clock.jpg
  - type: textBlock
    title: Challenge
    body: >-
      RFH's old physical processes were built into many tools, making automation
      a key aspect of their digital transformation. This is evident in the
      digital interfaces and processes that still reflect the traditional
      "beneath the clock" auction method.\

      \

      The challenge now is to modernize the real-time auction using the public cloud, while navigating a complex environment where [users resist change](https://amstelveenblog.nl/2021/02/20/protest-tegen-bloemenveiling/).
  - type: imagesBlock
    size: small
    carrousel: false
    images:
      - titlePosition: left
        title: Processes and tools to mimic the physical auction
        alt: A overview of the processes and tools which have been build to model the
          physical flower auction
        image: physical_processes.jpg
  - type: textBlock
    title: Outcome
    body: Modernizing technology stack by migrating from monolithic applications to
      microservices and replacing old desktop applications with web-based
      technologies, while emphasizing user needs in the development process of
      an almost greenfield system.
  - type: imagesBlock
    size: medium
    carrousel: false
    images:
      - titlePosition: left
        title: Proposed new architecture
        alt: A schematic overview of the proposed new architecture
        image: proposed_architecture.png
  - type: textBlock
    title: History
    body: "[Dutch auction](https://www.youtube.com/watch?v=uAdmzyKagvE) has been the
      traditional way of selling flowers in the Netherlands. The auction process
      involves transporting flowers to the auction site where auctioneers use a
      mechanical clock to set a suitable price."
  - type: imagesBlock
    size: small
    carrousel: false
    images:
      - titlePosition: center
        title: Auctioning with a mechanical clock
        alt: An auctioneer auctioning flowers beneath a mechanical clock
        image: physical_clock.png
  - type: textBlock
    title: Automation
    body: >-
      During the automation of the flower auction, several tools and processes
      were developed to support the physical processes. These include digital
      buying locations such as the *Tribune Werkplek* and the remote buying
      application, *Kopen Op Afstand*, which enable buyers to purchase from
      anywhere in the world.


      Tools like *[Beeldveilen](https://www.hortipoint.nl/vakbladvoordebloemisterij/floraholland-voert-beeldveilen-in-op-alle-klokken-rijnsburg/)* allow buyers to inspect flowers and plants without being physically present at the auction. While [Floriday](https://www.floriday.io/) has modernized the supply chain of RFH, the real-time auction, where auctioneers sell flowers and plants to buyers worldwide, still relies on outdated systems.
  - type: imagesBlock
    size: small
    carrousel: false
    images:
      - titlePosition: right
        title: Auctioning with current systems
        alt: Auctioning with current systems as the Tribune werkplek, Kopen op afstand
          and beeldveilen
        image: current_auctioning.jpg
  - type: textBlock
    title: Modernize
    body: >-
      To update the flower auction to modern standards, we identified four areas
      that required improvement:


      1. The systems were constructed as monolithic entities that are heavily interconnected

      2. UDP is used to send instantaneous messages to clients

      3. Releases are planned and scheduled with multiple planned freezes

      4. Clients exclusive to Windows are used
  - type: textBlock
    title: 1. Micro-services
    body: >-
      We are untangling the highly intertwined current systems of RFH by
      transforming the monolithic applications into micro-services in the new
      system. To ensure clear separation of concerns, each micro-service is
      responsible for a single task, while still allowing interdependence among
      services.


      Our micro-services are running on cloud native building blocks and utilize standard cloud patterns developed by [Conclusion Application Innovation](https://www.conclusion.nl/application-innovation). This architecture allows each service to be individually scalable based on the required load for any given time of day.
  - type: imagesBlock
    size: extra-small
    carrousel: false
    images:
      - titlePosition: center
        title: A microservice blueprint
        alt: A schematic overview of a microservice blueprint
        image: service_blueprint.png
  - type: textBlock
    title: 2. WebSockets
    body: >-
      The current systems use UDP/multi-cast to broadcast messages to all active
      buyers. Although this technology is proven, there are some issues that
      require the system to send messages multiple times to ensure that all
      clients receive the correct data. To replace UDP messaging, any new
      technology must meet two requirements:


      1. Ensure that all clients receive real-time updates

      2. Provide an average maximum latency of 90ms from anywhere in the world


      After researching various technologies and their implementations, we determined that the .[NET implementation of WebSockets](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-6.0) was the most appropriate solution for our needs.
  - type: textBlock
    title: 3. CI/CD
    body: >-
      The new auction system is developed using complete CI/CD tooling,
      eliminating planned releases and freeze periods. To ensure quick and
      reliable releases, all new code is thoroughly tested and monitored.


      The frontend uses [Storybook](https://storybook.js.org/) to develop and test components in isolation, while also bringing business requirements, development, and design together.


      End-to-end tests are performed using [Cypress](https://docs.cypress.io/guides/overview/why-cypress) to ensure seamless integration of components and expected behavior of the application in real-world scenarios.


      Quality gates are integrated into the automated release pipeline to prevent untested code from reaching production.


      The releases are continuously monitored with tools such as [Cypress Dashboard](https://www.cypress.io/dashboard/) and [SonarCube](https://www.sonarqube.org/).
  - type: imagesBlock
    size: fullWidth
    carrousel: false
    images:
      - titlePosition: center
        alt: Component/unit test insights using storybook for the veileNext application
        image: storybook.png
  - type: textBlock
    title: 4. A web interface
    body: >-
      Buying flowers and plants at the auction can be inconvenient for new
      buyers as they have to install software that runs exclusively on Windows.
      In addition, this software requires manual updates to access new features
      or bug fixes. Users must also install and operate a VPN client to connect
      to the RFH network and receive UDP messages.


      To improve accessibility, we have developed a new system that utilizes a browser-based React application. This application can be accessed through any device with an internet connection, including desktops, tablets, and even phones.
  - type: imagesBlock
    size: medium
    carrousel: false
    images:
      - titlePosition: left
        title: Status quo
        alt: Status quo of the auctioneers interface
        image: status_quo.png
  - type: imagesBlock
    size: medium
    carrousel: false
    images:
      - titlePosition: right
        title: Exploratory design to spark conversations
        alt: Exploratory design of the auctioneer interface to spark conversations
        image: exploration.png
  - type: textBlock
    body: The project is still under active development and is envisioned to be
      tested late 2022
  - type: callToAction
    title: Tell me more!
    href: mailto:mail@sanderboer.nl?subject=Let's chat!&body=Hi, I'd like to talk
      about your work,
  - type: textBlock
    title: Mentioned at
    body: "[Conclusion Application
      Innovation](https://www.conclusion.nl/werken-bij/nieuws/met-verschillende\
      -ontwikkelaars-werken-aan-een-doel)"
  - type: textBlock
    title: References
    body: >-
      [VeileNext storybook](https://storybook.rfh-auction.com/)\

      [How we test our WebSockets using cypress](https://www.meetup.com/nl-NL/cypress-meetup-group-netherlands/events/277899235/)
---
