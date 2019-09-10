### Flowtype checking bug

## Reproduction

1. Run `yarn install` to set up dependencies.
2. Run `yarn flow` and see the following error:

    ```
    Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ index.js:32:6

    All branches are incompatible:
    • Either a call signature declaring the expected parameter / return type is missing in DispatchProps [1] but exists
      in function type [2].
    • Or a call signature declaring the expected parameter / return type is missing in DispatchProps [1] but exists in
      function type [3].

        index.js
    [1] 22│ type DispatchProps = {|
        23│   doAction: () => void,
        24│ |};
          :
        29│   },
        30│   ({
        31│     doAction: () => {},
        32│   }: DispatchProps)
        33│ );
        34│

        simple-react-redux.js
    [2]  6│   | ((dispatch: D, ownProps: OP) => DP)
    [3]  7│   | ((dispatch: D, ownProps: OP) => (dispatch: D, ownProps: OP) => DP);



    Found 1 error
    ```

This error is very unexpected, especially since it works if you make a change to the code in a way that should be identical.

In `index.js`, if you comment out `import { SomeClass } from "./some-import";` and paste the content of `some-import.js` directly into the index, `yarn flow` will pass without any errors.
