import * as genresAPI from "./fakeGenreService";

const data = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    username: "Terminator",
    password:"$5sR#Q",
    type: 2
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    username: "Die Hard",
    password:"JK6*ms",
    type: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    username: "Get Out",
    password:"sn7#Lq",
    type: 2
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    username: "Trip to Italy",
    password:"nk8K^N",
    type: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    username: "Airplane",
    password:"T$Fe5t",
    type: 2
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    username: "Wedding Crashers",
    password:"B4j$5u",
    type: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    username: "Gone Girl",
    password:"sYC9*d",
    type: 2
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    username: "The Sixth Sense",
    password:"&Z2x9K",
    type: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    username: "The Avengers",
    password:"99E=st",
    type: 1
  }
];

export function getData() {
  return data;
}

export function getData(id) {
  return data.find(m => m._id === id);
}

export function saveData(user) {
  let dataInDb = user.find(m => m._id === user._id) || {};
  dataInDb.username = user.username;
  dataInDb.password = user.password;
  dataInDb.type = user.type;

  if (!dataInDb._id) {
    dataInDb._id = Date.now();
    data.push(dataInDb);
  }

  return dataInDb;
}

export function deleteUSer(id) {
  let dataInDb = data.find(m => m._id === id);
  data.splice(movies.indexOf(dataInDb), 1);
  return dataInDb;
}
