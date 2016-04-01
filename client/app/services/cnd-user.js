
export default class CNDUser{

  constructor() {
    this.descriptions = [];
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
