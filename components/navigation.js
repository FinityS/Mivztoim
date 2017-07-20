export const getNavigationOptions = (title, backgroundColor, color) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
});

export const getNavigationOptionsWithAction = (title, backgroundColor, color, headerLeft, headerRight) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
    alignSelf: 'center'
  },
  headerTintColor: color,
  headerLeft,
  headerRight,
});

export const getDrawerNavigationOptions = (title, backgroundColor, titleColor, drawerIcon) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color: titleColor,
  },
  headerTintColor: titleColor,
  drawerLabel: title,
  drawerIcon,
});

export const getDrawerConfig = (drawerWidth, drawerPosition) => ({
  drawerWidth,
  drawerPosition,
});
