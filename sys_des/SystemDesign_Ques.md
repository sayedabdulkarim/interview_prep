# System Design Interview Preparation Guide
## From Beginner to Advanced (4 Years Experience)

---

## 📚 PREREQUISITES (Learn These First!)

### 1. **Networking Basics**
- **HTTP/HTTPS:** Request-response cycle, methods (GET, POST, PUT, DELETE)
- **TCP vs UDP:** When to use which protocol
- **WebSockets:** Real-time bidirectional communication
- **DNS:** How domain names resolve to IP addresses
- **CDN (Content Delivery Network):** Static content distribution

### 2. **Database Fundamentals**
- **SQL vs NoSQL:** 
  - SQL: ACID properties, transactions, joins
  - NoSQL: Types (Document, Key-Value, Graph, Column-family)
- **Indexing:** B-trees, hash indexes, when to use
- **Normalization vs Denormalization**
- **CAP Theorem:** Consistency, Availability, Partition tolerance

### 3. **Caching**
- **Cache Levels:** Browser, CDN, Application, Database
- **Caching Strategies:**
  - Cache-aside (Lazy loading)
  - Write-through
  - Write-behind (Write-back)
- **Cache Invalidation:** TTL, event-based
- **Tools:** Redis, Memcached basics

### 4. **Scaling Concepts**
- **Vertical Scaling:** Adding more power (CPU, RAM)
- **Horizontal Scaling:** Adding more machines
- **Load Balancing:** Round-robin, least connections, IP hash
- **Database Scaling:**
  - Replication (Master-Slave, Master-Master)
  - Sharding (Horizontal partitioning)
  - Federation (Split databases by function)

### 5. **Message Queues & Pub-Sub**
- **Use Cases:** Decoupling, async processing
- **Message Queue:** RabbitMQ, Amazon SQS
- **Pub-Sub:** Kafka, Redis Pub/Sub
- **Difference:** Point-to-point vs Broadcast

### 6. **Microservices Architecture**
- **Monolith vs Microservices:** Trade-offs
- **Service Communication:** REST, gRPC, GraphQL
- **API Gateway:** Single entry point
- **Service Discovery:** How services find each other

### 7. **Storage Systems**
- **Block Storage:** Like hard drives (AWS EBS)
- **Object Storage:** For files/media (S3, Blob Storage)
- **File Storage:** Network file systems (NFS)

---

## 🎯 BEGINNER LEVEL (Start Here!)
*Focus: Understanding fundamental design concepts and basic architectures*

### 1. **Design a URL Shortener** (e.g., Bitly) ⭐
**Requirements:**
- Shorten long URLs
- Redirect to original URL
- Analytics (click count)
- Custom aliases (optional)

**Key Components:**
- Database schema (URL mapping table)
- Unique ID generation (Base62 encoding)
- Cache for frequently accessed URLs
- Rate limiting

**Follow-up Questions:**
- How to handle custom URLs?
- How to delete/expire URLs?
- How to prevent abuse?

### 2. **Design a Pastebin** (Text sharing service)
**Requirements:**
- Store text snippets
- Generate unique URL
- Set expiration time
- View count

**Key Components:**
- Storage calculation (10M pastes/day * 10KB average)
- Database vs Object storage
- Metadata database
- Cleanup service for expired pastes

### 3. **Design a Chat Application** (WhatsApp Web - Basic)
**Requirements:**
- 1-on-1 messaging
- Online/offline status
- Message delivery status
- Message history

**Key Components:**
- WebSocket for real-time
- Message queue for offline users
- Database schema (users, messages, conversations)
- Push notifications

### 4. **Design a Library Management System**
**Requirements:**
- Book inventory
- User management
- Issue/return books
- Search functionality
- Fine calculation

**Key Components:**
- Database design (Books, Users, Transactions)
- ACID transactions for book issue/return
- Search implementation
- REST API design

### 5. **Design a Rate Limiter**
**Requirements:**
- Limit API requests per user
- Different limits for different tiers
- Distributed rate limiting

**Algorithms:**
- Token Bucket
- Leaky Bucket
- Fixed Window Counter
- Sliding Window Log

---

