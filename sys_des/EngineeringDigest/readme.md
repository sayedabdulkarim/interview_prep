<!-- https://www.youtube.com/watch?v=43-X22tdxiI&list=PLA3GkZPtsafZdyC5iucNM_uhqGJ5yFNUM&index=1 -->

1 - What is system design process in software engineering ?

    - System design is the process of designing the element of a system. such as architecture, modules and components.
      The different interfaces of those component and the data that goes throught the system.

    - Types

        - HLD ( High Level Design )

          - describe the main component that woulb be developed for the resulting product.
          - The system architecture details, database design, services and processes, the relationship between various modules and features.

        - LLD ( Low Level Design )

          - describe the design of each element mentioned in the HLD of the system.
          - classes, interfaces, relationship between different classes, and actual logic of the various component.

2 - Monolithic Architecture ( Mono means single , which combines all 3 operation , in a single repo and deployed together. )

          +------------------------------------------------+
          |                 Monolithic App                 |
          |                                                |
          |  +-------------+   +--------------+            |
          |  | User        |<->| Business     |<-> Database |
          |  | Interface   |   | Logic        |            |
          |  |    (FE)     |   |     (BE)     |            |
          |  +-------------+   +--------------+            |
          |                                                |
          +------------------------------------------------+

    - Architecture means " Internal design details for building the application. "
    - It is also called "CENTRALISED SYSTEM".
    - So, in " monolithic architecture ", all the 3 i.e FE, BE and Data storage are written in a single codebase and deployed together.

    - PROS
        - less complexity
        - easier to understand
        - higher productivity
        - as all the modules are present in a single system, so they require fewer network calls which reduces " LATENCY " as compared to other architecture.

          - Latency refers to the time it takes for a signal to travel from the sender to the receiver. In the context of computing and networking, latency often describes the delay between a user's action and a system's response to that action. It's usually measured in milliseconds (ms).
            For example, when you click a link on a webpage, latency would include the time it takes for your click to travel to the web server, the time it takes for the server to process your request, and the time it takes for the response to travel back to you to display the page you requested.

        - comparatively easier to secure.
        - Integration testing is easier.

    - CONS
        - In monolithic, every module is combined in a single system, so if there is any error or bug in a single module, it can destroy the complete system.
          also called as Single Point Of Faiure ( SPOF )
        - whenever a single module is updated, the whole system needs to be updated to reflect the changes to the users.
        - if there is any change in a single module's programming language or framework, it will effect the entire system, because every module is interlinked
          and tightly coupled.

3 - Microservice Architecture ( Distributed system ) - A distributed system is a collection of multi individuals system connected through a network that shares
resources, communicate and coordinate to achieve common goals.

In the diagram, Each "Service" is an independently deployable unit centered around a specific business function. These services have their own databases, which allows for loose coupling and data isolation. Here are some key points your diagram highlights:

          +-------------------------------------------------------------+
          |                       API Gateway                            |
          |                                                             |
          +-------------------------------------------------------------+
                         |                          |
                         |                          |
          +--------------v-----------+    +---------v--------------+
          |     User Service         |    |     Order Service      |
          |  +------------------+    |    |  +------------------+  |
          |  | User Interface   |<-->|    |  | Business Logic   |<-->|
          |  |      (FE)        |    |    |  |      (BE)        |    |
          |  +------------------+    |    |  +------------------+  |
          |                          |    |                        |
          |  Database                 |    |  Database               |
          +---------------------------+    +------------------------+
                         |                          |
                         |                          |
          +--------------v-----------+    +---------v--------------+
          |    Payment Service       |    |    Inventory Service   |
          |  +-------------------+   |    |  +------------------+  |
          |  | Business Logic    |<->|    |  | Business Logic   |<->|
          |  |       (BE)        |   |    |  |      (BE)        |   |
          |  +-------------------+   |    |  +------------------+  |
          |                           |    |                       |
          |  Database                  |    |  Database              |
          +----------------------------+    +-----------------------+

- PROS

  - Scalable ( we can scale it horizontally, means we can add more machines to improve its capabilty.)
  - No SPOF ( Single Point Of Failure ) means if one fails it will rely on others machines.
  - Low Latency
    - Latency refers to the time it takes for a signal or packet of data to travel from the source to the destination. In computing and networking, latency often describes the delay between a user's action and the system's response to that action. For example, network latency might refer to the delay between clicking a link and the webpage loading.

