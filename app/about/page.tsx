import { Dot } from "lucide-react";

export default function HEhe() {
    return(
        <div className="px-4">
            glassyPDM is an open source software suite for Product Data Management, and consists of the following projects:
            <ul>
                <li><span className="inline-flex"><Dot /> glassyPDM Desktop Client, licensed under the GPL v3</span></li>
                <li><span className="inline-flex"><Dot /> glassyPDM Server, licensed under the AGPL v3</span></li>
                <li><span className="inline-flex"><Dot /> glassyPDM Webapp, licensed under the AGPL v3</span></li>
            </ul>
            <br/>
            All of our projects are on the glassyPDM GitHub.
        </div>
    )
}