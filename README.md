## Product Catalog Mobile App Preview 🚀

Hey there! Welcome to my Product Catalog project : a small, fun React Native app where you can browse products, find your favorites, and play around with filters and sorting. Here's what it does:

Fetches product data from Fake Store API !
Displays products (Title
Price
Category
Image)
Filter by category : because who wants to scroll through everything?
Sort by price : low to high, high to low.
Favorite products : click the heart, make it yours.
Search bar : find what you’re looking for in a snap.
Responsive design : works nicely on mobile,tablets.
All of this is done in React Native + Expo .

Check it out and enjoy exploring products! 🛒

## Get started

1. **Clone the repository**

```bash
git clone https://github.com/karimahamdan12/Product-calatog-react-native-app.git
cd Product-calatog-react-native-app
```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
   npx expo start
   ```

   By default, Expo uses LAN mode. If you encounter firewall or connection issues on your mobile device, use Tunnel mode to host the app online and sometimes even here you may face some problems one of the answers online that worked for me is disabling the antivirus while testing :

```bash
   npx expo start --tunnel
```

## App Demo

here's a Quick demo of the App :

![a quick demo of the app](/docs/app_demo.gif)

## Design Decisions

I did not memoize the fetched data in useFetchProducts because the hook runs only once when the parent component first mounts. Since the app is relatively simple, I did not encounter any performance issues. However, I am aware that for larger or more complex applications, it is important to handle performance considerations carefully, including memoization of expensive computations and functions.

## What Could Have Been Improved If I Had More Time

### Accessibility

i'm still not fully comfortable with accessibility and react native primitives

### Typescript

For better type safety and control over data structures, TypeScript would have been a great addition. For now, the focus was on implementing core functionalities.

### Automated Tests

For larger applications, automated tests (unit and integration tests) would ensure reliability and make future maintenance easier.
