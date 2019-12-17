//Setter for creating and updating a user.
const modelHandler = {
  set: function (obj, prop, newValue) {
    console.log(`You are trying to set the ${prop} on the object ${obj} to the new value ${newValue}`, prop, obj, newValue  );
  obj[prop] = newValue;
  renderUsers();
  return true;
  }
};

//User Model - User Properties, Create User Button, Preset Users
const modelTarget = {
  props: {
    firstName: {
      selector: 'input.first-name',
      sortState: undefined
    },
    lastName: {
      selector: 'input.last-name',
      sortState: undefined
    },
    dateOfBirth: {
      selector: 'input.date-of-birth',
      sortState: undefined
    }
  },
  createButton: {
    selector: '.create-user button'
  },
  users: {
    'Brianna': {
      firstName: 'Bree',
      lastName: 'Grizzell',
      dateOfBirth: '2019-11-04'
    },
    'Damien': {
      firstName: 'Damien',
      lastName: 'Armstrong',
      dateOfBirth: '1980-02-20'
    },
    'AJ': {
      firstName: 'AJ',
      lastName: 'V',
      dateOfBirth: '2020-01-01'
    },
    'Gabby': {
      firstName: 'Gabby',
      lastName: 'Han',
      dateOfBirth: '1998-01-05'
    }
  }
};
//Proxy connects the User Model with the Model's Handler.
const model = new Proxy(modelTarget, modelHandler);

//Render Users Function - Updates the UI (View)
function renderUsers() {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = ''; //Clear out inner Html in the table body
  const props = Object.keys(model.props); //in the form of [firstName, lastName, dateOfBirth]
  Object.values(model.users).forEach(user => {
    const tr = document.createElement('tr');
    props.forEach(prop => {
      const td = document.createElement('td');
      td.innerHTML = user[prop];
      tr.appendChild(td)
    });
    tbody.appendChild(tr);
  });
}

//Create User - Controller
const createUserControllerInit = () => {
  const button = document.querySelector(model.createButton.selector);
  const props = Object.keys(model.props);
  const inputElements = props.map(
    propName => document.querySelector(model.props[propName].selector)
  );
  console.log(inputElements);
  button.addEventListener('click', () => {
    const user = props.reduce((obj, propName, index) => {
      obj[propName] = inputElements[index].value;
      return obj;
    }, {});
    if (user.firstName.length && user.dateOfBirth.length) {
      model.users = {
        ...model.users,
        [user.firstName]: user
      };
      console.log('Updated the users array', model.users);
    }
  });
  renderUsers();
};

//Compare function to use for Sorting
const compareFn = (prop, a, b) => {
  if (a[prop] < b[prop]){
    return -1;
  } else if (a[prop] > b[prop]){
    return 1;
  } else return 0;
};

//Click Handler for the Table Headers
const thClickHandler = function (e) {
  const users = Object.values(model.users);
  const {prop} = e.currentTarget.dataset;
  users.sort(compareFn.bind(null, prop));
  model.users = users.reduce((usersObj, user) => {
    usersObj[user.firstName] = user;
    return usersObj;
  }, {});
};

//Sort Controller
const sortUsersControllerInit = () => {
  const th = Array.from(document.querySelectorAll('th'));
  th.forEach(th => {
    th.addEventListener('click', thClickHandler)
  });
};

const initController = () => {
  createUserControllerInit();
  sortUsersControllerInit();
};

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'interactive') {
    initController();
  }
});