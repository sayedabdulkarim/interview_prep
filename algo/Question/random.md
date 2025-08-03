# Interview Questions and Solutions

## Question 1: Group Array of Objects by Key

### Problem
Group an array of objects by a specific key property.

### Input
```javascript
const obj = [
    {
      key: 'Sample 1',
      data: 'Data1'
    },
    {
      key: 'Sample 1',
      data: 'Data1'
    },
    {
      key: 'Sample 2',
      data: 'Data2'
    },
    {
      key: 'Sample 1',
      data: 'Data1'
    },
    {
      key: 'Sample 3',
      data: 'Data1'
    },
    {
      key: 'Sample 4',
      data: 'Data1'
    }
];
```

### Solution
```javascript
function output(arr) {
  const obj = {};

  for(let i of arr) {
    if(!obj[i.key]){
      obj[i.key] = []
    }
    obj[i.key].push(i)
  }
  return obj
}

console.log(output(obj))
```

### Expected Output
```javascript
{
  'Sample 1': [
    { key: 'Sample 1', data: 'Data1' },
    { key: 'Sample 1', data: 'Data1' },
    { key: 'Sample 1', data: 'Data1' }
  ],
  'Sample 2': [
    { key: 'Sample 2', data: 'Data2' }
  ],
  'Sample 3': [
    { key: 'Sample 3', data: 'Data1' }
  ],
  'Sample 4': [
    { key: 'Sample 4', data: 'Data1' }
  ]
}
```
