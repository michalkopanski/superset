import { usePromptInputController } from "@superset/ui/ai-elements/prompt-input";
import type React from "react";
import { useEffect, useRef } from "react";
import { useTabsStore } from "renderer/stores/tabs/store";

interface DraftSaverProps {
	paneId: string;
	isSendingRef: React.RefObject<boolean>;
}

/**
 * Saves the current chat textarea draft to the tabs store on unmount.
 * Must be rendered inside <PromptInputProvider> to access the text input context.
 *
 * Uses refs for all mutable values so the unmount cleanup always reads the latest
 * state without re-registering the effect on every render.
 */
export function DraftSaver({ paneId, isSendingRef }: DraftSaverProps) {
	const { textInput } = usePromptInputController();
	const textRef = useRef(textInput.value);
	const paneIdRef = useRef(paneId);

	// Synchronous ref updates so the unmount cleanup always reads the latest values
	textRef.current = textInput.value;
	paneIdRef.current = paneId;

	useEffect(() => {
		return () => {
			const wasSending = isSendingRef.current;
			isSendingRef.current = false; // reset so the next draft-save cycle works
			if (wasSending) return;
			const id = paneIdRef.current;
			const draft = textRef.current;
			const { panes, setChatLaunchConfig } = useTabsStore.getState();
			const currentConfig = panes[id]?.chat?.launchConfig ?? null;
			setChatLaunchConfig(id, {
				...currentConfig,
				draftInput: draft || undefined,
			});
		};
	}, [isSendingRef]);

	return null;
}
