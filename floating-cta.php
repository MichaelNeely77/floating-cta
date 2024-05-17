<?php
/*
Plugin Name: Floating CTA
Description: A plugin to add a floating CTA block with a heading, image, and button.
Version: 1.0
Author: Michael Neely
*/

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

// Enqueue block editor assets.
function floating_cta_block_editor_assets() {
	wp_enqueue_script(
		'floating-cta-block',
		plugins_url('build/index.js', __FILE__),
		array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-api'),
		filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
	);

	wp_enqueue_style(
		'floating-cta-block-editor',
		plugins_url('build/index.css', __FILE__),
		array('wp-edit-blocks'),
		filemtime(plugin_dir_path(__FILE__) . 'build/index.css')
	);
}
add_action('enqueue_block_editor_assets', 'floating_cta_block_editor_assets');

// Enqueue block front-end assets.
function floating_cta_block_frontend_assets() {
	wp_enqueue_style(
		'floating-cta-block-frontend',
		plugins_url('build/style-index.css', __FILE__),
		array(),
		filemtime(plugin_dir_path(__FILE__) . 'build/style-index.css')
	);
}
add_action('enqueue_block_assets', 'floating_cta_block_frontend_assets');
