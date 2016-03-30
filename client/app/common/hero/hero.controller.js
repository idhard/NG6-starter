import modalTemplate from './heroModal.html';

class HeroController {
  constructor(Restangular, $uibModal) {
    this.Restangular = Restangular;
    this.$uibModal = $uibModal;

    this.name = 'hero';
    this.products = [];
    this.items = [{
      id: 1,
      body: 'this is the body 1'
    }, {
      id: 2,
      body: 'this is the body 2'
    }, ];

    Restangular.allUrl('loremp', 'http://jsonplaceholder.typicode.com/posts').getList().then(
      data => {
        this.products = data.plain().slice(0, 10);
      });
  }

  openModal() {

    var modalInstance = this.$uibModal.open({
      template: modalTemplate,
      controller: 'HeroModalController',
      controllerAs: 'modalVm',
      //size: size,
      resolve: {
        items: () => {
          console.log(this.items);
          return this.items;
        }
      }
    });

  }

}

HeroController.$inject = ['Restangular', '$uibModal'];


export default HeroController;
