# techtest-vue2
Vue JS 2 test application (techtest-backend consumer)

Project initialized with:

```bash
vue init webpack socialmedia
```

After the initial setup, installed and included `bulma` in `main.js`.

There are some additional libraries that have been added:

 - vue-router: the official package to manage Vue routing;
 - vue-resource: plugin to manage requests, like http get/post;
 - vuex: the official package for store/state management ("a Redux that *knows* that is inside Vue").


Application Structure
---------------------

The application is divided into components, that are called by the main ``App.vue`` file.

```shell
| - main.js
|   | - components:
|   |   | - App.vue
|   |   | - scaffold: contains scaffolding
|   |   | - homePage: home page and loads of initial data
|   |   | - categories: administration of categories
|   | - router: rounter initialization with app paths
|   | - store: initial state and all methods
```

Store
-----

The application uses a store to save the following information:
 - application status (is loaded, something is happening, etc);
 - UI status (which page is active - not developed yet);
 - backend data (like Posts, Categories, etc).

The store is managed by Vuex and all the required files are inside ``store`` folder:
 - ``index.js``: store definition, with initial state;
 - ``getters.js``: useful functions used to get some values from the state (i.e. parsed lists or counters);
 - ``mutations.js``: functions that manipulates the store's state directly (i.e. assigns values to store properties);
 - ``actions.js``: actions used by dispatch that triggers mutations (actions can be asynchronous, while mutations shouldn't).

In addition, there are two files with constants: ``mutationTypes`` and ``actionTypes``. Mutations and actions around the application should refer to these constants instead of dispatching "strings", to avoid possible errors.

### Initial state

At the moment, the initial state is loaded in the home page. A smarter management will be added in the future: a possible solution is to add a request before the Vue app is loaded.