## 💪 INTERMEDIATE LEVEL (Your Target Zone!)
*Focus: Scalable architectures, distributed systems, handling edge cases*

### 1. **Design a Social Media Feed** (Facebook/LinkedIn Timeline)
**Requirements:**
- Show posts from friends/connections
- Real-time updates
- Handle millions of users
- Ranking/sorting algorithms

**Key Components:**
- Pull vs Push vs Hybrid model
- Timeline generation service
- Ranking service (ML based)
- Caching strategy (Redis)
- Celebrity user problem

### 2. **Design a Video Call System** (Zoom/Google Meet - Basic)
**Requirements:**
- Video/audio streaming
- Screen sharing
- Multiple participants
- Recording capability

**Key Components:**
- WebRTC for peer-to-peer
- STUN/TURN servers
- Signaling server
- Media server for group calls
- Bandwidth optimization

### 3. **Design an E-commerce Cart & Checkout**
**Requirements:**
- Add/remove items
- Price calculation
- Inventory management
- Payment processing
- Order management

**Key Components:**
- Cart storage (Session vs Database)
- Inventory locking mechanism
- Payment gateway integration
- Distributed transactions
- Idempotency for payments

### 4. **Design a Food Delivery System** (Swiggy/DoorDash)
**Requirements:**
- Restaurant listing
- Order placement
- Delivery partner assignment
- Real-time tracking
- Payment processing

**Key Components:**
- Location-based search (Geohashing)
- Matching algorithm
- Real-time tracking (WebSocket)
- Order state machine
- Notification service

### 5. **Design a Notification System**
**Requirements:**
- Multiple channels (Email, SMS, Push)
- Priority queue
- Rate limiting
- Template management
- Delivery tracking

**Key Components:**
- Message queue architecture
- Worker pools for each channel
- Retry mechanism
- Analytics and tracking
- User preferences

### 6. **Design a Ride-Sharing System** (Uber/Ola)
**Requirements:**
- Driver-rider matching
- Real-time location tracking
- Pricing calculation
- Trip management
- Ratings system

**Key Components:**
- QuadTree/Geohashing for location
- Matching algorithm
- WebSocket for real-time updates
- Dynamic pricing service
- Payment service

---

## 🚀 ADVANCED LEVEL (Future Growth)
*Focus: Complex distributed systems, high availability, massive scale*

### 1. **Design a Video Streaming Platform** (YouTube/Netflix)
**Requirements:**
- Video upload and processing
- Adaptive bitrate streaming
- Global content delivery
- Recommendations
- Comments and likes

**Key Components:**
- Video encoding pipeline
- CDN strategy
- Chunked video storage
- HLS/DASH protocols
- Recommendation service

### 2. **Design a Distributed Cache** (Redis/Memcached)
**Requirements:**
- In-memory storage
- Consistent hashing
- Replication
- Eviction policies
- Cluster management

**Key Components:**
- Consistent hashing ring
- Replication strategy
- Cache coherence
- Hot key problem
- Memory management

### 3. **Design a Search Engine** (Google Search - Simplified)
**Requirements:**
- Web crawling
- Indexing
- Ranking
- Query processing
- Spell correction

**Key Components:**
- Distributed crawler
- Inverted index
- PageRank algorithm
- MapReduce for processing
- Query optimization

### 4. **Design a Payment System** (PayPal/Stripe)
**Requirements:**
- Money transfer
- Multiple currencies
- Fraud detection
- Compliance (PCI-DSS)
- Settlement and reconciliation

**Key Components:**
- Double-entry bookkeeping
- Distributed transactions
- Idempotency
- Audit logging
- Fraud detection ML pipeline

### 5. **Design a Distributed Database**
**Requirements:**
- ACID compliance
- Horizontal scaling
- Multi-region support
- Backup and recovery
- Query optimization

**Key Components:**
- Consensus algorithms (Raft, Paxos)
- Sharding strategies
- Replication (sync/async)
- Distributed transactions
- Query router

---

## 📊 SYSTEM DESIGN INTERVIEW APPROACH

### Step 1: **Requirements Gathering** (5 mins)
```
- Functional Requirements (What system should do)
- Non-Functional Requirements (Scale, Performance, Availability)
- Extended Requirements (Analytics, Monitoring)
- Back-of-envelope calculations
```

