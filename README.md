# College Vine Exercise
## Part 1

```
<App>
  // userType and appLocation are used to determine the background style
  // appLocation could be used to determine if we are on a dashboard or a workspace
  <NavigationWrapper userType appLocation>
    <MainNav userType appLocation>
      // I would normally use a function like map on an array of menu items, but just for the
      // purposes of this exercise...
      // activeItem is used to determine what item should be highlighted
      <NavigationItem activeItem />
      // userType is used to determine whether or not to show search
      <NavigationItem userType activeItem />
      // hasNotification is used to determine whether or not to show the red notification symbol
      <NavigationItem hasNotification activeItem />
      <NavigationItem hasNotification activeItem />
      // imgUrl is used to determine what profile image to show
      // userType and appLocation need to be passed down so we know what menu items to show
      // Redux could come in handy here
      <NavigationItem imgUrl activeItem userType appLocation>
        //  
        <Dropdown isActive userType appLocation />
      </NavigationItem>
    </MainNav>
    // Used for text on submenu. Arrow will be controlled by local component state
    // userType and appLocation need to be passed down so we know what menu items to show
    // Redux could come in handy here
    <SubNav userType appLocation>
      // isActive is used to toggle the dropdown
      <Dropdown isActive userType appLocation />
    </SubNav>
  </NavigationWrapper>
  // Exercise mentioned to create nested component tree for navigational menu. I can do the body as well if // required
</App>
```

## Part 2

Code for part 2 can be found in `src/CounterButton.js`, `src/Counter.js`, `src/RecapButton.js`, `src/App.css`, `src/CounterButton.css`, `src/Counter.css`, and `src/App.js`. I put most of the logic in `App.js` and made the buttons dumb functional components. This project was created with `create-react-app`, you can see it live [here](http://n8harris.github.io/college-vine-exercise)

The first part took me 20 minutes and the second part took around 45min. It probably would have been around an hour if I didn't include the time to run `create-react-app`.