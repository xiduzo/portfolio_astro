---
title: "VeileNext"
description: "Modernize the biggest flower auction in the world"
pubDate: "Jul 15 2021"
drawColor: "#FF7200"
headerColor: "#0BCA89"
heroImage: "/portfolio/veilenext/showreel.png"
---

![Flower auction Aalsmeer 1940 - 1969](/portfolio/veilenext/aalsmeer_1940.jpg)

_Problem_
<span>
    For over 100 years, Royal Flora Holland (RFH) has been a leading player in global flower trading and hosts the world's largest flower auction.
    <br/><br/>
    As a cooperative of growers, RFH has centralized the supply of flowers and plants by combining multiple auction locations. While RFH has automated many auction processes and <a href="https://www.conclusion.nl/application-innovation/cases/de-applicatie-transformatie-naar-de-aws-public-cloud-voor-royal-floraholland" target="_blank">transitioned to the public cloud</a>, the underlying .NET Windows-based applications <a href="https://aws.amazon.com/products/storage/lift-and-shift" target="_blank">remain unchanged</a>.
</span>

**Flowers being sold "beneath the clock"**
![Flowers being physically moved beneath the clock on rail tracks build at the auction location](/portfolio/veilenext/beneath_the_clock.jpg)

_Challenge_
<span>
    RFH's old physical processes were built into many tools, making automation a key aspect of their digital transformation. This is evident in the digital interfaces and processes that still reflect the traditional "beneath the clock" auction method.
    <br/><br/>
    The challenge now is to modernize the real-time auction using the public cloud, while navigating a complex environment where <a href="https://amstelveenblog.nl/2021/02/20/protest-tegen-bloemenveiling" target="_blank">users resist change</a>.
</span>

**Processes and tools to mimic the physical auction**
![A schematic overview of the processes and tools which have been build to model the physical flower auction](/portfolio/veilenext/physical_processes.jpg)

_Outcome_
Modernizing technology stack by migrating from monolithic applications to microservices and replacing old desktop applications with web-based technologies, while emphasizing user needs in the development process of an almost greenfield system.

**Proposed new architecture**
![A schematic overview of the proposed new architecture](/portfolio/veilenext/proposed_architecture.png)

## History

<p>
<span>
    A <a href="https://amstelveenblog.nl/2021/02/20/protest-tegen-bloemenveiling" target="_blank">Dutch auction</a> has been the traditional way of selling flowers in the Netherlands. The auction process involves transporting flowers to the auction site where auctioneers use a mechanical clock to set a suitable price.
    </span>
</p>

**Auctioning with a mechanical clock**
![An auctioneer auctioning flowers beneath a mechanical clock](/portfolio/veilenext/physical_clock.png)

_Automation_
<span>
    During the automation of the flower auction, several tools and processes were developed to support the physical processes. These include digital buying locations such as the _Tribune Werkplek_ and the remote buying application, _Kopen Op Afstand_, which enable buyers to purchase from anywhere in the world.
    <br/><br/>
    Tools like <a href="https://www.hortipoint.nl/vakbladvoordebloemisterij/floraholland-voert-beeldveilen-in-op-alle-klokken-rijnsburg" target="_blank">Beeldveilen</a> allowed buyers to inspect flowers and plants without being physically present at the auction.
    <br/><br/>
    While <a href="https://www.floriday.io" target="_blank">Floriday</a> has modernized the supply chain of RFH, the real-time auction, where auctioneers sell flowers and plants to buyers worldwide, still relies on outdated systems.
</span>

**Auctioning with current systems**
![Auctioning with current systems as the Tribune werkplek, Kopen op afstand and beeldveilen](/portfolio/veilenext/current_auctioning.jpg)

## Modernize

To update the flower auction to modern standards, we identified four areas that required improvement:

1. The systems were constructed as monolithic entities that are heavily inter-connected
2. UDP is used to send instantaneous messages to clients
3. Releases are planned and scheduled with multiple planned freezes
4. Clients exclusive to Windows are used

_1. Micro-services_
<span>
    We are untangling the highly intertwined current systems of RFH by transforming the monolithic applications into micro-services in the new system. To ensure clear separation of concerns, each micro-service is responsible for a single task, while still allowing interdependence among services.
    <br/><br/>
    Our micro-services are running on cloud native building blocks and utilize standard cloud patterns developed by <a href="https://www.conclusion.nl/application-innovation" target="_blank">Conclusion Application Innovation</a>. This architecture allows each service to be individually scalable based on the required load for any given time of day.
</span>

_2. Websockets_
<span>
    The current systems use UDP/multi-cast to broadcast messages to all active buyers. Although this technology is proven, there are some issues that require the system to send messages multiple times to ensure that all clients receive the correct data. To replace UDP messaging, any new technology must meet two requirements:
    <br/><br/>
    a) Ensure that all clients receive real-time updates<br/>
    b) Provide an average maximum latency of 90ms from anywhere in the world
    <br/><br/>
    After researching various technologies and their implementations, we determined that the <a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-6.0" target="_blank">.NET implementation</a> was the most appropriate solution for our needs.
</span>

_3. Continuous Integration / Continuous Delivery (CI/CD)_
<span>
    The new auction system is developed using complete CI/CD tooling, eliminating planned releases and freeze periods. To ensure quick and reliable releases, all new code is thoroughly tested and monitored.
    <br/><br/>
    The frontend uses <a href="https://storybook.js.org" target="_blank">Storybook</a> to develop and test components in isolation, while also bringing business requirements, development, and design together.
    <br/><br/>
    End-to-end tests are performed using <a href="https://docs.cypress.io/guides/overview/why-cypress" target="_blank">Cypress</a> to ensure seamless integration of components and expected behavior of the application in real-world scenarios.
    <br/><br/>
    Quality gates are integrated into the automated release pipeline to prevent untested code from reaching production. The releases are continuously monitored with tools such as <a href="https://www.cypress.io/dashboard" target="_blank">Cypress Dashboard</a> and <a href="https://www.sonarqube.org" target="_blank">SonarCube</a>.
</span>

_4. A web interface_
Buying flowers and plants at the auction can be inconvenient for new buyers as they have to install software that runs exclusively on Windows.
<br/><br/>
In addition, this software requires manual updates to access new features or bug fixes. Users must also install and operate a VPN client to connect to the RFH network and receive UDP messages.
<br/><br/>
To improve accessibility, we have developed a new system that utilizes a browser-based React application. This application can be accessed through any device with an internet connection, including desktops, tablets, and even phones.

**Status quo**
![Status quo of the auctioneers interface](/portfolio/veilenext/status_quo.png)

**Exploratory design to spark conversations**
![Exploratory design of the auctioneer interface to spark conversations](/portfolio/veilenext/exploration.png)

The project is still under active development and is envisioned to be tested late 2022

<a href="mailto:mail@sanderboer.nl?subject=Let's chat!&body=Hi, I'd like to talk about VeileNext," aria-label="Send me an email to I can tell you more">I'd like to know more</a>

<hr />

_Mentioned at_
<span>
    <a href="https://www.conclusion.nl/werken-bij/nieuws/met-verschillende-ontwikkelaars-werken-aan-een-doel" target="_blank">Conclusion Application Innovation</a>
</span>

_References_
<span>
    <a href="https://storybook.rfh-auction.com" target="_blank">VeileNext storybook</a><br/><br/>
    <a href="https://www.meetup.com/nl-NL/cypress-meetup-group-netherlands/events/277899235" target="_blank">Testing websockets with Cypress</a>
</span>
