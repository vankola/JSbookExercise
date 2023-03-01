let user7 = {
    name: "Василий Иванович",
    age: 35
  };
  
  let user8 = JSON.parse(JSON.stringify(user));
  console.log(user8)
  
  
  
  
  let room = {
    number: 23
  };
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));
  