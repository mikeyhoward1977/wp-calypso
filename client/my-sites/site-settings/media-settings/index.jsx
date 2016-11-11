/**
 * External dependencies
 */
import React from 'react';
import { translate } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import SectionHeader from 'components/section-header';
import Card from 'components/card';
import Button from 'components/button';
import FormSelect from 'components/forms/form-select';
import FormLabel from 'components/forms/form-label';
import FormCheckbox from 'components/forms/form-checkbox';
import JetpackModuleToggle from '../jetpack-module-toggle';
import FormFieldset from 'components/forms/form-fieldset';
import InfoPopover from 'components/info-popover';

const MediaSettings = ( props ) => {
	return (
		<div>
			<SectionHeader label={ translate( 'Media' ) }>
				<Button
					compact
					primary
					onClick={ props.submitFormAndActivateCustomContentModule }
					disabled={ props.fetchingSettings || props.submittingForm }>
					{ props.submittingForm ? translate( 'Saving…' ) : translate( 'Save Settings' ) }
				</Button>
			</SectionHeader>
			<Card className="media-settings__card site-settings">
				<FormFieldset>
					<span style={ { 'float': 'right' } }>
						<InfoPopover />
					</span>
					<JetpackModuleToggle
						siteId={ props.site.ID }
						moduleSlug="photon"
						isJetpackSite={ props.site.jetpack }
						label={ translate( 'Speed up your images and photos with Photon.' ) }
						description="Enabling Photon is required to use Tiled Galleries."
						/>
				</FormFieldset>
				<FormFieldset className="has-divider is-top-only">
					<span style={ { 'float': 'right' } }>
						<InfoPopover />
					</span>
					<JetpackModuleToggle
						siteId={ props.site.ID }
						moduleSlug="carousel"
						isJetpackSite={ props.site.jetpack }
						label={ translate( 'Transform image galleries into full screen slideshows.' ) }
						/>
					<FormLabel>
						<FormCheckbox
							disabled={ ! props.jetpackCarouselModuleActive || props.submittingForm }
							name="carousel_display_exif" />
						<span>{ translate( 'Show photo metadata (Exif) in carousel, when available' ) }</span>
					</FormLabel>
					<FormLabel htmlFor="carousel_background_color">
						{ translate( 'Background color' ) }
					</FormLabel>
					<FormSelect
						disabled={ ! props.jetpackCarouselModuleActive || props.submittingForm }
						name="carousel_background_color"
						id="carousel_background_color" >
						<option value={ 'black' } key={ 'carousel_background_color_black' }>{ translate( 'Black' ) }</option>
						<option value={ 'white' } key={ 'carousel_background_color_white' }>{ translate( 'White' ) }</option>
					</FormSelect>
				</FormFieldset>
			</Card>
		</div>
	);
};

export default MediaSettings;
