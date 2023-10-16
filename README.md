![image](https://github.com/alex-streza/use-browser-notifications/assets/72100849/0007d65a-5af0-4e03-b276-2909cdf7f218)
# @alex-streza/use-browser-notifications

React friendly utility hook to trigger browser notifications.

## Installation

yarn

`yarn add use-browser-notifications`

npm

`npm i use-browser-notifications`

## Usage

Make sure your notification settings are ON! But if they aren't, expect Dwight to show up at your desk with a disappointed look.

Windows Users: Navigate to the dark realms of Settings > System > Notifications. Don't get lost!

macOS Fans: Seek out the elusive System Preferences > Notifications. You might find a hidden Dundie!

After setting up, here's a sneak peek of how to make the magic happen:

```js
import useNotification from "use-browser-notifications";

const App = () => {
	const trigerNotification = useNotification("Dundie Award Nominations", {
		body: "Nominate your colleagues for various Dundie Awards categories. Let's celebrate our exceptional team members!",
	});

	return (
		<main className="App">
			<button onClick={trigerNotification}>Hello</button>
		</main>
	);
};
```

## Arguments

| Argument | Type                | Description                                                                                                                                      | Required |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| title    | string              | This is a string that represents the title or heading of the notification.                                                                       | yes      |
| options  | NotificationOptions | Notification options are configuration settings that customize the appearance and behavior of a notification, such as its body, icon, and sound. | no       |

**P.S.: This library only works if you turn on the notification settings. We don't want to be like Toby, always ignored!**

If you need some help, please write email to me: <alex.streza@snowfox.art>