### Step 2: **High-Level Design** (10 mins)
```
- Draw main components
- Show data flow
- API design
- Database schema
```

### Step 3: **Detailed Design** (20 mins)
```
- Deep dive into each component
- Algorithm choices
- Data structures
- Database choices (SQL vs NoSQL)
```

### Step 4: **Scale the Design** (10 mins)
```
- Identify bottlenecks
- Add caching layers
- Database scaling (Sharding, Replication)
- Load balancing
```

### Step 5: **Handle Edge Cases** (10 mins)
```
- Failure scenarios
- Data consistency
- Security considerations
- Monitoring and alerting
```

---

## 📈 IMPORTANT METRICS TO REMEMBER

### Storage Estimates:
- 1 character = 1 byte
- 1 KB = 1,000 bytes
- 1 MB = 1,000 KB
- 1 GB = 1,000 MB
- 1 TB = 1,000 GB

### Common Estimates:
- Tweet size: ~280 bytes
- Image thumbnail: ~20 KB
- HD image: ~200 KB
- 1 min video: ~50 MB
- QPS (Queries Per Second): Daily requests / 86400

### Latency Numbers (Know These!):
- L1 cache: 0.5 ns
- L2 cache: 7 ns
- RAM: 100 ns
- SSD: 150 μs
- HDD: 10 ms
- Network (same region): 0.5 ms
- Network (different region): 150 ms

---

## 🎥 RECOMMENDED RESOURCES

### YouTube Channels:
1. **Gaurav Sen** - Excellent explanations with diagrams
2. **Tech Dummies (Narendra)** - Detailed system design
3. **System Design Interview** - Alex Xu's channel
4. **Tushar Roy** - Good for beginners

### Books:
1. **"Designing Data-Intensive Applications"** - Martin Kleppmann (Must Read!)
2. **"System Design Interview" Vol 1 & 2** - Alex Xu
3. **"Building Microservices"** - Sam Newman

### Online Platforms:
1. **Educative.io** - Grokking the System Design Interview
2. **Pramp** - Mock interviews
3. **LeetCode System Design** - Discussion forum
4. **High Scalability** - Real-world architectures

### Blogs to Follow:
1. **Engineering Blogs:**
   - Uber Engineering
   - Airbnb Engineering
   - Netflix Tech Blog
   - Facebook Engineering
2. **Architecture Blogs:**
   - Martin Fowler
   - High Scalability

---

## 💡 TIPS FOR YOUR FIRST SYSTEM DESIGN INTERVIEW

### Do's:
✅ Start with clarifying questions
✅ Think out loud
✅ Draw diagrams (boxes and arrows)
✅ Consider trade-offs
✅ Mention specific technologies (Redis, Kafka, etc.)
✅ Discuss data flow
✅ Address scalability proactively

### Don'ts:
❌ Don't dive into code
❌ Don't over-engineer
❌ Don't ignore requirements
❌ Don't forget about failures
❌ Don't be silent while thinking

### Practice Schedule (4 weeks):
- **Week 1:** Learn prerequisites, watch videos
- **Week 2:** Practice 2 beginner problems daily
- **Week 3:** Practice intermediate problems
- **Week 4:** Mock interviews, advanced problems

---

## 🔥 QUICK REVISION CHECKLIST

Before interview, make sure you can explain:
- [ ] Difference between SQL and NoSQL
- [ ] When to use cache
- [ ] How load balancer works
- [ ] Database indexing
- [ ] Consistent hashing
- [ ] CAP theorem
- [ ] Message queue vs Pub-Sub
- [ ] WebSocket vs HTTP polling
- [ ] Microservices pros/cons
- [ ] Rate limiting algorithms

---

## VIDEOS & REFERENCES
- https://www.youtube.com/watch?v=MRx40JVmmF4&list=PL6W8uoQQ2c60RHk0aE3Pf7J9o6E9UnmDx (HLD interview questions)
- Gaurav Sen YouTube Channel
- System Design Primer (GitHub)
- Educative.io - Grokking System Design

---

Remember: System design is about trade-offs. There's no perfect solution, only solutions that work better for specific requirements!