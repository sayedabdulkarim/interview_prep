# WebRTC Interview Questions

## What is WebRTC?

**WebRTC (Web Real-Time Communication)** is a free, open-source technology that enables peer-to-peer communication of audio, video, and data directly between web browsers and mobile applications without requiring plugins or additional software.

## How WebRTC Works (Simple Explanation)

### The Process:

1. **Get User Media**: Access camera/microphone using `getUserMedia()`
2. **Create Connection**: Establish `RTCPeerConnection` between peers
3. **Signal Exchange**: Exchange connection details via signaling server
4. **ICE Gathering**: Find best network path using STUN/TURN servers
5. **Direct Communication**: Once connected, media flows directly peer-to-peer

### Key Components:

- **MediaStream**: Audio/video streams from devices
- **RTCPeerConnection**: Handles the connection between peers
- **RTCDataChannel**: For sending arbitrary data
- **Signaling Server**: Initial connection setup (not part of WebRTC spec)
- **STUN Server**: Discovers public IP address
- **TURN Server**: Relay server when direct connection fails

---

## Basic Questions

### 1. What is WebRTC used for?
**Answer:** Video calling, audio calling, screen sharing, file sharing, live streaming, online gaming, and real-time collaboration tools.

### 2. What are the main WebRTC APIs?
**Answer:**
- `getUserMedia()`: Access camera/microphone
- `RTCPeerConnection`: Manage peer connections
- `RTCDataChannel`: Send arbitrary data

### 3. What is a signaling server?
**Answer:** A server that helps peers exchange connection information (SDP offers/answers and ICE candidates) to establish a direct connection. It's not part of WebRTC specification.

### 4. What is SDP?
**Answer:** Session Description Protocol - describes multimedia communication sessions including codecs, network information, and media capabilities.

### 5. What are ICE candidates?
**Answer:** Interactive Connectivity Establishment candidates are potential network addresses/ports that peers can use to communicate.

### 6. What is STUN server?
**Answer:** Session Traversal Utilities for NAT - helps discover your public IP address behind NAT/firewall.

### 7. What is TURN server?
**Answer:** Traversal Using Relays around NAT - acts as a relay when direct peer-to-peer connection is not possible.

### 8. Is WebRTC truly serverless?
**Answer:** No. While media flows peer-to-peer, you still need:
- Signaling server for initial connection
- STUN/TURN servers for NAT traversal

### 9. What browsers support WebRTC?
**Answer:** Chrome, Firefox, Safari, Edge, Opera, and most modern mobile browsers.

### 10. How to access user's camera in WebRTC?
**Answer:**
```javascript
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => { /* use stream */ })
  .catch(error => { /* handle error */ });
```

---

## Intermediate Questions

### 1. Explain the WebRTC connection flow
**Answer:**
1. Peer A creates offer using `createOffer()`
2. Sets it as local description
3. Sends offer to Peer B via signaling server
4. Peer B sets it as remote description
5. Creates answer using `createAnswer()`
6. Sets answer as local description
7. Sends answer back to Peer A
8. Peer A sets it as remote description
9. ICE candidates exchanged throughout
10. Connection established

### 2. What is NAT traversal and why is it important?
**Answer:** NAT (Network Address Translation) traversal is the process of establishing connections between peers behind NAT/firewalls. Important because most devices are behind NAT, which blocks direct connections. WebRTC uses ICE, STUN, and TURN for NAT traversal.

### 3. What are the different ICE gathering states?
**Answer:**
- `new`: ICE gathering not started
- `gathering`: ICE engine is gathering candidates
- `complete`: ICE gathering finished

### 4. How do you handle connection failures in WebRTC?
**Answer:**
```javascript
pc.oniceconnectionstatechange = () => {
  if (pc.iceConnectionState === 'failed') {
    // Retry connection or use TURN server
    pc.restartIce();
  }
};
```

### 5. What is Trickle ICE?
**Answer:** A technique where ICE candidates are sent to the remote peer as soon as they're discovered, rather than waiting for all candidates to be gathered. This speeds up connection establishment.

