export default class Component2 {
  constructor(properties) {
    console.log('constructorB');
    this.properties = properties;
  }

  displayProps() {
    console.log(this.properties);
    return this.properties; 
  }
}