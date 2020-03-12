
const data = [
  {
    
    _id: "5b21ca3eeb7f6fbccd471815",
    issue: "software",
    description:"$5sR#Q",
    assignedVendorName: "RamPyare",
    flag: true,
    status: false,
    create: "date"
  },
  {
    
    _id: "5b21ca3eeb7f6fbccd471816",
    issue: "hardware",
    description:"$5sR#Q",
    assignedVendorName: "RamPyare",
    flag: true,
    status: false,
    create: "date"
  },
  {
    
    _id: "5b21ca3eeb7f6fbccd471817",
    issue: "other",
    description:"$5sR#Q",
    assignedVendorName: "RamPyare",
    flag: true,
    status: false,
    create: "date"
  },
  {
    
    _id: "5b21ca3eeb7f6fbccd471819",
    issue: "software",
    description:"$5sR#Q",
    assignedVendorName: "RamPyare",
    flag: true,
    status: false,
    create: "date"
  },
  {
    
    _id: "5b21ca3eeb7f6fbccd47181a",
    issue: "hardware",
    description:"$5sR#Q",
    assignedVendorName: "RamPyare",
    flag: true,
    status: false,
    create: "date"
  },
  {
    
    _id: "5b21ca3eeb7f6fbccd47181b",
    issue: "other",
    description:"$5sR#Q",
    assignedVendorName: "RamPyare",
    flag: true,
    status: false,
    create: "date"
  },
  {
    
    _id: "5b21ca3eeb7f6fbccd47181e",
    issue: "hardware",
    description:"$5sR#Q",
    assignedVendorName: "RamPyare",
    flag: true,
    status: false,
    create: "date"
  },
  {
    
    _id: "5b21ca3eeb7f6fbccd47181f",
    issue: "software",
    description:"$5sR#Q",
    assignedVendorName: "RamPyare",
    flag: true,
    status: false,
    create: "date"
  },
  {
    
    _id: "5b21ca3eeb7f6fbccd471821",
    issue: "hardware",
    description:"$5sR#Q",
    assignedVendorName: "RamPyare",
    flag: true,
    status: false,
    create: "date"
  }
];

export function getIssue() {
  return data;
}

export function getIssueById(id) {
  return data.find(m => m._id === id);
}

export function saveIssueData(user) {
  let dataInDb = user.find(m => m._id === user._id) || {};
  dataInDb.issue = user.issue;
  dataInDb.description = user.description;
  dataInDb.assignedVendorName = user.assignedVendorName;
  dataInDb.flag = user.flag;
  dataInDb.status = user.status;
  dataInDb.create = user.create;

  if (!dataInDb._id) {
    dataInDb._id = Date.now();
    data.push(dataInDb);
  }

  return dataInDb;
}

export function deleteUserById(id) {
  let dataInDb = data.find(m => m._id === id);
  data.splice(movies.indexOf(dataInDb), 1);
  return dataInDb;
}
