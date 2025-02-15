import { checkDoNotTrackClass, guid, q } from "../utils/util";
import { DomEvent } from "../types";


export const clickHandler = (e: DomEvent) => {
	const payload: Record<string, string> = {};
	if (checkDoNotTrackClass(e)) return;
	if (!window.llc.autoTrack) return;
	if (typeof e.target.onclick !== "function" && e.target.nodeName !== "BUTTON") {
		return;
	}
	q({
		id: guid(),
		eventName: e.target.textContent.replace(/[\W_]+/g, ""),
		eventType: "click",
		page: location.pathname,
		payload,
	});
};
