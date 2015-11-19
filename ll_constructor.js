function Node(value) {
  this.value = value;
  this.next = null;
}


function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
  // var cucurerrent;
  // var newNode;
}


LinkedList.prototype.getHead = function() {
  return this.head;
};

LinkedList.prototype.getTail = function() {
  var current = this.head;
  if (this.head === null) {
    this.tail = this.head;
  } else {
    while (current.next !== null) {
      current = current.next;
    }
    this.tail = current;
  }
  return this.tail;
};

LinkedList.prototype.add = function(newValue) {
  var newNode = new Node(newValue);
  if (this.head === null) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    if (current.next === null) {
      current.next = newNode;
      this.tail = current.next;
    }
  }
  this.length++;
  return this.tail;
};

LinkedList.prototype.get = function(number) {
  var current = this.head;
  if (number < 0) {
    return false;
  }
  for (var i=0; i < number; i++) {
    if (current.next === null) {
      return false;
    }
    current = current.next;
  }
  return current;
};

LinkedList.prototype.remove = function(number) {
  var target = this.get(number);
  var precursor = this.get(number-1);
  var newTarget = this.get(number+1) || null;
  var current = this.head;

  if (!target) {
    return false;
  }
  if (!precursor) {
    target.next = null;
    this.head = newTarget;
  }

  precursor.next = newTarget;
  target.next = null;
  this.length--;
  this.tail = this.getTail();
  return target;
};

LinkedList.prototype.insert = function(newValue, number) {
  var insertNode = new Node(newValue);
  var before = this.get(number-1);
  var after = this.get(number) || null;

  console.log("The linked list length is: ", this.length);

  if (number < 0) {
    return false;
  }
  if (number === 0) {
    insertNode.next = after;
    this.head = insertNode;
  }
  if (number > this.length-1) {
    return false;
  }
  if (this.get(number)) {
    insertNode.next = after;
    before.next = insertNode;
  }

  this.length++;
  this.head = this.get(0);
  this.tail = this.getTail();
  return true;
};

var bob = new LinkedList();
console.log(bob.head);
bob.add('is a ');
bob.add(' great guy.');
bob.add(' Who said that?');
console.log(bob.head);
console.log(bob.get(1));
bob.remove(1);
console.log(bob.head);
bob.insert('holla at meh', 1);
console.log(bob.head);
