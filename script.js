document.body.style["font-family"] = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

document.head.insertAdjacentHTML("beforeend", `<style>
	.message-list-common:not(.chat-style) .ts-message-thread-body .message-body .ts-msg-name {	
	font-size: 1em; 
	}
	thread-body:not(.keep-hover-focus):not(.keep-hover-focus-with-popover) .message-body .message-actions-container {
		background-color: transparent;
	}
	.ts-reply-message .icons-reply.ts-sym {
		background-color: transparent;
	}
	.app-header-bar, .app-header-bar, .app-bar, .app-bar .nav {
		background-color: transparent;
		background: transparent;
	}
	.message-list-common {
		background-color: transparent !important;
	}
	
	</style>`);
