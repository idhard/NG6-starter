
export default class CNDProduct{

  constructor() {
    this.descriptions = [1,2,3];
  }

  add(description) {
    this.descriptions.push(description);
  }

  getDescriptions() {
    return this.descriptions;
  }
  // get descriptions(){
  //   return this.descriptions;
  // }
  // set descriptions(descriptions){
  //   this.descriptions = descriptions;
  // }

}
