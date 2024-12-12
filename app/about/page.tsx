import { Dot } from "lucide-react";

export default function HEhe() {
    return(
        <div className="flex flex-col items-center p-24 space-y-4">
            <div>glassyPDM is an open source software suite for Product Data Management, and consists of the following projects:</div>
            <ul>
                <li><span className="inline-flex"><Dot /> glassyPDM Desktop Client, licensed under the GPL v3</span></li>
                <li><span className="inline-flex"><Dot /> glassyPDM Server, licensed under the AGPL v3</span></li>
            </ul>
            <br/>
            <div>The source code for our projects can be found on the glassyPDM <a className="underline" href="https://github.com/glassypdm/" target="_blank">GitHub</a>.</div>
        </div>
    )
}