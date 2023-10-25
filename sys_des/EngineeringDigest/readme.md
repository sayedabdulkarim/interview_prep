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

# Horizonal Vs Vertical Scaling

==================================

- Horizontal Scaling (Scale Out/In):

  - Involves adding more nodes (machines/servers) to the system.
  - Aims to distribute the load across multiple servers.
  - Common in distributed systems like Cassandra, MongoDB, etc.
    - Examples:
      If a database is struggling to manage the volume of requests on a single server, adding more servers and distributing the database (like sharding) is horizontal scaling.
      In cloud environments, spawning new instances to handle increased traffic is horizontal scaling.

- Vertical Scaling (Scale Up/Down):

  - Involves adding more resources (CPU, RAM, storage) to an existing node.
  - Does not add more machines, but rather upgrades the existing one.
  - Has an upper limit based on the hardware capabilities of the machine.
    - Examples:
      If a server runs out of RAM, adding more RAM to that server is vertical scaling.
      Upgrading a server's CPU to a faster one is also vertical scaling.

- Considerations:

  - Horizontal Scaling:

  Pros: Can provide high availability, can often scale more extensively since you can keep adding nodes, can improve redundancy and fault tolerance.
  Cons: Complexity can increase, especially for databases where data needs to be consistent across nodes. Can require more sophisticated load balancing.

  - Vertical Scaling:

  Pros: Often simpler than horizontal scaling since there's no distribution of data or load.
  Cons: Has an upper limit, potential single point of failure, downtime might be needed to scale, can become expensive as high-end hardware is required.

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

6 - Availability refers to the ability of a system to remain operational and accessible when needed.

    - Replication vs Redundancy

      Both replication and redundancy are strategies to improve availability, but they work in slightly different ways:

      - Replication ( means redundanct + synchronizaton )

        - What: Replication involves making multiple copies of data or services and distributing them across different parts of a system or different geographical locations.
        - Why: The goal is to serve user requests more efficiently and to ensure availability even if one or more instances fail.
        - How: In a database, for example, replication can be synchronous or asynchronous. Synchronous replication ensures that all copies are updated immediately, while asynchronous replication might involve a slight delay.
        - Example: A database can be replicated across multiple servers so that if one server goes down, the application can still continue to function by retrieving data from the other servers.

      - Redundancy

      - What: Redundancy involves having extra components that can take over in case the primary ones fail.
      - Why: The goal is to provide a failover option to maintain availability.
      - How: This can involve anything from having an extra hard drive in a RAID configuration to having a completely redundant data center.
      - Example: In a server cluster, multiple power supplies might be used so that if one fails, the others can take over, ensuring that the server remains operational.

7 - Consistency

    - Defn:
       "Consistency" means making sure that all the computers in a network agree on what information they have. For example, if you save a photo on one computer, every other computer should also know that this photo exists and what it looks like.

      There are different types of consistency, each with its own rules for how quickly and accurately the computers must update each other. But the main goal is always the same: to make sure everyone has the same, correct information.

    - Dirty Read:
      When more than one client request the system, for all such requests, when different client get different responses due to some recent update,
      that has not been committed to all system yet, this reading operation we called as "Dirty Read".


    - Types:

      - Strong Consistency:  "strong" consistency ensures that once new data is written and confirmed, everyone sees the new data and nobody sees the old data anymore.
      e.g, Train seats books, or movie seats booking

      - Eventual Consistency: unlike "strong" consistency where everyone sees the new data  immediately, in eventual "consistency", it takes some time for the new data to propagate and be seen by everyone. But eventually, all users or components will see the same data.
      e.g, Social Media

      - Weak Consistency: In a system with weak consistency, there's no guarantee about when the new data will be seen by all parts of the system. After a write operation, some users or components may see the new data quickly, while others may see it much later, and some may even see a mix of old and new data. There are no strict rules ensuring that all parts of the system will eventually see the same version of the data.

      So, unlike strong consistency where everyone sees the new data immediately, and unlike eventual consistency where everyone will eventually see the new data, in weak consistency, it's a bit like the "Wild West"—there's no clear timeline for when the data will become consistent across all parts.

