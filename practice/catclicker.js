var initialCats = [
  {
    clickCount : 0,
    name: 'Kelly',
    imgSrc: 'img/kelly.jpg',
    imgAttribution: 'https:www.flickr.com',
    nicknames: ['Kell', 'Kel-o']
  },
  {
    clickCount : 0,
    name: 'Bobby',
    imgSrc: 'img/bob.jpg',
    imgAttribution: 'https:www.flickr.com',
    nicknames: ['boy bob', 'Bob']
  },
  {
    clickCount : 0,
    name: 'Tiger',
    imgSrc: 'img/tiger.jpg',
    imgAttribution: 'https:www.flickr.com',
    nicknames: ['Tiggy', 'Bob Tig']
  }
]

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10){
      title = 'Baby';
    } else if (clicks < 20){
      title = 'Child';
    } else {
      title = 'Adult';
    }
    return title;
  }, this);
}

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push( new Cat(catItem) );
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };
}

ko.applyBindings(new ViewModel());