### 6. Explain media constraints in WebRTC
**Answer:**
```javascript
const constraints = {
  video: {
    width: { min: 640, ideal: 1280, max: 1920 },
    height: { min: 480, ideal: 720, max: 1080 },
    frameRate: { ideal: 30, max: 60 }
  },
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true
  }
};
```

### 7. What is RTCDataChannel and its use cases?
**Answer:** Enables bidirectional peer-to-peer data transfer. Use cases:
- File sharing
- Gaming (low latency data)
- Chat messages
- Collaborative editing
- IoT device communication

### 8. How do you implement screen sharing?
**Answer:**
```javascript
navigator.mediaDevices.getDisplayMedia({ video: true })
  .then(screenStream => {
    const screenTrack = screenStream.getVideoTracks()[0];
    sender.replaceTrack(screenTrack);
  });
```

### 9. What are WebRTC statistics and how to access them?
**Answer:**
```javascript
pc.getStats().then(stats => {
  stats.forEach(report => {
    // Access metrics like bitrate, packet loss, jitter
    console.log(report.type, report);
  });
});
```

### 10. How do you handle multiple peers (group call)?
**Answer:** Two approaches:
- **Mesh**: Every peer connects to every other peer (n*(n-1)/2 connections)
- **SFU/MCU**: Use a media server as central point

---

## Advanced Questions

### 1. Explain the difference between Mesh, SFU, and MCU architectures
**Answer:**
- **Mesh**: P2P connections between all participants. Good for small groups (< 4-5 users)
- **SFU (Selective Forwarding Unit)**: Server receives streams and forwards to participants. Scalable, less client CPU
- **MCU (Multipoint Control Unit)**: Server receives, mixes, and transcodes streams. Most scalable but server-intensive

### 2. How do you implement bandwidth adaptation in WebRTC?
**Answer:**
```javascript
// Using RTCRtpSender parameters
const params = sender.getParameters();
params.encodings[0].maxBitrate = 500000; // 500 kbps
sender.setParameters(params);

// Monitor stats for packet loss
pc.getStats().then(stats => {
  if (packetLossRate > 5) {
    // Reduce bitrate
  }
});
```

### 3. Explain simulcast vs SVC in WebRTC
**Answer:**
- **Simulcast**: Sender encodes multiple versions of same stream at different resolutions/bitrates
- **SVC (Scalable Video Coding)**: Single stream with temporal, spatial, and quality layers that can be selectively forwarded

### 4. How do you implement E2E encryption in WebRTC?
**Answer:**
```javascript
// Using Insertable Streams API
const sender = pc.addTrack(track);
const streams = sender.createEncodedStreams();
const transformer = new TransformStream({
  transform: async (chunk, controller) => {
    chunk.data = await encryptData(chunk.data);
    controller.enqueue(chunk);
  }
});
streams.readable.pipeThrough(transformer).pipeTo(streams.writable);
```

### 5. What is ORTC and how does it differ from WebRTC?
**Answer:** Object Real-Time Communications provides lower-level APIs giving more control over the media stack. Differences:
- No SDP in ORTC
- More granular control
- Better for advanced use cases
- Not widely adopted

### 6. How do you handle codec negotiation?
**Answer:**
```javascript
// Prefer specific codec
pc.getTransceivers().forEach(transceiver => {
  const codecs = RTCRtpSender.getCapabilities('video').codecs;
  const preferred = codecs.filter(codec => codec.mimeType === 'video/VP9');
  transceiver.setCodecPreferences(preferred);
});
```

### 7. Explain WebRTC security mechanisms
**Answer:**
- **Mandatory encryption**: DTLS for DataChannel, SRTP for media
- **Permission model**: User consent for media access
- **Origin restrictions**: Same-origin policy
- **Fingerprinting protection**: mDNS candidates
- **ICE consent freshness**: Prevents attacks

### 8. How do you optimize WebRTC for mobile?
**Answer:**
- Use hardware acceleration
- Reduce resolution/framerate on cellular
- Implement aggressive bandwidth adaptation
- Use VP8/H.264 hardware codecs
- Monitor battery usage
- Handle network changes gracefully