8 - CAP's Theorem:

      The CAP theorem, also known as Brewer's theorem, is a fundamental principle in the field of distributed systems. It states that it is impossible for a distributed system to simultaneously provide all three of the following guarantees:

        - **Consistency (C)**: Every read receives the most recent write. All nodes see the same data at the same time, which implies that every read returns the most recent write.

        - **Availability (A)**: Every request receives a response, without guarantee that it contains the most recent version of the information. The system remains operational and available for reads and writes, even when some nodes are unavailable.

        - **Partition tolerance (P)**: The system continues to function and upholds its consistency and availability guarantees in spite of network partitions, which are scenarios where communication between nodes breaks down.

      The CAP theorem posits that a distributed system can only achieve two of the three guarantees at any given time. This leads to three types of systems:

                          C
                          ***
                        *   *
                        *     *
                      A*       *P

        - In this representation:

        - The vertices of the triangle are labeled with the three guarantees: Consistency (C), Availability (A), and Partition tolerance (P).
        - The sides of the triangle represent the trade-offs:
        - The line between C and A represents systems that are both Consistent and Available (CA).
        - The line between C and P represents systems that are both Consistent and Partition-tolerant (CP).
        - The line between A and P represents systems that are both Available and Partition-tolerant (AP).

      - **CA (Consistent and Available)**: These systems prioritize consistency and availability over partition tolerance. They are not suitable for environments where network partitions are a common occurrence.

      - **CP (Consistent and Partition-tolerant)**: These systems prioritize consistency and partition tolerance over availability. They ensure data consistency across all nodes, even during network partitions, but may become unavailable during such events.

      -**AP (Available and Partition-tolerant)**: These systems prioritize availability and partition tolerance over consistency. They ensure the system remains available during network partitions, but the data may become inconsistent across nodes.

9 - Lamport Logical Clock ?

    A Lamport clock is a way to order events in a distributed system. It was introduced by computer scientist Leslie Lamport in 1978. The main idea behind Lamport clocks is to provide a partial ordering of events in a distributed system to help with tasks like debugging and ensuring the consistency of distributed data.

10 - Load Balancer

    Defn :

    Its primary purpose is to evenly distribute incoming network traffic, such as web requests or application traffic, across multiple servers or resources. This distribution ensures that no single server or resource is overwhelmed with too much traffic, thus optimizing performance, availability, and reliability.

    OR

    Load Balancing is the process of efficient distribution of network traffic across all nodes in a distributed system.

        Diag:

        Client
          |
          |
          V
        Load Balancer (VIP)
          |
          |  (Balancing Algorithm)
          |       |
          |       V
        Server 1 <--> Server 2

      Steps:

        - The "Load Balancer" is associated with a Virtual IP (VIP), which is essentially a single IP address or DNS hostname.
        - Clients send their requests to this VIP ( Load Balancer ).
        - The load balancer uses its balancing algorithm to route incoming requests to one of the backend servers, such as "Server 1" or "Server 2."
        - The VIP abstracts the actual server addresses from clients, ensuring that clients don't need to know the specific IP addresses of individual servers.
        - The VIP also allows for flexibility in managing the backend server pool. New servers can be added or removed without changing the VIP that clients connect to, which simplifies scalability and maintenance.



    Here's how a load balancer works or Roles of Load Balancer:

    - Traffic Distribution: When a client, such as a web browser, sends a request to access a website or application, the request is received by a load balancer. The load  balancer acts as a traffic cop, deciding which server or resource should handle the request.

    - Health Checks: Load balancers continuously monitor the health and availability of the servers in the pool. If a server becomes unresponsive or fails a health check, the load balancer stops sending traffic to it, ensuring that only healthy servers handle requests.

    - Load Balancer ensures high scalability, high throughput and high availability.

    - Server Pool: Load balancers manage a pool of servers or resources, often referred to as a server farm or server cluster. These servers host the same application or website, which means that they can handle the same requests.

    - Load Balancing Algorithms: Load balancers use various load balancing algorithms to determine how to distribute incoming traffic. Common algorithms include:

      -  Round Robin: Requests are distributed in a cyclic order to each server in the pool.
      -  Least Connections: Traffic is sent to the server with the fewest active connections.
      -  Weighted Round Robin/Least Connections: Assigning weights to servers based on their capacity, allowing some servers to receive more traffic than others.
      -  IP Hash: Using the client's IP address to consistently direct requests to the same server (useful for maintaining session state).

    - Load Balancing Issues or Challenges
      ===================================
        - Single Point of Failure. To solve this issue we can use Redundancy. The system can have "active" load balancer and "one passive" load balance.

    - Advantages
      ==========
        - Optimisation: Load Balancer helps in resource utilisation and lower response time, thereby optimising the system in a high traffic environment.
        - Better User Experience: It helps in reducing latency and increasing availability.
        - Prevents Downtime ,
          - Downtime refers to the period during which a system, service, application, or equipment is unavailable or not functioning as expected. It is a measure of the time when a system or service is not operational, often due to planned maintenance, unplanned outages, hardware or software failures, or other issues.
        - uses its balancing algorithm to route incoming requests to one of the backend servers, such as "Server 1" or "Server 2."
