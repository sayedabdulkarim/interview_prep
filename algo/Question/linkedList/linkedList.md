// A linked list is a linear data structure where elements are not stored at contiguous memory locations.
// Instead, each element (commonly known as a node) contains two fields: a "data" field to store its value and a "next" field to store the reference (or address) of the next node in the sequence.
// This makes linked lists inherently dynamic and easy to grow or shrink.

// Types of Linked Lists:
// Singly Linked List: Each node has a pointer to the next node in the sequence. The last node points to null, signifying the end of the list.

// Doubly Linked List: Each node has two pointers, one pointing to the next node and another pointing to the previous node.

// Circular Linked List: The last node in the list points back to the first node instead of having a null reference.

// Advantages:
// Dynamic size.
// Easy to insert elements at the beginning, end, or middle.
// Useful for stack, queue, and other data structures that require dynamic memory allocation.
// Disadvantages:
// They use extra memory for storing the "next" (and possibly "previous") references.
// Nodes in a linked list must be read in order from the beginning, making random access and seeking operations slow.
// Slightly more complex to implement and traverse compared to arrays.

///
// how it looks :
10 --> 15 --> 20

Here,

10 - Head
" --> " - pointer
20 - Tail
