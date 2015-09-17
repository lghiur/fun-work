export default class Component1 {
  constructor(properties) {
    console.log('constructor 15 Component Laurentiu5'); 
    this.properties = properties; 
    this.numbers = [1, 2, 3, 4, 5, 6];
  }

  displayProps() {
    this.showData();
  }

  showData() {
    console.log(this.numbers.map((number) => number + this.properties.name));
    console.log('----', this.properties , '-----');
  }
}