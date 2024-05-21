/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls, URLInputButton } from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';
import './style.scss';
import './editor.scss';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

registerBlockType('create-block/floating-cta', {
	title: __('Floating CTA', 'floating-cta'),
	icon: 'megaphone',
	category: 'widgets',
	attributes: {
		heading: {
			type: 'string',
			source: 'html',
			selector: 'h3',
		},
		text: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		imageUrl: {
			type: 'string',
			default: '',
		},
		buttonText: {
			type: 'string',
			default: 'Sign Up',
		},
		buttonUrl: {
			type: 'string',
			default: '#',
		},
	},
	edit({ attributes, setAttributes }) {
		const blockProps = useBlockProps();

		const onChangeHeading = (newHeading) => {
			setAttributes({ heading: newHeading });
		};

		const onChangeText = (newText) => {
			setAttributes({ text: newText });
		};

		const onSelectImage = (media) => {
			setAttributes({ imageUrl: media.url });
		};

		const onChangeButtonText = (newButtonText) => {
			setAttributes({ buttonText: newButtonText });
		};

		const onChangeButtonUrl = (newButtonUrl) => {
			setAttributes({ buttonUrl: newButtonUrl });
		};

		return (
			<div {...blockProps}>
				<InspectorControls>
					<PanelBody title={__('Image Settings', 'floating-cta')}>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectImage}
								allowedTypes={['image']}
								render={({ open }) => (
									<Button onClick={open} isDefault isLarge>
										{__('Select Image', 'floating-cta')}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelBody>
				</InspectorControls>
				<RichText
					tagName="h3"
					value={attributes.heading}
					onChange={onChangeHeading}
					placeholder={__('Heading...', 'floating-cta')}
				/>
				<RichText
					tagName="p"
					value={attributes.text}
					onChange={onChangeText}
					placeholder={__('Text...', 'floating-cta')}
				/>
				{attributes.imageUrl && (
					<div className="cta-image-wrapper">
						<img src={attributes.imageUrl} alt={__('Selected Image', 'floating-cta')} />
					</div>
				)}
				<RichText
					tagName="a"
					className="cta-button"
					value={attributes.buttonText}
					onChange={onChangeButtonText}
					placeholder={__('Button Text...', 'floating-cta')}
				/>
				<URLInputButton
					url={attributes.buttonUrl}
					onChange={onChangeButtonUrl}
				/>
				<button className="cta-close-button" onClick={() => window.toggleCTA()}>
					X
				</button>
			</div>
		);
	},
	save({ attributes }) {
		const blockProps = useBlockProps.save();

		return (
			<div {...blockProps}>
				<RichText.Content tagName="h3" value={attributes.heading} />
				<RichText.Content tagName="p" value={attributes.text} />
				{attributes.imageUrl && (
					<div className="cta-image-wrapper">
						<img src={attributes.imageUrl} alt={__('Selected Image', 'floating-cta')} />
					</div>
				)}
				<a href={attributes.buttonUrl} className="cta-button">
					<RichText.Content value={attributes.buttonText} />
				</a>
				<button className="cta-close-button" onClick={() => window.toggleCTA()}>
					X
				</button>
			</div>
		);
	},
});
