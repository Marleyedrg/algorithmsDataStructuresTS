class Extremes {
  public id: number;
  public data: string;
  private str: string;
  private type: "left" | "right";

  constructor(type: "left" | "right", str: string) {
    this.str = str;
    this.type = type;
    this.id = type === "left" ? 0 : str.length - 1;
    this.data = str[this.id];
  }

  public canUpdate() {
    return this.type === "left"
      ? this.id < this.str.length - 1
      : this.id > 0;
  }

  public update() {
    if (!this.canUpdate()) throw new Error("Limit reached");
    this.id += this.type === "left" ? 1 : -1;
    this.data = this.str[this.id];
  }
}

export default function slidWindow(str: string): string {
  let subStr = "";
  const left = new Extremes("left", str);
  const right = new Extremes("right", str);

  while (left.id < right.id) {
    if (left.data === right.data) {
      const current = str.substring(left.id, right.id + 1);
      if (current === current.split("").reverse().join("") && current.length > subStr.length) {
        subStr = current;
      }
    }

    if (left.canUpdate()) left.update();
    if (right.canUpdate()) right.update();
  }

  return subStr;
}

console.log(slidWindow("babad")); 
