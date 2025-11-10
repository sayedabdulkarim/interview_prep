# Lucio AI Technical Puzzle - Complete Solution Guide

## Overview

Multi-stage CTF-style puzzle for Senior Frontend Engineer position at Lucio AI.

- **Website**: https://workwithus.lucioai.com/
- **Your Details**:
  - Name: Sayed Abdul Karim
  - Email: sakarim9124@gmail.com
  - Phone: 8296708008

---

## Stage 1: Registration at /begin

### Request

```bash
curl -X POST https://workwithus.lucioai.com/begin \
  -H "Content-Type: application/json" \
  -d '{"name":"YOUR_NAME","email":"YOUR_EMAIL"}' \
  -c cookies.txt
```

### Response

```json
{
  "message": "Okay great, show out your arm and take the entry stamp...",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Key Points

- Save the `token` - you'll need it for all subsequent requests
- A cookie named `auth_token` is set automatically
- Both cookie and Authorization header are needed later

---

## Stage 2: Pass the Bouncer at /get-carded

### The Challenge

Initial attempts fail with various error messages:

- "missing something" → Need Authorization header
- "Why don't these match?" → Cookie and Auth token mismatch
- "not from right place" → Need Referer header
- "don't look familiar" → Need specific User-Agent

### Discovery Process

1. **Try GET first** to see instructions:

```bash
curl https://workwithus.lucioai.com/get-carded \
  -b cookies.txt \
  -H "Authorization: Bearer YOUR_TOKEN"
```

2. **Error reveals**: "You're not coming from the right place"
3. **Try with Referer**:

```bash
curl https://workwithus.lucioai.com/get-carded \
  -b cookies.txt \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Referer: https://lucioai.com"
```

4. **Error reveals**: User-Agent issue - needs to be "hari_seldon"

### Solution

```bash
curl https://workwithus.lucioai.com/get-carded \
  -b cookies.txt \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Referer: https://lucioai.com" \
  -H "User-Agent: hari_seldon"
```

### Success Response

```json
{
  "message": "Great! Now head over to /side-quest for the next challenge"
}
```

### Key Points

- **User-Agent must be**: `hari_seldon` (reference to Isaac Asimov's Foundation series)
- **Referer must be**: `https://lucioai.com`
- Cookie and Authorization header must both be present and match

---

## Stage 3: The Phone Puzzle at /side-quest

### Request

```bash
curl https://workwithus.lucioai.com/side-quest \
  -b cookies.txt \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Referer: https://lucioai.com" \
  -H "User-Agent: hari_seldon" \
  > phone.html
```

### The Puzzle

You receive an HTML file containing:

- A phone interface (FarmOS 12.1)
- Heavily obfuscated JavaScript
- A password input form
- Story about a farmer with a locked phone

### Finding the Password

#### Method 1: Browser DevTools Debugging

1. Open `phone.html` in browser
2. Open DevTools (F12) → Sources tab
3. Set breakpoint on form submission
4. Step through the code to find password validation
5. Located at line 15-16:

```javascript
var secretArr = [
  100 + 3,
  100 + 1,
  116,
  47 - -48,
  111,
  102,
  102,
  47 - -48,
  100 + 9,
  120 + 1,
  47 - -48,
  100 + 8,
  100 - 3,
  100 + 19,
  100 + 10,
  47 - -48,
  100 + 14,
  111,
  100 - 2,
  111,
  116,
  100 + 15,
];

var secret = secretArr
  .map(function (num) {
    return String.fromCharCode(num);
  })
  .join("");
```

#### Method 2: Decode the Array

```bash
node -e "
var secretArr = [100 + 3, 100 + 1, 116, 47 - -48, 111, 102, 102,
                 47 - -48, 100 + 9, 120 + 1, 47 - -48, 100 + 8,
                 100 - 3, 100 + 19, 100 + 10, 47 - -48, 100 + 14,
                 111, 100 - 2, 111, 116, 100 + 15];
var secret = secretArr.map(function(num) {
  return String.fromCharCode(num);
}).join('');
console.log(secret);
"
```

### Password

```
get_off_my_lawn_robots
```

### After Entering Password

The page displays ASCII art with message:

```
WOW, THANKS A LOT, PARTNER.
HEAD OVER TO /LOGIC-IT-OUT FOR THE FINAL STAGE.
SEND A FETCH REQUEST TO GET STARTED
```

---

## Stage 4: Final Challenge at /logic-it-out

### **CRITICAL DISCOVERY**: Authorization Header Format

🚨 **The Authorization header should NOT include "Bearer" prefix!**

### Wrong ❌

```bash
curl https://workwithus.lucioai.com/logic-it-out \
  -b cookies.txt \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Correct ✅

```bash
curl https://workwithus.lucioai.com/logic-it-out \
  -b cookies.txt \
  -H "Authorization: YOUR_TOKEN" \
  -H "Referer: https://lucioai.com" \
  -H "User-Agent: hari_seldon"
