import React from "react";

import about from "../images/blackbackgroundimage.jpg";

const HomeLandingAbout = () => {
    return (
        <div className={"homelanding-about-container"}>
            <h1 className={"homelanding-about-banner"}>About Vibras</h1>
            <hr style={{ "width": "100%" }} />


            <div className={"homelanding-about-item"}>
                <div className={"homelanding-about-img"}></div>
            </div>

            <div className={"homelanding-about-text"}>

                <h1>Vibras</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum eget mauris a mollis. Maecenas fringilla faucibus dui, a placerat ex commodo id. Nulla blandit non lorem a suscipit. Vivamus elementum eros justo, nec porttitor mi dictum vitae. Ut posuere posuere justo, luctus pellentesque dui tempor dictum. Donec volutpat maximus mauris, at pretium justo posuere non. Nam placerat volutpat ultrices. Donec tortor velit, eleifend non vehicula quis, rutrum in massa. Nam in laoreet sapien, quis tempor neque. Aliquam vel finibus nulla, at placerat mi. Donec eu sem leo.

                Quisque aliquet ligula vel eros mattis, et consectetur mauris sodales. Nullam semper purus sit amet orci molestie auctor. Integer congue mi nisi, vitae pulvinar ipsum sagittis nec. In est nibh, dictum vitae velit at, egestas imperdiet sapien. Etiam diam augue, luctus nec vestibulum in, elementum eu risus. Suspendisse potenti. Aliquam quis nisl id libero euismod tincidunt et in elit. Praesent venenatis faucibus laoreet.
                </p>

                <button>View Blog</button>
            </div>

        </div>
    )
};

export default HomeLandingAbout;