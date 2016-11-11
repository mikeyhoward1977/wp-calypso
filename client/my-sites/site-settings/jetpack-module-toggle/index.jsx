/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import SiteSettingToggle from 'my-sites/site-settings/site-setting-toggle';
import {
	activateModule as activateJetpackModule,
	deactivateModule as deactivateJetpackModule
} from 'state/jetpack-settings/modules/actions';
import {
	isModuleActive,
	isActivatingModule,
	isDeactivatingModule
} from 'state/jetpack-settings/modules/selectors';
import { isJetpackSite } from 'state/sites/selectors';

class JetpackModuleToggle extends React.Component {

	constructor( props ) {
		super( props );
		this.handleChange = this.handleChange.bind( this );
	}

	handleChange( active ) {
		if ( ! active ) {
			this.props.activateJetpackModule( this.props.siteId, this.props.moduleSlug );
		} else {
			this.props.deactivateJetpackModule( this.props.siteId, this.props.moduleSlug );
		}
	}

	render() {
		if ( ! this.props.isJetpackSite ) {
			return null;
		}
		return (
			<SiteSettingToggle
				siteId={ this.props.siteId }
				moduleSlug={ this.props.moduleSlug }
				checked={ this.props.checked }
				onChange={ this.handleChange }
				disabled={ this.props.disabled }
				label={ this.props.label }
			/>
		);
	}
}

const mapStateToProps = ( state, ownProps ) => {
	return {
		checked:
			( isModuleActive( state, ownProps.siteId, ownProps.moduleSlug ) ||
				isActivatingModule( state, ownProps.siteId, ownProps.moduleSlug ) ) &&
			( ! isDeactivatingModule( state, ownProps.siteId, ownProps.moduleSlug ) ||
				! isModuleActive( state, ownProps.siteId, ownProps.moduleSlug ) ),
		disabled: isActivatingModule( state, ownProps.siteId, ownProps.moduleSlug ),
		isJetpackSite: isJetpackSite( state, ownProps.siteId )
	};
};

const mapDispatchToProps = {
	activateJetpackModule,
	deactivateJetpackModule
};

export const connectToJetpackSettings = connect( mapStateToProps, mapDispatchToProps );

export default connectToJetpackSettings( JetpackModuleToggle );
