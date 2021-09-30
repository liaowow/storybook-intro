import '../src/index.css';
// Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI
export const parameters = {
  // actions allows us to create callbacks that appear in the actions panel of the Storybook UI when clicked
  actions: { argTypesRegex: "^on[A-Z].*" },
};
