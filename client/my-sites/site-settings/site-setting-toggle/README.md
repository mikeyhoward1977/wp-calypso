Toggle
=======

This component is used to implement toggle switches.

#### How to use:

```js
import SiteSettingToggle from 'my-sites/site-settings/site-setting-toggle';

export default function MyComponent() {
	return (
		<div className="you-rock">
			<SiteSettingToggle
				siteId={ this.props.siteId }
				moduleSlug={ this.props.moduleSlug }
				checked={ this.props.checked }
				toggling={ this.props.toggling }
				disabled={ this.props.disabled }
				onChange={ this.props.onChange }
				id="you-rock-uniquely"
			>
			{ translate( 'The setting label' ) }
		</div>
	);
}
```

#### Props

* `siteId`: (number) the id of the site we're affecting
* `moduleSlug`: (string) the id of (slug) of a jetpack module related to this setting.
* `checked`: (bool) the current status of the toggle.
* `toggling`: (bool) whether the toggle is in the middle of being performed.
* `disabled`: (bool) whether the toggle should be in the disabled state.
* `onChange`: (callback) what should be executed once the user clicks the toggle.
	* Called with a boolean indicating whether the toggle is currently checked or not.
* `id`: (string) the id of the checkbox and the for attribute of the label, should be unique.
