import React from "react";
import cn from "classnames";

import s from "./App.module.scss";

const App: React.FunctionComponent = (): React.ReactElement => {
    return (
        <div className={cn(s.header, "color")}>
            This is App component!
        </div>
    );
};

export default App;
