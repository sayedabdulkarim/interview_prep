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

    - Defn: It represents the total time it takes for a request to go from the client to the server and for the server's response to get back to the client.

            - Or we can say ( networkDelay +  computation delay )

                -  Network Delay: The time taken for the data packet to travel through the network from the client to the server and back. This includes time for routing, buffering, and all other forms of network-related delays.

                -  Server Processing Time (Computation Delay): The time the server takes to process the request and generate a response. This could include time for database queries, computations, or any other server-side operations needed to fulfill the request.

                -  RTT = Network Delay (Client to Server) + Server Processing Time + Network Delay (Server to Client)

    - Latency comparison between Monolithic n Micro Architecture

        - Monolithic architectures generally have lower latency for in-app operations because everything runs in the same process.

        - Microservices architectures might experience higher latencies due to network communication, service chaining, and data distribution across multiple databases.

            - How to reduce latency in micro ??

              - Caching ( Radis )
              - CDN
                - It's a system of distributed servers that deliver web content, media files, and other resources to users based on their geographical location.
                - When a user requests a resource (like an image, JavaScript file, or a CSS file), the request goes to the nearest CDN edge server rather than going all    the way to the website's original server. This significantly reduces the latency and makes the website load faster.

    - Calculation ( RTT (ms) ) Round Trip Time

      |
      | .
      120-------|---------.
      | \
      | .
      | \
      110---------------------.
      | \
      | .
      | \
      | .
      | \
      90-----------------------------.
      | \
      | .
      0------1------2------3------4------5 (Time in seconds)



    - Capturing time before sending the request

      const t1 = new Date().getTime();

      // Making an HTTP request (example using fetch API)
      fetch('http://yourserver.com/api/data')
      .then(response => response.json())
      .then(data => {
      // Capturing time after receiving the response
      const t2 = new Date().getTime();

          // Calculating round-trip time
          const rtt = t2 - t1;

          // Send this data to a database or a service where you can later retrieve it for graphing
          sendRTTtoDB(rtt);

    });

5 - Throughput

    - Defn:

       - refers to the amount of data or number of transactions that can be processed by a system or component in a given time period.

    - Key Factors That Affect Throughput
       - Resource Availability: Limited CPU, memory, or network bandwidth can reduce throughput.
       - Latency: The time it takes to complete a single operation can impact overall throughput.
       - Concurrency: Systems that can effectively perform multiple operations simultaneously usually have higher throughput.
       - System Overheads: Additional tasks like logging, security checks, etc., can reduce the effective throughput.

    - Importance
       - Capacity Planning: Knowing throughput helps in making informed decisions about scaling resources.
       - Performance Benchmarking: Throughput is often used as a metric to compare the performance of different systems or configurations.
       - Cost Optimization: Increasing throughput can often lead to cost savings, as you accomplish more with the same or fewer resources.

    +---------------------+        +---------------------+         +----------------------+
    |                     |        |                     |         |                      |
    |    User Requests    +------->+    Processing Unit  +-------->+      Data Output      |
    |                     |        |                     |         |                      |
    +---------------------+        +---------+-----------+         +----------------------+
                                          |
                                          |
                                          v
                                +---------+-----------+
                                |                     |
                                |   Throughput Meter  |
                                |                     |
                                +---------------------+

      Diag:

      - User Requests: The initial input or demand.
      - Processing Unit: Where the actual work gets done.
      - Data Output: The final output after processing.
      - Throughput Meter: Measures the amount of Data Output per unit time or the number of User Requests processed per unit time.


    Latency Vs Throughput
    ====================
        - Latency
          -  Definition: Time it takes for a single request to travel from the sender to the receiver and back. In API context, it's the time between sending a request and receiving a response.
          - Unit of Measurement: Measured in milliseconds (ms).
          - Impact: High latency results in slower response times for each individual request.

        - Throughput
         -  Definition: Number of requests that can be handled over a specific period of time.
         -  Unit of Measurement: Measured in requests per second (RPS) or transactions per second (TPS).
         -  Impact: Low throughput means the system can handle fewer requests overall, leading to potential bottlenecks when demand is high.

        So, in summary:

        Latency: Concerns individual requests.
        Throughput: Concerns the system's overall capacity to handle requests.

    Comparison Throughput between Mono and Micro
    =============================================

      - Mono
        - So, in mono we r doing all in one.
        - limited resources.

      - Micro
        - Here elements or components are distributed.So we can divide the work or task.
        - can scale horizontally.
        - can add load balancer.

      Summary:

      Monolithic: Potentially higher throughput for simpler, less distributed systems due to lower operational overhead.
      Microservices: Potentially higher throughput for complex, distributed systems that require different resources and scaling requirements for different components.

    Difference between response and Transaction
    ==========================================

      - Transaction
        -  Broader Scope: A transaction usually involves multiple operations that need to be processed as a single unit. For example, in a banking system, transferring money from one account to another involves subtracting the amount from one account and adding it to another.
        -  ACID Properties: In databases, a transaction must satisfy ACID (Atomicity, Consistency, Isolation, Durability) properties.
        -  Commit/Rollback: Transactions generally have the capability to be rolled back if some operation fails, ensuring system consistency.

      - Request

        -  Simpler Scope: A request typically refers to a single operation like retrieving, inserting, or deleting a data item.
        -  HTTP Requests: In web services, requests are often HTTP methods like GET, POST, PUT, DELETE.
        -  Stateless: Unlike transactions, individual requests are often stateless, meaning they are processed independently of each other.

      - Throughput Context
        - Transaction Throughput: This would refer to the number of complete transactions that a system can handle per unit of time. For example, how many money transfers can be completed per second.
        - Request Throughput: This would refer to the number of individual requests that a system can handle per unit of time. For example, how many HTTP GET requests can be processed per second.

     explain what is the difference between Transaction throughput and Request Throughput.
     ====================================================================================
      Transaction Throughput
        Let's say you want to build a little house with your blocks. To make a house, you need to stack some blocks for walls and some for the roof, right? So, you do several things to make one little house. In grown-up words, that whole process of making a house is like a "transaction." So, "Transaction Throughput" is like seeing how many little houses you can build in, let's say, one minute!

      Request Throughput
        Now, what if you just want to stack a single block on top of another block? Just one action, like placing one block on the table. That's like a "request." So, "Request Throughput" is like seeing how many single blocks you can stack up in that same one minute.

      The Difference
        So, building a whole house takes more steps and is a bit like a "transaction." Just stacking one block is simpler and is like a "request." And "throughput" is just a fancy way of asking, "How many can you do in a minute?"
