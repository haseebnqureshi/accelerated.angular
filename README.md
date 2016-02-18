
## npm install accelerated.angular --save
Quick AngularJS app creation with built-in modules, pairs well with accelerated.api.

### env.json
You can modify the following variables in your env.json to alter the Angular app config:

```
ANGULAR_APP_PATH
//Path where your Angular app lives relative to your executed node directory. 

ANGULAR_APP_INDEX
//Entry file to your Angular app.
```

## Additional Services
We've got other services included in this package, but haven't loaded them by default. If you want to load any of the following Angular services that we've written for Accelerated, just go to your ```index.html``` entry point for your Angular app and any service modules that you'd like to use in your app.

### Stripe (accStripe)
For instance, if you want to load in our Stripe service, include the following onto the ```index.html``` scripts. In order to use the service, simply register ```accStripe``` in any module, and by means of direct injection you'll have access to the service.

```
<script type="text/javascript" src="/services/acc/stripe.js"> </script>
```

### User (accUser)
For instance, if you want to load in our User service, include the following onto the ```index.html``` scripts. In order to use the service, simply register ```accUser``` in any module, and by means of direct injection you'll have access to the service.

```
<script type="text/javascript" src="/services/acc/user.js"> </script>
```

### Paywall (accPaywall)
For instance, if you want to load in our Paywall service, include the following onto the ```index.html``` scripts. In order to use the service, simply register ```accPaywall``` in any module, and by means of direct injection you'll have access to the service.

```
<script type="text/javascript" src="/services/acc/paywall.js"> </script>
```

### Items (accItems)
For instance, if you want to load in our Items service, include the following onto the ```index.html``` scripts. In order to use the service, simply register ```accItems``` in any module, and by means of direct injection you'll have access to the service.

```
<script type="text/javascript" src="/services/acc/items.js"> </script>
```

