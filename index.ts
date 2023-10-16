export const useBrowserNotification = (title: string, options: NotificationOptions | undefined) => {
	if (!("Notification" in window)) {
		return;
	}

	const trigger = () => {
		if (Notification.permission !== "granted") {
			Notification.requestPermission().then((permission) => {
				if (permission === "granted") {
					new Notification(title, options);
				} else {
					return;
				}
			});
		} else {
			new Notification(title, options);
		}
	};

	return trigger;
};