```

### The Trivia Challenge

#### Response

```json
{
  "instruction": "Welcome to trivia night! Answer all 3 questions within 5 seconds...",
  "questions": [
    { "answer_type": "int", "question": "What is 14 times 14?" },
    {
      "answer_type": "int",
      "question": "How many players in a basketball team?"
    },
    { "answer_type": "str", "question": "What is the capital of Turkey?" }
  ],
  "token": "eyJhbnN3ZXJzIjpbMTk2LDUsIkFua2FyYSJdfQ.aRIljQ.7LnE1whLNyAo5-utUmhMUn4akSk"
}
```

#### **KEY INSIGHT**: The Token Contains the Answers!

The token is base64 encoded. Decode the first part:

```bash
echo "eyJhbnN3ZXJzIjpbMTk2LDUsIkFua2FyYSJdfQ" | base64 -d
# Output: {"answers":[196,5,"Ankara"]}
```

### Automated Solution Script

```bash
#!/bin/bash

# Get questions and token
response=$(curl -s https://workwithus.lucioai.com/logic-it-out \
  -b cookies.txt \
  -H "Authorization: YOUR_TOKEN" \
  -H "Referer: https://lucioai.com" \
  -H "User-Agent: hari_seldon")

# Extract token
token=$(echo "$response" | grep -o '"token":"[^"]*"' | cut -d'"' -f4)

# Decode token to get answers
token_payload=$(echo "$token" | cut -d'.' -f1)
answers_json=$(echo "$token_payload" | base64 -d)
answers=$(echo "$answers_json" | grep -o '\[.*\]')

# Submit within 5 seconds
curl -s -X POST https://workwithus.lucioai.com/fastest-fingers-first \
  -b cookies.txt \
  -H "Authorization: YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Referer: https://lucioai.com" \
  -H "User-Agent: hari_seldon" \
  -d "{\"token\":\"$token\",\"answers\":$answers}"
```

### Success Response

```json
{
  "message": "Congratulations! You've reached the other side...",
  "form_link": "https://forms.gle/uafTg3mFLHpEo7NS6"
}
```

---

## Complete Flow (One-Liner for Each Stage)

### Stage 1: Register

```bash
curl -X POST https://workwithus.lucioai.com/begin \
  -H "Content-Type: application/json" \
  -d '{"name":"Sayed Abdul Karim","email":"sakarim9124@gmail.com"}' \
  -c /tmp/cookies.txt > /tmp/begin.json

TOKEN=$(grep -o '"token":"[^"]*"' /tmp/begin.json | cut -d'"' -f4)
```

### Stage 2: Pass Bouncer

```bash
curl https://workwithus.lucioai.com/get-carded \
  -b /tmp/cookies.txt \
  -H "Authorization: Bearer $TOKEN" \
  -H "Referer: https://lucioai.com" \
  -H "User-Agent: hari_seldon"
```

### Stage 3: Get Phone Puzzle

```bash
curl https://workwithus.lucioai.com/side-quest \
  -b /tmp/cookies.txt \
  -H "Authorization: Bearer $TOKEN" \
  -H "Referer: https://lucioai.com" \
  -H "User-Agent: hari_seldon" \
  > phone.html
```

### Stage 4: Solve Trivia

```bash
# Note: NO "Bearer" prefix here!
bash trivia_solver.sh
```

---

## Key Learnings & Tricks

### 1. **HTTP Headers Matter**

- User-Agent: `hari_seldon` (Asimov reference)
- Referer: `https://lucioai.com`
- Both cookie AND Authorization header needed

### 2. **Authorization Header Format**

- `/get-carded`: Uses `Bearer YOUR_TOKEN`
- `/logic-it-out`: Uses just `YOUR_TOKEN` (NO Bearer!)

### 3. **JWT Tokens**

- Tokens are base64 encoded JSON
- Can be decoded to reveal information
- The trivia token literally contains the answers!

### 4. **Browser DevTools**

- Use Sources tab to debug obfuscated JavaScript
- Set breakpoints on form submissions
- Step through code to find validation logic

### 5. **Time Pressure**

- Trivia must be answered within 5 seconds
- Automate with scripts
- Token decoding is the key

### 6. **Error Messages are Hints**

- "missing something" → Add header
- "don't match" → Check token/cookie consistency
- "not from right place" → Add Referer
- "don't look familiar" → Fix User-Agent

---

## Common Pitfalls

1. ❌ **Using "Bearer" prefix on /logic-it-out** → Causes "don't match" error
2. ❌ **Wrong User-Agent** → Must be exactly "hari_seldon"
3. ❌ **Missing Referer** → Must be https://lucioai.com
4. ❌ **Trying to solve trivia manually** → Too slow, must automate
5. ❌ **Not decoding the token** → The answers are right there!

---

## Tools Used

1. **curl** - HTTP requests
2. **Node.js** - JavaScript execution and decoding
3. **Browser DevTools** - JavaScript debugging
4. **base64** - Token decoding
5. **grep/awk** - Text extraction
6. **bash** - Automation scripts

---

## Final Notes

- The puzzle tests: HTTP knowledge, debugging, problem-solving, automation
- Multiple stages require different techniques
- Time pressure forces automation thinking
- References to science fiction (Asimov) show cultural knowledge
- Error messages guide you, but require interpretation

**Total Time**: ~2 hours with assistance
**Difficulty**: Medium-Hard (requires diverse skills)

---

## Next Steps

**Fill out the Google Form**: https://forms.gle/uafTg3mFLHpEo7NS6

Good luck! 🚀
