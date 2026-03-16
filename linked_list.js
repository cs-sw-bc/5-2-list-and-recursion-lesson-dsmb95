const createNode = (value) => {
    return {
        value: value,
        next: null
    };
};

function displayList(head) {
  let current = head;

  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

function append(head, value) {
  let newNode = createNode(value);

  // Case 1: Empty list
  if (head === null) {
    return newNode;
  }

  let current = head;

  // Move to the last node
  while (current.next !== null) {
    current = current.next;
  }

  // Link last node to new node
  current.next = newNode;

  return head;
}

function erase(head, value) {
    // Make a copy: create a current variable and have it point to the head.
    let current = head;

    // Stop 1 node before target and stop there. current.next.value;
    while (current.next.value !== value){
        current = current.next;
    }

    // Reassign current.next = current.next.next
    current.next = current.next.next;

    return head;
}
/*
    Solution:

    function deleteNode(head, target) {
    // Considers if the target is not found.
        // Make a copy    
        let current = head;

        // Iterate /progress through the list until you find the target
        let found = false
        while(current.next != null) {
            if (current.next.value == target) {
                found = true;
                break;
            }
            current = current.next;
        }

        // Reassign the next and skip over the target node.
        if (found){
            current.next = current.next.next;
        }

        return head; 
    }
*/

// Recursion
function displayRecursive(current) {
    // Base case
    if (current == null) {
        return;
    }

    // recursive case
    console.log(current.value);
    displayRecursive(current.next);
}

let head = null;

head = append(head, 10);
head = append(head, 20);
head = append(head, 30);
head = append(head, 40);
head = append(head, 50);
head = append(head, 60);

displayRecursive(head);

// displayList(head);

// erase(head, 40);

// displayList(head);