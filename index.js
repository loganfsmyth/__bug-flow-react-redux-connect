// @flow

import { connect } from "./simple-react-redux";


// If you comment this import out and uncomment the class,
// things will typecheck properly even though they are identical.
//
import { SomeClass } from "./some-import";
//
// class SomeClass {
//   constructor() {}
// }

type OwnProps = {|
  omg: SomeClass,
|};
type Props = {
  omg: SomeClass,
  doAction: () => void,
};
type DispatchProps = {|
  doAction: () => void,
|};

connect<Props, OwnProps, _, _, _, _>(
  (state, p) => {
    return {};
  },
  ({
    doAction: () => {},
  }: DispatchProps)
);
