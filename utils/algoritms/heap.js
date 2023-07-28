export class Heap {
  constructor() {
    this.n = 0;
    this.arr = [];
  }

  insert(node, compare) {
    this.n += 1;
    this.arr[this.n] = node;
    let i = this.n;
    while (i > 1) {
      const parent = Math.floor(i / 2);
      if (this.arr[parent][compare] > this.arr[i][compare]) {
        this.swap(this.arr, parent, i);
        i = parent;
      } else {
        return;
      }
    }
  }

  pop(compare) {
    const tempNode = this.arr[1];
    this.arr[1] = this.arr[this.n];
    this.n = this.n - 1;
    this.arr.pop();
    let i = 1;
    while (i < this.n) {
      const left = this.arr[2 * i];
      const right = this.arr[2 * i + 1];
      if (left === undefined || right === undefined) {
        if (left === undefined && right === undefined) return tempNode;
        let smallest = left ?  2 * i : 2 * i + 1;
        if (this.arr[i][compare] > this.arr[smallest][compare]) {
          this.swap(this.arr, i, smallest);
          return tempNode
        } else {
          return tempNode;
        }
      }
      let smallest = left[compare] < right[compare] ?  2 * i : 2 * i + 1;
      if (this.arr[i][compare] > this.arr[smallest][compare]) {
        this.swap(this.arr, i, smallest);
        i = smallest;
      } else {
        return tempNode;
      }
    }
    return tempNode;
  }

  display(compare) {
    console.log(this.arr.map((e) => e[compare]));
  }

  isEmpty() {
    return this.n === 0 ? true : false;
  }

  swap(arr, one, two) {
    let temp = arr[one];
    arr[one] = arr[two];
    arr[two] = temp;
  }
}
