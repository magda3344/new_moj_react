import React from "react";
import ReactDOM from "react-dom";
/*import Test2 from "./JSX/simplesTest";  w tym samym katalogu*/

import Garage from "./props/prop3";


/*ReactDOM.render(<Garage/>, document.getElementById( "root")); /*Nazwa wpada do root- prop1 i prop6, prop2, prop7, prop4, prop8*/

/*ReactDOM.render(App(), document.getElementById( "root")); prop5*/

ReactDOM.render(<Garage brandGarage="Toyota"/>, document.getElementById( "root"));/*prop3*/


