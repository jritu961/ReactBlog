export interface IRoute {
  path: string;
  component: any;
  restricted: boolean;
}
export interface IRouteprops {
  component: JSX.Element;
  path?: string;
}