### 9. What is QUIC and its role in WebRTC?
**Answer:** QUIC is a transport protocol that could replace SCTP for DataChannel:
- Lower latency connection establishment
- Better congestion control
- Multiplexing without head-of-line blocking
- WebTransport API uses QUIC

### 10. How do you debug WebRTC issues?
**Answer:**
- **Chrome**: chrome://webrtc-internals
- **Firefox**: about:webrtc
- **Get detailed logs**:
```javascript
pc.addEventListener('icecandidateerror', (e) => {
  console.log('ICE error:', e.errorCode, e.errorText);
});
```
- Use `getStats()` API for metrics
- Wireshark for network analysis
- Check firewall/NAT configuration

### 11. Implement perfect negotiation pattern
**Answer:**
```javascript
let makingOffer = false;
let ignoreOffer = false;
let isSettingRemoteAnswerPending = false;

pc.onnegotiationneeded = async () => {
  try {
    makingOffer = true;
    await pc.setLocalDescription();
    signaling.send({ description: pc.localDescription });
  } catch (err) {
    console.error(err);
  } finally {
    makingOffer = false;
  }
};

signaling.onmessage = async ({ data: { description, candidate } }) => {
  try {
    if (description) {
      const readyForOffer = !makingOffer &&
                           (pc.signalingState === "stable" || isSettingRemoteAnswerPending);
      const offerCollision = description.type === "offer" && !readyForOffer;

      ignoreOffer = !polite && offerCollision;
      if (ignoreOffer) return;

      isSettingRemoteAnswerPending = description.type === "answer";
      await pc.setRemoteDescription(description);
      isSettingRemoteAnswerPending = false;

      if (description.type === "offer") {
        await pc.setLocalDescription();
        signaling.send({ description: pc.localDescription });
      }
    } else if (candidate) {
      await pc.addIceCandidate(candidate);
    }
  } catch (err) {
    console.error(err);
  }
};
```

---

## Practical Scenarios

### 1. "How would you build a video calling app like Zoom?"
**Answer:**
- Use SFU architecture for scalability
- Implement simulcast for adaptive streaming
- Add features: screen share, recording, chat
- Use TURN servers for reliability
- Implement reconnection logic
- Add virtual backgrounds using Canvas API

### 2. "How to reduce latency in WebRTC?"
**Answer:**
- Use regional TURN servers
- Implement predictive ICE
- Optimize codec settings
- Reduce jitter buffer
- Use unreliable DataChannel for time-sensitive data
- Monitor and adapt to network conditions

### 3. "How to handle 1000+ participants?"
**Answer:**
- Use MCU/SFU architecture
- Implement pagination (show only visible participants)
- Use audio-only mode for most participants
- Implement server-side mixing
- Use CDN for distribution
- Consider WebRTC to HLS/DASH for viewers

---

## Code Examples

### Basic P2P Connection
```javascript
// Peer A
const pc = new RTCPeerConnection(configuration);
const offer = await pc.createOffer();
await pc.setLocalDescription(offer);
// Send offer via signaling server

// Peer B
await pc.setRemoteDescription(offer);
const answer = await pc.createAnswer();
await pc.setLocalDescription(answer);
// Send answer back

// Both peers
pc.onicecandidate = (e) => {
  if (e.candidate) {
    // Send candidate to other peer
  }
};
```

### DataChannel Example
```javascript
// Sender
const channel = pc.createDataChannel('chat');
channel.onopen = () => {
  channel.send('Hello WebRTC!');
};

// Receiver
pc.ondatachannel = (e) => {
  const channel = e.channel;
  channel.onmessage = (e) => {
    console.log('Received:', e.data);
  };
};
```

---

## Common Pitfalls & Solutions

1. **Not handling all connection states**
2. **Forgetting to close connections properly**
3. **Not implementing reconnection logic**
4. **Ignoring mobile network changes**
5. **Not handling codec incompatibilities**
6. **Missing TURN server fallback**
7. **Not monitoring connection quality**
8. **Improper error handling**

---

## Resources

- [WebRTC Official](https://webrtc.org/)
- [MDN WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
- [WebRTC Samples](https://webrtc.github.io/samples/)
- [Chrome WebRTC Internals](chrome://webrtc-internals)