mobbr-api-angular
=================

Mobbr API for AngularJS, uses ngResource.

How it works
============

Include the file in your project, a `$mobbrStorage` will be bound to the `$rootScope`.
When a token is received through an api call `$mobbrStorage.token` will be set and `$mobbrStorage.user` will be populated with the user data.
Every time a token is set or unset the `mobbrApi:authchange` event will be broadcasted.

Build from source
=================

- npm install
- grunt
