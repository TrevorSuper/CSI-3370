const file_system = require('fs');
function read_user_db(dbName = 'user.json') {
  const data = file_system.readFileSync(dbName, 'utf-8');
  return JSON.parse(data);
}

const new_entry = {
  "email_id":"test@example.com",
  "login_password":"008c70392e3abfbd0fa47bbc2ed96aa99bd49e159727fcba0f2e6abeb3a9d601",
  "master_password":"6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b",
  "passwords": {
    "site1":["email1","password1"],
    "site2":["email2","password2"],
    "site3":["email3","password3"],
    "site4":["email4","password4"],
    "site5":["email5","password5"],
    "site6":["email6","password6"],
    "site7":["email7","password7"],
    "site8":["email8","password8"],
    "site9":["email9","password9"],
    "site10":["email10","password10"]
  }
}

function write_user_db(obj, dbName = 'user.json') {
  if (!obj) { return console.log('Please provide data to save') };
  try {
    file_system.writeFileSync(dbName, JSON.stringify(obj));
    return console.log('Save Success');
  } catch (err) {
    return console.log('Save Failed');
  }
}

write_user_db(new_entry);