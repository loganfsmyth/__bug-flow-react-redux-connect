// @flow

declare type MapStateToProps<-S, -OP, +SP> = (state: S, ownProps: OP) => SP;
declare type Bind<D> = <A, R>((...A) => R) => (...A) => $Call<D, R>;
declare type MapDispatchToPropsFn<D, -OP, +DP> =
  | ((dispatch: D, ownProps: OP) => DP)
  | ((dispatch: D, ownProps: OP) => (dispatch: D, ownProps: OP) => DP);
declare class ConnectedComponent<OP, +WC> extends React$Component<OP> {
  static +WrappedComponent: WC;
  getWrappedInstance(): React$ElementRef<WC>;
}
declare type Connector<P, OP, MP: P> = <WC: React$ComponentType<P>>(
  WC
) => Class<ConnectedComponent<OP, WC>> & WC;

declare export function connect<-P, -OP, -SP, -DP, S, D>(
  mapStateToProps: MapStateToProps<S, OP, SP>,
  mapDispatchToProps: MapDispatchToPropsFn<D, OP, DP>
): Connector<P, OP, {| ...OP, ...SP, ...DP |}>;

declare export function connect<-P, -OP, -SP, -DP, S, D>(
  mapStateToProps: MapStateToProps<S, OP, SP>,
  mapDispatchToProps: DP
): Connector<P, OP, {| ...$Exact<OP>, ...SP, ...$ObjMap<DP, Bind<D>> |}>;
