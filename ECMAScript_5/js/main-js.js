function Worker(firstName,lastName,age,) {
  this.firstName = name;
  this.lastName = lastName;  
  this.age = age;
  this.position = position;
  this.sex = sex;
  this.experience = experience;
  this.getName = function(){
    return this.name;
  }
  this.getLastName = function(){
    return this.lastName;
  }
  this.setAge = function (age) {
    if (age <= 0 || age >= 100)
    throw "Значение должно быть больше 0 и меньше 100";
    this.age = age;
  }
  this.setPosition = function(position){
    this.position = position;
  }
}

function IndastrialWorker(){
  Worker.call(this);
  this.rank = rank;
  this.personalNumber = personalNumber;
  this.getRank = function(){
    return this.rank;
  }
  this.getPersonalNumber = function(){
    return this.personalNumber;
  }
  this.setRank = function(rank){
    if (rank >0 || rank <=7)
    throw "Значение должно быть больше 0 и меньше 7";
    this.rank = rank;
  }
}
function TransportWorker(){
  Worker.call(this);
  this.transport = transport;
  this.numberOfTransport = numberOfTransport;
  this.getTransport = function(){
    return this.transport;
  }
  this.getNumberOfTransport = function(){
    return this.numberOfTransport;
  }
  this.setTransport = function(transport){
    if(transport=='автомобиль' || transport=='автобус' || transport=='тралейбус' || transport=='трамвай' || transport=='грузовик')
    throw "Неверный транспорт";
    this.transport = transport;
  }
  
}