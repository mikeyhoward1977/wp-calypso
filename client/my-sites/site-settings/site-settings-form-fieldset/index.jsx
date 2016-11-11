/**
 * External dependencies
 */
import React from 'react';
import FormFieldset from 'components/forms/form-fieldset';
import InfoPopover from 'components/info-popover';

export const SiteSettingsFormFieldset = ( { isJetpackSite, children, className } ) => {
	if ( ! isJetpackSite ) {
		return null;
	}
	return (
		<FormFieldset className={ className }>
			<span style={ { 'float': 'right' } }>
				<InfoPopover />
			</span>
			{ children }
		</FormFieldset>
	);
};