- CONS
  - Complex
  - Addition Management Required ( e.g Load Balancing, Deployment and Maintenance, Cost )
    - Load balancing is a technique used to distribute incoming network traffic across multiple servers. This ensures that no single server bears too much demand, making it possible to serve more users more efficiently. Load balancing improves responsiveness and availability of applications, as it helps to prevent any one of the servers from becoming a bottleneck, which would slow down service.
  - Security: As there are different nodes ( server ), which needs to secure independently. Hence it will need additional time and resources.
  - Cost: The overhead of managing a distributed system, both in terms of hardware and human resources, can be significantly higher than that of a centralized system.

# Different types of distributed system architecture.

====================================================

A distributed system is a network of independent computers that appears to its users as a single coherent system. It can have a variety of architectures, and a common way to describe or visualize these architectures is through graphs. Here are some types of graphs that can represent different distributed system architectures:

### 1. Fully Connected Graph

In this setup, every node is connected to every other node in the system. This is highly redundant and can be expensive but offers high availability.

```
    A----B
   /|   /|
  / |  / |
 /  | /  |
D----C
```

### 2. Star Topology

Here, there is a central node to which all other nodes are connected. This central node often acts as a router or coordinator.

```
    A
    |
B---C---D
    |
    E
```

### 3. Ring Topology

In a ring, each computer is connected to two other computers, forming a closed loop.

```
A---B
|   |
D---C
```

### 4. Tree (Hierarchical) Topology

Nodes are organized in a tree structure. Usually, all leaf nodes connect to one or more central, higher-level nodes.

```
        A
      / | \
     B  C  D
    /|      \
   E F      G H
```

### 5. Mesh Topology

In a mesh, nodes are interconnected: some nodes connect to all other nodes, and some connect only to those with which they exchange the most data.

```
A---B---C
|\  |  /|
| \ | / |
D---E---F
```

### 6. Line (Chain) Topology

Nodes are connected in a linear fashion, and each node is connected to its next and previous node.

```
A---B---C---D
```

### 7. Grid Topology

Nodes are arranged in rows and columns, forming a grid.

```
A---B---C
|   |   |
D---E---F
|   |   |
G---H---I
```

Each node in these graphs can be a separate computer with its own local memory and computational resources. The edges between nodes represent network links that can be used for communication.

The type of graph used can impact the system's performance, fault tolerance, and scalability.

3.1 - Replication

    - Replication is a strategy used in distributed systems, including microservices, to ensure high availability and fault tolerance. Each service can have multiple instances running in parallel to handle more requests and provide redundancy in case of failure.

    -A shared database is common to all instances of a particular service, allowing for consistent data management. The use of multiple instances of a service (like "Instance 1" and "Instance 2" in your example) is often to distribute the load and improve the system's ability to scale.

    -  if the load increases and more requests are coming in, some will go to "Instance 1," and some to "Instance 2," but since they both have access to the same shared database, the responses should be consistent.

        - So here in the diagram
          - User Service, Order Service, Payment , Inventory service are code repo, or fucntionalities.
          - The use of multiple instances of a service (like "Instance 1" and "Instance 2" in your example) is often to distribute the load and improve the system's ability to scale.
          - Shared DB: if the load increases and more requests are coming in, some will go to "Instance 1," and some to "Instance 2," but since they both have access to the same shared database, the responses should be consistent.


                      +------------------------------------------------------+
                      |                      API Gateway                      |
                      +------------------------------------------------------+
                                  ||                          ||
                                  ||                          ||
                   +--------------vv-----------+    +---------vv--------------+
                   |     User Service          |    |     Order Service       |
                   | +------------+  +-------+ |    | +-------+  +------------+|
                   || Instance 1  |  |Instance|||    ||Instance|  |  Instance  ||
                   |+------------+  +-------+  |    |+-------+  +------------+ |
                   |                           |    |                          |
                   |  Shared Database          |    |  Shared Database         |
                   +---------------------------+    +--------------------------+
                                  ||                          ||
                                  ||                          ||
                   +--------------vv-----------+    +---------vv--------------+
                   |    Payment Service        |    |    Inventory Service    |
                   | +------------+  +-------+ |    | +-------+  +------------+|
                   || Instance 1  |  |Instance|||    ||Instance|  |  Instance  ||
                   |+------------+  +-------+  |    |+-------+  +------------+ |
                   |                           |    |                          |
                   |  Shared Database          |    |  Shared Database         |
                   +---------------------------+    +--------------------------+

4 - Latency
