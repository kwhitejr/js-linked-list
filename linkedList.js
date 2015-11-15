/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;
  var tail = null;
  var length = 0;
  var current;
  var newNode;

  return {
    getHead: function() {
      return head;
    },

    getTail: function() {
      current = head;
      if (head === null) {
        tail = head;
      } else {
        while (current.next !== null) {
          current = current.next;
        }
        tail = current;
      }
      return tail;
    },

    add: function(newValue) {
      newNode = {value: newValue, next: null};
      if (head === null) {
        head = newNode;
        tail = head;
      } else {
        current = head;
        while (current.next !== null) {
          current = current.next;
        }
        if (current.next === null) {
          current.next = newNode;
          tail = current.next;
        }
      }
      length++;
      return tail;
    },

    get: function(number) {
      current = head;
      for (var i=0; i < number; i++) {
        if (current.next === null) {
          return false;
        }
        current = current.next;
      }
      return current;
    },

    remove: function(number) {
      var target = this.get(number);
      var precursor = this.get(number-1);
      var newTarget = this.get(number+1);
      current = head;

      if (!target) {
        return false;
      }

      console.log("first", precursor);
      precursor.next = newTarget;
      console.log("second", precursor);
      target.next = null;
      this.getTail();
      return target;
    },

    insert: function(value, number) {},
  };

}