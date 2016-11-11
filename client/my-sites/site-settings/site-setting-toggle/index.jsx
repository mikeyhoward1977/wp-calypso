/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import FormToggle from 'components/forms/form-toggle';
import FormSettingExplanation from 'components/forms/form-setting-explanation';

class SiteSettingToggle extends React.Component {

	static defaultProps = {
		disabled: false,
		checked: true,
		onChange: undefined
	};

	static propTypes = {
		disabled: React.PropTypes.bool,
		checked: React.PropTypes.bool,
		label: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func
	};

	constructor( props ) {
		super( props );
		this.handleChange = this.handleChange.bind( this );
	}
	handleChange() {
		if ( this.props.onChange ) {
			return this.props.onChange( this.props.checked );
		}
	}

	render() {
		const {
			siteId,
			moduleSlug,
			settingSlug,
			label,
			description,
			disabled,
			checked
		} = this.props;
		return (
			<FormToggle
				className="site-setting-toggle is-compact"
				id={ `${ siteId }-${ moduleSlug }-${ settingSlug }` }
				checked={ checked }
				onChange={ this.handleChange }
				disabled={ disabled } >
				<span>{ label }</span>
				<FormSettingExplanation isIndented>
					{ description }
				</FormSettingExplanation>
			</FormToggle>
		);
	}

}

export default SiteSettingToggle;
